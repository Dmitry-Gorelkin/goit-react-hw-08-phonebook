import styled from 'styled-components';

export const AppBarBox = styled.div`
  height: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  display: flex;

  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
`;
