import React, { useState } from 'react';

const SongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [date, setDate] = useState('');

    const [titleTouched, setTitleTouched] = useState(false);
    const [artistTouched, setArtistTouched] = useState(false);
    const [dateTouched, setDateTouched] = useState(false);

    // jfr computed property i Vue
    let [titleClass, titleError] = titleTouched
        ? validateTitle(title)
        : ['', ''];
    let [artistClass, artistError] = artistTouched
        ? validateArtist(artist)
        : ['', ''];
    let [dateClass, dateError] = dateTouched
        ? validateDate(date)
        : ['', ''];

    let formIsValid = titleTouched && artistTouched && dateTouched && (titleError === '') && (artistError === '') && (dateError === '');
    // Alternativ:
    // let everythingTouched = titleTouched && artistTouched && dateTouched;
    // let noErrorMessages = (titleError === '') && (artistError === '') && (dateError === '');
    // let formIsValid = everythingTouched && noErrorMessages;

    return (
        <div>
            <h3> Add song </h3>
            <div className="form-group">
                <label> Title </label>
                <input type="text" placeholder="Song title"
                    onChange={e => setTitle(e.target.value)}
                    onBlur={() => setTitleTouched(true)}
                    className={titleClass} />
                <div className="error">{titleError}</div>
            </div>

            <div className="form-group">
                <label> Artist </label>
                <input type="text" placeholder="Artist name"
                    onChange={e => setArtist(e.target.value)}
                    onBlur={() => setArtistTouched(true)}
                    className={artistClass} />
                <div className="error">{artistError}</div>
            </div>

            <div className="form-group">
                <label> What year was it composed </label>
                <input type="text" placeholder="Composed date"
                    onChange={e => setDate(e.target.value)}
                    onBlur={() => setDateTouched(true)}
                    className={dateClass}/>
                <div className="error">{dateError}</div>
            </div>

            <div className="form-group">
                <button disabled={!formIsValid}
                    onClick={() => addSong({ title, artist, date })}>
                    Add song
                </button>
            </div>
        </div>
    )
};
/* [4] Bygg ett formulär där användaren ska fylla i en låttitel, artistens namn och vilket datum som låten skrevs. (Du kan använda filmer eller böcker i stället om du vill.) Det ska finnas en knapp med texten "lägg till" som bara är klickbar om man fyllt i allting korrekt. Använd samma valideringsprinciper som i uppgift 3a+b.*/

function validateTitle(title) {
    if( title.length > 0 ) {
        return ['valid', '']
    } else {
        return ['invalid', 'Please enter a title']
    }
}
function validateArtist(artist) {
    if( artist.length > 0 ) {
        return ['valid', '']
    } else {
        return ['invalid', 'Please enter the artist name']
    }
}
function validateDate(date) {
    // Bara årtal: 1860 - 2020
    // I en framtida version skulle vi vilja ha stöd för datumformat, till exempel: 2020-06-03, DDMMÅÅ 030620, 20200603
    let dateAsNumber = Number(date);
    const thisYear = new Date().getFullYear();
    if( isNaN(dateAsNumber) || date === '' ) {
        return ['invalid', 'Please enter a year using four digits']
    } else if( dateAsNumber < 1860 || dateAsNumber > thisYear ) {
        return ['invalid', 'Please enter a year between 1860 and this year']
    } else {
        return ['valid', '']
    }
}







export default SongForm;
