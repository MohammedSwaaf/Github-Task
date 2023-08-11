import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { truncString } from '../../utils/stringTrunc'
import { RootState } from '../../redux/store';
import { ISearchViewUser } from '../../appTypes';

export default function UsersView() {
    const getHubDataSelector: any = useSelector<RootState>(state => state.gitHubReducer.allData);

  return (
    <>
     
        <div className="row">
            {Array.isArray(getHubDataSelector) && getHubDataSelector.map((user: ISearchViewUser, key: number) => {
                return <div className="col-md-4" key={key}>
                    <div className="card">
                        <div className="card-header">
                            <h2>#{key + 1} {user?.login ? truncString(user?.login) : 'NA'} (User)</h2>
                            <div className="image-container">
                                <img width={360} className='userImage' src={user?.avatar_url ?? 'NA'} alt="user_photo" />
                            </div>

                        </div>
                        <div className="card-body">
                            <li>Name: <span>{user?.login ?? 'NA'}</span></li>
                            <li>Profile:<Link className='url' to={user?.html_url ?? 'NA'}>{'Open Profile'}</Link></li>
                            <li>ID: <span>{user?.id ?? 'NA'}</span></li>
                            <li>Score: <span>{user?.score ?? 'NA'}</span></li>
                            <li>Type: <span>{user?.type ?? 'NA'}</span></li>
                        </div>
                    </div>
                </div>
            })}
        </div>
   
    </>
  )
}
