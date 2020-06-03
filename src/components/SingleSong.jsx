import React from 'react';
import { useParams } from 'react-router-dom';

const SingleSong = ({ songs }) => {
    const { id } = useParams();
    const song = songs.find(s => s.id === Number(id));
    // console.log('SingleSong', id, songs, song);
    return (
        <div>
            <p> {song.title} </p>
            <p> {song.artist} </p>
            <p> {song.date} </p>
        </div>
    )
};

export default SingleSong;
