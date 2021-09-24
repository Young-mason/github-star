import { from } from "rxjs";
import {
  map,
  tap,
  withLatestFrom,
  mapTo,
  switchMap,
  concatMap,
} from "rxjs/operators";
import { Action } from "redux";
import axios from "axios";
import { RepoItem, User } from "models";
import { ActionTypes } from "stores/actions";
import { Epic, ofType } from "redux-observable";

export const repoEpic: Epic = (action$, state) =>
  action$.pipe(
    ofType(ActionTypes.GET_REPO),
    switchMap(async (action) => {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${action.username}/repos`
        );
        return res.data;
      } catch (e) {
        alert(e);
        return null;
      }
    }),

    // Todo 여기서 동일한 데이터를 받아서, SET_REPO와 SET_USER를 각각 처리해주는 스트림을 만들어 Merge 한다

    map((datas) =>
      datas.map((data: any) => ({
        htmlUrl: data.html_url,
        fullName: data.name,
        starCount: data.stargazers_count,
      }))
    ),
    map((repos) => ({
      type: ActionTypes.SET_REPO,
      repos,
    }))
  );
