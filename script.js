const translations = {
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navReflection: "Reflection",
    navContact: "Contact",
    langToggle: "VI",
    heroEyebrow: "Personal learning portfolio",
    heroLead:
      "Primary Education student with the aspiration to become a teacher who inspires young learners.",
    heroCta: "View assignments",
    factMajor: "Major",
    major: "Primary Education",
    factSchool: "University",
    school: "VNU University of Education",
    factCohort: "Cohort",
    portraitNote: "Learner-centered teaching",
    aboutEyebrow: "About",
    aboutTitle: "Academic profile and educational direction",
    aboutText:
      "This portfolio brings together outputs from the course Introduction to Digital Technology and Artificial Intelligence Applications, while showing a clear direction toward becoming a gentle, creative primary teacher who can use technology meaningfully.",
    educationTitle: "Education",
    educationText:
      "VNU University of Education, Primary Education major, QHS25 cohort.",
    careerTitle: "Career goals",
    careerText:
      "Become a primary teacher, homeroom teacher, skills teacher, or education specialist.",
    styleTitle: "Teaching approach",
    styleText:
      "Gentle, creative, learner-centered, and focused on experiential learning.",
    personalTitle: "Personal information",
    personalText: "Date of birth: 31/05/2007. Email: nguyennngocc207@gmail.com.",
    skillsEyebrow: "Capabilities",
    skillsTitle: "Key skills",
    skill1: "Pedagogical skills",
    skill2: "Communication with students and parents",
    skill3: "Lesson design",
    skill4: "Learning game facilitation",
    skill5: "Storytelling and classroom guidance",
    experienceEyebrow: "Experience",
    experienceTitle: "Experiences that develop teaching competence",
    expTutorTitle: "Vietnamese Literature tutor",
    expTutorText:
      "Currently tutoring two grade 12 students at FSchool and one grade 11 student preparing for grade 12, building skills in explanation, listening, and adapting instruction to each learner.",
    expAssistantTitle: "Primary English teaching assistant",
    expAssistantText:
      "Assisted English classes at a learning center, gaining exposure to primary students and practicing English communication in a classroom setting.",
    expVolunteerTitle: "Volunteer activity",
    expVolunteerText:
      "Participated in Green Sunday, strengthening responsibility and community spirit.",
    projectsEyebrow: "Learning outputs",
    projectsTitle: "Six course assignments",
    projectsIntro:
      "The assignments are organized according to the Portfolio project requirements, including goals, key outcomes, and downloadable files for review.",
    project1Kicker: "Assignment 1 - Section 1.4",
    project1Title: "Basic file and folder operations",
    project1Text:
      "Presents the process of creating, renaming, copying, moving, deleting, and restoring files and folders on Windows.",
    project2Kicker: "Assignment 2 - Section 2.4",
    project2Title: "Searching and evaluating academic information",
    project2Text:
      "Reports on applying Multiple Intelligences theory in differentiated Vietnamese language teaching at primary level.",
    project3Kicker: "Assignment 2 - Section 3.4",
    project3Title: "Effective prompts for learning tasks",
    project3Text:
      "Compares basic, improved, and advanced prompts for academic summarization, concept explanation, and quiz generation.",
    project4Kicker: "Assignment 3 - Section 4.4",
    project4Title: "Online collaboration for group projects",
    project4Text:
      "Summarizes how the group used Google Docs, Microsoft Word, Google Drive, Zalo, and Google Meet for project coordination.",
    project5Kicker: "Assignment 2 - Section 5.4",
    project5Title: "Generative AI for content creation",
    project5Text:
      "Analyzes the process of creating an infographic about AI and school psychology, while evaluating AI's benefits and limitations.",
    project6Kicker: "Assignment 4 - Section 6.4",
    project6Title: "Responsible AI use",
    project6Text:
      "Presents a personal perspective on policy, academic integrity, fact-checking, and boundaries when using AI in learning.",
    downloadDoc: "Download assignment",
    reflectionEyebrow: "Reflection",
    reflectionTitle: "Takeaways after building the Portfolio",
    reflectionText:
      "The Portfolio process helped organize course knowledge, reflect on personal use of digital technology, and clarify AI's role in learning, research, and educational content creation.",
    learnedTitle: "Knowledge and skills",
    learnedText:
      "Organizing files, searching academic sources, evaluating information, writing clear prompts, collaborating online, and using AI responsibly.",
    challengeTitle: "Challenge",
    challengeText:
      "The main challenge was turning several separate assignments into one coherent, readable, and shareable product.",
    nextTitle: "Next direction",
    nextText:
      "Continue updating sample lesson plans, teaching products, and practicum experiences so the Portfolio reflects professional growth.",
    contactEyebrow: "Contact",
    contactTitle: "Connect with Nguyễn Kim Ngọc",
    footerText: "Personal learning portfolio - 2026",
  },
};

const defaultTexts = {};
const i18nNodes = document.querySelectorAll("[data-i18n]");
const langButton = document.querySelector(".lang-toggle");
let currentLang = "vi";

i18nNodes.forEach((node) => {
  defaultTexts[node.dataset.i18n] = node.textContent;
});

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = lang === "vi" ? defaultTexts[key] : translations.en[key] || defaultTexts[key];
  });
}

langButton.addEventListener("click", () => {
  setLanguage(currentLang === "vi" ? "en" : "vi");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
