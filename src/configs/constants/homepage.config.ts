const heroProps = {
    title: ' Hello',
    name: 'My name is ',
}

const aboutUsProps = {
    title: 'About',
    myself: 'I am a ',
    name: 'Name',
    age: 'Age',  
    address: 'Address',
    phone: 'Phone',
    email: 'E-mail'
}

const educationProps = {
    title: 'Education',
    major: 'major: ',
    gpa: 'GPA: ',
}

const experienceProps = {
    title: 'Experience',
    company: 'Company: ',
    role: 'Roles/Responsibilities'
}

const skillPros = {
    title: 'Skill',
    soft: 'Soft Skills',
    technical: 'Technical Skills',
}

export const PROPS = {
    HERO: {
        ...heroProps,
    },
    ABOUTUS: {
        ...aboutUsProps
    },
    EDUCATION: {
        ...educationProps
    },
    EXPERIENCE: {
        ...experienceProps
    },
    SKILL: {
        ...skillPros
    },
}