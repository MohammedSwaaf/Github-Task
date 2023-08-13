import Enzyme,{ ShallowWrapper, shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import toJson from 'enzyme-to-json';
import UsersView from './UsersView';

import { ISearchViewUser } from '../../appTypes';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

Enzyme.configure({ adapter: new Adapter() });

describe('UsersView Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    
    wrapper = shallow(
      <Provider store={store}>
      <UsersView />
    </Provider>
      );
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct number of user cards', () => {
    const users: ISearchViewUser[] = [
      { login: 'user1', avatar_url: 'avatar1.jpg', id: '1', html_url: 'link1', score: 'score1', type: 'type' },
      { login: 'user2', avatar_url: 'avatar2.jpg', id: '2', html_url: 'link2', score: 'score2', type: 'type1' },
      { login: 'user3', avatar_url: 'avatar3.jpg', id: '3', html_url: 'link3', score: 'score3', type: 'type3' },
    ];
    wrapper.setProps({ users });
  });


  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});