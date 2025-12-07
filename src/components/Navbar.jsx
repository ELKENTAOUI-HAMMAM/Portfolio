import { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import './Navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, t, toggleLanguage } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <div className="nav-container">
                <div className="logo">ELKENTAOUI Hammam</div>

                <button
                    className="menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><a onClick={() => scrollToSection('about')}>{t('nav.about')}</a></li>
                    <li><a onClick={() => scrollToSection('experience')}>{t('nav.experience')}</a></li>
                    <li><a onClick={() => scrollToSection('skills')}>{t('nav.skills')}</a></li>
                    <li><a onClick={() => scrollToSection('education')}>{t('nav.education')}</a></li>
                    <li><a onClick={() => scrollToSection('projects')}>{t('nav.projects')}</a></li>
                    <li><a onClick={() => scrollToSection('certifications')}>{t('nav.certifications')}</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>{t('nav.contact')}</a></li>
                    <li>
                        <button onClick={toggleLanguage} className="lang-toggle" aria-label="Change language">
                            {language === 'fr' ? 'EN' : 'FR'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
