import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer className="mt-2 text-center">
        <p>Go Port© {year}</p>
      </footer>
    </div>
  );
};

export default Footer;
