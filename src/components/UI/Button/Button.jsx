import { Spiner } from '../Spiner/Spiner';
import { ButtonBox } from './Button.styled';

export const Button = ({ children, load = false, ...props }) => {
  return (
    <ButtonBox {...props}>
      {load && <Spiner />}
      {!load && children}
    </ButtonBox>
  );
};
