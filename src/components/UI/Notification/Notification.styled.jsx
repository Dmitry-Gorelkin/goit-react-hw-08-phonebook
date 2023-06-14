import styled from 'styled-components';

export const NotificationBox = styled.p`
  width: ${p => p.theme.space[9]}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  text-transform: uppercase;
  font-size: ${p => p.theme.space[5]}px;
`;
