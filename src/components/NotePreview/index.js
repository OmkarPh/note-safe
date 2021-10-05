import React from 'react';

import NotePreviewWrapper from './NotePreview.style';


export default function NotePreview({noteDetails}){
    const {title, preview, id} = noteDetails;
    // let [style, setStyle] = useState("hidden");


    return(
        <NotePreviewWrapper 
            to={`/note/${id}`}
            className="notePreview max-w-md mx-auto flex p-4 pl-2 bg-gray-100 mt-7 shadow-xl hover:shadow-md "
        >
            <div className="ml-2 pt-1">
                <span className="headline">
                    <h1 className="title text-2xl text-blue-700 leading-tight" id="noteTitle">
                        {title}
                    </h1>
                    <i className="fas fa-edit editIt" id="editIcon"/>
                    {/* <i className="fas fa-delete deleteIt" id="deleteIcon"/> */}
                </span>
                <p className="description text-base text-gray-700 leading-normal">
                    {preview}
                </p>
            </div>
            
        </NotePreviewWrapper>
    );
}