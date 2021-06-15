import React from 'react';

const Footer = () => {
  return (
    <div className="text-darkgrey py-3 bg-gray-50 dark:bg-black dark:text-grey">
      <div className="flex justify-center w-11/12 mx-auto mt-1 items-center text-sm">
        © {new Date().getFullYear()} |
        <a href="https://github.com/hrithik73/" className="ml-1">
          Hrithik Singh && Template by
          <a href="https://github.com/BRO3886"> Siddhartha Varma</a>
        </a>
      </div>
    </div>
  );
};

export default Footer;
