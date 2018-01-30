import React from 'react';
import renderer from 'react-test-renderer';
import { 
  TextRegular,
  TextMuted,
  TextPrimary,
  TextSecondary,
  TextHeader
 } from '../Text';

 it('renders a TextRegular using Snapshots', () => {
  expect(renderer.create(
    <TextRegular>TextRegular</TextRegular>
  )).toMatchSnapshot();
});

it('renders a TextMuted using Snapshots', () => {
  expect(renderer.create(
    <TextMuted>TextMuted</TextMuted>
  )).toMatchSnapshot();
});

it('renders a TextPrimary using Snapshots', () => {
  expect(renderer.create(
    <TextPrimary>TextPrimary</TextPrimary>
  )).toMatchSnapshot();
});

it('renders a TextSecondary using Snapshots', () => {
  expect(renderer.create(
    <TextSecondary>TextSecondary</TextSecondary>
  )).toMatchSnapshot();
});

it('renders a TextHeader using Snapshots', () => {
  expect(renderer.create(
    <TextHeader>TextHeader</TextHeader>
  )).toMatchSnapshot();
});

