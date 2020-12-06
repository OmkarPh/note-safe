import React, { useState, useEffect } from 'react';
import '../tailwind.output.css';

import { useLocalStorageState } from '../hooks';

import HomeWrapper from './HomeStyled';

import DribbleButton from 'react-dribble-button';

import NotePreview from "../components/NotePreview/";

import {} from "../layout/";

const defaultData = [
    {
        title:"Fav movies",
        preview:"HP Dark"
    },
    {
        title:"My work",
        preview:"Do this and that and this that this that"
    },
    {
        title:"MY notes",
        preview:"HP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP Dark"
    },
    {
        title:"Favoritism",
        preview:"HP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP Dark"
    },
    {
        title:"MY notes",
        preview:"HP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP Dark"
    },
    {
        title:"My work",
        preview:"Do this and that and this that this that"
    },
    {
        title:"MY notes",
        preview:"HP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP DarkHP Dark"
    }
]


const Home = () => {
    const [state, setState] = useState("status", {});
    const [notes, setNotes] = useLocalStorageState("overview", defaultData);
    

    console.log(notes, notes.length)
    return (
        <HomeWrapper> 
            <DribbleButton color="green" onClick={()=>{}} className="addNew" animationDuration={300} >
                Make a new Note &nbsp; <i class="fa fa-plus" aria-hidden="true" /> 
            </DribbleButton>
            <h1 className="yourNotes"> Your notes </h1>
            <div className="noteList">
                {
                    notes.length === 0 ? <h1>No notes there sorry !</h1> :
                    notes.map(({title, preview}, idx)=>{
                        return <NotePreview title={title} previewDescription={preview} key={title+idx}/>
                    })
                }
            </div>
        </HomeWrapper>
    );
    
}

export default Home;