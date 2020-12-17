import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import '../tailwind.output.css';

import { useLocalStorageState } from '../hooks';

import HomeWrapper from './HomeStyled';
import { v4 as uuidv4 } from 'uuid';

import DribbleButton from 'react-dribble-button';

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
            <DribbleButton color="green" onClick={()=>{window.location.href="/note/new"}} className="addNew" animationDuration={300} >
                Make a new Note &nbsp; <i className="fa fa-plus" aria-hidden="true" /> 
            </DribbleButton>
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