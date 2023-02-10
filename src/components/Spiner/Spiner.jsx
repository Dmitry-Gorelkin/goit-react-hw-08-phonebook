import { Oval } from 'react-loader-spinner';

export const Spiner = () => {
  return (
    <Oval
      height={15}
      width={15}
      color="#00c2e0"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#00ddff"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
