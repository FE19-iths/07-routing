import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Start from './components/Start';
import SongList from './components/SongList';
import SongForm from './components/SongForm';

function App() {
    const [songList, setSongList] = useState(getDefaultSongs());

    const addSong = song => {
        setSongList( [...songList, song] );
    }

    return (
        <Router>
        <header className="App-header">
            <h1> Routing songs </h1>
            <nav>
                <Link to="/"> Start </Link>
                <NavLink to="/songs" activeClassName="active"> Songs </NavLink>
                <NavLink to="/addSong" activeClassName="active"> Add new song </NavLink>
            </nav>
        </header>
        <main>
        <Switch>
            <Route path="/songs">
                <SongList songs={songList} />
            </Route>
            <Route path="/song"> <Redirect to="/songs" /> </Route>
            <Route path="/addSong">
                <SongForm addSong={addSong} />
            </Route>
            <Route path="/">
                <Start />
            </Route>
        </Switch>
        </main>
        <footer>
            Footer
        </footer>
        </Router>
    );
}


function getDefaultSongs() {
    return [
        { title: 'Starman', artist: 'David Bowie', date: '1972' },
        { title: 'Pippi', artist: 'Dree Low', date: '2019' },
        { title: 'Blue', artist: 'Eiffel 65', date: '1998' },
        { title: 'Blue', artist: 'Joni Mitchell', date: '1971' },
        { title: 'Both sides now', artist: 'Joni Mitchell', date: '1969' },
        { title: 'Enjoy the silence', artist: 'Depeche Mode', date: '1990' },
        { title: 'Raindrop Prelude', artist: 'Frederic Chopin', date: '?' },
        { title: 'Better', artist: 'Khalid', date: '2018' },
        { title: 'Hotel California', artist: 'The Eagles', date: '1977' },
    ];
}

export default App;
