import '../styles/AboutMe.css';
import profilePic from '../../assets/images/profile-pic.jpg';

function AboutMe() {
    return (
        <div className="about-me-section">
            <div className="profile-picture-wrapper">
                <img src={profilePic} alt="Profile Picture" className="profile-picture" />
            </div>
            <p>
                Coming from a solid background in financial services, I've always been intrigued by how numbers intersect with tech. This led me down the rabbit hole of web development, pushing me to dive headfirst into a coding course.
            </p>
            <p>
                Now, equipped with coding skills, I'm on a mission to bridge the gap between finance and technology. Building and optimizing, one line of code at a time. I'd love for you to take a look at my portfolio to see the projects that I've been pouring my energy into.
            </p>
            {/* <p>
                This immersive journey equipped me with proficiency in both front-end and back-end development. Throughout the course, I have honed skills in HTML, CSS, Git, JavaScript, APIs, Object-Oriented Programming, SQL, ORM, MVC, Node.js, Express.js, MongoDB, PWA, React, MERN and State. 
            </p> */}
        </div>
    )
}

export default AboutMe;