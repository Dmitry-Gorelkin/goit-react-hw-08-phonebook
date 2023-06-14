import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;

  /* font-size: ${p => p.theme.fontSize[3]}px; */
`;

export const ContactListText = styled.span`
  display: block;

  font-size: ${p => p.theme.fontSize[4]}px;
`;
