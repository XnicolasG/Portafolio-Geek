
import styled from "styled-components";

export const AboutStyle = styled.div`
    text-align:start;
    display: inline-block;
    margin:5% 2% 5% 2%;
    padding-bottom: 2%;
    
    width:30%;
`;
 
export const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
    
`;
 
export const AboutImg = styled.img`
    border-radius: 100%;
    width: 140px;
    height: 140px;
    border: 2px solid #E8F8F5;
    margin:auto;
    display: block;
    box-shadow: 2px 2px 35px 12px #D1F2EB ;
    object-fit: cover;
    :hover{
        width: 150px;
        height: 150px;
    }
`;
 
export const AboutName = styled.div`
    text-align: center;
`;
export const AboutH2 = styled.h2`
    font-family: 'serif';
    font-size:2.4rem;
    font-weight: 300;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: coral;
`;
 
export const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: .3px;
    text-align:center;
    font-size:1.6rem;
    font-family: 'roboto';
    color: #D7DBDD;
`;
export const AboutDescription = styled.p`
    letter-spacing: .3px;
    text-align:center;
    font-size:1.3rem;
    font-family: 'roboto';
    font-style: italic;
    color:#D0D3D4;
`
 
export const AboutLocation = styled.p`
    color: #CACFD2;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
`;
export const AboutSocial = styled.div`
text-align: center;
margin: auto;
width: 30%;
height: auto;
`;
export const AboutIcons = styled.img`
width: 40%;
margin: 1%;

`