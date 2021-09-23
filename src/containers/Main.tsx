import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "components/Button";
import { Input } from "components/Input";
import UserInfo from "components/UserInfo";
import RepoItem from "components/RepoItem";
import axios from "axios";

const getRepo = (username: string) =>
  axios.get(`https://api.github.com/users/${username}/repos`);

function Main() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    getRepo(value).then(console.log);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getRepo(value).then(console.log);
    }
  };

  return (
    <Container>
      <Header>
        <Title>GitStar Ranking</Title>
        <Description>
          Unofficial GitHub Star ranking for users, organizations and
          repositories
        </Description>
        <Input onChange={handleChange} value={value} onKeyUp={handleKeyUp} />
        <StyledButton onClick={handleClick}>Search</StyledButton>
      </Header>

      {/* <UserInfo /> */}
      {/* <RepoItem/> */}
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div`
  background-color: #f8f9fa;
  padding: 18px;
`;

const Title = styled.h1`
  font-weight: 300;
  color: #343a40;
  font-size: 48px;
`;

const Description = styled.p`
  color: #343a40;
  font-weight: 500;
  font-size: 18px;
`;

const StyledButton = styled(Button)`
  margin-left: 20px;
`;

const RepoItems = styled.div``;

export default Main;
