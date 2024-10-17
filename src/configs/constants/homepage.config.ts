const heroProps = {
    title: ' Hello',
    name: 'My name is <strong>Quach Hai Bang</strong>',
    description: 'I am a Front-End and Website developer with over 1 year of experience.',
}

const aboutUsProps = {
    title: 'About',
    myself: 'I am Professional <strong>Web Developer</strong>',
    description1: 'I am a Front-End programmer with more than 1 year of experience in HTML & CSS, JavaScript and nearly 4 months of experience in learning and developing TypeScript with the ReactJs library. I can use Bootstrap and Tailwind with Ant Design.',
    description2: 'I have actively researched and developed projects such as W3school`s The Band, Mentor Frontend QR code component and Blog preview card, Shop and F_News, which helped me practice teamwork, communication, problem-solving and investigation skills.',
    name: 'Quach Hai Bang',
    age: 24,  
    address: 'Ca Mau, Viet Nam',
    phone: '(+84) 368459077',
    email: 'quachbang2404@gmail.com'
}

const educationProps = {
    title: 'Education',
    schoolName: 'University of Greenwich (Can Tho)',
    major: 'computer science',
    subjects: 'HTMl & CSS, Java, PhP, C#',
    gpa: 'GPA:3.55/4',
    start: 'From: Jul 2018',
    end : 'To: Jul 2023'
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
}