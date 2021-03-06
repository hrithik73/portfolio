import React from 'react';
import Redirect from '../components/Redirect';
import Header from '../components/Header';
import Nav from '../components/Nav';  
import { redirects } from '../workers-site/data';

const links = () => {
  return (
    <div>
      <Header />
      <Nav props="links" />
      <div className="dark:bg-black dark:text-white pt-10 sm:pt-20"></div>
      <div className="dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen">
        {Object.keys(redirects).map((key, index) => {
          return <Redirect key={index} item={redirects[key]} />;
        })}
      </div>
    </div>
  );
};

export default links;
