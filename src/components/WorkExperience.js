import React, { useState } from 'react';

const workExperienceData = [
    {
        title: 'Senior Web Specialist',
        company: 'Point Blank Creative',
        date: 'March 2023 - Present',
        points: [
            'Lead the development and deployment of web applications, ensuring high-quality and scalable architecture.',
            'Acts as the primary technical liaison for external development teams, vendors, and contracted agencies.',
            'Translates business strategies into functional and technical requirements that contractors can effectively implement.',
            'Writes and maintains technical documentation.',
            'Continuously research best practices and implementing solutions to optimize web performance, security, and scalability.'
        ],
    },
    {
        title: 'Web Developer',
        company: 'Point Blank Creative',
        date: 'January 2022 - promoted in role',
        points: [
            'Built pixel-perfect, responsive, accessible, front-end web products using HTML+CSS, JS, CMS environments (WordPress), and Ruby on Rails.',
            'Worked with a broad range of platforms (Google Analytics), CMSs (WordPress & NationBuilder), and feature integrations (Zapier, Action Network, NewMode).',
            'Effectively estimated scopes, timelines, and deliverables.',
            'Researched broader feature sets and best practices, and embedded them into the agency’s workflow.',
        ],
    },
];

export const WorkExperience = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="work-experience-section" id='experience'>
            <h1>Experience</h1>
            <div className="cards-wrapper">
                {workExperienceData.map((job, index) => (
                <div
                    key={index}
                    className={`card ${index === activeIndex ? 'active' : 'inactive'}`}
                    onClick={() => setActiveIndex(index)}
                >
                    <h2>{job.title}</h2>
                    <h3>{job.company}</h3>
                    <div className="date">{job.date}</div>
                    <ul>
                        {job.points.map((point, i) => (
                        <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>

        <div className="dots">
        {workExperienceData.map((_, index) => (
            <div
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
            ></div>
        ))}
        </div>
    </section>
    );
};



