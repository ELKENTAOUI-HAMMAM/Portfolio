import { useTranslation } from '../contexts/LanguageContext';
import './About.css';
import profileImage from './IMG_1.jpg';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title">{t('about.title')}</h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src={profileImage} alt="ELKENTAOUI Hammam" className="profile-img" />
                    </div>
                    <div className="about-text">
                        <p>
                            {t('about.description1')}
                        </p>
                        <p>
                            {t('about.description2')}
                        </p>
                        <div className="info-grid">
                            <div className="info-item">
                                <span>📧</span>
                                <div>
                                    <strong>{t('about.email')}:</strong> elkentaoui.ha@gmail.com
                                </div>
                            </div>
                            <div className="info-item">
                                <span>📱</span>
                                <div>
                                    <strong>{t('about.phone')}:</strong> +212 777-165135
                                </div>
                            </div>
                            <div className="info-item">
                                <span>📍</span>
                                <div>
                                    <strong>{t('about.location')}:</strong> Marrakech, Maroc
                                </div>
                            </div>
                            <div className="info-item">
                                <span>🌐</span>
                                <div>
                                    <strong>{t('about.languages')}:</strong> Arabe, Français, Anglais
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
