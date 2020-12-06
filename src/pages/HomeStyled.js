import styled from 'styled-components';

const HomeWrapper = styled.div`
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
    @media only screen and (max-width: 720px) {
    }
    @media only screen and (min-width: 720px) {
    }
`
export default HomeWrapper;