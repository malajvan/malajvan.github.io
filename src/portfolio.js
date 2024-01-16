
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
    name: 'E2E Azure Pitchfork Data Analysis',
    image: "https://github.com/malajvan/malajvan.github.io/raw/main/public/img/e2eazflow.png",
    description:
      'Implemented Azure Data Factory for seamless data transfer, ensured data quality with Databricks and Spark, and enabled informed decisions through Tableau visualizations.',
    stack: ['Azure','Spark', 'Tableau'],
    sourceCode: 'https://github.com/malajvan/e2e-AZflow',
    livePreview: 'https://public.tableau.com/app/profile/van.pham8444/viz/Tableau_dashboard_16965479880500/Dashboard1?publish=yes',
  },
  {
    name: 'Spotify Popularity Predictions',
    image: "https://github.com/malajvan/malajvan.github.io/raw/main/public/img/mfcc.png",
    description:
      "Extracted audio features, applied KNN algorithm, and achieved an 89% accurate prediction rate for song popularity compared to Spotify's API",
    stack: ['scikit-learn', 'audio analysis','PyTorch'],
    sourceCode: 'https://github.com/malajvan/MFCC',
    // livePreview: 'https://github.com',
  },
  {
    name: 'malajvan.github.io',
    image: "https://github.com/malajvan/malajvan.github.io/raw/main/public/img/malajvan.png",
    description:
      'Personal Portfolio showcasing Projects and Experience',
    stack: ['HTML','CSS', 'React'],
    sourceCode: 'https://github.com/malajvan/malajvan.github.io',
    livePreview: 'https://malajvan.github.io',
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
    name: 'Data Engineer',
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
'Python','ETL','Git', 'SQL', 'Microsoft Azure', 'AWS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vanhongpham01@gmail.com',
}

export { header, about, certifications, experiences, projects, skills, contact }
