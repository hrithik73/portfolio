import { PiSquare } from 'lucide-react';
import { ModeToggle } from '../mode-toggle';
import LinkTag from './link';

const Header = () => {
  return (
    <header className='flex items-center justify-between my-10'>
      <LinkTag link={'/'}>
        <PiSquare />
      </LinkTag>
      <div className='flex justify-end items-center mr-4'>
        <LinkTag link={'/posts'}>Blog</LinkTag>
        <LinkTag link={'/projects'}>Projects</LinkTag>
        <ModeToggle />
      </div>
    </header>
  );
};
export default Header;
