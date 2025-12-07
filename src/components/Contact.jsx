import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from '../contexts/LanguageContext';
import { useMemo } from 'react';
import './Contact.css';

export default function Contact() {
    const { t } = useTranslation();

    const mailtoLink = useMemo(() => {
        const subject = encodeURIComponent(t('contact.emailSubject'));
        const body = encodeURIComponent(t('contact.emailBody'));
        return `https://mail.google.com/mail/?view=cm&fs=1&to=elkentaoui.ha@gmail.com&su=${subject}&body=${body}`;
    }, [t]);

    const whatsappLink = useMemo(() => {
        return `https://wa.me/212777165135?text=${encodeURIComponent(t('contact.whatsappMessage'))}`;
    }, [t]);

    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-title">{t('contact.title')}</h2>
                <div className="contact-content">
                    <div className="contact-grid">
                        <div className="contact-item">
                            <div className="contact-icon"><FaEnvelope /></div>
                            <div className="contact-info">
                                <h4>{t('contact.email')}</h4>
                                <p>elkentaoui.ha@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><FaPhone /></div>
                            <div className="contact-info">
                                <h4>{t('contact.phone')}</h4>
                                <p>+212 777-165135</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><FaMapMarkerAlt /></div>
                            <div className="contact-info">
                                <h4>{t('contact.location')}</h4>
                                <p>Marrakech, Maroc</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-actions">
                        <a
                            href={mailtoLink}
                            className="btn btn-contact"
                        >
                            <FaEnvelope /> {t('contact.sendEmail')}
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-contact btn-whatsapp"
                        >
                            <FaWhatsapp /> {t('contact.whatsapp')}
                        </a>
                        <a
                            href="tel:+212777165135"
                            className="btn btn-contact btn-call"
                        >
                            <FaPhone /> {t('contact.call')}
                        </a>
                    </div>

                    <div className="social-links">
                        <a
                            href="https://www.linkedin.com/in/hammam-elkentaoui-851a7b2b5/"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/ELKENTAOUI-HAMMAM"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
