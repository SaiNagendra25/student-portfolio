export default function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'An amazing web app built with React' },
    { id: 2, title: 'Project 2', description: 'Interactive dashboard with animations' },
    { id: 3, title: 'Project 3', description: 'Full-stack application' }
  ]

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}