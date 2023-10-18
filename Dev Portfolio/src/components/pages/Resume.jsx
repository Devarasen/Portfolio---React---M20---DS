import '../styles/Resume.css';
import resume from '../../assets/resume-doc/resume.pdf';

function Resume () {
    return (
        <div className='resume-section'>
            <p>Download Resume below:</p>
            <a href={resume} download>
                <button>Resume</button>
            </a>
            <br />
            <p>Development Skills include topics such as:</p>
            <ul>
                <li>HTML</li>
                <li>Advanced CSS</li>
                <li>Git</li>
                <li>Javascript</li>
                <li>Object-Oriented Programming (OOP)</li>
                <li>SQL</li>
                <li>Object-Relational Mapping (ORM)</li>
                <li>Model-View-Controller (MVC)</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Progressive Web Applications (PWA)</li>
                <li>React</li>
                <li>MERN</li>
                <li>State</li>
            </ul>
        </div>
    )
}

export default Resume;