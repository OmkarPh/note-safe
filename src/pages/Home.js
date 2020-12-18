import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import '../tailwind.output.css';

import { useLocalStorageState } from '../hooks';

import HomeWrapper from './HomeStyled';

import NotePreview from "../components/NotePreview/";


const Home = () => {
    const [state, setState] = useState("status", {});
    const [noteIDs] = useLocalStorageState("overview", []);
    
    let notes = noteIDs.map(noteId=>{
        let {title, preview} = JSON.parse(localStorage.getItem(noteId));
        return {id:noteId, title, preview};
    });

    console.log(notes)

    return (
        <HomeWrapper> 
            <span id="newNote">
                <a href="/new"  class="button five">
                    Make a new note &nbsp;
                    <i className="fa fa-plus" aria-hidden="true"/>
                </a>
	<div></div>
            </span>
            <h1 className="yourNotes"> Your notes </h1>
            <div className="noteList">
                {
                    notes.length === 0 ? <h1>No notes there sorry !</h1> :
                    notes.map((note, idx)=>{
                        return <NotePreview noteDetails={note} key={note.id}/>
                    })
                }
                <a style={{fontSize:"90px"}} href="/new">+</a>
            </div>
        </HomeWrapper>
    );
    
}

export default Home;