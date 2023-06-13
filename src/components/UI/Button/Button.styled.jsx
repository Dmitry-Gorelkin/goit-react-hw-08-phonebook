import styled from 'styled-components';

export const ButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[5]}px;

  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;

  cursor: pointer;

  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.space[4]}px;

  :hover {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.light};
    box-shadow: ${p => p.theme.shadow};
  }
`;
