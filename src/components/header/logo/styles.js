import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 20px;
text-transform: uppercase;


@media (max-width: 769px) {
    margin-left: 40%;
  }
`;

export const TextLogo = styled.span`
color: red;
font-size: 26px;
`;

export const SubText = styled.span`
font-size: 26px;
color: white;
`;

export const Image = styled.img`
height: 85%;
margin: auto 0;
`;
