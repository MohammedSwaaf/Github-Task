
import { GitHubReducerState } from "../../appTypes";
import { STORE_DATA} from "./types"; 
import { Dispatch } from 'redux';
export const updateGithubStoreAction = (value: Partial<GitHubReducerState>) => {
    return (dispatch: Dispatch) => dispatch({
        type: STORE_DATA,
        payload: value
    })
}

