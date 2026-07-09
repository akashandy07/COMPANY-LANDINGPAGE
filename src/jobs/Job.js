const titles = [
    "Application Support Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Java Developer",
    "SAP ABAP Consultant",
    "SAP HANA Developer",
    "Business Analyst",
    "UI/UX Designer",
    "DevOps Engineer",
    "Cloud Engineer (AWS)",
    "Data Analyst",
    "Data Engineer",
    "QA Engineer",
    "Automation Test Engineer",
    "Mobile App Developer (Flutter)",
    "Android Developer",
    "iOS Developer",
    "Python Developer",
    "System Administrator",
    "Network Engineer",
    "Cybersecurity Analyst",
    "Machine Learning Engineer",
    "AI Engineer",
    "Product Manager",
    "Project Coordinator",
    "Technical Writer",
    "Database Administrator",
    "Salesforce Developer",
    "ServiceNow Developer",
    "Application Support Engineer",
    "Support Consultant - SAP FICO",
    "Support Consultant - SAP MM",
    "Support Consultant - SAP SD",
    "IT Helpdesk Engineer",
    "Site Reliability Engineer",
    "Software Engineer - .NET",
    "Software Engineer - C#",
    "Web Developer",
    "WordPress Developer",
    "Shopify Developer",
    "Graphic Designer",
    "Digital Marketing Executive",
    "SEO Analyst",
    "Content Writer",
    "HR Executive",
    "Recruiter - IT",
    "Business Development Executive",
    "Junior Software Developer",
];

const skills = [
    "SAP ABAP Development for HANA",
    "React, JavaScript, CSS",
    "Node.js, Express, MongoDB",
    "React, Node.js, MongoDB",
    "React, Redux, TypeScript",
    "Node.js, REST APIs, SQL",
    "Java, Spring Boot, Microservices",
    "SAP ABAP, OOPS ABAP",
    "SAP HANA, SQL Script",
    "Excel, SQL, Business Documentation",
    "Figma, Adobe XD, Prototyping",
    "Docker, Kubernetes, CI/CD",
    "AWS, EC2, S3, Lambda",
    "Power BI, SQL, Excel",
    "Python, ETL, Spark",
    "Manual Testing, Test Cases",
    "Selenium, Java, TestNG",
    "Flutter, Dart",
    "Kotlin, Android SDK",
    "Swift, Xcode",
    "Python, Django, Flask",
    "Windows Server, Active Directory",
    "Cisco, Networking Protocols",
    "SIEM, Threat Analysis",
    "Python, TensorFlow, ML Ops",
    "Python, NLP, LLMs",
    "Agile, Scrum, Roadmapping",
    "MS Project, Communication",
    "Technical Documentation, English",
    "Oracle DB, PL/SQL",
    "Salesforce Apex, Visualforce",
    "ServiceNow, JavaScript",
    "SAP ABAP Development for HANA",
    "SAP FICO Configuration",
    "SAP MM Configuration",
    "SAP SD Configuration",
    "Troubleshooting, Ticketing Tools",
    "Linux, Monitoring Tools, Scripting",
    ".NET Core, C#, SQL Server",
    "C#, ASP.NET, Azure",
    "HTML, CSS, JavaScript",
    "WordPress, PHP, MySQL",
    "Shopify Liquid, JavaScript",
    "Photoshop, Illustrator",
    "SEO, Google Ads, Social Media",
    "SEO Tools, Keyword Research",
    "Content Writing, SEO Basics",
    "Recruitment, HRMS",
    "Technical Hiring, Sourcing",
    "Communication, CRM Tools",
    "Java or JavaScript basics",
];

const locations = [
    "Coimbatore",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Remote",
];

const jobTypes = ["Full time", "Full time", "Full time", "Contract", "Full time"];

const experiences = [
    "0-1 years",
    "1-2 years",
    "1-3 years",
    "2-4 years",
    "3-5 years",
    "5-10 years",
];

const educationOptions = [
    "15 years full time education",
    "Bachelor's degree in Computer Science or related field",
    "B.E/B.Tech or equivalent",
];

const postedOptions = [
    "Posted within last 24 hours",
    "Posted 2 days ago",
    "Posted 3 days ago",
    "Posted a week ago",
];

function buildDescription(title, skill, experience, education) {
    return `Project Role : ${title}
Project Role Description : Act as a key contributor identifying and resolving issues, building features, and supporting critical business systems.

Must have skills : ${skill}
Good to have skills : NA
Minimum ${experience.split("-")[0]} year(s) of experience is required
Educational Qualification : ${education}

Summary:
As a ${title}, a typical day involves collaborating with cross-functional teams, investigating issues or building new features, and ensuring smooth delivery of business-critical solutions.

Roles & Responsibilities:
- Work closely with the team to design, develop, and maintain solutions related to ${skill}.
- Investigate, diagnose, and resolve issues raised by stakeholders or end-users.
- Participate in code reviews, testing, and documentation.
- Ensure timely delivery and adherence to quality standards.
- Collaborate with stakeholders to gather requirements and provide updates.

Professional & Technical Skills:
- Must have hands-on experience in ${skill}.
- Strong analytical and problem-solving skills.
- Good communication and teamwork abilities.
- Ability to work independently with minimal supervision.

Additional Information:
- The candidate should have relevant experience of ${experience}.
- This position is based at our office location as mentioned.
- ${education} is required.`;
}

const jobsData = Array.from({ length: 30 }, (_, i) => {
    const title = titles[i % titles.length];
    const skill = skills[i % skills.length];
    const location = locations[i % locations.length];
    const type = jobTypes[i % jobTypes.length];
    const experience = experiences[i % experiences.length];
    const education = educationOptions[i % educationOptions.length];
    const posted = postedOptions[i % postedOptions.length];

    return {
        id: i + 1,
        title,
        location,
        type,
        experience,
        requiredSkill: skill,
        goodToHaveSkill: "NA",
        jobRole: "Packaged Application Development Team Lead/Consultant",
        jobNumber: `ATCI-${5555000 + i}-S2026${400 + i}`,
        postedTime: posted,
        educationalQualification: education,
        summary: `As a ${title}, a typical day involves working with ${skill} to deliver and support business-critical solutions.`,
        description: buildDescription(title, skill, experience, education),
        department: "Consulting",
        applyLink: "#",
    };
});

export default jobsData;