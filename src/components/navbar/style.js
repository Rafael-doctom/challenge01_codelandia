import styled from "styled-components";

export const Container = styled.div`
    // background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);
    height:230px;
    width:100%;
    background: ${({ theme }) => theme.body};

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
    width:80%;
    margin:0 auto;
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

export const DarkModeOff = styled.div`
    display: block;
    box-sizing: border-box;
    border-radius: 20px;
    border:0;

  &:before{
    display: block;
    box-sizing: border-box;
    border-radius: 20px;
    content: "";
    position: absolute;
    width: 1vw;
    height: 2vh;
    background: white;
    top: 6px;
    left: 5px;
    }

    border: 1px solid white;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 4vw;
    height: 4vh;
`;

export const lightTheme = {
    body: "linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%)",
};

export const darkTheme = {
    body: "gray",
};


export const InputCheckbox = styled.input`
    visibility: hidden;

    &:checked + label::after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }

    &:checked + label{
        background-color: #0077FF;
    }
    
`;

export const Label = styled.label`
    cursor: pointer;
    text-indent: -9999px;
    width: 52px;
    height: 27px;
    background: grey;
    float: right;
    border-radius: 100px;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 90px;
        transition: 0.5s;
    }
    
    &:active:after {
        width: 45px;
    }
`;