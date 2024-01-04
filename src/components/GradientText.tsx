import { ReactNode } from 'react';

type TextGradientProps = {
  className?: string;
  from?: string;
  via?: string;
  to?: string;
};

export const GradientText: React.FC<{
  children: ReactNode;
  props?: TextGradientProps;
}> = ({ children, props }) => {
  const from = props?.from || 'from-pink-500';
  const via = props?.via || 'via-red-500';
  const to = props?.to || 'to-yellow-500';
  return (
    <p
      className={`bg-gradient-to-r ${from} ${via} ${to} animate-gradient bg-300% bg-clip-text text-transparent ${
        props?.className || ''
      }`}
    >
      {children}
    </p>
  );
};
