import styled from 'styled-components';

const HeaderWrapper = styled.header`
    width: 100%;
    padding: 0;
    margin: 0;
    background: #F2994A;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #F2C94C, #F2994A);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #F2C94C, #F2994A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    .container{
        padding-top: 0;
        padding-bottom: 0;
    }
    .homeLink{
        color: #235c0f;
    }
    .homeLink:hover{
        color: #175700;
        transform: scale(1.05);
    }
    .socialLinks a i{
        color: #3030E1;
    }
    .socialLinks a:hover i{
        color: #01018a;
        transform: scale(1.2);
    }
`
export default HeaderWrapper;