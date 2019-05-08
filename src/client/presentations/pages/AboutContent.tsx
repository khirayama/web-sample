import * as React from 'react';
import * as styled from 'styled-components';

import { Counter } from 'client/containers/Counter';

const Wrapper = styled.default.div`
  color: red;
`;

export function AboutContent() {
  return (
    <Wrapper>
      <h2>About</h2>
      <Counter />
    </Wrapper>
  );
}
