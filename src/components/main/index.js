import React, { useEffect, useState } from 'react';

import * as S from './style';

const Main = () => {

    const [dados, setDados] = useState();
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        fetch("https://6201763afdf5090017249a1f.mockapi.io/posts")
            .then(response => response.json())
            .then(json => setDados(json))
    }, []);

    const changeValue = (event) => {
        event.preventDefault();
        setInputValue(event.target.value)
    };

    const SearchDatasInput = (event) => {
        event.preventDefault();

        let title = document.getElementsByClassName("title");
        let i = 0;
        for (i = 0; i < title.length; i++) {
            if (!title[i].innerHTML.includes(inputValue)) {
                title[i].style.display = "none";
            } else {
                title[i].style.display = "block";

            }
        }
    };

    return (
        <>
            <S.Container>
                <S.Input type="text" placeholder='Pesquisar titulo...' onKeyUp={SearchDatasInput} onChange={changeValue} />
                <S.Content>
                    {dados &&
                        dados.map(item => (
                            <>
                                <S.Card className='title'>
                                    <S.Span>{item.date}</S.Span>
                                    <S.Title>{item.title}</S.Title>
                                    <S.Paragraph>{item.describe}</S.Paragraph>
                                    <S.AuthorCard>{item.authorCard}</S.AuthorCard>
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
