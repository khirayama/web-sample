import * as React from 'react';
import * as styled from 'styled-components';

import { Page } from 'client/containers/Page';
import { Counter } from 'client/containers/Counter';
import { Application } from 'client/presentations/templates/Application';

const Wrapper = styled.default.div`
  color: blue;
`;

export const Home = () => {
  const title = { descriptor: 'Home.Title' };
  const description = { descriptor: 'Home.Description' };

  return (
    <Page title={title} description={description}>
      <Application>
        <Wrapper>
          <h2>Home</h2>
          <Counter />
        </Wrapper>
      </Application>
    </Page>
  );
};
