import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonGoBackBox = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: absolute;

  top: 0px;
  left: 0px;

  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[5]}px;

  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;

  cursor: pointer;
  pointer-events: ${p => (p.load ? 'none' : 'avto')};

  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.dark};
  background-color: ${p => p.theme.colors.white};

  text-decoration: none;
  text-align: center;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.light};
    box-shadow: ${p => p.theme.shadow};
  }
`;
