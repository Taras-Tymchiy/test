import React from 'react';
import renderer from 'react-test-renderer';
import FormattedDate, { FormattedDateProps } from '../FormattedDate';

const props: FormattedDateProps = {
    value: '2015-01-01'
};

it('renders a FormattedDate using Snapshots', () => {
  expect(renderer.create(
    <FormattedDate {...props} />
  )).toMatchSnapshot();
});

it('renders a FormattedDate with custom format using Snapshots', () => {
  const newProps = {
    ...props,
    format: 'YYYY-MM-DD'
  };
  expect(renderer.create(
    <FormattedDate {...newProps} />
  )).toMatchSnapshot();
});

it('renders a FormattedDate with custom styles using Snapshots', () => {
  const newProps = {
    ...props,
    style: {
      color: '#FFF'
    }
  };
  expect(renderer.create(
    <FormattedDate {...newProps} />
  )).toMatchSnapshot();
});