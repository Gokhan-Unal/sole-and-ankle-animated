import React from 'react';

import styled from 'styled-components';
import { WEIGHTS } from '../../constants';

export default function NavLink({ children, ...props }) {
  return (
    <Wrapper {...props}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 500ms;

  ${Wrapper}:hover & {
    transition: transform 250ms;
    transform: translateY(var(--translate-to));
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
`;
