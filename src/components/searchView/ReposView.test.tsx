import Enzyme,{ ShallowWrapper, shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import toJson from 'enzyme-to-json';
import ReposView from './ReposView';

import { ISearchViewRepo } from '../../appTypes';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

Enzyme.configure({ adapter: new Adapter() });

describe('UsersView Component', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {

        wrapper = shallow(
            <Provider store={store}>
                <ReposView />
            </Provider>
        );
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correct number of user cards', () => {
        const repos: ISearchViewRepo[] = [
            
            {
                stargazers_count: 'user1', forks: '71', visibility: '1', watchers: '61', name: 'SwaafRepo1', owner: {
                    login: 'string',
                    type: 'string',
                    avatar_url: 'string'
                }
            },
            {
                stargazers_count: 'user2', forks: '72', visibility: '2', watchers: '62', name: 'SwaafRepo2', owner: {
                    login: 'string',
                    type: 'string',
                    avatar_url: 'string'
                }
            },
            {
                stargazers_count: 'user3', forks: '73', visibility: '3', watchers: '63', name: 'SwaafRepo3', owner: {
                    login: 'string',
                    type: 'string',
                    avatar_url: 'string'
                }
            },
        ];
        wrapper.setProps({ repos });
    });


    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});