import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  margin: 31px auto;
  display: flex;
  justify-content: space-between;
  max-width: 730px;
  text-align: center;
`;

const Logo = styled.h1`
  font-family: Space Mono;
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;
`;

const ModeButton = styled.button`
  font-family: Space Mono;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  &::after {
    content: url(${({ theme }) => theme.modeImgUrl});
    margin-left: 10px;
  }
`;

const Header = ({ modeState, modeChange }) => {
  return (
    <HeaderContainer>
      <Logo>devfinder</Logo>
      <ModeButton onClick={modeChange}>
        {modeState === "dark" ? "light" : "dark"}
      </ModeButton>
    </HeaderContainer>
  );
};

export default Header;
