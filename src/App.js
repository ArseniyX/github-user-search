import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import search from "./assets/icon-search.svg";
import CardBoard from "./components/CardBoard";
import CardFooter from "./components/CardFooter";
import Header from "./components/Header";
import CardHeader from "./components/CardHeader";

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 730px;
`;

const Search = styled.div`
  display: flex;
  position: relative;
`;

const SearchInput = styled.input`
  height: 69px;
  width: 100%;

  padding: 18px 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  font-family: Space Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
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
  font-size: 16px;
  line-height: 24px;
  border: none;

  /* identical to box height */

  color: #ffffff;

  &:hover {
    background: #60abff;
  }
`;

const InfoContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  margin: 24px auto;
  background: ${({ theme }) => theme.innerSpaceBgColor};
  height: 419px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  @media (min-width: 768px) {
  }
`;

const InfoImg = styled.img`
  height: 117px;
  @media (max-width: 375px) {
    height: 70px;
  }
`;

const InfoBlock = styled.div``;

const InfoHeader = styled.div``;

const GitHubName = styled.h2``;

const GitHubLogin = styled.a``;

const JoinedDate = styled.p``;

const Bio = styled.p``;

const App = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [modeState, setModeState] = useState(prefersDark);
  const [ghName, setGhName] = useState(null);
  const [data, setData] = useState(null);

  const onSearchButton = () => {
    ghName !== null &&
      fetch(`https://api.github.com/users/${ghName}`)
        .then((response) => response.json())
        .then((users) => setData(users));
  };

  useEffect(() => {
    const fetchData = async () => {
      await data;
    };
    fetchData();
  });

  const themeToggler = () => {
    modeState === "light" ? setModeState("dark") : setModeState("light");
  };

  const onChangeSearch = (e) => {
    setGhName(e.target.value);
  };

  const {
    avatar_url,
    name,
    html_url,
    created_at,
    login,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = data !== null ? data : "";

  return (
    <ThemeProvider theme={modeState === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <>
          <Header modeState={modeState} modeChange={themeToggler} />
          <Main>
            <Search>
              <SearchInput
                onChange={onChangeSearch}
                placeholder="Search GitHub username..."
              />
              <SearchButton onClick={onSearchButton}>Search</SearchButton>
            </Search>

            <InfoContainer>
              <CardHeader
                avatar_url={avatar_url}
                name={name}
                html_url={html_url}
                bio={bio}
                login={login}
                created_at={created_at}
              />
              <CardBoard
                public_repos={public_repos}
                followers={followers}
                following={following}
              />
              <CardFooter
                location={location}
                blog={blog}
                twitter_username={twitter_username}
                company={company}
              />
            </InfoContainer>
          </Main>
        </>
      </>
    </ThemeProvider>
  );
};

export default App;
