import React from "react";
import { H2Styled } from "../styleds/H2Styled";
import { Container, EducationStyle, EducationH1, EducationP, Contain,ExpDiv,CertiDiv, HabiCont,HabiDiv, HabiH1, HabiProg } from "../styleds/EducationContainer";


const Education = () => {
    return (
        <Container>
            <Contain className="Contain">
                <H2Styled name="Mis estudios" />

                <EducationStyle className="Education-container">
                    <div className="Education-item">
                        <EducationH1>Universidad Gato Dumas - <span>2021</span> </EducationH1>
                        <EducationP>Administración Gastronomica</EducationP>
                    </div>
                </EducationStyle>
            </Contain>
            <ExpDiv className="Experiencia">
                <H2Styled name="Experiencia" />
                <EducationStyle className="Experience-container">
                <div className="Experience-item">
                        <EducationH1>Cinco Cuates SAS </EducationH1>
                        <EducationP>Analista de Costos</EducationP>
                    </div>
                </EducationStyle>
            </ExpDiv>
            <CertiDiv>
            <H2Styled name="Certificaciones" />
            <EducationP>Proximamente... </EducationP>
            </CertiDiv>
            <HabiCont>
            <H2Styled name="Habilidades" />
            
            <HabiDiv className="Progress-container">
            <HabiH1>HTML </HabiH1>
            <HabiProg max={100} value={70}></HabiProg>
            </HabiDiv>
            <HabiDiv className="Progress-container">
            <HabiH1>CSS </HabiH1>
            <HabiProg max={100} value={50}></HabiProg>
            </HabiDiv>
            <HabiDiv className="Progress-container">
            <HabiH1>JavaScript </HabiH1>
            <HabiProg max={100} value={45}></HabiProg>
            
            </HabiDiv>
            </HabiCont>
        </Container>


    )
}
export default Education