import * as React from 'react';
import * as styled from 'styled-components';
import { injectIntl } from 'react-intl';

import { Counter } from 'client/containers/Counter';
import { Head } from 'client/presentations/head/Head';
import { Application } from 'client/presentations/templates/Application';

const Wrapper = styled.default.div`
  color: blue;
`;

export const Home = injectIntl(function(props) {
  const title: string = props.intl.formatMessage({ id: 'Home.Title' });
  const description: string = props.intl.formatMessage({
    id: 'Home.Description',
  });

  return (
    <Application>
      <Head title={title} description={description} />
      <Wrapper>
        <h2>Home</h2>
        <Counter />
      </Wrapper>
    </Application>
  );
});
