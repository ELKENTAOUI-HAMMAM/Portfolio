import { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import './Hero.css';

export default function Hero() {
    const { t } = useTranslation();
    const [text, setText] = useState('');
    const fullText = t('hero.role');

    useEffect(() => {
        setText('');
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.substring(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [fullText]);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <p className="hero-subtitle">{t('hero.greeting')}</p>
                <h1 className="hero-title">ELKENTAOUI Hammam</h1>
                <p className="hero-role">
                    <span className="typing-text">{text}</span>
                </p>
                <p className="hero-description">
                    {t('hero.description')}
                </p>
                <div className="hero-buttons">
                    <button className="btn btn-primary" onClick={scrollToContact}>
                        {t('hero.contactBtn')}
                    </button>
                    <a
                        href="#projects"
                        className="btn btn-secondary"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        {t('hero.projectsBtn')}
                    </a>
                </div>
            </div>
        </section>
    );
}
