import React, { useEffect, useState, useRef } from "react";
import { fromEvent, merge } from "rxjs";
import { filter, tap } from "rxjs/operators";
import styled from "styled-components";
import { Button } from "components/Button";
import { Input } from "components/Input";
import UserInfo from "components/UserInfo";
import Repo from "components/Repo";
import { RepoItem } from "models/repo.model";
import axios from "axios";

const getRepo = (username: string) =>
  axios.get(`https://api.github.com/users/${username}/repos`);

function Main() {
  const [data, setData] = useState<RepoItem[]>([]);
  const buttonRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    const click$ = fromEvent(buttonRef.current, "click");
    const enter$ = fromEvent(inputRef.current, "keyup").pipe(
      filter((e: any) => e.key === "Enter")
    );

    const allEvents$ = merge(click$, enter$).subscribe(() => {
      const username = inputRef.current.value;
      getRepo(username).then((res) => {
        const rawDatas = res.data;

        const mapped = rawDatas.map((data: any) => ({
          htmlUrl: data.html_url,
          fullName: data.name,
          starCount: data.stargazers_count,
        }));

        setData(mapped);
      });
    });

    return () => allEvents$.unsubscribe();
  }, []);

  return (
    <Container>
      <Header>
        <Title>GitStar Ranking</Title>
        <Description>
          Unofficial GitHub Star ranking for users, organizations and
          repositories
        </Description>
        <Input ref={inputRef} />
        <StyledButton ref={buttonRef}>Search</StyledButton>
      </Header>

      {/* <UserInfo /> */}

      <RepoList>
        {data.map((el) => (
          <Repo
            key={el.fullName}
            fullName={el.fullName}
            htmlUrl={el.htmlUrl}
            starCount={el.starCount}
          />
        ))}
      </RepoList>
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

const RepoList = styled.div``;

export default Main;
