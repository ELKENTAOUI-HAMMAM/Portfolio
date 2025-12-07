import './Education.css';
import { useTranslation } from '../contexts/LanguageContext';

export default function Education() {
    const { t } = useTranslation();
    const education = t('education.list');

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
