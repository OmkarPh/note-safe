import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import TextareaAutosize from 'react-textarea-autosize';

import { useDocumentTitle, useLocalStorageState } from '../../hooks/'
import SingleNoteWrapper from './singleNote.styled';


export default function SingleNote(){
    let { id } = useParams();

    // useEffect(()=>{
    //     if(id === "new"){
    //         do{
    //             id = uuidv4().substr(0,8);
    //         }while(localStorage[id]);
    //         let overview = JSON.parse(localStorage.getItem("overview",));
    //         localStorage.setItem("overview", JSON.stringify([...overview, id]));
    //     }
    // },[]);
    
    const [{title, preview, body}, setThisNote] = useLocalStorageState(id, {title:"",preview:"",body:""});
    useDocumentTitle(title);

    const [titleTemp, setTitle] = useState(title);
    const [previewTemp, setPreview] = useState(preview);
    const [bodyTemp, setBody] = useState(body);
    
    
    useEffect(()=>{
        function handleKeyDown(event){
            if ((event.ctrlKey || event.metaKey) && String.fromCharCode(event.which).toLowerCase() === 's') {
                event.preventDefault();
                setThisNote({title: titleTemp, preview: previewTemp, body: bodyTemp});
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return  ()=>{
            window.removeEventListener('keydown', handleKeyDown);
        }
    },[titleTemp,previewTemp,bodyTemp,setThisNote]);

    return (
        <SingleNoteWrapper>
            <div className="fieldWrapper">
                <input type="text" className="fields" id="title" autoComplete="off"
                    onInput={e => e.target.parentNode.dataset.value = e.target.value}
                    value={titleTemp} 
                    onChange={e=>setTitle(e.target.value)}
                    onBlur={e => setThisNote(oldState=>({...oldState, title: e.target.value}))}
                    placeholder="Title of note here ..."
                    size={Math.max(titleTemp.length, 15)}
                />
            </div>
            <br/>
            <div className="fieldWrapper" id="previewWrapper">
                <input type="text" className="fields" id="preview" autoComplete="off"
                    onInput={e => e.target.parentNode.dataset.value = e.target.value}
                    value={previewTemp} 
                    onChange={e=> setPreview(e.target.value)}
                    onBlur={e => setThisNote(oldState=>({...oldState, preview: e.target.value}))}
                    placeholder="Short description (Optional)"
                    size={Math.max(previewTemp.length, 30)}
                />
            </div>
            <br/>
            <TextareaAutosize
                className="fields"
                id="body"
                autoComplete="off"
                placeholder="Type your notes here !" 
                value={bodyTemp}
                onChange={e=>setBody(e.target.value)}
                onBlur={e => setThisNote(oldState=>({...oldState, body: e.target.value}))}
            />
        </SingleNoteWrapper>
    );
    
}
