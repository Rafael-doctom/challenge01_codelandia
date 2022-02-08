import React, { useEffect, useState } from 'react';

import * as S from './style';

const Main = () => {

    const [dados, setDados] = useState();

    useEffect(() => {
        fetch("https://6201763afdf5090017249a1f.mockapi.io/posts")
            .then(response => response.json())
            .then(json => setDados(json))
    }, []);

    return (
        <>
            <S.Container>
                <S.Content>
                    {dados &&
                        dados.map(item => (
                            <>
                                <S.Card>
                                    <S.Span>{item.date}</S.Span>
                                    <S.Title>{item.title}</S.Title>
                                    <S.Paragraph>{item.describe}</S.Paragraph>
                                </S.Card>
                            </>
                        ))
                    }
                </S.Content>
            </S.Container>
        </>
    )
}

export default Main
