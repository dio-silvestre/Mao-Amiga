import styled from "styled-components"

export const ContainerHeader = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between ;
    height: 60px;
        
    @media screen and (min-width: 768px){
        height: 100px;
    }
`

export const ContainerAnoMes = styled.div `
    width: 50%;
    display: flex;
    align-items: center;

    h2+h1{
            margin-left: 16px;
        }

    @media screen and (min-width: 768px){
    }
`

export const ContainerButtons = styled.div `
    button{
        background-color: white;
        border: 0;
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
    height: 242px;
    background-color: white;
    padding: 16px;
    border-radius: var(--border-radius);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
    
    @media screen and (min-width: 768px){
        height: 400px;
    }
`

export const Box = styled.div `
    width: ${(props) => props.start > 0 ? `${props.start * 100 / 7}%` : "0px" };
    @media screen and (min-width: 768px){
    }
`

export const ContainerDatas = styled.div `
    height: 150px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media screen and (min-width: 768px){
        height: 300px;
    }
`