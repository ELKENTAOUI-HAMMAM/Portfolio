import './Projects.css';
import { useTranslation } from '../contexts/LanguageContext';
import recyclitixLogo from '../assets/Recyclitix.png';

export default function Projects() {
    const { t } = useTranslation();
    const projects = t('projects.list');

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">{t('projects.title')}</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                {project.title === 'Recyclitix' ? (
                                    <img src={recyclitixLogo} alt="Recyclitix" className="project-logo" />
                                ) : (
                                    <span>{project.icon}</span>
                                )}
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-subtitle">{project.subtitle}</p>
                                {project.badge && (
                                    <span className="project-badge">{project.badge}</span>
                                )}
                                {project.publication && (
                                    <p className="project-publication">
                                        <strong>📄 Publication:</strong> {project.publication}
                                        {project.articleUrl && (
                                            <>
                                                <br />
                                                <a
                                                    href={project.articleUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="article-link"
                                                >
                                                    🔗 Lire l'article complet
                                                </a>
                                            </>
                                        )}
                                    </p>
                                )}
                                <p className="project-description">{project.description}</p>
                                <div>
                                    <strong style={{ color: 'var(--text-accent)', display: 'block', marginBottom: '0.5rem' }}>
                                        Points clés:
                                    </strong>
                                    <ul className="project-highlights">
                                        {project.highlights.map((highlight, i) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="tech-stack">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
