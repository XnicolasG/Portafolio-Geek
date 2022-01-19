import React from 'react';
import styled from 'styled-components';
import About from '../components/About'
import Education from '../components/Educaction';

const StyleDiv = styled.div`
    display: flex;
    margin: 0;
    padding:0;
    height: 125vh;
    justify-content:center;
    /* align-items:center; */
    font-family: 'Lato', sans-serif;
    background-color: #404241;
    color:#D7DBDD;
    font-size:2em;
    text-shadow: 1px 1px rgba(0,0,0,.5);
`
// const StyleP = styled.p`
//     color: #f5e960;
//     padding: .15em .4em;
//     background-color: #dfb2f4;
//     border-radius: 20px;
//     border: 2px solid #f2f5ff;
//     &:hover{
//         background-color:black;
//     }
// `

const App = () =>{
    return(
        <StyleDiv>
            <About />
            <Education /> 
        </StyleDiv>
    )
}

export default App