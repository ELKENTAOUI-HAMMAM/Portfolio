import { useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import './Experience.css';

export default function Experience() {
    const { t } = useTranslation();
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = timelineRef.current?.querySelectorAll('.timeline-item');
        items?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    const experiences = [
        {
            title: 'Stage Développeur Web Full-Stack',
            company: 'Norsys Afrique',
            location: 'Marrakech',
            period: 'Juillet 2025 - Septembre 2025',
            project: 'Système de gestion pour une agence de location de voiture',
            tasks: [
                'Développement full-stack des modules (Véhicules, Clients, Contrats, Locations)',
                "Mise en oeuvre de l'i18n, amélioration de l'UX/UI et création d'un dashboard interactif",
                'Automatisation des contrats et réservations'
            ],
            technologies: ['Angular 19', 'Spring Boot', 'Java', 'TypeScript', 'REST API', 'Keycloak', 'Git', 'PostgreSQL', 'PrimeNG', 'Méthode Agile']
        },
        {
            title: 'Stage Développeur Web Full-Stack',
            company: 'Bestep',
            location: 'Marrakech',
            period: 'Avril 2024 - Juin 2024',
            project: 'Système de gestion de stock',
            tasks: [
                'Développement des modules de gestion (articles, contacts, achats, ventes)',
                'Création d\'un dashboard dynamique avec statistiques',
                'Implémentation d\'une authentification sécurisée et exportation PDF (devis, factures, bons)'
            ],
            technologies: ['PHP', 'ReactJs', 'NodeJs', 'MySQL', 'Git', 'Méthode agile']
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title">{t('experience.title')}</h2>
                <div className="timeline" ref={timelineRef}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-header">
                                <div>
                                    <h3 className="timeline-title">{exp.title}</h3>
                                    <p className="timeline-company">{exp.company}, {exp.location}</p>
                                </div>
                                <span className="timeline-date">{exp.period}</span>
                            </div>
                            <p className="timeline-description"><strong>Projet:</strong> {exp.project}</p>
                            <ul className="timeline-tasks">
                                {exp.tasks.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                            <div className="tech-stack">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
