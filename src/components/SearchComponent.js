import React from "react";
import styled from "styled-components";
import search from "../assets/icon-search.svg";

const Search = styled.div`
  display: flex;
  position: relative;
`;

const SearchInput = styled.input`
  height: 69px;
  width: 100%;

  padding: 18px 50px;
  flex-wrap: wrap;
  justify-content: center;

  font-family: Space Mono;
  font-size: 18px;
  line-height: 25px;
  box-shadow: ${({ theme }) => theme.searchBoxShadow};
  border: none;
  border-radius: 15px;

  /* identical to box height, or 192% */

  color: ${({ theme }) => theme.innerTextColor};
  background: ${({ theme }) => theme.innerSpaceBgColor} url(${search}) no-repeat
    scroll 13px 50%;
  outline: none;

  &::placeholder {
    opacity: 0.8;
    word-spacing: 0px;
  }

  @media (max-width: 450px) {
    font-size: 13px;
    height: 60px;
    padding: 18px 45px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const SearchButton = styled.button`
  height: 50px;
  width: 106px;

  position: absolute;
  top: 15%;
  right: 10px;
  background: #0079ff;
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  border: none;
  word-spacing: 10px;

  color: #fff;

  &:hover {
    cursor: pointer;
    background: #60abff;
  }

  @media (max-width: 450px) {
    width: 84px;
    height: 46px;
    font-size: 14px;
  }
  
`;

const NoResults = styled.span`
  position: absolute;

  top: 35%;
  right: 130px;
  line-height: 24px;
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;

  color: #f74646;
`;

const SearchComponent = ({
  onChangeSearch,
  error,
  onSearchButton,
  onEnterPressed,
}) => {
  return (
    <Search>
      <SearchInput
        onChange={onChangeSearch}
        onKeyUp={onEnterPressed}
        placeholder="Search GitHub username..."
      />
      {error && <NoResults>No results</NoResults>}
      <SearchButton onClick={onSearchButton}>Search</SearchButton>
    </Search>
  );
};

export default SearchComponent;
