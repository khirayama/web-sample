import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { State } from 'client/reducers';

export type Props = {
  count: State['count'];
  onCountUpClick: () => void;
  onCountDownClick: () => void;
  onCountUpAsyncClick: () => void;
  onCountDownAsyncClick: () => void;
};

export function Counter(props: Props) {
  return (
    <div>
      <div onClick={props.onCountUpClick}>COUNT UP</div>
      <div onClick={props.onCountDownClick}>COUNT DOWN</div>
      <div onClick={props.onCountUpAsyncClick}>COUNT UP ASYNC</div>
      <div onClick={props.onCountDownAsyncClick}>COUNT DOWN ASYNC</div>
      <div>
        <FormattedMessage id="Counter.Label" values={{ name: 'khirayama' }} />
        {props.count.value}
      </div>
      {props.count.isFetching.length ? <span> [FETCHING]</span> : null}
    </div>
  );
}
