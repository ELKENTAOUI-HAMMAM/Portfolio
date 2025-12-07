import { useState } from 'react';
import './Certifications.css';

export default function Certifications() {
    const [filter, setFilter] = useState('all');

    const certifications = [
        {
            platform: 'Oracle',
            title: 'Cloud Infrastructure 2025 Certified AI Foundations Associate',
            issuer: 'Oracle',
            score: null,
            link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4C4924F442ECC9DF8524932B06D9FD7232C8978920647644C71ABCB424E83C96'
        },
        {
            platform: 'Coursera',
            title: 'Prompt engineering pour Chatgpt',
            issuer: 'Vanderbilt University',
            score: '100%',
            link: 'https://www.coursera.org/account/accomplishments/verify/HAPVVWGXIT2M'
        },
        {
            platform: 'Coursera',
            title: 'Introduction au Cloud Computing',
            issuer: 'IBM',
            score: '96%',
            link: 'https://www.coursera.org/account/accomplishments/records/MULQ5JJXP3YU'
        },
        {
            platform: 'Coursera',
            title: 'Analyse exploratoire des données pour l\'apprentissage automatique',
            issuer: 'IBM',
            score: '95%',
            link: 'https://www.coursera.org/account/accomplishments/verify/ORWPV020QJOZ'
        },
        {
            platform: 'Coursera',
            title: 'Développement avancé d\'Angular',
            issuer: 'LearnQuest',
            score: '96.60%',
            link: 'https://www.coursera.org/account/accomplishments/verify/OJKQ4EAMW67T'
        },
        {
            platform: 'Coursera',
            title: 'Microservices et déploiement avancés de Spring Cloud avec Docker',
            issuer: 'Packt',
            score: '100%',
            link: 'https://www.coursera.org/account/accomplishments/verify/GOB1IGXAWPXO'
        },
        {
            platform: 'Coursera',
            title: 'Se lancer dans le développement d\'applications Android',
            issuer: 'SkillUp',
            score: '92.85%',
            link: 'https://www.coursera.org/account/accomplishments/verify/CRTUI17IORVL'
        },
        {
            platform: 'Coursera',
            title: 'Introduction à l\'ingénierie des données',
            issuer: 'IBM',
            score: '93.20%',
            link: 'https://www.coursera.org/account/accomplishments/verify/297IMISX8VR4'
        },
        {
            platform: 'Coursera',
            title: 'Introduction à l\'apprentissage automatique',
            issuer: 'Duke University',
            score: '88.37%',
            link: 'https://www.coursera.org/account/accomplishments/verify/D9FJM8VB6OEY'
        },
        {
            platform: 'Coursera',
            title: 'Cybersécurité : DevSecOps',
            issuer: 'Macquarie University',
            score: '98.56%',
            link: 'https://www.coursera.org/account/accomplishments/verify/P43C90NJQD43'
        },
        {
            platform: 'Coursera',
            title: 'Réseaux virtuels dans Azure',
            issuer: 'Whizlabs',
            score: '87.50%',
            link: 'https://www.coursera.org/account/accomplishments/verify/USYSEVHCF7JK'
        },
        {
            platform: 'Coursera',
            title: 'Introduction au génie logiciel',
            issuer: 'IBM',
            score: '98.60%',
            link: 'https://www.coursera.org/account/accomplishments/records/JB7A3NBYDLCP'
        },
        {
            platform: 'Coursera',
            title: 'Introduction à Java et à la programmation orientée objet',
            issuer: 'University of Pennsylvania',
            score: '98.07%',
            link: 'https://www.coursera.org/account/accomplishments/records/R54ZT3QKDU3X'
        },
        {
            platform: 'Coursera',
            title: 'React Native',
            issuer: 'Meta',
            score: '95.31%',
            link: 'https://www.coursera.org/account/accomplishments/records/Z72DIQ0BYFMP'
        },
        {
            platform: 'Coursera',
            title: 'Introduction à Git et GitHub',
            issuer: 'Google',
            score: '97.50%',
            link: 'https://www.coursera.org/account/accomplishments/verify/4S2A90L03WWJ'
        },
        {
            platform: 'Coursera',
            title: 'Introduction au développement d\'applications mobiles',
            issuer: 'IBM',
            score: '95.14%',
            link: 'https://www.coursera.org/account/accomplishments/verify/H3T225I35PKT'
        },
        {
            platform: 'Coursera',
            title: 'Génie logiciel : modélisation des systèmes logiciels avec UML',
            issuer: 'The Hong Kong University of Science and Technology',
            score: '100%',
            link: 'https://www.coursera.org/account/accomplishments/records/FA9REGYPRH80'
        },
        {
            platform: 'Coursera',
            title: 'Les bases de React',
            issuer: 'Meta',
            score: '97.50%',
            link: 'https://www.coursera.org/account/accomplishments/records/7IV896EJ23R0'
        },
        {
            platform: 'Coursera',
            title: 'Introduction aux conteneurs avec Docker, Kubernetes et OpenShift',
            issuer: 'IBM',
            score: '94%',
            link: 'https://www.coursera.org/account/accomplishments/records/RGKQJJEHSHWW'
        },
        {
            platform: 'Coursera',
            title: 'Introduction au Développement Agile et à Scrum',
            issuer: 'IBM',
            score: '100%',
            link: 'https://www.coursera.org/account/accomplishments/records/H0MZ9FXPJ5FN'
        },
        {
            platform: 'Coursera',
            title: 'Premiers pas avec Git et GitHub',
            issuer: 'IBM',
            score: '97.50%',
            link: 'https://www.coursera.org/account/accomplishments/records/99CCN39IH40A'
        }
    ];

    const filteredCerts = filter === 'all'
        ? certifications
        : certifications.filter(cert => cert.platform.toLowerCase() === filter);

    return (
        <section id="certifications">
            <div className="container">
                <h2 className="section-title">Certifications</h2>

                <div className="cert-filters">
                    <button
                        className={filter === 'all' ? 'active' : ''}
                        onClick={() => setFilter('all')}
                    >
                        Toutes ({certifications.length})
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
                            {cert.score && <div className="cert-score">Note: {cert.score}</div>}
                            <div className="cert-verify">🔗 Vérifier le certificat</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
