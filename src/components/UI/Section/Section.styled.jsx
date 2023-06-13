import styled from 'styled-components';

export const SectionConteiner = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;

  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  text-align: center;
  text-transform: capitalize;

  font-size: ${p => p.theme.fontSize[6]}px;
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;
