// Dependencies
import React from 'react';

// Styled-Components
import * as styled from './index.styles';

// Types
import { buttonVariantsId } from '@types/inputs';

function Button({
  variant = buttonVariantsId.CONTAINED,
  caption = 'Button',
  disabled = false,
  isLoading = false
}) {
  return (
    <styled.Layout
      className={[`v-${variant}`]}
      disabled={disabled}
      isLoading={isLoading}
    >
      <styled.Caption>{caption}</styled.Caption>
    </styled.Layout>
  );
}

export default Button;
