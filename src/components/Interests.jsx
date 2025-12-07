import './Interests.css';
import { useTranslation } from '../contexts/LanguageContext';

export default function Interests() {
    const { t } = useTranslation();
    const interests = t('interests.list');

    return (
        <section id="interests">
            <div className="container">
                <h2 className="section-title">Centres d\'Intérêt</h2>
                <div className="interests-grid">
                    {interests.map((interest, index) => (
                        <div key={index} className="interest-card">
                            <div className="interest-icon">{interest.icon}</div>
                            <h3>{interest.title}</h3>
                            <ul>
                                {interest.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
