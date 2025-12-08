import { useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import './Skills.css';

const iconMapping = {
    'Java': { icon: FaIcons.FaJava, color: '#007396' },
    'JavaScript': { icon: FaIcons.FaJs, color: '#F7DF1E' },
    'TypeScript': { icon: SiIcons.SiTypescript, color: '#3178C6' },
    'Python': { icon: FaIcons.FaPython, color: '#3776AB' },
    'PHP': { icon: FaIcons.FaPhp, color: '#777BB4' },
    'C#': { icon: FaIcons.FaCode, color: '#239120' },
    'Dart': { icon: SiIcons.SiDart, color: '#0175C2' },
    'Kotlin': { icon: SiIcons.SiKotlin, color: '#7F52FF' },

    'Spring Boot': { icon: SiIcons.SiSpringboot, color: '#6DB33F' },
    'Angular': { icon: SiIcons.SiAngular, color: '#DD0031' },
    'React': { icon: FaIcons.FaReact, color: '#61DAFB' },
    'Vue.js': { icon: SiIcons.SiVuedotjs, color: '#4FC08D' },
    'Next.js': { icon: SiIcons.SiNextdotjs, color: '#ffffffff' },
    'ASP.NET': { icon: SiIcons.SiDotnet, color: '#512BD4' },
    'Flutter': { icon: SiIcons.SiFlutter, color: '#02569B' },
    'TensorFlow': { icon: SiIcons.SiTensorflow, color: '#FF6F00' },
    'Laravel': { icon: SiIcons.SiLaravel, color: '#FF2D20' },
    'Symfony': { icon: SiIcons.SiSymfony, color: '#ffffffff' },
    'Tailwind': { icon: SiIcons.SiTailwindcss, color: '#06B6D4' },
    'Node.js': { icon: FaIcons.FaNodeJs, color: '#339933' },

    'MySQL': { icon: SiIcons.SiMysql, color: '#4479A1' },
    'PostgreSQL': { icon: SiIcons.SiPostgresql, color: '#4169E1' },
    'Oracle': { icon: SiIcons.SiOracle, color: '#F80000' },
    'MongoDB': { icon: SiIcons.SiMongodb, color: '#47A248' },
    'Redis': { icon: SiIcons.SiRedis, color: '#DC382D' },
    'Docker': { icon: FaIcons.FaDocker, color: '#2496ED' },
    'Kubernetes': { icon: SiIcons.SiKubernetes, color: '#326CE5' },
    'AWS': { icon: FaIcons.FaAws, color: '#FF9900' },
    'Nginx': { icon: SiIcons.SiNginx, color: '#009639' },

    'Git': { icon: FaIcons.FaGitAlt, color: '#F05032' },
    'GitHub': { icon: FaIcons.FaGithub, color: '#fcfcfcff' },
    'GitLab': { icon: FaIcons.FaGitlab, color: '#FC6D26' },
    'Jenkins': { icon: FaIcons.FaJenkins, color: '#D24939' },
    'Linux': { icon: FaIcons.FaLinux, color: '#FCC624' },
    'Jira': { icon: FaIcons.FaJira, color: '#0052CC' },
    'JUnit': { icon: SiIcons.SiJunit5, color: '#25A162' },
    'JaCoCo': { icon: SiIcons.SiApache, color: '#D22128' },
    'Postman': { icon: SiIcons.SiPostman, color: '#FF6C37' },
    'SonarQube': { icon: SiIcons.SiSonarqube, color: '#4E9BCD' },
    'Selenium': { icon: SiIcons.SiSelenium, color: '#FF6C37' },
    'GraphQL': { icon: SiIcons.SiGraphql, color: '#E10098' },
    'HTML5': { icon: FaIcons.FaHtml5, color: '#E34F26' }
};

export default function Skills() {
    const { t } = useTranslation();
    const skillsRef = useRef(null);
    let skillCategories = t('skills.list');

    if (!Array.isArray(skillCategories)) {
        console.error('Skills list is not an array:', skillCategories);
        skillCategories = [];
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getIcon = (name) => {
        const skill = iconMapping[name];
        if (!skill) return null;
        const IconComponent = skill.icon;

        if (!IconComponent) {
            // Safety fallback for missing icons
            return null;
        }

        return <IconComponent style={{ color: skill.color }} />;
    };

    return (
        <section id="skills" ref={skillsRef}>
            <div className="container">
                <div className="section-title">{t('skills.title')}</div>
                <p className="section-subtitle">{t('skills.subtitle')}</p>

                <div className="skills-grid-wrapper">
                    <div className="tech-grid">
                        {skillCategories.flatMap(category =>
                            category.skills.map((skill, i) => (
                                <div key={`${category.title}-${i}`} className="tech-item">
                                    <div className="tech-icon">
                                        {getIcon(skill.name)}
                                    </div>
                                    <span className="tech-name">{skill.name}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
