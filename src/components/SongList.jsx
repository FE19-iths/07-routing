import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SongList = ({ songs }) => {
    const [searchString, setSearchString] = useState('');
    const filteredList = songs.filter(song => song.title.toLowerCase().includes(searchString.toLowerCase()));
    return (
        <div>
            <input type="text" placeholder="Search for a song..."
                onChange={e => setSearchString(e.target.value)} />
            <div>
                {filteredList.map(song => (
                    <div key={song.title + song.artist}>
                        <Link to={'/song/'+song.id}>{song.title} by {song.artist} ({song.date})</Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SongList;
