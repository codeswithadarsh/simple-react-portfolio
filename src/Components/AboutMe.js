import React from "react";

const AboutMe = () => {


    return(
        <div className="aboutMe">
             <h1>About Me</h1>

             <div className="imgg">
             {<img src="https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360355_1280.jpg" alt="A girl pic" className="imgmy" /> }

             </div>

             <p>Hello everyone! I am thrilled to introduce myself as someone with a passion for software and a track record of success in the industry. With five years of experience working at prestigious companies like Amazon and Microsoft, as well as contributing to exciting startups like Think42 and Openhouse, I have honed my skills and gained invaluable knowledge along the way.
            Beyond my professional endeavors, I have also dedicated a significant portion of my career to teaching and mentoring aspiring software professionals. Over the past three years, I have had the privilege of instructing thousands of students across various institutions throughout India. It has been immensely rewarding to witness their growth and see them flourish in their own journeys.
            Currently, I am embarking on a new adventure by creating my own startup. This venture allows me to combine my technical expertise, entrepreneurial spirit, and desire to make a meaningful impact on the world of software. I am excited to tackle the challenges and opportunities that lie ahead, and I am eager to connect with like-minded individuals who share my passion for innovation and
            Thank you for this opportunity to introduce myself, and I look forward to engaging with all of you in the exciting world of software development and
            </p>
        </div>
    )
}

export default AboutMe;