import * as React from 'react';
import * as styled from 'styled-components';
import { injectIntl } from 'react-intl';

import { Counter } from 'client/containers/Counter';
import { Head } from 'client/presentations/head/Head';

const Wrapper = styled.default.div`
  color: green;
`;

export const Users = injectIntl(function(props) {
  const title: string = props.intl.formatMessage({ id: 'Users.Title' });
  const description: string = props.intl.formatMessage({
    id: 'Users.Description',
  });

  return (
    <>
      <Head title={title} description={description} />
      <Wrapper>
        <h2>Users</h2>
        <Counter />
      </Wrapper>
    </>
  );
});
