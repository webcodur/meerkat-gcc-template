import React from 'react';

const Footer = () => {
  // const borderStyle = 'border-t border-gray-600';

  return (
    <footer
      className={`border-8 border-gray-200 border-opacity-10 footer footer-center p-4 bg-gray-300  h-[300px]`}
    >
      <aside>
        <p className="text-sm opacity-75">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
