import React from "react";
import styled from "styled-components";

const tableArray = ["Repos", "Followers", "Following"];

const Table = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.body};
  justify-content: space-between;
  border-radius: 10px;
  height: 85px;
  max-width: 480px;
  min-width: 279px;
  text-align: center;
  margin: 30px;
  flex-direction: row;
  width: 100px;
  padding: 20px 10px; /* this */
`;

const Column = styled.div`
  display: block;
  margin: 0;
`;

const Name = styled.p`
  margin: 0;
`;

const CardBoard = (props) => {
  console.log(props.followers);
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
