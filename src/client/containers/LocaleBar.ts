import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { LocaleBar as Component } from 'client/presentations/components/LocaleBar';
import { changeLocale } from 'client/actions';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onEnglishLocaleClick: () => {
      dispatch(changeLocale('en'));
    },
    onJapaneseLocaleClick: () => {
      dispatch(changeLocale('ja'));
    },
  };
};

export const LocaleBar = connect(
  null,
  mapDispatchToProps,
)(Component);
