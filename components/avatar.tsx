import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='relative h-36'>
      <Image
        src='https://github.com/hrithik73.png'
        height={100}
        width={100}
        className='rounded-full absolute left-0'
        alt='Profile picture of Hritik Singh'
      />
    </div>
  );
};
export default Avatar;
