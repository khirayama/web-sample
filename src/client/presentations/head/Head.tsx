import * as React from 'react';
import ReactHelmet from 'react-helmet';

type Props = {
  title?: string;
  description?: string;
};

export const Head: React.SFC<Props> = (props: Props) => (
  <ReactHelmet>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
  </ReactHelmet>
);
