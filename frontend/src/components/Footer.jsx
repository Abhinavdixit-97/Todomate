import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} TodoMate. Built with ❤️ for productivity.</p>
        <p>
          <i className="fas fa-code"></i> Made with React & Node.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;