// Dependencies
import React from 'react';

// Styles
import * as styled from './index.styles';

const componentByVariants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h4',
  subtitle2: 'h4',
  body1: 'span',
  body2: 'span',
  body3: 'span',
  number: 'span'
};

function Typography({
  children,
  variant = 'body2',
  style = null,
  component = null,
  className = ''
}) {
  return (
    <styled.Layout
      className={[variant, `style-${style}`, className]}
      as={component ?? componentByVariants[variant]}
    >
      {children}
    </styled.Layout>
  );
}

export default Typography;
