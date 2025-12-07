import './Education.css';

export default function Education() {
    const education = [
        {
            degree: 'Master en Intelligence Artificielle Appliquée',
            institution: 'Université Côte d\'Azur, Nice',
            period: '2025 - à présent',
            courses: [
                'Raisonnement automatique',
                'Recherche heuristique',
                'Python',
                'Machine Learning',
                'Réseaux de neurones',
                'Vision par ordinateur',
                'IA réactive',
                'Traitement automatique du langage (NLP)'
            ]
        },
        {
            degree: 'Cycle d\'Ingénieur en Informatique et Réseaux',
            institution: 'École Marocaine des Sciences de l\'Ingénieur, Marrakech',
            period: '2024 - à présent',
            courses: [
                'JEE',
                'DevOps',
                'PHP',
                'Programmation mobile',
                '.NET',
                'Big Data',
                'Gestion de projet',
                'Sécurité des systèmes d\'information',
                'ERP',
                'Microservices',
                'Oracle SQL Tuning',
                'Data Mining',
                'Machine Learning & Deep Learning'
            ]
        },
        {
            degree: 'Licence Sciences et Techniques en Systèmes Informatiques Répartis',
            institution: 'Faculté des sciences et techniques, Marrakech',
            period: '2023 - 2024',
            courses: ['Programmation web', 'UML', 'JEE', 'SGBD/SGBDR']
        },
        {
            degree: 'Diplôme d\'études universitaire scientifiques et Techniques',
            institution: 'Faculté des sciences et techniques, Marrakech',
            period: '2021 - 2023',
            courses: ['Algorithmique', 'Programmation en C']
        }
    ];

    return (
        <section id="education">
            <div className="container">
                <h2 className="section-title">Formation Académique</h2>
                <div className="timeline">
                    {education.map((edu, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-header">
                                <div>
                                    <h3 className="timeline-title">{edu.degree}</h3>
                                    <p className="timeline-company">{edu.institution}</p>
                                </div>
                                <span className="timeline-date">{edu.period}</span>
                            </div>
                            <div className="course-tags">
                                <strong style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>
                                    Cours pertinents:
                                </strong>
                                <div className="tech-stack">
                                    {edu.courses.map((course, i) => (
                                        <span key={i} className="tech-tag">{course}</span>
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
