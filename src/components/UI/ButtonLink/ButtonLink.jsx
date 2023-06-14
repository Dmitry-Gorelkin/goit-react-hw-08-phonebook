import { ButtonLinkBox } from './ButtonLink.styled';

export const ButtonLink = ({ children, ...props }) => {
  return <ButtonLinkBox {...props}>{children}</ButtonLinkBox>;
};
