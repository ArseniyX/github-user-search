import React from "react";
import styled from "styled-components";

const tableArray = ["Repos", "Followers", "Following"];

const Table = styled.div`
  margin-top: 28px;
  margin-left: 25%;
  display: flex;
  
  background-color: ${({ theme }) => theme.body};
  justify-content: space-around;
  border-radius: 10px;
  height: 85px;
  min-width: 279px;
  text-align: center;
  flex-direction: row;
  max-width: 480px;
  padding: 12px 0;
  @media (max-width: 800px) {
    margin-top: 70px;
    margin-left: 0;
    max-width: 1000px;
  }
`;

const Column = styled.div`
  display: block;
  margin: 0;
`;

const Name = styled.p`
  margin: 0;
`;

const CardBoard = (props) => {
  return (
    <Table>
      {tableArray.map((name, index) => {
        const keys = Object.keys(props);
        return (
          <Column key={name}>
            <Name>{name}</Name>
            <p>{props[keys[index]]}</p>
          </Column>
        );
      })}
    </Table>
  );
};

export default CardBoard;
