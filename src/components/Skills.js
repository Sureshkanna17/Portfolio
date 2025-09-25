import React from 'react';
export default function Skills() {
  const skills = ['React.js','Redux','Redux-Saga','JavaScript (ES6+)','HTML5','CSS3','Bootstrap','jQuery','Core PHP','REST APIs','MySQL','Git','CI/CD'];
  return (
    <section id="skills" className="section-card" data-aos="fade-up">
      <h3>Technical Skills</h3>
      <div>
        {skills.map(s => <span key={s} className="badge bg-primary badge-skill">{s}</span>)}
      </div>
    </section>
  );
}
