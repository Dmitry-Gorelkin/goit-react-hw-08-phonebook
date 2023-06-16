import styled from 'styled-components';

export const FilterConteiner = styled.div`
  width: ${p => p.theme.space[9]}px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;
