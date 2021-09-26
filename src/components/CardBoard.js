import React from "react";
import styled from "styled-components";

const tableArray = ["Repos", "Followers", "Following"];

const Table = styled.div`
  margin-top: 12px;
  margin-left: 25%;
  display: flex;

  background-color: ${({ theme }) => theme.body};
  justify-content: space-around;
  border-radius: 10px;
  height: 85px;
  min-width: 230px;
  text-align: center;
  flex-direction: row;
  max-width: 480px;
  padding: 12px 0;
  @media (max-width: 800px) {
    margin-left: 0;
    max-width: 1000px;
  }
`;

const Column = styled.div`
  display: block;
  margin: 0;
`;

const Name = styled.p`
  font-size: 13px;
  margin: 0;
`;

const Count = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

const CardBoard = (props) => {
  return (
    <Table>
      {tableArray.map((name, index) => {
        const keys = Object.keys(props);
        return (
          <Column key={name}>
            <Name>{name}</Name>
            <Count>{props[keys[index]]}</Count>
          </Column>
        );
      })}
    </Table>
  );
};

export default CardBoard;
