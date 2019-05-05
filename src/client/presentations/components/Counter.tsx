import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { State } from 'client/reducers';

export type Props = {
  count: State['count'];
  onCountUpClick: () => void;
  onCountDownClick: () => void;
};

export function Counter(props: Props) {
  return (
    <div>
      <div onClick={props.onCountUpClick}>COUNT UP</div>
      <div onClick={props.onCountDownClick}>COUNT DOWN</div>
      <div>
        <FormattedMessage id="Counter.Label" values={{ name: 'khirayama' }} />
        {props.count}
      </div>
    </div>
  );
}
