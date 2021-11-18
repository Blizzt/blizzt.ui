// Dependencies
import React from 'react';

// Styled Components
import * as styled from './styles';

function TokenInput({
  currency = null
}) {
  return (
    <styled.Layout>
      <styled.Container>
        <styled.List>
          TokenList
        </styled.List>
        <styled.Input
          placeholder={'0.0'}
        />
      </styled.Container>
    </styled.Layout>
  );
}

export default TokenInput;
