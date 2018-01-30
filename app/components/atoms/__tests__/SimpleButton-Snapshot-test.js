import React from 'react';
import renderer from 'react-test-renderer';
import SimpleButton, { SimpleButtonProps } from '../SimpleButton';

const props: SimpleButtonProps = {
    title: 'test title',
    onPress: () => null
};

it('renders a SimpleButton using Snapshots', () => {
  expect(renderer.create(
    <SimpleButton {...props} />
  )).toMatchSnapshot();
});

it('renders a SimpleButton with custom styles using Snapshots', () => {
  const newProps = {
    ...props,
    style: {
      backgroundColor: '#FFF'
    }
  };
  expect(renderer.create(
    <SimpleButton {...newProps} />
  )).toMatchSnapshot();
});

it('renders a SimpleButton with custom text styles using Snapshots', () => {
  const newProps = {
    ...props,
    textStyle: {
      color: '#FFF'
    }
  };
  expect(renderer.create(
    <SimpleButton {...newProps} />
  )).toMatchSnapshot();
});