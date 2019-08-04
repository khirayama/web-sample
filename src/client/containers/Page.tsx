import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps, matchPath } from 'react-router-dom';

import { State } from 'client/reducers';
import { changeLocale, setPathname } from 'client/actions';
import { Page as Component, Props as PageProps, FormattedMessage } from 'client/presentations/components/Page';

export interface Props extends RouteComponentProps<{ locale?: string }> {
  title: FormattedMessage;
  description: FormattedMessage;
}

const mapStateToProps = (state: State, props: Props) => {
  const defaultLocale = state.ui.locale;
  const locale = props.match.params.locale || defaultLocale;

  let pathname = '/';
  const res = matchPath(props.location.pathname, props.match);
  if (res) {
    const regexp = new RegExp(`^/${locale}`);
    pathname = res.url.replace(regexp, '') || '/';
  }

  return {
    locale,
    pathname,
    title: props.title,
    description: props.description,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return {
    onUpdate: (props: PageProps) => {
      dispatch(changeLocale(props.locale));
      dispatch(setPathname(props.pathname));
    },
  };
};

// FYI: URLに紐づいた処理はcontainer/Pageで行うが、URLに紐づいた表示（タイトルなど）はcomponents/Pageで行う
export const Page = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component),
);
