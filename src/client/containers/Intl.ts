import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { State } from 'client/reducers';
import { chooseLocale } from 'client/presentations/locales';

const mapStateToProps = (state: State) => {
  const locale = state.ui.locale;

  return {
    locale,
    messages: chooseLocale(locale),
  };
};

export const Intl = connect(
  mapStateToProps,
  null,
)(IntlProvider);
