import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 100%;
`;

const Title = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const InfoImg = styled.img`
  height: 117px;
  border-radius: 50%;
  @media (max-width: 400px) {
    height: 70px;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding-left: 7%;
  @media (max-width: 800px) {
    position: static;
  }
`;

// const InfoHeader = styled.div``;

const GitHubName = styled.h2`
  width: 150px;
  margin-top: 0;
  margin-bottom: 2px;
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;
  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 15px;
  }
`;

const GitHubLogin = styled.a`
  width: 0;
  color: #0079ff;
  text-decoration: none;
`;

const JoinedDate = styled.p`
  font-size: 15px;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 6px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.joinedDateColor};
  @media (max-width: 800px) {
    position: static;
  }
`;

const Bio = styled.p`
  position: static;
  @media (max-width: 800px) {
    position: absolute;
    left: 0;
    bottom: -70px;
  }
`;

const getDateFormatted = (date) => {
  const arrDate = date.slice(0, 10).split("-");
  let newDate = new Date(arrDate);
  const dateFormatted = `${arrDate[2]} ${newDate.toLocaleString("en-us", {
    month: "short",
    year: "numeric",
  })}`;
  return dateFormatted;
};

const CardHeader = ({ avatar_url, name, html_url, login, created_at, bio }) => {
  return (
    <Container>
      <Title>
        <InfoImg src={avatar_url} alt={"github image"} />
        <InfoBlock>
          <GitHubName>{name}</GitHubName>

          <GitHubLogin href={html_url} target="_blank" rel="noreferrer">
            @{login}
          </GitHubLogin>

          <JoinedDate>Joined {getDateFormatted(created_at)}</JoinedDate>
          <Bio>{bio === null ? "This profile has no bio" : bio}</Bio>
        </InfoBlock>
      </Title>
    </Container>
  );
};

export default CardHeader;
