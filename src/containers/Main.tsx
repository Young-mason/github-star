import React from "react";
import styled from "styled-components";
import { Button } from "components/Button";
import { Input } from "components/Input";

function Main() {
  return (
    <Container>
      <Header>
        <Title>GitStar Ranking</Title>
        <Description>
          Unofficial GitHub Star ranking for users, organizations and
          repositories
        </Description>
        <Input />
        <StyledButton>Search</StyledButton>
      </Header>
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
