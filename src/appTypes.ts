
export interface ISreachView {
    searchType: GitHubEntities,
    hasMore: boolean,
    loadMore: () => void;
}
export type GitHubEntities = 'repositories' | 'users'
export type Filter = {
    searchTerm: string,
    entityType: GitHubEntities,
    page: number,
    per_page: number,
}
export interface ISearchViewRepo {

    stargazers_count: string
    forks: string
    visibility: string
    watchers: string
    name: string;
    owner: {
        login: string;
        type: string;
        avatar_url: string;
    }
}
export interface ISearchViewUser {
    avatar_url: string;
    login: string;
    html_url: string;
    id: string;
    score: string;
    type: string;
}
export type GitHubReducerState = Filter & { allData: ISearchViewRepo[] & ISearchViewUser[] }
