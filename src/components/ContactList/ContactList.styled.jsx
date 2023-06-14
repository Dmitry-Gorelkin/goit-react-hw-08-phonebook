import styled from 'styled-components';

export const ContactListConteiner = styled.ul`
  width: ${p => p.theme.space[9]}px;

  display: flex;
  flex-direction: column;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;
