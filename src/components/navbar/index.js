import { useEffect, useState } from 'react';

import { lightTheme, darkTheme } from "./style";
import * as S from './style';

const Navbar = () => {

    const [themeActually, setEstado] = useState('light');

    const DarkButton = () => {
        themeActually === "light" ? setEstado("dark") : setEstado("light");
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setEstado(localTheme);
    }, []);

    return (
        <>
            <S.Container theme={themeActually === "light" ? lightTheme : darkTheme}>
                <S.Content>
                    <S.Ahref href='/'>Codelândia</S.Ahref >
                    <S.DarkModeOff onClick={DarkButton} ></S.DarkModeOff>
                </S.Content>
            </S.Container>
        </>
    )
}

export default Navbar