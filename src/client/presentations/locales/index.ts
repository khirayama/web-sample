import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import jaLocaleData from 'react-intl/locale-data/ja';

addLocaleData(enLocaleData);
addLocaleData(jaLocaleData);

export const en = {
  'Home.Title': 'Hi, Home!',
  'Home.Description': 'This is Home page!',
  'About.Title': 'Hi, About!',
  'About.Description': 'This is About page!',
  'Users.Title': 'Hi, Users!',
  'Users.Description': 'This is Users page!',
  'Counter.Label': 'Counted by {name}: ',
};

export const ja = {
  'Home.Title': 'やぁ、ホーム！',
  'Home.Description': 'ここはホームページです。',
  'About.Title': 'やぁ、アバウト',
  'About.Description': 'ここはアバウトページです',
  'Users.Title': 'やぁ、ユーザーズ',
  'Users.Description': 'ここはユーザーズページです',
  'Counter.Label': '{name}さんのカウント数: ',
};

export function chooseLocale(locale: string) {
  switch (locale) {
    case 'en':
      return en;
    case 'ja':
      return ja;
    default:
      return en;
  }
}
