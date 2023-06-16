import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  border-radius: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadow};
`;

export const ContactListText = styled.span`
  display: block;

  font-size: ${p => p.theme.fontSize[4]}px;
`;
