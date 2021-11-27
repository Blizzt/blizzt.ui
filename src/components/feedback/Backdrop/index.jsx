// Dependencies
import React from 'react';

// Styled-Components
import * as styled from './index.styles';

function Backdrop({
  children
}) {
  return (
    <styled.Layout>
      {children}
    </styled.Layout>
  );
}

export default Backdrop;
