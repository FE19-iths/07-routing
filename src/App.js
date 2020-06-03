import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Start from './components/Start';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import SingleSong from './components/SingleSong';
import Splash from './components/Splash';

function App() {
    const [songList, setSongList] = useState(getDefaultSongs());

    const addSong = song => {
        setSongList( [...songList, song] );
    }

    return (
        <Router>
        <Switch>
            <Route path="/splash"> </Route>
            <Route path="/">
                <header className="App-header">
                    <h1> Routing songs </h1>
                    <nav>
                        <Link to="/"> Start </Link>
                        <NavLink to="/songs" activeClassName="active"> Songs </NavLink>
                        <NavLink to="/addSong" activeClassName="active"> Add new song </NavLink>

                        <Link to="/song/1"> First song </Link>
                        <Link to="/splash"> Splash screen </Link>
                    </nav>
                </header>
            </Route>
        </Switch>
        <main>
        <Switch>
            <Route path="/splash"> <Splash /> </Route>

            <Route path="/song/:id">
                <SingleSong songs={songList} />
            </Route>
            <Route path="/songs">
                <SongList songs={songList} />
            </Route>
            <Route path="/song"> <Redirect to="/songs" /> </Route>
            <Route path="/snogs"> <Redirect to="/songs" /> </Route>
            <Route path="/addSong">
                <SongForm addSong={addSong} />
            </Route>
            <Route path="/">
                <Start />
            </Route>
        </Switch>
        </main>
        <Switch>
        <Route path="/splash"> </Route>
        <Route path="/">
        <footer>
            Footer
        </footer>
        </Route>
        </Switch>
        </Router>
    );
}


function getDefaultSongs() {
    return [
        { id: 1, title: 'Starman', artist: 'David Bowie', date: '1972' },
        { id: 2, title: 'Pippi', artist: 'Dree Low', date: '2019' },
        { id: 3, title: 'Blue', artist: 'Eiffel 65', date: '1998' },
        { id: 4, title: 'Blue', artist: 'Joni Mitchell', date: '1971' },
        { id: 5, title: 'Both sides now', artist: 'Joni Mitchell', date: '1969' },
        { id: 6, title: 'Enjoy the silence', artist: 'Depeche Mode', date: '1990' },
        { id: 7, title: 'Raindrop Prelude', artist: 'Frederic Chopin', date: '?' },
        { id: 8, title: 'Better', artist: 'Khalid', date: '2018' },
        { id: 9, title: 'Hotel California', artist: 'The Eagles', date: '1977' },
    ];
}

export default App;
