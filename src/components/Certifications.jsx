import { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import './Certifications.css';

export default function Certifications() {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');
    const certifications = t('certifications.list');

    const filteredCerts = filter === 'all'
        ? certifications
        : certifications.filter(cert => cert.platform.toLowerCase() === filter);

    return (
        <section id="certifications">
            <div className="container">
                <h2 className="section-title">{t('certifications.title')}</h2>

                <div className="cert-filters">
                    <button
                        className={filter === 'all' ? 'active' : ''}
                        onClick={() => setFilter('all')}
                    >
                        {t('certifications.all')} ({certifications.length})
                    </button>
                    <button
                        className={filter === 'oracle' ? 'active' : ''}
                        onClick={() => setFilter('oracle')}
                    >
                        Oracle (1)
                    </button>
                    <button
                        className={filter === 'coursera' ? 'active' : ''}
                        onClick={() => setFilter('coursera')}
                    >
                        Coursera (20)
                    </button>
                </div>

                <div className="certifications-grid">
                    {filteredCerts.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card"
                        >
                            <div className="cert-platform">{cert.platform}</div>
                            <div className="cert-title">{cert.title}</div>
                            <div className="cert-issuer">{cert.issuer}</div>
                            {cert.score && <div className="cert-score">{t('certifications.grade')}: {cert.score}</div>}
                            <div className="cert-verify">🔗 {t('certifications.verify')}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
