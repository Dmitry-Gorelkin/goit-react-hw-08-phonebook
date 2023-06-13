import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  color: ${p => p.theme.colors.dark};

  cursor: pointer;

  text-decoration: none;

  &.active {
    border-bottom: 1px solid ${p => p.theme.colors.accent};
  }

  :hover {
    color: ${p => p.theme.colors.accent};
  }

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;
