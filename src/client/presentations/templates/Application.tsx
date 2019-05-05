import * as React from 'react';
import { IntlProvider } from 'react-intl';

import { ResetStyle } from 'client/presentations/styles/ResetStyle';
import { GlobalStyle } from 'client/presentations/styles/GlobalStyle';
import { Routes } from 'client/presentations/routes/Routes';
import { chooseLocale } from 'client/presentations/locales';
import { Navigation } from 'client/presentations/components/Navigation';
import { State } from 'client/reducers';

type Props = {
  locale: State['ui']['locale'];
};

export function Application(props: Props) {
  const locale: string = props.locale;

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <IntlProvider locale={locale} messages={chooseLocale(locale)}>
        <>
          <Navigation />
          <div className="Content">
            <Routes />
          </div>
        </>
      </IntlProvider>
    </>
  );
}
