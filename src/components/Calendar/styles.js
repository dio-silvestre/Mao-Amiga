import styled from "styled-components"

export const ContainerHeader = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between ;
    height: 60px;
`

export const ContainerAnoMes = styled.div `
    width: 50%;
    display: flex;
    align-items: center;

    h2+h1{
            margin-left: 16px;
        }
`

export const ContainerButtons = styled.div `
    button{
        background-color: white;
        border: 0;
        font-size: 2rem;

        :hover {
            cursor: pointer;
            color: var(--color-primary);
        }
    }
    svg{
        height:30px;
        border:0;
    }

    button+button{
        margin-left: 10px;
    }

    display: flex;
    justify-content: flex-end;
    width: 50%;
    @media screen and (min-width: 768px){
    }
`

export const Container = styled.div `
    width: 100%;
    background-color: white;
    padding: 16px;
    border-radius: var(--border-radius);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`

export const Box = styled.div `
    width: ${(props) => props.start > 0 ? `${props.start * 100 / 7}%` : "0px" };
`

export const ContainerDatas = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const MobileEvents = styled.div `
    display: flex;
    align-items: center;
    margin-top: 1rem;
    font-size: 0.6rem;
    line-height: 0.9rem;

    div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--color-primary);
        margin-right: 0.5rem;

        @media screen and (min-width: 500px){
            width: 30px;
            height: 30px;
        }
    }

    @media screen and (min-width: 500px){
        font-size: 1rem;
    }

    @media screen and (min-width: 1024px){
        display: none;
    }
`