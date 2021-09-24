import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Title = styled.div`
  margin-left: 37px;
`;

const InfoImg = styled.img`
  height: 117px;
  @media (max-width: 375px) {
    height: 70px;
  }
`;

const InfoBlock = styled.div``;

const InfoHeader = styled.div``;

const GitHubName = styled.h2`
  margin: 0;
  line-height: 0.7;
`;

const GitHubLogin = styled.a``;

const JoinedDate = styled.p``;

const Bio = styled.p``;

const CardHeader = ({ avatar_url, name, html_url, login, created_at, bio }) => {
  return (
    <Container>
      <InfoImg src={avatar_url} alt={"github image"} />
      <Title>
        <GitHubName>{name}</GitHubName>
        <GitHubLogin href={html_url} target="_blank" rel="noreferrer">
          @{login}
        </GitHubLogin>
        <JoinedDate>Joined {created_at}</JoinedDate>

        <Bio>{bio === null ? "This profile has no bio" : bio}</Bio>
      </Title>
    </Container>
  );
};

export default CardHeader;
