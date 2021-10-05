import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NotePreviewWrapper = styled(Link)`
    @-webkit-keyframes grow {
        from {
            -webkit-transform:scale(1);
        }
        to {
            -webkit-transform:scale(4.333);
        }
    }
    &:hover{
        cursor: pointer;
        font-size: large;
        text-decoration: none;
        #editIcon, #deleteIcon{
            visibility: visible;
            font-size: 25px;    
        }
        #noteTitle{
            text-decoration: underline;
        }
    }
    &{
        display: inline-block;
        width: 30%;
        max-width: 500px;
        border-radius: 10px;
    }
    .headline *{
        display: inline-flex;
    }
    .editIt, .deleteIt{
        visibility: hidden;
        float: right;
        font-size: 20px;
        color: green;
        transition: font-size 0.2s;
    }


    @media only screen and (max-width: 720px) {
        &{
            width: 90%
        }
    }
    @media only screen and (min-width: 720px) {
    }
`
export default NotePreviewWrapper;