import React from 'react';

import AddNoteWrapper from './NotePreview.style';


export default function NotePreview({title, previewDescription}){
    return(
        <AddNoteWrapper 
            className="border-black border-radius-15"
        >
            <textarea></textarea>
        </AddNoteWrapper>
    );
}