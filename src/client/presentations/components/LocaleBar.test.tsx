import * as React from 'react';
import renderer from 'react-test-renderer';

import { LocaleBar } from './LocaleBar';

it('Renders correctly', () => {
  const tree = renderer.create(<LocaleBar onEnglishLocaleClick={() => {}} onJapaneseLocaleClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
