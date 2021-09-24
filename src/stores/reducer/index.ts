import { combineReducers } from "redux";
import { ActionTypes, Actions } from "stores/actions";
import { RepoItem, User } from "models";

interface State {
  repos: RepoItem[];
  user: User;
}

const initialState: State = {
  repos: [],
  user: {
    username: "",
    repoCount: 0,
    totalStars: 0,
  },
};

const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_REPO:
      return { ...state, repos: action.repos };
    case ActionTypes.SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ appState: reducer });

export type RootState = ReturnType<typeof rootReducer>;
