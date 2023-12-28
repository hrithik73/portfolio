import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  link: string;
}

const LinkTag = ({ link, children }: LinkProps) => {
  return (
    <Link className='mr-5 my-2 cursor-pointer hover:underline' href={link}>
      {children}
    </Link>
  );
};
export default LinkTag;
