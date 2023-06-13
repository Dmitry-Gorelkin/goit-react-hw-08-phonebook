// import { Spiner } from '../Spiner/Spiner';
import { FiChevronLeft } from 'react-icons/fi';
import { GoBackBtn } from './GoBack.styled';

export const GoBack = ({ ...props }) => {
  return (
    <GoBackBtn {...props}>
      <FiChevronLeft size="20px" />
      Go Back
    </GoBackBtn>
  );
};
