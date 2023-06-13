import styled from 'styled-components';

export const AppBarBox = styled.div`
  height: ${p => p.theme.space[6]}px;

  display: flex;

  justify-content: space-between;
  align-items: center;

  margin-bottom: ${p => p.theme.space[4]}px;

  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
`;
