import { FiChevronLeft } from 'react-icons/fi';
import { ButtonGoBackBox } from './ButtonGoBack.styled';

export const ButtonGoBack = ({ ...props }) => {
  return (
    <ButtonGoBackBox {...props}>
      <FiChevronLeft size="20px" />
      Go Back
    </ButtonGoBackBox>
  );
};
