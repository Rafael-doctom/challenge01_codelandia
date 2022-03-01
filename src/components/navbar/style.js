import styled from "styled-components";
export const Container = styled.div`
    background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);
    height:230px;
    width:100%;

    @media (max-width:768px){
        height:200px;
    }
    @media (max-width:425px){
        height:200px;
    }
    @media (max-width:375px){
        height:200px;
    }
`;

export const Content = styled.div`
    display:flex;
    justify-content:space-around;
    padding:40px 0;
    position:relative;
    z-index:0;

    @media (max-width:768px){
        justify-content:space-between;
        padding:40px 30px;
    }
    @media (max-width:425px){
        justify-content:space-between;
        padding:40px 15px;

    }
    @media (max-width:375px){
        justify-content:space-between;
        padding:40px 10px;
    }
   
`;

export const Ahref = styled.a`
    text-decoration:none;
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
`;
