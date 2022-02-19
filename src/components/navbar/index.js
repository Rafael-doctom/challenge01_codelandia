import { useState } from 'react';
import * as S from './style';

const Navbar = () => {

  

    return (
        <>
            <S.Container>
                <S.Content>
                    <S.Ahref href='/'>Codelândia</S.Ahref >
                    <S.Ahref href='/'>blog</S.Ahref>
                </S.Content>
            </S.Container>
        </>
    )
}

export default Navbar