import styled from "styled-components";

export const Container = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 8px;
    display: grid;
    align-items: center;
    height: 100vh;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    .card-1 {
        background: hsl(31, 77%, 52%);
        color: white;
        border-radius: 8px 0 0 8px;

        .btn-1 {
            color: hsl(31, 77%, 52%);
            border: 2px solid white;
            transition: background 200ms linear;

            &:hover {
                color: white;
                border: 2px solid white;
                background: transparent;
                

            }
        }
    }

    .card-2 {
        background: hsl(184, 100%, 22%);
        color: white;

        .btn-2 {
            color: hsl(184, 100%, 22%);
            border: 2px solid white;
            transition: background 200ms linear;

            &:hover {
                color: white;
                border: 2px solid white;
                background: transparent;
            }
        }
    }

    .card-3 {
        background: hsl(179, 100%, 13%);
        color: white;
        border-radius: 0 8px 8px 0;

        .btn-3 {
            color: hsl(179, 100%, 13%);
            border: 2px solid white;
            transition: background 200ms linear;

            &:hover {
                color: white;
                border: 2px solid white;
                background: transparent;
            }
        }
    }
`

export const Button = styled.button`
    background: white;
    border-radius: 30px;
    /* color: white; */
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 0.85rem 2.2rem;
    margin-top: 2rem;

    
`

export const Cards = styled.div`
    padding: 3rem;

    h2 {
        font-family: 'Big Shoulders Display', cursive;
        font-size: 2rem;
        text-transform: uppercase;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        /* font-size: 1.5rem; */
        font-size: 18px;
        margin-bottom: 2.5rem;
        letter-spacing: 1px;
        line-height: 30px;
        word-spacing: 3px;
    }

`