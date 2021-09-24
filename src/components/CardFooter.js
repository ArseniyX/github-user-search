import React from "react";
import locationIcon from "../assets/icon-location.svg";
import blogIcon from "../assets/icon-website.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import companyIcon from "../assets/icon-company.svg";

const CardFooter = (props) => {
  const obj = { ...props };
  console.log()
  for (const property in obj) {
    if (obj[property] === null || obj[property] === ""){
      obj[property] = "Not available";
    }
  }

  const { location, blog, twitter_username, company } = obj;

  return (
    <div>
      <ul>
        <li>
          <img src={locationIcon} alt="location" />
          <span>{location}</span>
        </li>
        <li>
          <img src={blogIcon} alt="blog" />
          <a href={blog}>{blog}</a>
        </li>
        <li>
          <img src={twitterIcon} alt="twitter" />
          <span>{twitter_username}</span>
        </li>
        <li>
          <img src={companyIcon} alt="company" />
          <span>{company}</span>
        </li>
      </ul>
    </div>
  );
};

export default CardFooter;
