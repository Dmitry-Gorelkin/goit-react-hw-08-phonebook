import styled from 'styled-components';
import { FiUser, FiMail, FiKey } from 'react-icons/fi';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  display: block;

  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSize[4]}px;
`;

export const FormInputBox = styled.div`
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[5]}px;

  position: relative;

  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 100%;

  padding: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[5]}px;

  display: block;

  font-size: ${p => p.theme.fontSize[3]}px;
  color: ${p => p.theme.colors.dark};

  outline: none;

  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.space[2]}px;

  :focus {
    border-color: ${p => p.theme.colors.accent};
  }
`;

export const FormBtnBox = styled.div`
  display: flex;
  justify-content: center;

  padding-top: ${p => p.theme.space[4]}px;
`;

export const FormIconUser = styled(FiUser)`
  position: absolute;

  left: 6px;
  top: 6px;

  color: ${p => p.theme.colors.gray};

  input:focus + & {
    color: ${p => p.theme.colors.accent};
  }
`;

export const FormIconMail = styled(FiMail)`
  position: absolute;

  left: 6px;
  top: 6px;

  color: ${p => p.theme.colors.gray};

  input:focus + & {
    color: ${p => p.theme.colors.accent};
  }
`;

export const FormIconPassword = styled(FiKey)`
  position: absolute;

  left: 6px;
  top: 6px;

  color: ${p => p.theme.colors.gray};

  input:focus + & {
    color: ${p => p.theme.colors.accent};
  }
`;
