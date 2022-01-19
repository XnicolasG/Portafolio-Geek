import React from "react";
import {AboutAvatar, AboutH2, AboutImg, AboutLocation, AboutName, AboutProfession, AboutDescription,AboutStyle, AboutSocial,AboutIcons}
 from '../styleds/AboutStyled'
 

const About = () => {
    return (
        <AboutStyle className="About">
            <div className="About-container">
                <AboutAvatar className="About-avatar">
                    <figure>
                        <AboutImg src="https://media-exp1.licdn.com/dms/image/C4E03AQFDgqQEFbVL0Q/profile-displayphoto-shrink_200_200/0/1633381892803?e=1645056000&v=beta&t=4Pz0eK7XgiJQ_97wSD13bArvxGQ69h9GV4niokGa6NU" alt="Mi Avatar" />
                    </figure>
                </AboutAvatar>
                <AboutName className="About-name">
                    <AboutH2>Nicolas Garcia</AboutH2>
                </AboutName>
                <div className="About-profession">
                    <AboutProfession>Estudiante Academia Geek</AboutProfession>
                </div>
            </div>
            <div className="About-descrption">
                <AboutDescription>Construyendo mi mejor version como programador Frontend</AboutDescription>
            </div>
            <AboutLocation className="About-description">
                <p>Bogota, Colombia</p>
            </AboutLocation>
            <AboutSocial className="About-social">
            <a target="blank_" href="https://www.linkedin.com/in/nicol%C3%A1s-garc%C3%ADa-l%C3%B3pez-6b2608205/"><AboutIcons src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494471.png?token=exp=1642565548~hmac=6e91985a3ad2a6c99cbee3e2cc93af7f"></AboutIcons></a>
            <a target="blank_" href="https://www.instagram.com/xnicolasg/?hl=es"><AboutIcons src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670274.png?token=exp=1642565548~hmac=3c19892a57575f37a34c775ecfc3e81d"></AboutIcons></a>
            </AboutSocial>
        </AboutStyle>)
}

export default About