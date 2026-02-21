import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  //typescript,
  tensorflow,
  html,
  css,
  reactjs,
  //redux,
  pandas,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import dr from "../assets/dr.png";
import voiceassistant from "../assets/voiceassistant.png";
import wharton from "../assets/wharton.png";
import nvidia from "../assets/nvidia.png";
import deeplearning from "../assets/deeplearning.png";
import imperial from "../assets/imperial.png";
import stanford from "../assets/stanford.png";
import ibm from "../assets/ibm.png";
import google from "../assets/google.png";
import neuronseg from "../assets/neuron-seg.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Self",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2023 -  March 2024",
    points: [
      "Building and maintaining personal web applications using React.js and modern frontend technologies.",
      "Designing and implementing complete user interfaces from concept to deployment as independent projects.",
      "Creating responsive, mobile-first designs with full cross-browser compatibility and accessibility focus.",
      "Applying best practices through self-review, refactoring, and continuous learning from open-source patterns."
    ],
  },
  {
  title: "Backend Developer",
  company_name: "Self",
  icon: tesla,          // ← keep or change to a more fitting icon (e.g. import your own backend-related one)
  iconBg: "#E6DEDD",
  date: "April 2024 - August 2024",
  points: [
    "Learning and building backend applications using Node.js/Express or Python frameworks and related technologies.",
    "Designing and implementing RESTful APIs and server-side logic for personal full-stack projects.",
    "Setting up databases, handling data models, authentication, and secure endpoints independently.",
    "Deploying projects to cloud platforms, optimizing performance, and iterating through self-review."
  ],
  },
  {
  title: "Full-Stack AI Developer",
  company_name: "Self",
  icon: shopify,          // ← change to a more AI-themed icon if you have one (e.g. brain/AI symbol)
  iconBg: "#383E56",
  date: "Jan 2024 - Dec 2024",  // One full year; adjust exact months if needed (e.g. Jan 2024 - Jan 2025)
  points: [
    "Mastering AI from scratch: simple ML to advanced DL, RL, GenAI, and agentic AI systems through intensive self-study.",
    "Building diverse hands-on projects including ML models, deep learning apps, generative AI tools, and autonomous agents.",
    "Earning certifications from Google, Microsoft, DeepLearning.AI, Stanford, and others to validate core and specialized AI skills.",
    "Transitioning to full-stack AI development by integrating frontend, backend, ML pipelines, APIs, and deployment best practices."
  ],
  },
  {
  title: "Full Stack AI Developer - Healthcare",
  company_name: "Meta",
  icon: meta,
  iconBg: "#E6DEDD",
  date: "Mid 2025 - Present",
  points: [
    "Building and maintaining full-stack AI applications in healthcare using React.js, Python/Node backends, and ML frameworks like PyTorch/TensorFlow.",
    "Developing real-world projects that enhance clinical workflows, diagnostic accuracy, and patient outcomes for doctors and patients alike.",
    "Completing specialized AI in healthcare courses and certifications to master domain-specific applications, ethics, and regulatory compliance.",
    "Integrating secure, HIPAA-compliant AI models with frontend interfaces, APIs, and data pipelines while collaborating with clinicians and data teams."
  ],
  },
];

