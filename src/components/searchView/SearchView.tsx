import './searchView.css'
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { RootState } from '../../redux/store';
import UsersView from './UsersView';
import ReposView from './ReposView';
import { GitHubEntities } from '../../appTypes';

interface Props {
    searchType: GitHubEntities,
    hasMore: boolean,
    loadMore: any
}

export default function SearchView(props: Props) {
    const getHubDataSelector: any = useSelector<RootState>(state => state.gitHubReducer.allData);
    return (
        <>
            <div className="container">
                <InfiniteScroll
                    dataLength={getHubDataSelector.length}
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
