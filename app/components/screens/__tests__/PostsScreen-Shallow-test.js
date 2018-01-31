import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from 'enzyme';
import { PostsScreen } from '../posts-screen/PostsScreen';
import { posts } from '../../../../jest/testData';

jest.mock('../../molecules/FormControlWrapper', (props) => `FormControlWrapper ${props}`);

const props = {
  posts,
  isLoading: false,
  isPulling: false,
  error: null,
  pullIntervl: 5000,
  postsCount: 10,
  postsUrl: 'test',
  isCurrentView: false
};

beforeEach(()=> {
  props.actions = {
    startSync: jest.fn(),
    stopSync: jest.fn()
  };
});

it('calls actions on mount/unmount', () => {
  const wrapper = shallow(
    <PostsScreen {...props} />
  );
  const inst = wrapper.instance();

  expect(props.actions.startSync.mock.calls.length).toEqual(1);
  
  inst.componentWillUnmount();
  expect(props.actions.stopSync.mock.calls.length).toEqual(1);
});

it('calls actions on receive props', () => {
  const wrapper = shallow(
    <PostsScreen {...props} />
  );
  const inst = wrapper.instance();

  wrapper.setProps({...props, isCurrentView: false});
  expect(props.actions.stopSync.mock.calls.length).toEqual(1);

  wrapper.setProps({...props, isPulling: false, isCurrentView: true});
  expect(props.actions.startSync.mock.calls.length).toEqual(2);
});
