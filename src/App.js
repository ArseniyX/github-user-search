import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import CardBoard from "./components/CardBoard";
import CardFooter from "./components/CardFooter";
import Header from "./components/Header";
import CardHeader from "./components/CardHeader";
import defaultUser from "./utils/defaultUser";
import SearchComponent from "./components/SearchComponent";
import { StyledLink } from "./components/CardFooter";

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 730px;
`;

const InfoContainer = styled.div`
  padding: 6%;
  display: flex;
  flex-direction: column;
  margin: 24px auto;
  background: ${({ theme }) => theme.innerSpaceBgColor};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  @media (min-width: 768px) {
  }
`;

const App = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [modeState, setModeState] = useState(prefersDark ? "dark" : "light");
  const [ghName, setGhName] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [click, setClick] = useState("");

  const onSearchButton = () => {
    if (click !== ghName && ghName !== null) setClick(ghName);
  };

  if (data === null) setData(defaultUser);

  useEffect(() => {
    console.clear()
    if (click !== "") {
      fetch(`https://api.github.com/users/${click}`)
        .then((response) => response.json())
        .then((users) => {
          if (users.message !== "Not Found") {
            setData(users);
            setError(false);
          } else {
            setError(true);
            console.clear();
          }
        })
        .catch((error) => {
          throw error;
        });
    }
  }, [click]);

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
      <GlobalStyles />
      <>
        <Header modeState={modeState} modeChange={themeToggler} />
        <Main>
          <SearchComponent
            onChangeSearch={onChangeSearch}
            error={error}
            onSearchButton={onSearchButton}
          />

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
        <footer style={{ textAlign: "center", marginTop: "35px" }}>
          <div style={{ color: "grey" }}>
            Challenge by{" "}
            <StyledLink
              href="https://www.frontendmentor.io?ref=challenge"
              rel="noreferrer"
              target="_blank"
            >
              Frontend Mentor
            </StyledLink>
            . Coded by{" "}
            <StyledLink
              href="https://github.com/ArseniyX/"
              target="_blank"
              rel="noreferrer"
            >
              ArseniyX
            </StyledLink>
            .
          </div>
        </footer>
      </>
    </ThemeProvider>
  );
};

export default App;
