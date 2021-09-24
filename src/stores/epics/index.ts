import { combineEpics } from "redux-observable";
import { repoEpic } from "./repo.epic";

export const rootEpic = combineEpics(repoEpic);
