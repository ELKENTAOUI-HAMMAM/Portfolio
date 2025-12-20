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
            locationValue: 'Marrakech, Maroc',
            languages: 'Langues',
            languagesValue: 'Arabe, Français, Anglais'
        },
        experience: {
            title: 'Expérience Professionnelle',
            list: [
                {
                    title: 'Stage Développeur Web Full-Stack',
                    company: 'Norsys Afrique',
                    location: 'Marrakech',
                    period: 'Juillet 2025 - Septembre 2025',
                    project: 'Système de gestion pour une agence de location de voiture',
                    tasks: [
                        'Développement full-stack des modules (Véhicules, Clients, Contrats, Locations)',
                        "Mise en oeuvre de l'i18n, amélioration de l'UX/UI et création d'un dashboard interactif",
                        'Automatisation des contrats et réservations'
                    ],
                    technologies: ['Angular 19', 'Spring Boot', 'Java', 'TypeScript', 'REST API', 'Keycloak', 'Git', 'PostgreSQL', 'PrimeNG', 'Méthode Agile']
                },
                {
                    title: 'Stage Développeur Web Full-Stack',
                    company: 'Bestep',
                    location: 'Marrakech',
                    period: 'Avril 2024 - Juin 2024',
                    project: 'Système de gestion de stock',
                    tasks: [
                        'Développement des modules de gestion (articles, contacts, achats, ventes)',
                        'Création d\'un dashboard dynamique avec statistiques',
                        'Implémentation d\'une authentification sécurisée et exportation PDF (devis, factures, bons)'
                    ],
                    technologies: ['PHP', 'ReactJs', 'NodeJs', 'MySQL', 'Git', 'Méthode agile']
                }
            ]
        },
        skills: {
            title: 'Technologies',
            subtitle: 'Une boîte à outils complète pour bâtir des solutions modernes et évolutives',
            list: [
                {
                    title: 'Langages',
                    skills: [
                        { name: 'Java' },
                        { name: 'JavaScript' },
                        { name: 'TypeScript' },
                        { name: 'Python' },
                        { name: 'PHP' },
                        { name: 'C#' },
                        { name: 'Dart' },
                        { name: 'Kotlin' }
                    ]
                },
                {
                    title: 'Frameworks & Libraries',
                    skills: [
                        { name: 'Spring Boot' },
                        { name: 'Angular' },
                        { name: 'React' },
                        { name: 'Vue.js' },
                        { name: 'Next.js' },
                        { name: 'ASP.NET' },
                        { name: 'Flutter' },
                        { name: 'TensorFlow' },
                        { name: 'Laravel' },
                        { name: 'Symfony' },
                        { name: 'Tailwind' },
                        { name: 'Node.js' }
                    ]
                },
                {
                    title: 'Data & Cloud',
                    skills: [
                        { name: 'MySQL' },
                        { name: 'PostgreSQL' },
                        { name: 'Oracle' },
                        { name: 'MongoDB' },
                        { name: 'Redis' },
                        { name: 'Docker' },
                        { name: 'Kubernetes' },
                        { name: 'AWS' },
                        { name: 'Nginx' }
                    ]
                },
                {
                    title: 'Tools & DevOps',
                    skills: [
                        { name: 'Git' },
                        { name: 'GitHub' },
                        { name: 'GitLab' },
                        { name: 'Jenkins' },
                        { name: 'Linux' },
                        { name: 'Jira' },
                        { name: 'JUnit' },
                        { name: 'JaCoCo' },
                        { name: 'Postman' },
                        { name: 'SonarQube' },
                        { name: 'Selenium' }
                    ]
                },
                {
                    title: 'API',
                    skills: [
                        { name: 'GraphQL' }
                    ]
                },
                {
                    title: 'Web',
                    skills: [
                        { name: 'HTML5' }
                    ]
                }
            ]
        },
        education: {
            title: 'Formation Académique',
            relevantCourses: 'Cours pertinents',
            list: [
                {
                    degree: 'Master en Intelligence Artificielle Appliquée',
                    institution: 'Université Côte d\'Azur, Nice',
                    period: '2025 - à présent',
                    courses: ['Raisonnement automatique', 'Recherche heuristique', 'Python', 'Machine Learning', 'Réseaux de neurones', 'Vision par ordinateur', 'IA réactive', 'Traitement automatique du langage (NLP)']
                },
                {
                    degree: 'Cycle d\'Ingénieur en Informatique et Réseaux',
                    institution: 'École Marocaine des Sciences de l\'Ingénieur, Marrakech',
                    period: '2024 - à présent',
                    courses: ['JEE', 'DevOps', 'PHP', 'Programmation mobile', '.NET', 'Big Data', 'Gestion de projet', 'Sécurité des systèmes d\'information', 'ERP', 'Microservices', 'Oracle SQL Tuning', 'Data Mining', 'Machine Learning & Deep Learning']
                },
                {
                    degree: 'Licence Sciences et Techniques en Systèmes Informatiques Répartis',
                    institution: 'Faculté des sciences et techniques, Marrakech',
                    period: '2023 - 2024',
                    courses: ['Programmation web', 'UML', 'JEE', 'SGBD/SGBDR']
                },
                {
                    degree: 'Diplôme d\'études universitaire scientifiques et Techniques',
                    institution: 'Faculté des sciences et techniques, Marrakech',
                    period: '2021 - 2023',
                    courses: ['Algorithmique', 'Programmation en C']
                }
            ]
        },
        projects: {
            title: 'Projets Académiques',
            readArticle: 'Lire l\'article complet',
            publication: 'Publication',
            keyPoints: 'Points clés',
            list: [
                {
                    title: 'Recyclitix',
                    subtitle: 'Waste Classification with CNN - Mobile Application',
                    badge: 'Article Publié',
                    publication: 'International Journal of Computer Engineering and Data Science, Vol. 4, Issue 3, Sept. 2025',
                    articleUrl: 'https://www.ijceds.com/ijceds/article/view/93',
                    description: 'Application mobile intelligente permettant de scanner un objet et d\'identifier son type de recyclage grâce à la vision par ordinateur et l\'IA. Intègre un backend Spring Boot et un moteur de classification temps réel avec TensorFlow Lite.',
                    technologies: ['Java (Android)', 'Spring Boot', 'Retrofit', 'TensorFlow Lite', 'OpenCV', 'MySQL', 'Git'],
                    highlights: ['Classification en temps réel (92% mAP)', 'Recommandations contextuelles de recyclage', 'Gamification pour encourager l\'utilisateur', 'Compatibilité hors-ligne (edge AI)', 'Chatbot NLP (BERT) avec 91% de précision', 'Carte interactive des points de collecte'],
                    icon: '♻️'
                },
                {
                    title: 'Pulse Vital',
                    subtitle: 'Système de Surveillance des Signes Vitaux avec IA',
                    description: 'Application mobile de e-santé utilisant l\'intelligence artificielle pour surveiller en temps réel les signes vitaux (tension artérielle, rythme cardiaque, glycémie). Le système détecte les anomalies via des réseaux de neurones et alerte automatiquement l\'utilisateur.',
                    technologies: ['Flutter', 'Dart', 'Spring Boot', 'Java', 'Python', 'TensorFlow', 'Keras', 'Matplotlib'],
                    highlights: ['Surveillance continue des signes vitaux en temps réel', 'Détection d\'anomalies par réseau de neurones (64-64-64 architecture)', 'Dashboard personnalisé avec graphiques d\'évolution', 'Notifications intelligentes et rappels thérapeutiques', 'Gestion automatisée des rendez-vous médicaux', 'Authentification sécurisée (Email, Google)', 'Méthodologie Scrum appliquée'],
                    icon: '🏥'
                },
                {
                    title: 'DocQA-MS',
                    subtitle: 'Assistant médical sur documents cliniques (LLM + microservices)',
                    description: 'Assistant intelligent basé sur une architecture microservices et LLM permettant l\'interrogation en langage naturel de documents cliniques, l\'extraction d\'informations et la synthèse comparative. Solution modulaire garantissant la confidentialité (DeID) et la traçabilité.',
                    technologies: ['Python', 'LangChain', 'LlamaIndex', 'GPT-4', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'RabbitMQ'],
                    highlights: ['Architecture Microservices (Ingestion, DeID, Indexation, QA)', 'Ingestion et OCR de documents cliniques (Tika, RabbitMQ)', 'Anonymisation des données patients (Presidio, Spacy)', 'Recherche sémantique vectorielle (FAISS, Embeddings)', 'Question-Réponse (QA) et synthèse comparative', 'Audit complet et traçabilité des requêtes', 'Interface Web Sécurisée (React, Auth0)'],
                    icon: '🤖'
                },
                {
                    title: 'Hotel Reservation Desktop',
                    subtitle: 'Application de Gestion des Réservations d\'Hôtel',
                    description: 'Application desktop pour faciliter la gestion des réservations et des opérations internes d\'un établissement hôtelier. Système complet avec architecture MVC permettant de gérer les clients, chambres et réservations en temps réel.',
                    technologies: ['Java', 'JavaFX', 'MySQL', 'JDBC', 'Hibernate', 'Architecture MVC'],
                    highlights: ['Gestion complète des clients (ajout, modification, recherche)', 'Gestion des chambres et disponibilités en temps réel', 'Système de réservations avec vérification automatique', 'Tableau de bord avec statistiques et taux d\'occupation', 'Authentification et gestion des rôles (réceptionniste, manager)', 'Interface Desktop ergonomique avec JavaFX'],
                    icon: '🏨'
                },
                {
                    title: 'MobiGait',
                    subtitle: 'Analyse et Modélisation Mathématique de la Démarche Humaine',
                    description: 'Application mobile utilisant les capteurs de mouvement des smartphones (accéléromètre, gyroscope) pour détecter des anomalies de la marche liées à des pathologies comme Parkinson ou AVC. Analyse spectrale et modélisation mathématique avancée.',
                    technologies: ['Android Studio', 'Java', 'Spring Boot', 'Transformée de Fourier', 'Ondelettes', 'Séries temporelles'],
                    highlights: ['Détection précoce de troubles moteurs (Parkinson, AVC)', 'Utilisation des capteurs smartphone (accéléromètre, gyroscope)', 'Modélisation mathématique avec transformée de Fourier', 'Décomposition en ondelettes pour analyse fine', 'Analyse spectrale et classification des mouvements', 'Contribution à la médecine préventive'],
                    icon: '🚶'
                },
                {
                    title: 'REST API Performance Benchmark',
                    subtitle: 'Comparaison de Performances entre Stacks REST',
                    description: 'Projet de benchmark évaluant l\'impact des choix technologiques REST sur les performances (latence, débit, ressources). Comparaison de JAX-RS (Jersey), Spring MVC (@RestController) et Spring Data REST sur un même domaine métier avec tests de charge JMeter.',
                    technologies: ['Java 17', 'JAX-RS (Jersey)', 'Spring Boot', 'Spring Data REST', 'PostgreSQL', 'JPA/Hibernate', 'JMeter', 'Prometheus', 'Grafana'],
                    highlights: ['Benchmark de 3 stacks REST (Jersey, Spring MVC, Spring Data REST)', 'Tests de charge avec JMeter (READ-heavy, MIXED, HEAVY-body)', 'Métriques détaillées : latence p50/p95/p99, débit (req/s), erreurs', 'Monitoring JVM : CPU/RAM, GC, threads avec Prometheus + Grafana', 'Analyse N+1 queries et optimisations JOIN FETCH', 'Dataset : 100k items, 2k catégories avec relations PostgreSQL'],
                    icon: '📊'
                }
            ]
        },
        certifications: {
            title: 'Certifications',
            all: 'Toutes',
            grade: 'Note',
            verify: 'Vérifier le certificat',
            list: [
                { platform: 'MLIA', title: 'MLIA Certification', issuer: 'MLIAEdu', score: null, link: 'https://mliaedu.toubkalit.com/verify-certificate/7-6ddbcc4c-a82c-4552-9575-73105cd3276d-941495' },
                { platform: 'Oracle', title: 'Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', score: null, link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4C4924F442ECC9DF8524932B06D9FD7232C8978920647644C71ABCB424E83C96' },
                { platform: 'Coursera', title: 'Prompt engineering pour Chatgpt', issuer: 'Vanderbilt University', score: '100%', link: 'https://www.coursera.org/account/accomplishments/verify/HAPVVWGXIT2M' },
                { platform: 'Coursera', title: 'Introduction au Cloud Computing', issuer: 'IBM', score: '96%', link: 'https://www.coursera.org/account/accomplishments/records/MULQ5JJXP3YU' },
                { platform: 'Coursera', title: 'Analyse exploratoire des données pour l\'apprentissage automatique', issuer: 'IBM', score: '95%', link: 'https://www.coursera.org/account/accomplishments/verify/ORWPV020QJOZ' },
                { platform: 'Coursera', title: 'Développement avancé d\'Angular', issuer: 'LearnQuest', score: '96.60%', link: 'https://www.coursera.org/account/accomplishments/verify/OJKQ4EAMW67T' },
                { platform: 'Coursera', title: 'Microservices et déploiement avancés de Spring Cloud avec Docker', issuer: 'Packt', score: '100%', link: 'https://www.coursera.org/account/accomplishments/verify/GOB1IGXAWPXO' },
                { platform: 'Coursera', title: 'Se lancer dans le développement d\'applications Android', issuer: 'SkillUp', score: '92.85%', link: 'https://www.coursera.org/account/accomplishments/verify/CRTUI17IORVL' },
                { platform: 'Coursera', title: 'Introduction à l\'ingénierie des données', issuer: 'IBM', score: '93.20%', link: 'https://www.coursera.org/account/accomplishments/verify/297IMISX8VR4' },
                { platform: 'Coursera', title: 'Introduction à l\'apprentissage automatique', issuer: 'Duke University', score: '88.37%', link: 'https://www.coursera.org/account/accomplishments/verify/D9FJM8VB6OEY' },
                { platform: 'Coursera', title: 'Cybersécurité : DevSecOps', issuer: 'Macquarie University', score: '98.56%', link: 'https://www.coursera.org/account/accomplishments/verify/P43C90NJQD43' },
                { platform: 'Coursera', title: 'Réseaux virtuels dans Azure', issuer: 'Whizlabs', score: '87.50%', link: 'https://www.coursera.org/account/accomplishments/verify/USYSEVHCF7JK' },
                { platform: 'Coursera', title: 'Introduction au génie logiciel', issuer: 'IBM', score: '98.60%', link: 'https://www.coursera.org/account/accomplishments/records/JB7A3NBYDLCP' },
                { platform: 'Coursera', title: 'Introduction à Java et à la programmation orientée objet', issuer: 'University of Pennsylvania', score: '98.07%', link: 'https://www.coursera.org/account/accomplishments/records/R54ZT3QKDU3X' },
                { platform: 'Coursera', title: 'React Native', issuer: 'Meta', score: '95.31%', link: 'https://www.coursera.org/account/accomplishments/records/Z72DIQ0BYFMP' },
                { platform: 'Coursera', title: 'Introduction à Git et GitHub', issuer: 'Google', score: '97.50%', link: 'https://www.coursera.org/account/accomplishments/verify/4S2A90L03WWJ' },
                { platform: 'Coursera', title: 'Introduction au développement d\'applications mobiles', issuer: 'IBM', score: '95.14%', link: 'https://www.coursera.org/account/accomplishments/verify/H3T225I35PKT' },
                { platform: 'Coursera', title: 'Génie logiciel : modélisation des systèmes logiciels avec UML', issuer: 'The Hong Kong University of Science and Technology', score: '100%', link: 'https://www.coursera.org/account/accomplishments/records/FA9REGYPRH80' },
                { platform: 'Coursera', title: 'Les bases de React', issuer: 'Meta', score: '97.50%', link: 'https://www.coursera.org/account/accomplishments/records/7IV896EJ23R0' },
                { platform: 'Coursera', title: 'Introduction aux conteneurs avec Docker, Kubernetes et OpenShift', issuer: 'IBM', score: '94%', link: 'https://www.coursera.org/account/accomplishments/records/RGKQJJEHSHWW' },
                { platform: 'Coursera', title: 'Introduction au Développement Agile et à Scrum', issuer: 'IBM', score: '100%', link: 'https://www.coursera.org/account/accomplishments/records/H0MZ9FXPJ5FN' },
                { platform: 'Coursera', title: 'Premiers pas avec Git et GitHub', issuer: 'IBM', score: '97.50%', link: 'https://www.coursera.org/account/accomplishments/records/99CCN39IH40A' }
            ]
        },
        interests: {
            title: 'Centres d\'Intérêt',
            list: [
                {
                    icon: '🥋',
                    title: 'Arts Martiaux',
                    items: ['Ceinture noire 2ème DAN', 'Karate / Karate Contact / Ju-Jitsu', 'Champion du Maroc', 'Président du club Sport Agdal']
                }
            ]
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
            locationValue: 'Marrakesh, Morocco',
            languages: 'Languages',
            languagesValue: 'Arabic, French, English'
        },
        experience: {
            title: 'Professional Experience',
            list: [
                {
                    title: 'Full-Stack Web Developer Intern',
                    company: 'Norsys Africa',
                    location: 'Marrakech',
                    period: 'July 2025 - September 2025',
                    project: 'Management system for a car rental agency',
                    tasks: [
                        'Full-stack development of modules (Vehicles, Clients, Contracts, Rentals)',
                        "Implementation of i18n, UX/UI improvement and creation of an interactive dashboard",
                        'Automation of contracts and reservations'
                    ],
                    technologies: ['Angular 19', 'Spring Boot', 'Java', 'TypeScript', 'REST API', 'Keycloak', 'Git', 'PostgreSQL', 'PrimeNG', 'Agile Method']
                },
                {
                    title: 'Full-Stack Web Developer Intern',
                    company: 'Bestep',
                    location: 'Marrakech',
                    period: 'April 2024 - June 2024',
                    project: 'Inventory management system',
                    tasks: [
                        'Development of management modules (articles, contacts, purchases, sales)',
                        'Creation of a dynamic dashboard with statistics',
                        'Implementation of secure authentication and PDF export (quotes, invoices, orders)'
                    ],
                    technologies: ['PHP', 'ReactJs', 'NodeJs', 'MySQL', 'Git', 'Agile Method']
                }
            ]
        },
        skills: {
            title: 'Technologies',
            subtitle: 'A comprehensive toolkit for building modern, scalable solutions',
            list: [
                {
                    title: 'Languages',
                    skills: [
                        { name: 'Java' },
                        { name: 'JavaScript' },
                        { name: 'TypeScript' },
                        { name: 'Python' },
                        { name: 'PHP' },
                        { name: 'C#' },
                        { name: 'Dart' },
                        { name: 'Kotlin' }
                    ]
                },
                {
                    title: 'Frameworks & Libraries',
                    skills: [
                        { name: 'Spring Boot' },
                        { name: 'Angular' },
                        { name: 'React' },
                        { name: 'Vue.js' },
                        { name: 'Next.js' },
                        { name: 'ASP.NET' },
                        { name: 'Flutter' },
                        { name: 'TensorFlow' },
                        { name: 'Laravel' },
                        { name: 'Symfony' },
                        { name: 'Tailwind' },
                        { name: 'Node.js' }
                    ]
                },
                {
                    title: 'Data & Cloud',
                    skills: [
                        { name: 'MySQL' },
                        { name: 'PostgreSQL' },
                        { name: 'Oracle' },
                        { name: 'MongoDB' },
                        { name: 'Redis' },
                        { name: 'Docker' },
                        { name: 'Kubernetes' },
                        { name: 'AWS' },
                        { name: 'Nginx' }
                    ]
                },
                {
                    title: 'Tools & DevOps',
                    skills: [
                        { name: 'Git' },
                        { name: 'GitHub' },
                        { name: 'GitLab' },
                        { name: 'Jenkins' },
                        { name: 'Linux' },
                        { name: 'Jira' },
                        { name: 'JUnit' },
                        { name: 'JaCoCo' },
                        { name: 'Postman' },
                        { name: 'SonarQube' },
                        { name: 'Selenium' }
                    ]
                },
                {
                    title: 'API',
                    skills: [
                        { name: 'GraphQL' }
                    ]
                },
                {
                    title: 'Web',
                    skills: [
                        { name: 'HTML5' }
                    ]
                }
            ]
        },
        education: {
            title: 'Academic Background',
            relevantCourses: 'Relevant courses',
            list: [
                {
                    degree: 'Master in Applied Artificial Intelligence',
                    institution: 'Université Côte d\'Azur, Nice',
                    period: '2025 - Present',
                    courses: ['Automated Reasoning', 'Heuristic Search', 'Python', 'Machine Learning', 'Neural Networks', 'Computer Vision', 'Reactive AI', 'Natural Language Processing (NLP)']
                },
                {
                    degree: 'Engineering Cycle in Computer Science and Networks',
                    institution: 'Moroccan School of Engineering Sciences, Marrakech',
                    period: '2024 - Present',
                    courses: ['JEE', 'DevOps', 'PHP', 'Mobile Programming', '.NET', 'Big Data', 'Project Management', 'Information Systems Security', 'ERP', 'Microservices', 'Oracle SQL Tuning', 'Data Mining', 'Machine Learning & Deep Learning']
                },
                {
                    degree: 'Bachelor of Science and Technology in Distributed Computer Systems',
                    institution: 'Faculty of Sciences and Techniques, Marrakech',
                    period: '2023 - 2024',
                    courses: ['Web Programming', 'UML', 'JEE', 'DBMS/RDBMS']
                },
                {
                    degree: 'University Diploma in Scientific and Technical Studies',
                    institution: 'Faculty of Sciences and Techniques, Marrakech',
                    period: '2021 - 2023',
                    courses: ['Algorithmics', 'C Programming']
                }
            ]
        },
        projects: {
            title: 'Academic Projects',
            readArticle: 'Read full article',
            publication: 'Publication',
            keyPoints: 'Key points',
            list: [
                {
                    title: 'Recyclitix',
                    subtitle: 'Waste Classification with CNN - Mobile Application',
                    badge: 'Published Article',
                    publication: 'International Journal of Computer Engineering and Data Science, Vol. 4, Issue 3, Sept. 2025',
                    articleUrl: 'https://www.ijceds.com/ijceds/article/view/93',
                    description: 'Smart mobile application allowing users to scan an object and identify its recycling type using computer vision and AI. Integrates a Spring Boot backend and real-time classification engine with TensorFlow Lite.',
                    technologies: ['Java (Android)', 'Spring Boot', 'Retrofit', 'TensorFlow Lite', 'OpenCV', 'MySQL', 'Git'],
                    highlights: ['Real-time classification (92% mAP)', 'Contextual recycling recommendations', 'Gamification to encourage users', 'Offline compatibility (edge AI)', 'NLP Chatbot (BERT) with 91% accuracy', 'Interactive map of collection points'],
                    icon: '♻️'
                },
                {
                    title: 'Pulse Vital',
                    subtitle: 'Vital Signs Monitoring System with AI',
                    description: 'E-health mobile application using artificial intelligence to monitor vital signs in real-time (blood pressure, heart rate, blood glucose). The system detects anomalies via neural networks and automatically alerts the user.',
                    technologies: ['Flutter', 'Dart', 'Spring Boot', 'Java', 'Python', 'TensorFlow', 'Keras', 'Matplotlib'],
                    highlights: ['Continuous real-time monitoring of vital signs', 'Anomaly detection by neural networks (64-64-64 architecture)', 'Personalized dashboard with evolution charts', 'Smart notifications and therapeutic reminders', 'Automated medical appointment management', 'Secure authentication (Email, Google)', 'Scrum methodology applied'],
                    icon: '🏥'
                },
                {
                    title: 'DocQA-MS',
                    subtitle: 'Medical Assistant on Clinical Documents (LLM + Microservices)',
                    description: 'Intelligent assistant based on microservices and LLM technologies allowing natural language querying of clinical documents, information extraction, and comparative synthesis. Modular solution ensuring privacy (DeID) and traceability.',
                    technologies: ['Python', 'LangChain', 'LlamaIndex', 'GPT-4', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'RabbitMQ'],
                    highlights: ['Microservices Architecture (Ingestion, DeID, Indexation, QA)', 'Ingestion and OCR of clinical documents (Tika, RabbitMQ)', 'Patient data anonymization (Presidio, Spacy)', 'Vector semantic search (FAISS, Embeddings)', 'Question-Answer (QA) and comparative synthesis', 'Complete audit and request traceability', 'Secure Web Interface (React, Auth0)'],
                    icon: '🤖'
                },
                {
                    title: 'Hotel Reservation Desktop',
                    subtitle: 'Hotel Reservation Management Application',
                    description: 'Desktop application to facilitate reservation management and internal operations of a hotel establishment. Complete system with MVC architecture allowing management of clients, rooms, and reservations in real-time.',
                    technologies: ['Java', 'JavaFX', 'MySQL', 'JDBC', 'Hibernate', 'MVC Architecture'],
                    highlights: ['Complete client management (add, edit, search)', 'Real-time room and availability management', 'Reservation system with automatic verification', 'Dashboard with statistics and occupancy rates', 'Authentication and role management (receptionist, manager)', 'Ergonomic Desktop Interface with JavaFX'],
                    icon: '🏨'
                },
                {
                    title: 'MobiGait',
                    subtitle: 'Analysis and Mathematical Modeling of Human Gait',
                    description: 'Mobile application using smartphone motion sensors (accelerometer, gyroscope) to detect gait anomalies linked to pathologies like Parkinson\'s or Stroke. Spectral analysis and advanced mathematical modeling.',
                    technologies: ['Android Studio', 'Java', 'Spring Boot', 'Fourier Transform', 'Wavelets', 'Time Series'],
                    highlights: ['Early detection of motor disorders (Parkinson, Stroke)', 'Use of smartphone sensors (accelerometer, gyroscope)', 'Mathematical modeling with Fourier Transform', 'Wavelet decomposition for fine analysis', 'Spectral analysis and movement classification', 'Contribution to preventive medicine'],
                    icon: '🚶'
                },
                {
                    title: 'REST API Performance Benchmark',
                    subtitle: 'Performance Comparison between REST Stacks',
                    description: 'Benchmark project evaluating the impact of REST technological choices on performance (latency, throughput, resources). Comparison of JAX-RS (Jersey), Spring MVC (@RestController), and Spring Data REST on the same domain with JMeter load tests.',
                    technologies: ['Java 17', 'JAX-RS (Jersey)', 'Spring Boot', 'Spring Data REST', 'PostgreSQL', 'JPA/Hibernate', 'JMeter', 'Prometheus', 'Grafana'],
                    highlights: ['Benchmark of 3 REST stacks (Jersey, Spring MVC, Spring Data REST)', 'Load tests with JMeter (READ-heavy, MIXED, HEAVY-body)', 'Detailed metrics: latency p50/p95/p99, throughput (req/s), errors', 'JVM Monitoring: CPU/RAM, GC, threads with Prometheus + Grafana', 'N+1 queries analysis and JOIN FETCH optimizations', 'Dataset: 100k items, 2k categories with PostgreSQL relations'],
                    icon: '📊'
                }
            ]
        },
        certifications: {
            title: 'Certifications',
            all: 'All',
            grade: 'Grade',
            verify: 'Verify Certificate',
            list: [
                { platform: 'MLIA', title: 'MLIA Certification', issuer: 'MLIAEdu', score: null, link: 'https://mliaedu.toubkalit.com/verify-certificate/7-6ddbcc4c-a82c-4552-9575-73105cd3276d-941495' },
                { platform: 'Oracle', title: 'Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', score: null, link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4C4924F442ECC9DF8524932B06D9FD7232C8978920647644C71ABCB424E83C96' },
                { platform: 'Coursera', title: 'Prompt engineering for ChatGPT', issuer: 'Vanderbilt University', score: '100%', link: 'https://www.coursera.org/account/accomplishments/verify/HAPVVWGXIT2M' },
                { platform: 'Coursera', title: 'Introduction to Cloud Computing', issuer: 'IBM', score: '96%', link: 'https://www.coursera.org/account/accomplishments/records/MULQ5JJXP3YU' },
                { platform: 'Coursera', title: 'Exploratory Data Analysis for Machine Learning', issuer: 'IBM', score: '95%', link: 'https://www.coursera.org/account/accomplishments/verify/ORWPV020QJOZ' },
                { platform: 'Coursera', title: 'Advanced Angular Development', issuer: 'LearnQuest', score: '96.60%', link: 'https://www.coursera.org/account/accomplishments/verify/OJKQ4EAMW67T' },
                { platform: 'Coursera', title: 'Advanced Spring Cloud Microservices & Deployment with Docker', issuer: 'Packt', score: '100%', link: 'https://www.coursera.org/account/accomplishments/verify/GOB1IGXAWPXO' },
                { platform: 'Coursera', title: 'Getting Started with Android App Development', issuer: 'SkillUp', score: '92.85%', link: 'https://www.coursera.org/account/accomplishments/verify/CRTUI17IORVL' },
                { platform: 'Coursera', title: 'Introduction to Data Engineering', issuer: 'IBM', score: '93.20%', link: 'https://www.coursera.org/account/accomplishments/verify/297IMISX8VR4' },
                { platform: 'Coursera', title: 'Introduction to Machine Learning', issuer: 'Duke University', score: '88.37%', link: 'https://www.coursera.org/account/accomplishments/verify/D9FJM8VB6OEY' },
                { platform: 'Coursera', title: 'Cyber Security: DevSecOps', issuer: 'Macquarie University', score: '98.56%', link: 'https://www.coursera.org/account/accomplishments/verify/P43C90NJQD43' },
                { platform: 'Coursera', title: 'Virtual Networks in Azure', issuer: 'Whizlabs', score: '87.50%', link: 'https://www.coursera.org/account/accomplishments/verify/USYSEVHCF7JK' },
                { platform: 'Coursera', title: 'Introduction to Software Engineering', issuer: 'IBM', score: '98.60%', link: 'https://www.coursera.org/account/accomplishments/records/JB7A3NBYDLCP' },
                { platform: 'Coursera', title: 'Introduction to Java and Object-Oriented Programming', issuer: 'University of Pennsylvania', score: '98.07%', link: 'https://www.coursera.org/account/accomplishments/records/R54ZT3QKDU3X' },
                { platform: 'Coursera', title: 'React Native', issuer: 'Meta', score: '95.31%', link: 'https://www.coursera.org/account/accomplishments/records/Z72DIQ0BYFMP' },
                { platform: 'Coursera', title: 'Introduction to Git and GitHub', issuer: 'Google', score: '97.50%', link: 'https://www.coursera.org/account/accomplishments/verify/4S2A90L03WWJ' },
                { platform: 'Coursera', title: 'Introduction to Mobile App Development', issuer: 'IBM', score: '95.14%', link: 'https://www.coursera.org/account/accomplishments/verify/H3T225I35PKT' },
                { platform: 'Coursera', title: 'Software Engineering: Modeling Software Systems using UML', issuer: 'The Hong Kong University of Science and Technology', score: '100%', link: 'https://www.coursera.org/account/accomplishments/records/FA9REGYPRH80' },
                { platform: 'Coursera', title: 'React Basics', issuer: 'Meta', score: '97.50%', link: 'https://www.coursera.org/account/accomplishments/records/7IV896EJ23R0' },
                { platform: 'Coursera', title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift', issuer: 'IBM', score: '94%', link: 'https://www.coursera.org/account/accomplishments/records/RGKQJJEHSHWW' },
                { platform: 'Coursera', title: 'Introduction to Agile Development and Scrum', issuer: 'IBM', score: '100%', link: 'https://www.coursera.org/account/accomplishments/records/H0MZ9FXPJ5FN' },
                { platform: 'Coursera', title: 'Getting Started with Git and GitHub', issuer: 'IBM', score: '97.50%', link: 'https://www.coursera.org/account/accomplishments/records/99CCN39IH40A' }
            ]
        },
        interests: {
            title: 'Interests',
            list: [
                {
                    icon: '🥋',
                    title: 'Martial Arts',
                    items: ['Black Belt 2nd DAN', 'Karate / Karate Contact / Ju-Jitsu', 'Champion of Morocco', 'President of Sport Agdal Club']
                }
            ]
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
    const [language, setLanguage] = useState('en');

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
