import * as React from 'react';

type Props = {
  onEnglishLocaleClick: () => void;
  onJapaneseLocaleClick: () => void;
};

export function LocaleBar(props: Props) {
  return (
    <ul>
      <li onClick={props.onEnglishLocaleClick}>English</li>
      <li onClick={props.onJapaneseLocaleClick}>日本語</li>
    </ul>
  );
}
