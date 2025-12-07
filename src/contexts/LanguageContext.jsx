import { createContext, useContext, useState } from 'react';

const translations = {
    fr: {
        nav: {
            about: 'À Propos',
            experience: 'Expérience',
            skills: 'Compétences',
            education: 'Formation',
            projects: 'Projets',
            certifications: 'Certifications',
            interests: 'Centres d\'intérêt',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Bonjour, je suis',
            role: 'Ingénieur Logiciel',
            description: 'Spécialisé en Java, Spring Boot, Angular, React & Intelligence Artificielle appliquée',
            contactBtn: 'Me Contacter',
            projectsBtn: 'Voir mes projets'
        },
        about: {
            title: 'À Propos',
            description1: 'Étudiant en cinquième année d\'ingénierie informatique et réseaux à l\'École Marocaine des Sciences de l\'Ingénieur, je suis également en Master Intelligence Artificielle Appliquée à l\'Université Côte d\'Azur.',
            description2: 'Je recherche un stage de fin d\'études (PFE) à partir du 9 février 2026, d\'une durée de 5 à 6 mois, dans les domaines de l\'intelligence artificielle et du développement Full-Stack.',
            email: 'Email',
            phone: 'Téléphone',
            location: 'Localisation',
            languages: 'Langues'
        },
        experience: {
            title: 'Expérience Professionnelle'
        },
        skills: {
            title: 'Compétences',
            programmingLanguages: 'Langages de Programmation',
            frameworks: 'Frameworks & Technologies',
            databases: 'Bases de Données',
            technical: 'Compétences Techniques',
            soft: 'Compétences Transversales'
        },
        education: {
            title: 'Formation Académique',
            relevantCourses: 'Cours pertinents'
        },
        projects: {
            title: 'Projets Académiques',
            readArticle: 'Lire l\'article complet',
            publication: 'Publication',
            keyPoints: 'Points clés'
        },
        certifications: {
            title: 'Certifications',
            all: 'Toutes',
            grade: 'Note'
        },
        interests: {
            title: 'Centres d\'Intérêt',
            martialArts: 'Arts Martiaux'
        },
        contact: {
            title: 'Contact',
            email: 'Email',
            phone: 'Téléphone',
            location: 'Localisation',
            sendEmail: 'Envoyer un Email',
            whatsapp: 'WhatsApp',
            emailSubject: 'Contact depuis le portfolio',
            emailBody: 'Bonjour M. ELKENTAOUI,\n\nJe vous contacte suite à la consultation de votre portfolio.\n\n[Votre message ici]\n\nCordialement,',
            whatsappMessage: 'Bonjour, je vous contacte depuis votre portfolio',
            formTitle: 'Envoyez-moi un message',
            formName: 'Nom complet',
            formEmail: 'Votre email',
            formSubject: 'Objet',
            formMessage: 'Message',
            formSend: 'Envoyer',
            formSending: 'Envoi en cours...',
            formSuccess: 'Message envoyé avec succès !',
            formError: 'Erreur lors de l\'envoi. Réessayez.',
            call: 'Appeler'
        },
        footer: {
            rights: 'Tous droits réservés',
            tagline: 'Ingénieur Logiciel | Java • Spring Boot • Angular • React • IA'
        }
    },
    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            education: 'Education',
            projects: 'Projects',
            certifications: 'Certifications',
            interests: 'Interests',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hello, I am',
            role: 'Software Engineer',
            description: 'Specialized in Java, Spring Boot, Angular, React & Applied Artificial Intelligence',
            contactBtn: 'Contact Me',
            projectsBtn: 'View my projects'
        },
        about: {
            title: 'About',
            description1: 'Fifth-year student in Computer and Network Engineering at the Moroccan School of Engineering Sciences, I am also pursuing a Master\'s in Applied Artificial Intelligence at Université Côte d\'Azur.',
            description2: 'I am seeking a final-year internship (PFE) starting February 9, 2026, for a duration of 5 to 6 months, in the fields of artificial intelligence and Full-Stack development.',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            languages: 'Languages'
        },
        experience: {
            title: 'Professional Experience'
        },
        skills: {
            title: 'Skills',
            programmingLanguages: 'Programming Languages',
            frameworks: 'Frameworks & Technologies',
            databases: 'Databases',
            technical: 'Technical Skills',
            soft: 'Soft Skills'
        },
        education: {
            title: 'Academic Background',
            relevantCourses: 'Relevant courses'
        },
        projects: {
            title: 'Academic Projects',
            readArticle: 'Read full article',
            publication: 'Publication',
            keyPoints: 'Key points'
        },
        certifications: {
            title: 'Certifications',
            all: 'All',
            grade: 'Grade'
        },
        interests: {
            title: 'Interests',
            martialArts: 'Martial Arts'
        },
        contact: {
            title: 'Contact',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            sendEmail: 'Send Email',
            whatsapp: 'WhatsApp',
            emailSubject: 'Contact from portfolio',
            emailBody: 'Hello Mr. ELKENTAOUI,\n\nI am contacting you after viewing your portfolio.\n\n[Your message here]\n\nBest regards,',
            whatsappMessage: 'Hello, I am contacting you from your portfolio',
            formTitle: 'Send me a message',
            formName: 'Full name',
            formEmail: 'Your email',
            formSubject: 'Subject',
            formMessage: 'Message',
            formSend: 'Send',
            formSending: 'Sending...',
            formSuccess: 'Message sent successfully!',
            formError: 'Error sending message. Please try again.',
            call: 'Call'
        },
        footer: {
            rights: 'All rights reserved',
            tagline: 'Software Engineer | Java • Spring Boot • Angular • React • AI'
        }
    }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('fr');

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
    };

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within LanguageProvider');
    }
    return context;
}
