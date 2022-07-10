import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
  props.type === "catalogue" ? "#1d1c1c" : "grey"};
  margin: 15px auto;

  width: 85%;
  max-width: 1200px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  border-radius: 30px;
  box-sizing: border-box;
  box-shadow: 0 15px 25px red;

  h1 {
    width: 100%;
    color: #ffff;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  list-style: none;

  min-width: 300px;
  height: 200px;
  
  margin: 5px 10px;
 
  border-radius: 20px;
  border: 2px solid #c2ede3;

  color: #c2ede3;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  
`;