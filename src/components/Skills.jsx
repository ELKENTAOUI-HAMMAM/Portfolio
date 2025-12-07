import { useEffect, useRef } from 'react';
import './Skills.css';

export default function Skills() {
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const progressBars = entry.target.querySelectorAll('.skill-progress');
                        progressBars.forEach((bar) => {
                            bar.style.width = bar.dataset.width;
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skillCategories = [
        {
            title: 'Langages de Programmation',
            skills: [
                { name: 'Java', level: 90 },
                { name: 'JavaScript / TypeScript', level: 85 },
                { name: 'Python', level: 80 },
                { name: 'PHP', level: 75 },
                { name: 'C#', level: 70 },
                { name: 'Dart', level: 65 },
                { name: 'Kotlin', level: 65 }
            ]
        },
        {
            title: 'Frameworks & Technologies',
            skills: [
                { name: 'Spring Boot', level: 90 },
                { name: 'Angular', level: 85 },
                { name: 'React.js', level: 85 },
                { name: 'ASP.NET', level: 75 },
                { name: 'Flutter', level: 70 },
                { name: 'TensorFlow / Keras', level: 75 }
            ]
        },
        {
            title: 'Bases de Données',
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 85 },
                { name: 'Oracle Database', level: 75 },
                { name: 'SQLite', level: 80 }
            ]
        },
        {
            title: 'Compétences Techniques',
            tags: ['Machine Learning', 'Deep Learning', 'REST API', 'Microservices', 'Docker', 'Git', 'DevOps', 'Keycloak', 'UML', 'Méthode Agile']
        },
        {
            title: 'Compétences Transversales',
            tags: ['Communication', 'Adaptabilité', 'Travail d\'équipe', 'Gestion de projet', 'Résolution de problèmes']
        }
    ];

    return (
        <section id="skills" ref={skillsRef}>
            <div className="container">
                <h2 className="section-title">Compétences</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            {category.skills ? (
                                category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <div className="skill-name">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                data-width={`${skill.level}%`}
                                            ></div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="skill-tags">
                                    {category.tags.map((tag, i) => (
                                        <span key={i} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
