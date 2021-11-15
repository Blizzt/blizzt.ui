// Dependencies
import React, {useEffect, useMemo} from 'react';
import { useSpring } from 'react-spring'

// Styles
import * as styled from './styles';

function Badge({
  backgroundColor = '#f84bb3',
  textColor = '#fff',
  count = null,
  min = false,
  children,
}) {
  // Spring
  const [styles, api] = useSpring(() => ({}));

  useEffect(() => {
    api.start({
      to: async (next) => {
        await next({ transform: 'translateY(-2px)', })
        await next({ transform: 'translateY(0px)', })
      },
      config: { duration: 200 },
    });
  }, [count]);

  // RenderCount
  const renderCount = useMemo(() => (count >= 100) ? '+99' : count, [count])

  return (
    <styled.Layout
      min={min}
      backgroundColor={backgroundColor}
      textColor={textColor}>
      {(count && count > 0) ? (
        <styled.Badge style={styles}>
          {!min && (
            <styled.Text>
              {renderCount}
            </styled.Text>
          )}
        </styled.Badge>
      ) : null}
      <styled.Children>
        {children}
      </styled.Children>
    </styled.Layout>
  );
}

export default Badge;