const certifications = [
  {
    title: "Mathematics for ML",
    issuer: "Imperial College London",
    logo: imperial,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/1SQBNPFNFU5O",
    category: "AI & ML",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    logo: deeplearning,
    link: "https://www.coursera.org/account/accomplishments/specialization/05EB4IJ9ARHX",
    category: "AI & ML",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    logo: deeplearning,
    link: "https://www.coursera.org/account/accomplishments/specialization/RDLJG6R7AB0N",
    category: "AI & ML",
  },
  {
    title: "NLP Specialization",
    issuer: "DeepLearning.AI",
    logo: deeplearning,
    link: "https://www.coursera.org/account/accomplishments/specialization/VV4IG275I74X",
    category: "AI & ML",
  },
  {
    title: "AI for Medicine",
    issuer: "DeepLearning.AI",
    logo: deeplearning,
    link: "https://coursera.org/share/15d7014797617665872540842147257f",
    category: "Healthcare",
  },
  {
    title: "AI in Healthcare",
    issuer: "Stanford Online",
    logo: stanford,
    link: "https://coursera.org/share/497f9a62ab4a6a7ee924af92ce6cf76f",
    category: "Healthcare",
  },
  {
    title: "IBM Generative AI Engineering",
    issuer: "IBM",
    logo: ibm,
    link: "https://www.coursera.org/account/accomplishments/specialization/O6ASTH1YXR4S",
    category: "AI & ML",
  },
  {
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    logo: google,
    link: "https://www.coursera.org/account/accomplishments/specialization/2XZEMFO5Q20B",
    category: "Data & Management",
  },
  {
    title: "Google Cybersecurity",
    issuer: "Google",
    logo: google,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/NU2UEE8RZMJ9",
    category: "Data & Management",
  },
  {
    title: "Google Project Management",
    issuer: "Google",
    logo: google,
    link: "https://www.coursera.org/account/accomplishments/specialization/YGCZVCOJGMQY",
    category: "Data & Management",
  },
  {
    title: "Generative Adversarial Networks",
    issuer: "DeepLearning.AI",
    logo: deeplearning,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/7WLF3JMSMA74",
    category: "AI & ML",
  },
  {
    title: "Generative AI for Executives and Business Leaders",
    issuer: "IBM",
    logo: ibm,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/OA2LSTCPTFKZ",
    category: "AI & ML",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    logo: google,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/28Q5A49OEV3H",
    category: "AI & ML",
  },
  {
    title: "AI Infrastructure and Operations fundamentals",
    issuer: "NVIDIA",
    logo: nvidia,
    link: "https://www.coursera.org/account/accomplishments/verify/XZ9TS8MRQ66G?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    category: "AI & ML",
  },
  {
    title: "Networking",
    issuer: "NVIDIA",
    logo: nvidia,
    link: "https://www.coursera.org/account/accomplishments/verify/15RJNG584IEN?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    category: "AI & ML",
  },
  {
    title: "Google People Management Essentials",
    issuer: "Google",
    logo: google,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/N5TG9G43KL56",
    category: "Business",
  },
  {
    title: "AI for Business",
    issuer: "University of Pennsylvania",
    logo: wharton,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/6YKVUSDG0WY3",
    category: "Business",
  },
  {
    title: "Entrepreneurship 3: Growth Strategies",
    issuer: "University of Pennsylvania",
    logo: wharton,
    link: "https://www.coursera.org/account/accomplishments/verify/F6VAFYJBX2BN",
    category: "Business",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    logo: google,
    link: "https://www.coursera.org/account/accomplishments/specialization/CE4GEP08GBBT",
    category: "Data & Management",
  },
  {
    title: "Generative AI Leader",
    issuer: "Google",
    logo: google,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/6VVSR1LWM6C4",
    category: "Business",
  },
  {
    title: "Google UX Design",
    issuer: "Google",
    logo: google,
    link: "https://www.coursera.org/account/accomplishments/specialization/Z3YXZTVAMRPU",
    category: "AI & ML",
  },
];


const projects = [
  {
    name: "Brain MRI Segmentation",
    description:
      "Deep learning model for automatic brain tumor segmentation using 3D U-Net architecture. Implements multi-class segmentation to identify edema, non-enhancing tumors and enhancing tumors.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "GradCam",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Nauman123-coder/brain-tumor-segmentation-3d-unet",
    project_detail_link: "/brain-tumor-segmentation",
  },
  {
    name: "Chest X-Ray Diagnosis",
    description:
      "Deep learning-based multi-label chest X-ray diagnosis using transfer learning with DenseNet121, class imbalance handling, and GradCAM for model interpretability.",
    tags: [
      {
        name: "Computer vision",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Medical Imaging",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Nauman123-coder/Chest-X-Ray-Medical-Diagnosis",
    project_detail_link: "/chest-xray-diagnosis",
  },
  {
    name: "Skin Cancer Detection",
    description:
      "EfficientNet-B0 model for classifying 7 types of skin lesions (HAM10000) with real-time Grad-CAM heatmaps for interpretability.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Efficient-Net",
        color: "green-text-gradient",
      },
      {
        name: "GradCam",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Nauman123-coder/skin-cancer-detection",
    project_detail_link: "/skin-cancer-detection",
  },

  {
    name: "Neuron Segmentation",
    description:
      "A PyTorch implementation of U-Net for biomedical image segmentation. This project builds a fully convolutional neural network designed to segment neurons from electron microscopy images, following the architecture proposed by Ronneberger et al. (2015).",
    tags: [
      {
        name: "Pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "U-Net",
        color: "green-text-gradient",
      },
    ],
    image: neuronseg,
    source_code_link: "https://github.com/Nauman123-coder/BioSeg-UNet",
    project_detail_link: "/neuron-segmentation",
  },

  {
    name: "Diabetic Retinopathy Prediction",
    description:
      "AI-driven web application using Streamlit and a robust ML model to predict Diabetic Retinopathy (DR) risk from clinical parameters. Features contextual, Groq-powered reports for clinical decision support.",
    tags: [
      {
        name: "Logistic Regression",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
    ],
    image: dr,
    source_code_link: "https://github.com/Nauman123-coder/DR-Risk-Predictor",
    project_detail_link: "/dr-detection",
  },

  {
    name: "Watsonx Voice Assistant",
    description:
      "An end-to-end voice assistant utilizing Mistral-Medium on IBM Watsonx. Features a Flask backend, a responsive Bootstrap frontend, and seamless integration of Speech-to-Text and Text-to-Speech APIs.",
    tags: [
      {
        name: "watsonx-ai",
        color: "blue-text-gradient",
      },
      {
        name: "fast-api",
        color: "green-text-gradient",
      },
    ],
    image: voiceassistant,
    source_code_link: "https://github.com/Nauman123-coder/Watsonx-Voice-Translation-Assistant",
    project_detail_link: "/watson-x-project",
  },
];

export { services, technologies, experiences, certifications, projects };
