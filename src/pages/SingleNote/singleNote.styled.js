import styled from 'styled-components';

const SingleNoteWrapper = styled.div`
    .fieldWrapper{
        padding-right: 50px;
        display: inline-grid;
        &::after {
            content: attr(data-value) ' ';
            font-size: 40px;
            visibility: hidden;
            white-space: pre-wrap;
            height: 3px;
        }
    }
    .fields {
        border: none;
        border-bottom: 3px solid rgba(191, 191, 191, 0.2);
        border-radius: 5px;
        background: transparent;
        display: block;
        margin-left: 10px;
        padding: 10px 0px;
        -webkit-transition: all 0.2s linear;
        width: 95%;
        transition: all 0.3s linear;

        &::-webkit-input-placeholder{
            color: #AAA;
        }
        &:focus{
            outline: none;
            border-bottom: 3px solid rgba(51, 153, 255, 1);
        }
    }


    #title{
        color: #007FFF;
        font-size: 40px;
        font-weight: bold;
        padding-bottom: 2px;
        width: auto;
        overflow: hidden;
    }


    #previewWrapper{
        &::after {
            font-size: 30px;
            font-weight: 500;
            height: 3px;
        }
    }
    #preview{
        color: rgb(3, 163, 11);
        font-size: 30px;
        font-weight: 500;
        font-family: cursive, 'Courier New', Courier, monospace, Verdana;
        padding-bottom: 1px;
        &:focus{
            border-bottom: 3px solid rgba(3, 163, 11, 1);
        }
    }
    #body{
        border: none;
        height: auto;
        overflow: hidden;
        font-family: "Comic Sans MS", Verdana, Geneva;
        font-size: 28px;
    }
    #body::-webkit-input-placeholder{
        font-size: 30px;
    }
    textarea{
        resize: none;
        min-height: 500px;
    }
    
    /* .headInp:focus+.underline {
        transform: scale(1);
    } */
/*     
    .underline {
        background-color: dodgerblue;
        display: inline-block;
        height: 2px;
        position: absolute;
        -webkit-transform: scale(0, 1);
        transform: scale(0, 1);
        -webkit-transition: all 0.5s linear;
        transition: all 0.1s linear;
        width: 202px;
    } */

    @media only screen and (max-width: 720px) {
    }
    @media only screen and (min-width: 720px) {
    }
`
export default SingleNoteWrapper;