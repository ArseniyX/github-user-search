import React from "react";
import styled from "styled-components";
import locationIcon from "../assets/icon-location.svg";
import blogIcon from "../assets/icon-website.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import companyIcon from "../assets/icon-company.svg";

const List = styled.ul`
  margin-left: 25%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  width: calc(100% + 25px);
  padding: 0;
  min-width: 279px;
  flex-direction: row;
  max-width: 480px;

  @media (max-width: 800px) {
    margin-left: 0;
    max-width: 1000px;
  }
  @media (max-width: 510px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  flex: 1 1 50%;
  margin-top: 10px;
  &.available {
    color: ${({ theme }) => theme.innerTextColor};
  }
  &.not-available {
    color: ${({ theme }) => theme.innerTextColor};
    opacity: 0.5;
  }
`;

const Text = styled.span`
  margin-left: 10px;
`;

const Icon = styled.img`
  filter: brightness(0%);
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.innerTextColor};
  &:hover {
    text-decoration: underline;
  }
`;

const isAvailable = (text) =>
  text === "Not available" ? "not-available" : "available";

const CardFooter = (props) => {
  const obj = { ...props };
  for (const property in obj) {
    if (obj[property] === null || obj[property] === "") {
      obj[property] = "Not available";
    }
  }

  const { location, blog, twitter_username, company } = obj;

  return (
    <List>
      <Item className={isAvailable(location)}>
        <Icon src={locationIcon} alt="location" />
        <Text>{location}</Text>
      </Item>
      <Item className={isAvailable(twitter_username)}>
        <Icon src={twitterIcon} alt="twitter" />
        <Text>{twitter_username}</Text>
      </Item>
      <Item className={isAvailable(blog)}>
        <Icon src={blogIcon} alt="blog" />
          <StyledLink style={{margin: "10px"}} href={blog} target={"_blank"} rel="noreferrer">
            {blog}
          </StyledLink>
      </Item>
      <Item className={isAvailable(company)}>
        <Icon src={companyIcon} alt="company" />
        <Text>{company}</Text>
      </Item>
    </List>
  );
};

export default CardFooter;
