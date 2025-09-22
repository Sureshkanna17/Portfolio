import React from 'react';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <small>© {new Date().getFullYear()} B. Suresh Kanna — Built with React, Bootstrap & AOS</small>
      </div>
    </footer>
  );
}
