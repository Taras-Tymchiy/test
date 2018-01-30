import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FormattedDate, { FormattedDateProps } from '../FormattedDate';

const props: FormattedDateProps = {
    value: '2015-01-01'
};

it('renders a FormattedDate using Enzyme 1', () => {
  const wrapper = shallow(
    <FormattedDate {...props} />
  );
  expect(wrapper.contains('01/01/2015 00:00')).toBe(true);
});

it('renders a FormattedDate with custom format using Enzyme 1', () => {
  
  const wrapper = shallow(
    <FormattedDate {...props} format='YYYY/MM/DD' />
  );
  expect(wrapper.contains('2015/01/01')).toBe(true);
});