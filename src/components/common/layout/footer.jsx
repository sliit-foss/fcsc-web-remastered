import { twMerge } from 'tailwind-merge';

const Footer = ({ className }) => {
  return (
    <footer
      className={twMerge(`flex w-full justify-center bg-white mt-24 z-50`, className)}>
      Footer goes here
    </footer>
  );
};

export default Footer;
