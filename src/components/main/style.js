import styled from "styled-components";
export const Container = styled.div`
    height:100%;
    width:100%;
    min-height:95vh;
    background:#f3f5f5;
`;

export const Content = styled.div`
    padding:30px 0;
`;

export const Card = styled.div`
    width: 900px;
    height: 210px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
    border-radius: 5px;
    margin:50px auto;
    padding:1rem;
    position:relative;

    &:hover{
        box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
        cursor:pointer;
    }
`;

export const Span = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #717171;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 25px;
    color: #1A202C;
`;

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #717171;
    width: 900px;
`;

export const Input = styled.input`
    margin-left:22.3vw;
    margin-top:-5rem;
    position:absolute;
    width:54vw;
    height:5vh;
    border:1px solid gray;
    border-radius:5px;
    padding:0.5rem;

    &:focus{
        outline: none;
        border:1px solid #3EA1DB;
    }
`;

export const AuthorCard = styled.span`
    color: #3EA1DB;
    right:10px;
    bottom:10px;
    position:absolute;
    z-index:999;
    cursor:pointer;
`;