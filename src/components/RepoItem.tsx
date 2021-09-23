import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

interface RepoItemProps {
  htmlUrl: string;
  fullName: string;
  starCount: number;
}

function RepoItem({ htmlUrl, fullName, starCount }: RepoItemProps) {
  return (
    <Wrapper>
      <UserName>{fullName}</UserName>
      <Star>
        <FaStar />
        <Rating>{starCount}</Rating>
      </Star>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ced4da;
  padding: 12px;
  font-size: 24px;
  cursor: pointer;

  & + div {
    margin-top: -1px;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`;

const UserName = styled.div`
  color: #495057;
  font-weight: 400;
`;

const Star = styled.div`
  display: flex;
  align-items: center;
`;

const Rating = styled.span`
  color: #495057;
  font-weight: 400;
  margin-left: 4px;
`;

export default RepoItem;
