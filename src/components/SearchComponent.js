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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  font-family: Space Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  box-shadow: ${(theme) => theme.searchBoxShadow};
  border: none;
  border-radius: 15px;

  /* identical to box height, or 192% */

  color: ${({ theme }) => theme.innerTextColor};
  background: ${({ theme }) => theme.innerSpaceBgColor} url(${search}) no-repeat
    scroll 13px 22px;
  outline: none;
`;

const SearchButton = styled.button`
  height: 50px;
  width: 106px;

  position: absolute;
  top: 10px;
  right: 10px;
  background: #0079ff;
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  border: none;

  /* identical to box height */

  color: #ffffff;

  &:hover {
    cursor: pointer;
    background: #60abff;
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


const SearchComponent = ({onChangeSearch, error, onSearchButton}) => {
  return (
    <Search>
      <SearchInput
        onChange={onChangeSearch}
        placeholder="Search GitHub username..."
      />
      {error && <NoResults>No results</NoResults>}
      <SearchButton onClick={onSearchButton}>Search</SearchButton>
    </Search>
  );
};

export default SearchComponent;
