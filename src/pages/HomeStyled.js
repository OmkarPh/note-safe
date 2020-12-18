import styled from 'styled-components';

const HomeWrapper = styled.div`
    font-family: 'roboto', sans-serif;

    .yourNotes{
        font-size: 30px;
        margin: 15px;
        margin-bottom: 0px;
        padding-bottom: 0px;
    }
    .noteList{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: left;
    }
    .addNew{
        border-radius: 15px;
        font-size: 20px;
        line-height:100%;
        height:100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        width: fit-content;
    }

    #newNote{
        display: block;
        margin-bottom: 10px;
        margin-top: 10px;
        
        div{
            width: auto;
        }
        .button{
            text-decoration: none;
            color: black;
            font-weight: bold;
            font-size: 20px;
            position: relative;
            padding: 10px;
        }
        a.button.five:after{
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            
            width: 0%;
            height: 100%;
            
            border-bottom: 4px solid black;
            
            transition: width 0.3s ease;
        }
        a.button.five:hover:after{
            left: 0;
            width: 100%;
            transition: width .3s ease;
        }
    }

    @media only screen and (max-width: 720px) {
    }
    @media only screen and (min-width: 720px) {
    }
`
export default HomeWrapper;