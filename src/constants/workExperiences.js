import agnicoLogo from "../assets/Work/Agnico.png";
import siemensLogo from "../assets/Work/Siemens.png";
import neatLogo from "../assets/Work/Neat.png";
import scotiaLogo from "../assets/Work/Scotiabank.png";
import amazonLogo from "../assets/Work/Amazon.png";
import awnLogo from "../assets/Work/awn.png";
import agenthubLogo from "../assets/Work/AgentHub.png";

const agenthub = {
  company: "AgentHub",
  position: "Co-Founder",
  location: "Vancouver, British Columbia",
  date: "Jun. 2023 - Present",
  description:
    "Currently building AgentHub, a no-code platform for building AI-powered pipelines to automate business workflows. Start building at: https://agenthub.dev/.",
  logo: agenthubLogo,
};

const awn = {
  company: "Arctic Wolf Networks",
  position: "Machine Learning Operations Engineer",
  location: "Vancouver, British Columbia",
  date: "Mar. 2023 - Aug. 2023",
  description:
    "At Arctic Wolf Networks, I was responsible for designing, deploying, and maintaining machine learning models in production, as well as ensuring their scalability, reliability, and efficiency. \
I utilized AWS services, like AWS Sagemaker, to develop and deploy machine learning models, optimize their performance, and manage the overall ML infrastructure. \
I was also constantly collaborating with data scientists, security analysts, and other software engineers to integrate ML models into the offered products and services, and to monitor their performance. \
In addition, I contributed to the development of ML pipelines, incorporating data preprocessing, feature engineering, and model evaluation, while ensuring data security and privacy compliance.",
  logo: awnLogo,
};

const amazon = {
  company: "Amazon",
  position: "Software Development Engineer",
  location: "Vancouver, British Columbia",
  date: "Aug. 2022 - Mar. 2023",
  description:
    "At Amazon, I worked within the Selling Partner Experience (SPX) organization to deliver products designed to maximize seller efficiency and minimize frustration. \
I took on a wide array of responsibilities, including designing technical architecture for products along with setup of AWS infrastructure including Lambda, S3, DynamoDB, etc. \
I was also continuously coordinating across several lines of the business (PM, DE, BA, etc.) to ensure success criteria of products could be evaluated. \
In my first 4 months at the company, I merged 50+ pull requests with an average of less than 1 revision and few comments.",
  logo: amazonLogo,
};

const scotiabank = {
  company: "Scotiabank",
  position: "Investment Banking Summer Analyst",
  location: "Toronto, Ontario",
  date: "May 2021 - Aug. 2021",
  description:
    "At Scotiabank, I worked within the Equity Capital Markets and Mining coverage groups dealing with both origination and execution services. \
I was involved in several deals and projects concerning debt/equity financing, mergers and acquisitions, and business development. \
I was also responsible for performing complex financial analysis such as market comparisons, company valuations, and pro-forma financial modelling. \
Additionally, I contributed to preparing company and industry specific research to support financial valuations and pitchbook charts/tables.",
  logo: scotiaLogo,
};

const neat = {
  company: "Neat",
  position: "Full Stack Developer Intern",
  location: "Montreal, Quebec",
  date: "Jun. 2020 - Aug. 2020",
  description:
    "Neat aims to accelerate innovation in organizations and accelerate the training process through a software solution that reduces redundancies and streamlines \
workflow. I participated in weekly Agile scrum meetings and was assigned technical user stories to be completed. Neat uses Vue.JS for the frontend and Firebase \
on the backend. As Neat is an early stage startup, I also had an input in all discovery and ideation meetings.",
  logo: neatLogo,
};

const siemens = {
  company: "Siemens",
  position: "Chemical Engineering Intern",
  location: "Toronto, Ontario",
  date: "May 2019 - Sep. 2019",
  description:
    "I conducted observational analyses in order to update all of the procedures (SOPs) for the high voltage equipment manufacturing plant at Trench Group. I also \
assisted with various procedures in the Chemical Lab including differential scanning calorimetry, viscosity tests, and tensile tests. Additionally, I created \
reports in Microsoft Excel based on key performance indicators such as the failure rate of reactors, coils, line traps, etc.",
  logo: siemensLogo,
};

const agnico = {
  company: "Agnico Eagle Mines",
  position: "Process Plant Engineering Intern",
  location: "Rankin Inlet, Nunavut",
  date: "Jan. 2019 - May 2019",
  description:
    "Agnico Eagle Mines is one of the top gold mining companies in the country. I was responsible for developing operation and maintenance procedures (SOPs) \
for any of the equipment in the entire process plant which includes the oxygen plant, the paste plant, the saline and effluent water treatment plants, \
the power plant, and the refinery. I also worked closely with process plant trainers to develop training material for process plant workers. Additionally, \
I designed the entire system for reports outlining and detailing employee eLearning statistics in Excel using VBA.",
  logo: agnicoLogo,
};

export const workExperiences = [
  agenthub,
  awn,
  amazon,
  scotiabank,
  neat,
  siemens,
  agnico,
];
