import styled from 'styled-components';

export const RegistrationFormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

export const RegistrationFormLabel = styled.label`
  display: block;

  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSize[4]}px;
`;
export const RegistrationFormInput = styled.input`
  width: ${p => p.theme.space[8]}px;

  display: block;

  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSize[4]}px;
  color: ${p => p.theme.colors.dark};
`;
