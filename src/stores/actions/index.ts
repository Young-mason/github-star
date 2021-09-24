import { RepoItem, User } from "models";

export enum ActionTypes {
  GET_REPO = "GET_REPO",
  SET_REPO = "SET_REPO",
  SET_USER = "SET_USER",
}

export const getRepo = (username: string) => ({
  type: ActionTypes.GET_REPO,
  username,
});

interface GetRepoAction {
  type: ActionTypes.GET_REPO;
  username: string;
}

interface SetRepoAction {
  type: ActionTypes.SET_REPO;
  repos: RepoItem[];
}

interface SetUserAction {
  type: ActionTypes.SET_USER;
  user: User;
}

export type Actions = GetRepoAction | SetRepoAction | SetUserAction;
