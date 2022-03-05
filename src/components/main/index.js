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

    const teste = (event) => {
        event.preventDefault();
        setInputValue(event.target.value)
    };

    const SearchDatasInput = (event) => {
        event.preventDefault();

        let animals = document.getElementsByClassName("animals");
        let i = 0;
        for (i = 0; i < animals.length; i++) {
            if (!animals[i].innerHTML.includes(inputValue)) {
                animals[i].style.display = "none";
            } else {
                animals[i].style.display = "block";

            }
        }
    };

    return (
        <>
            <S.Container>
                <S.Input type="text" placeholder='Pesquisar titulo...' onKeyUp={SearchDatasInput} onChange={teste} />
                <S.Content>
                    {dados &&
                        dados.map(item => (
                            <>
                                <S.Card className='animals'>
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
