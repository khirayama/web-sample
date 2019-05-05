import * as React from 'react';
import * as styled from 'styled-components';
import { injectIntl } from 'react-intl';

import { Counter } from 'client/containers/Counter';
import { Head } from 'client/presentations/head/Head';

const Wrapper = styled.default.div`
  color: red;
`;

export const About = injectIntl(function(props) {
  const title: string = props.intl.formatMessage({ id: 'About.Title' });
  const description: string = props.intl.formatMessage({
    id: 'About.Description',
  });

  return (
    <>
      <Head title={title} description={description} />
      <Wrapper>
        <h2>About</h2>
        <Counter />
      </Wrapper>
    </>
  );
});
