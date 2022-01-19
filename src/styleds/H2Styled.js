import styled from "styled-components";
import React from "react";

const StyledH2 = styled.h2`
font-family: 'serif';
font-weight: 200;
letter-spacing: 2px;
margin: 1em 0 0 0;
color: #E74C3C;
font-size: 1.8rem;
text-align: center;
`;

export const H2Styled = ({name}) => <StyledH2>{name}</StyledH2>