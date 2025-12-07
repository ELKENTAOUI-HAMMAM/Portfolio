import './Projects.css';

export default function Projects() {
    const projects = [
        {
            title: 'Recyclitix',
            subtitle: 'Waste Classification with CNN - Mobile Application',
            badge: 'Article Publié',
            publication: 'International Journal of Computer Engineering and Data Science, Vol. 4, Issue 3, Sept. 2025',
            articleUrl: 'https://www.ijceds.com/ijceds/article/view/93',
            description: 'Application mobile intelligente permettant de scanner un objet et d\'identifier son type de recyclage grâce à la vision par ordinateur et l\'IA. Intègre un backend Spring Boot et un moteur de classification temps réel avec TensorFlow Lite.',
            technologies: ['Java (Android)', 'Spring Boot', 'Retrofit', 'TensorFlow Lite', 'OpenCV', 'MySQL', 'Git'],
            highlights: [
                'Classification en temps réel (92% mAP)',
                'Recommandations contextuelles de recyclage',
                'Gamification pour encourager l\'utilisateur',
                'Compatibilité hors-ligne (edge AI)',
                'Chatbot NLP (BERT) avec 91% de précision',
                'Carte interactive des points de collecte'
            ],
            icon: '♻️'
        },
        {
            title: 'Pulse Vital',
            subtitle: 'Système de Surveillance des Signes Vitaux avec IA',
            description: 'Application mobile de e-santé utilisant l\'intelligence artificielle pour surveiller en temps réel les signes vitaux (tension artérielle, rythme cardiaque, glycémie). Le système détecte les anomalies via des réseaux de neurones et alerte automatiquement l\'utilisateur.',
            technologies: ['Flutter', 'Dart', 'Spring Boot', 'Java', 'Python', 'TensorFlow', 'Keras', 'Matplotlib'],
            highlights: [
                'Surveillance continue des signes vitaux en temps réel',
                'Détection d\'anomalies par réseau de neurones (64-64-64 architecture)',
                'Dashboard personnalisé avec graphiques d\'évolution',
                'Notifications intelligentes et rappels thérapeutiques',
                'Gestion automatisée des rendez-vous médicaux',
                'Authentification sécurisée (Email, Google)',
                'Méthodologie Scrum appliquée'
            ],
            icon: '🏥'
        },
        {
            title: 'DocQA-MS',
            subtitle: 'Assistant médical sur documents cliniques (LLM + microservices)',
            description: 'Assistant intelligent basé sur une architecture microservices et LLM permettant l\'interrogation en langage naturel de documents cliniques, l\'extraction d\'informations et la synthèse comparative. Solution modulaire garantissant la confidentialité (DeID) et la traçabilité.',
            technologies: ['Python', 'LangChain', 'LlamaIndex', 'GPT-4', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'RabbitMQ'],
            highlights: [
                'Architecture Microservices (Ingestion, DeID, Indexation, QA)',
                'Ingestion et OCR de documents cliniques (Tika, RabbitMQ)',
                'Anonymisation des données patients (Presidio, Spacy)',
                'Recherche sémantique vectorielle (FAISS, Embeddings)',
                'Question-Réponse (QA) et synthèse comparative',
                'Audit complet et traçabilité des requêtes',
                'Interface Web Sécurisée (React, Auth0)'
            ],
            icon: '🤖'
        },
        {
            title: 'Hotel Reservation Desktop',
            subtitle: 'Application de Gestion des Réservations d\'Hôtel',
            description: 'Application desktop pour faciliter la gestion des réservations et des opérations internes d\'un établissement hôtelier. Système complet avec architecture MVC permettant de gérer les clients, chambres et réservations en temps réel.',
            technologies: ['Java', 'JavaFX', 'MySQL', 'JDBC', 'Hibernate', 'Architecture MVC'],
            highlights: [
                'Gestion complète des clients (ajout, modification, recherche)',
                'Gestion des chambres et disponibilités en temps réel',
                'Système de réservations avec vérification automatique',
                'Tableau de bord avec statistiques et taux d\'occupation',
                'Authentification et gestion des rôles (réceptionniste, manager)',
                'Interface Desktop ergonomique avec JavaFX'
            ],
            icon: '🏨'
        },
        {
            title: 'MobiGait',
            subtitle: 'Analyse et Modélisation Mathématique de la Démarche Humaine',
            description: 'Application mobile utilisant les capteurs de mouvement des smartphones (accéléromètre, gyroscope) pour détecter des anomalies de la marche liées à des pathologies comme Parkinson ou AVC. Analyse spectrale et modélisation mathématique avancée.',
            technologies: ['Android Studio', 'Java', 'Spring Boot', 'Transformée de Fourier', 'Ondelettes', 'Séries temporelles'],
            highlights: [
                'Détection précoce de troubles moteurs (Parkinson, AVC)',
                'Utilisation des capteurs smartphone (accéléromètre, gyroscope)',
                'Modélisation mathématique avec transformée de Fourier',
                'Décomposition en ondelettes pour analyse fine',
                'Analyse spectrale et classification des mouvements',
                'Contribution à la médecine préventive'
            ],
            icon: '🚶'
        },
        {
            title: 'REST API Performance Benchmark',
            subtitle: 'Comparaison de Performances entre Stacks REST',
            description: 'Projet de benchmark évaluant l\'impact des choix technologiques REST sur les performances (latence, débit, ressources). Comparaison de JAX-RS (Jersey), Spring MVC (@RestController) et Spring Data REST sur un même domaine métier avec tests de charge JMeter.',
            technologies: ['Java 17', 'JAX-RS (Jersey)', 'Spring Boot', 'Spring Data REST', 'PostgreSQL', 'JPA/Hibernate', 'JMeter', 'Prometheus', 'Grafana'],
            highlights: [
                'Benchmark de 3 stacks REST (Jersey, Spring MVC, Spring Data REST)',
                'Tests de charge avec JMeter (READ-heavy, MIXED, HEAVY-body)',
                'Métriques détaillées : latence p50/p95/p99, débit (req/s), erreurs',
                'Monitoring JVM : CPU/RAM, GC, threads avec Prometheus + Grafana',
                'Analyse N+1 queries et optimisations JOIN FETCH',
                'Dataset : 100k items, 2k catégories avec relations PostgreSQL'
            ],
            icon: '📊'
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Projets Académiques</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <span>{project.icon}</span>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-subtitle">{project.subtitle}</p>
                                {project.badge && (
                                    <span className="project-badge">{project.badge}</span>
                                )}
                                {project.publication && (
                                    <p className="project-publication">
                                        <strong>📄 Publication:</strong> {project.publication}
                                        {project.articleUrl && (
                                            <>
                                                <br />
                                                <a
                                                    href={project.articleUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="article-link"
                                                >
                                                    🔗 Lire l'article complet
                                                </a>
                                            </>
                                        )}
                                    </p>
                                )}
                                <p className="project-description">{project.description}</p>
                                <div>
                                    <strong style={{ color: 'var(--text-accent)', display: 'block', marginBottom: '0.5rem' }}>
                                        Points clés:
                                    </strong>
                                    <ul className="project-highlights">
                                        {project.highlights.map((highlight, i) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="tech-stack">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
