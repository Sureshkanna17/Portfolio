import React from 'react';
export default function Projects() {
  const projects = [
    // { title: 'React Todo App', desc: 'CRUD task management app with Redux.' },
    // { title: 'E-commerce Platform', desc: 'Catalog, cart & checkout system.' },
    { title: 'Portfolio Website', desc: 'Personal portfolio showcasing projects.' },
    // { title: 'Custom PHP CMS', desc: 'Secure CMS with authentication and role-based access.' }
  ];
  return (
    <section id="projects" className="section-card" data-aos="fade-up">
      <h3>Key Projects</h3>
      <div className="row">
        {projects.map(p => (
          <div className="col-md-6 mb-3" key={p.title}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
