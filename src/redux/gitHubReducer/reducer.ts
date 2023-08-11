import { GitHubReducerState } from "../../appTypes";
import { STORE_DATA } from "./types";

const initialState: GitHubReducerState = {
    allData: [],
    searchTerm: '',
    entityType: 'repositories',
    page: 1,
    per_page: 5,

}
const gitHub = (state = initialState, action: { type: string, payload: GitHubReducerState }) => {
    switch (action.type) {
        case STORE_DATA:
            return {
                ...state,
                ...action?.payload
            }
        default:
            return state
    }
}
export default gitHub

