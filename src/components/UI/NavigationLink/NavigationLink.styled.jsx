import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  padding-bottom: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.dark};

  cursor: pointer;

  text-decoration: none;

  &.active {
    box-shadow: 0px 2px 0px 0px ${p => p.theme.colors.accent};
  }

  :hover {
    color: ${p => p.theme.colors.accent};
  }

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;
