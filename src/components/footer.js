import React from 'react';
import HeartIcon from '../assets/heart.svg';
import SocialIcon from './social_icon';

const Footer = ({ social }) => (
  <footer data-exclude="true" className="max-w-screen-pdf py-6 mx-auto items-center justify-between md:flex">
    <div className="items-center flex tracking-wide mb-5 md:mb-0 justify-center text-sm ml-2">
      <span className="inline-block mr-1">
        © {new Date().getFullYear()} | Developed with
      </span>
      <a href="https://www.gatsbyjs.com" title="gatsbyJS" rel="noreferrer" target="_blank" className="inline-block mr-1">
        <HeartIcon
          className="h-3 w-3 fill-primary-dark"
        />
      </a>
      <span className="inline-block mr-1">by</span>
      <a
        className="text-primary-dark hover:text-primary font-bold"
        href={process.env.GATSBY_SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        George Barbu
      </a>
    </div>
    {social && (
      <div className="flex items-center justify-center ml-2">
        {social.map(item => (
          <a
            key={item.service}
            className="text-primary-dark ml-4 hover:text-primary-light"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.service}
          >
            <SocialIcon type={item.service} />
          </a>
        ))}
      </div>
    )}
  </footer>
);

export default Footer;
