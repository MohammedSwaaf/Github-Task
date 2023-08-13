import { useSelector } from 'react-redux';
import { truncString } from '../../utils/stringTrunc'
import { RootState } from '../../redux/store';
import { GitHubReducerState, ISearchViewRepo } from '../../appTypes';



export default function ReposView() {
    const { allData } = useSelector<RootState>(state => state.gitHubReducer) as GitHubReducerState;

    return (
        <>
            <div className="row">
                {Array.isArray(allData) && allData.map((repo: ISearchViewRepo, key: number) => {
                    return <div className="col-md-4" key={key}>
                        <div className="card">
                            <div className="card-header">
                                <h2>#{key + 1} {repo?.name ? truncString(repo?.name) : 'NA'} (Repo)</h2>
                                <div className="image-container">
                                    <img width={360} className='userImage' src={repo?.owner?.avatar_url ?? 'NA'} alt="user_photo" />
                                </div>

                            </div>
                            <div className="card-body">
                                <li>Author: <span>{repo?.owner?.login ?? 'NA'}</span></li>
                                <li>Type: <span>{repo?.owner?.type ?? 'NA'}</span></li>
                                <li>Stars: <span>{repo?.stargazers_count ?? 'NA'}</span></li>
                                <li>Forks: <span>{repo?.forks ?? 'NA'}</span></li>
                                <li>Visibility: <span>{repo?.visibility ?? 'NA'}</span></li>
                                <li>Watchers: <span>{repo?.watchers ?? 'NA'}</span></li>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}
