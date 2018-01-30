import React from 'react';
import renderer from 'react-test-renderer';
import Icon, { IconProps } from '../Icon';

const props: IconProps = {
    sourse: 'test source'
};

it('renders an Icon using Snapshots', () => {
  expect(renderer.create(
    <Icon {...props} />
  )).toMatchSnapshot();
});

it('renders an Icon with custom size using Snapshots', () => {
  const newProps = {
    ...props,
    size: 33
  };
  expect(renderer.create(
    <Icon {...newProps} />
  )).toMatchSnapshot();
});
