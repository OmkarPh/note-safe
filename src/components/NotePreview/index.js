import React, {useState, useRef} from 'react';

import NotePreviewWrapper from './NotePreview.style';


export default function NotePreview({title, previewDescription}){
    let [style, setStyle] = useState("hidden");
    const editIcon = useRef(null);
    const noteTitle = useRef(null);

    function hovered(){
        editIcon.current.style.visibility="visible";
        noteTitle.current.style.textDecoration = "underline";
    }
    function hoveredOut(){
        editIcon.current.style.visibility="hidden"
        noteTitle.current.style.textDecoration = "none";
    }

    return(
        <NotePreviewWrapper 
            className="notePreview max-w-md mx-auto flex p-4 pl-2 bg-gray-100 mt-7 shadow-xl hover:shadow-md "
            onMouseEnter={hovered}
            onMouseLeave={hoveredOut}
        >
            <div className="ml-2 pt-1">
                <span className="headline">
                    <h1 className="title text-2xl text-blue-700 leading-tight" ref={noteTitle}>
                        {title}
                    </h1>
                    <i className="fas fa-edit editIt" ref={editIcon}/>
                </span>
                <p className="description text-base text-gray-700 leading-normal">
                    {previewDescription}
                </p>
            </div>
        </NotePreviewWrapper>
    );
}