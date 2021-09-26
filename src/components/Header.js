import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  margin: 31px auto;
  margin-top: calc(9% - 39px / 2 + 0.5px);
  display: flex;
  justify-content: space-between;
  max-width: 730px;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;
`;

const ModeButton = styled.button`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.innerTextColor};
  background-color: transparent;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.modeHoverColor};
  }

  &:hover::after {
    filter: ${({ theme }) => theme.hoverImgColor};
    transition: all 0.5s linear;
  }

  &::after {
    content: url(${({ theme }) => theme.modeImgUrl});
    margin-left: 10px;
    transition: all 0.5s linear;

    &:hover {
      filter: ${({ theme }) => theme.hoverImgColor};
    }
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
