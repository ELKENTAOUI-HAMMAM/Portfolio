import { useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import './Skills.css';

export default function Skills() {
    const { t } = useTranslation();
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

    const skillCategories = t('skills.list');

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
