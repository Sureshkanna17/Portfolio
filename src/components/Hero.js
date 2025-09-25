import React from 'react';
export default function Hero() {
  return (
    <section id="home" className="header-hero" data-aos="fade-up">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h1 className="mb-2">B. Suresh Kanna</h1>
          <p className="lead mb-1">Full-Stack Web Developer</p>
          <p>📧 sureshkanna1704@gmail.com | 📞 +91 7639602112 | 📍 Chennai, India</p>
          <p><a href="https://www.linkedin.com/in/suresh-kanna-748a00369" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </div>
        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <a className="btn btn-outline-secondary" href={process.env.PUBLIC_URL + '/SureshKanna.pdf'} target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>
    </section>
  );
}
