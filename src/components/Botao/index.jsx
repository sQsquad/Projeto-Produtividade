import styled from 'styled-components';

const BotaoPadrao = styled.button`
    width: 100%;
    max-width: 580px;
    height: 74px;
    border: 2px solid var(--dark-blue);
    outline: none;
    border-radius: 10px;
    background-color: var(--dark-blue);
    font-size: 3rem;
    font-weight: bold;
    color: var(--texto-claro);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    &:hover {
        background-color: var(--light-blue);
        color: var(--dark-blue);
        border-color: var(--light-blue);
    }
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

export default function Botao({children}) {
    return (
        <BotaoPadrao>{children}</BotaoPadrao>
    )
}