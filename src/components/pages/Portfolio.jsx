import '../styles/Portfolio.css';
import mvcTechBlogImage from '../../assets/images/MVC-tech-blog.jpg';
import codingQuiz from '../../assets/images/coding-quiz.jpg';
import weatherForecast from '../../assets/images/weather-forecast.jpg';
import workDayScheduler from '../../assets/images/work-day-scheduler.jpg';
import petAdoption from '../../assets/images/pet-adoption.jpg';
import passwordGenerator from '../../assets/images/password-generator.jpg';

function Portfolio() {
    // Sample data for six projects
    const projects = [
        {
            title: "MVC Tech Blog",
            image: mvcTechBlogImage,
            deployedUrl: "https://tech-blog-ds-mod16-a30adabc1804.herokuapp.com/",
            repoUrl: "https://github.com/Devarasen/MVC-Tech-Blog-M14-DS"
        },
        {
            title: "Coding Quiz",
            image: codingQuiz,
            deployedUrl: "https://devarasen.github.io/Coding-Quiz_module4_DS/",
            repoUrl: "https://github.com/Devarasen/Coding-Quiz_module4_DS"
        },          
        {
            title: "Weather Forecast",
            image: weatherForecast,
            deployedUrl: "https://devarasen.github.io/5-Day-Weather-Forecast--ds-module6challenge/",
            repoUrl: "https://github.com/Devarasen/5-Day-Weather-Forecast--ds-module6challenge"
        },   
        {
            title: "Work Day Scheduler",
            image: workDayScheduler,
            deployedUrl: "https://devarasen.github.io/Work-Day-Scheduler-Module5_DS/",
            repoUrl: "https://github.com/Devarasen/Work-Day-Scheduler-Module5_DS"
        },   
        {
            title: "My Fluffy Friend",
            image: petAdoption,
            deployedUrl: "https://pet-adoption-984bb069e00d.herokuapp.com/",
            repoUrl: "https://github.com/Devarasen/Pet-Adoption-Project-2.git"
        },   
        {
            title: "Password Generator",
            image: passwordGenerator,
            deployedUrl: "https://devarasen.github.io/Password_Generator_module3-challenge-dev/",
            repoUrl: "https://github.com/Devarasen/Password_Generator_module3-challenge-dev"
        }, 
    ];
    

    return (
        <div className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <div className="project-links">
                            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;