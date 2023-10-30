import { PiSquare } from 'lucide-react';
import { ModeToggle } from '../mode-toggle';
import LinkTag from './link';

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <LinkTag link={'/'}>
        <PiSquare />
      </LinkTag>
      <div className='p-10 mx-10 flex justify-end items-center'>
        <LinkTag link={'/posts'}>Blog</LinkTag>
        <LinkTag link={'/projects'}>Projects</LinkTag>
        <ModeToggle />
      </div>
    </header>
  );
};
export default Header;
