import { ModeToggle } from '../mode-toggle';
import LinkTag from './link';

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <LinkTag link={'/'}>
        <ModeToggle />
      </LinkTag>
      <div className='p-10 mx-10 flex justify-end'>
        <LinkTag link={'/posts'}>Blog</LinkTag>
        <LinkTag link={'/projects'}>Projects</LinkTag>
      </div>
    </header>
  );
};
export default Header;
