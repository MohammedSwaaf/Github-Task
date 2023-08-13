import './searchView.css'
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { RootState } from '../../redux/store';
import UsersView from './UsersView';
import ReposView from './ReposView';
import { GitHubReducerState, ISreachView } from '../../appTypes';



export default function SearchView(props: ISreachView) {
    const { allData } = useSelector<RootState>(state => state.gitHubReducer) as GitHubReducerState;

    return (
        <>
            <div className="container">
                <InfiniteScroll
                    dataLength={allData.length}
                    next={props.loadMore}
                    hasMore={props.hasMore}
                    loader={<span>{''}</span>}
                    endMessage={<p>No more data to load</p>}
                >
                    {props.searchType.includes('users') ? <UsersView /> : <ReposView />}
                </InfiniteScroll>
            </div>
        </>
    )
}
