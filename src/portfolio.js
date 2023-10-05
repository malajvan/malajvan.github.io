
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://malajvan.github.io/',
  title: 'HVP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hong Van Pham',
  // role: 'Data Developer',
  description:
    "A data-driven problem solver with a strong background in software development and math. I'm interested in data science and engineering.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/vanhpham',
    github: 'https://github.com/malajvan',
  }
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    image: "https://raw.githubusercontent.com/KhoiTienNguyen/KhoiTienNguyen.github.io/main/images/AMT.png",
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png",
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png",
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]
const certifications = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up


  {
    name: 'AZ-900',
    image: "https://github.com/malajvan/malajvan.github.io/raw/main/public/img/az-900.png",
    date:'September 2023',
    linkedin: 'https://github.com',
    accreditation: 'https://github.com',
  },
  {
    name: 'Lakehouse Fundamentals',
    image: "https://raw.githubusercontent.com/malajvan/malajvan.github.io/main/public/img/lakehouse-fund.png",
    date:'August 2023',
    linkedin: 'https://github.com',
    accreditation: 'https://credentials.databricks.com/0ab7668f-e98a-47fc-919a-aa58dd390fec#gs.5zde7a',
  },

]


const experiences = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up


  {
    name: 'Data Architect',
    company: 'DDMAL Lab, McGill University',
    image: "https://raw.githubusercontent.com/malajvan/malajvan.github.io/main/public/img/LinkedMusic.png",
    description:
      'Spearheaded the development of the data lake architecture and ETL framework for a new project LinkedMusic.',
    stack: ['Data Lake', 'Python', 'ETL', 'OpenRefine'],
    sourceCode: 'https://github.com/DDMAL/linkedmusic-datalake/discussions',
    livePreview: 'https://linkedmusic.ca',
  },
  {
    name: 'Software Developer',
    company: 'DDMAL Lab, McGill University',
    image: "https://raw.githubusercontent.com/malajvan/malajvan.github.io/main/public/img/Rodan.png",
    description:
      'Oversaw team growth, boosted software performance, and streamlined deployment for increased efficiency and security.',
    stack: ['Python', 'Ansible', 'Docker', 'PostgreSQL'],
    sourceCode: 'https://github.com/DDMAL/Rodan',
    livePreview: 'https://rodan2.simssa.ca',
  },
  {
    name: 'Data Science Intern',
    company: 'Vivas Technology',
    image: "https://raw.githubusercontent.com/malajvan/malajvan.github.io/main/public/img/vivas.png",
    description:
      'Reduced manual data entry, empowered decision-making with dashboards, accelerated data analysis through automation.',
    stack: ['Superset','Python','Docker', 'Clickhouse DBMS'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]


const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vanhongpham01@gmail.com',
}

export { header, about, certifications, experiences, projects, skills, contact }
