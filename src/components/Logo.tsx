import React, { ReactNode } from 'react';

function Logo(props: ReactNode) {
  return (
    <img
      width="148px"
      alt="Logo"
      src="./static/logo.svg"
      {...props}
    />
  );
};

export default Logo