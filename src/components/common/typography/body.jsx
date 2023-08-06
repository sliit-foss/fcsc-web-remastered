import { twMerge } from 'tailwind-merge';

const BodyText = ({ children, className, ...props }) => {
  return (
    <span
      className={twMerge('text-[18px] sm:text-[22px] text-center lg:text-start', className)}
      {...props}>
      {children}
    </span>
  );
};

export default BodyText;
