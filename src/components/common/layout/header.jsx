import { twMerge } from 'tailwind-merge';

const Header = ({ className }) => {
  return (
    <header
      className={twMerge(`w-full min-h-[70px] xs:min-h-[90px] bg-white/90 backdrop-blur-md fixed z-50`, className)}>
        header goes here
    </header>
  );
};

export default Header;
