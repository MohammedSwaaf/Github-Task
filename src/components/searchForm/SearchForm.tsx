import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { request } from '../../service/axiosRequest';
import './searchForm.css';
import Spinner from '../spinner/Spinner';
import { updateGithubStoreAction } from '../../redux/gitHubReducer/actions';
import SearchView from '../searchView/SearchView';
import { RootState } from '../../redux/store';
import { GitHubEntities, GitHubReducerState } from '../../appTypes';

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [hasMore] = useState(true);
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [itemsLength, setItemLength] = useState(5)
  //read all states from the store 
  const { allData, page, searchTerm, entityType, per_page } = useSelector<RootState>((state) => state.gitHubReducer) as GitHubReducerState;

  const fetchData = async function (searchTerm: string, entityType: GitHubEntities, page: number) {

    setLoading(true);
    request({
      url: `https://api.github.com/search/${entityType}`,
      method: 'get',
      params: {
        q: searchTerm,
        page: page,
        per_page: per_page,
      },
    }).then((res) => {     
      setItemLength(res?.data?.items.lenght)
      const newItems = page > 1 ? allData?.concat(res?.data?.items) : res?.data?.items;
      dispatch<any>(updateGithubStoreAction({ allData: newItems || [], page }));
      setLoading(false);
    }).catch((err: any) => {
      if (!isOnline) {
        setIsOnline(false);
        setLoading(false);
        return
      }
      setLoading(false);
      setError(err.response.data?.message)
    }
    );
  };

  const debouncedFetchData = debounce(fetchData, 300)
  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!value) return dispatch<any>(updateGithubStoreAction({ searchTerm: '', page: 1, allData: [] }))
    dispatch<any>(updateGithubStoreAction({ searchTerm: value, page: 1 }))
    setError(null)
    if (value.length < 3) return
    debouncedFetchData(value, entityType, page);
  };

  const handleEntityTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target as { value: GitHubEntities };
    dispatch<any>(updateGithubStoreAction({ entityType: value, page: 1, allData: [] }));
    setError(null)
    searchTerm.length >= 3 && fetchData(searchTerm, value, page)

  };

  const loadMore = () => {
    dispatch<any>(updateGithubStoreAction({ page: page + 1 }));
    fetchData(searchTerm, entityType, page + 1);
  };

  return (
    <div>
      <div className="header" style={searchTerm.length >= 3 ? { display: 'block' } : { display: 'flex', margin: `16em auto 0 auto` }}>
        <div className='content'>
          <div className="head">
            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="GitHub Logo" />
            <span className="subtitle">
              GitHub Searcher
              <br />
              <small className="label">Search for users or repositories below</small>
            </span>
          </div>
          <div className="searchSection">
            <input className="searchInput" placeholder="Start typing to search .." type="text" value={searchTerm} onChange={handleSearchTermChange} />
            <select className="searchSelect" value={entityType} onChange={handleEntityTypeChange}>
              <option style={{ padding: '2px' }} value="users">User</option>
              <option style={{ padding: '2px' }} value="repositories">Repository</option>
            </select>
            <div>{loading ? <Spinner /> : ''}</div>
          </div>
        </div>
      </div>
      <br />
      <SearchView searchType={entityType} hasMore={hasMore} loadMore={loadMore} />
      {!isOnline && <h2 className='error' style={{ color: 'red', textAlign: 'center' }}>You Are Offline</h2>}
      {(!!searchTerm?.length && error) && <h2 className='error' style={{ color: 'red', textAlign: 'center' }}>{error}</h2>}
      {itemsLength === 0 && <h2>There is no data to load</h2>}
    </div>
  );
};

export default SearchForm;
