import { Spiner } from '../Spiner/Spiner';
import { ButtonIconBox } from './ButtonIcon.styled';

export const ButtonIcon = ({ children, load = false, ...props }) => {
  return (
    <ButtonIconBox {...props}>
      {load && <Spiner />}
      {!load && children}
    </ButtonIconBox>
  );
};
