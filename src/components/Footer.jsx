import { useTranslation } from '../contexts/LanguageContext';
import './Footer.css';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} ELKENTAOUI Hammam. {t('footer.rights')}.</p>
                <p className="footer-tagline">{t('footer.tagline')}</p>
            </div>
        </footer>
    );
}
