/* ==========================================================================
   CODE WITH JALLOW — EDITABLE CONTENT
   This is the ONLY file you need to edit to update the website.
   - Change a fee:            find the course, edit  fee: "D 1,500"
   - Open/close a course:     change  status: "available"  or  "coming-soon"
   - Add a news post:         copy one block in POSTS and edit it (newest first)
   - Add photos to gallery:   put the photo in /images and add a line to GALLERY
   Keep the quotes "" and commas , exactly as they are.
   ========================================================================== */

const SITE = {
  name: "Code with Jallow",
  parent: "JTECH ACADEMY",
  tagline: "Digital skills for every learner in Basse",
  phones: ["5008845"],      // shown as +220 5008845
  whatsapp: "2205008845",   // +220 (Gambia) + number, no spaces or plus sign
  email: "",                                    // add an email address when you have one
  location: "Basse, Upper River Region, The Gambia",
  social: {
    facebook: "https://web.facebook.com/mudasiru.jallow.3",
    instagram: "https://www.instagram.com/mu_01_jallow",
    tiktok: "https://www.tiktok.com/@codewithjallow",
    youtube: "",
    linkedin: ""
  },
  // Paste your Google Apps Script web-app URL here (see README.md, step 2).
  // Until then, forms fall back to sending a prefilled WhatsApp message.
  formEndpoint: ""
};

/* status:  "available"  = Available Now   |   "coming-soon" = Coming Soon
   fee:     leave "" until the price is final (shows "Fee to be announced")
   modes:   which learning modes the course offers: "In-person", "Online"
   registration: "Open" | "Closed" | "Opening soon"                           */
const COURSES = [
  {
    id: "basic-computer-skills",
    name: "Basic Computer Skills",
    icon: "monitor",
    status: "available",
    tagline: "Start here: confidently use a computer from day one.",
    description:
      "A friendly, hands-on introduction for complete beginners. You will learn how a computer works, how to organise your files, and how to use the internet safely.",
    topics: [
      "Introduction to computers",
      "Computer hardware and software",
      "File and folder management",
      "Basic internet usage and online safety"
    ],
    outcomes: [
      "Switch on, navigate and shut down a computer with confidence",
      "Tell hardware from software and know what each part does",
      "Create, save, find and organise files and folders",
      "Browse the internet and stay safe online"
    ],
    duration: "4 weeks",
    fee: "",
    schedule: "To be announced",
    modes: ["In-person"],
    registration: "Open"
  },
  {
    id: "typing-skills",
    name: "Typing Skills",
    icon: "keyboard",
    status: "available",
    tagline: "Type faster, with fewer mistakes.",
    description:
      "Build speed and accuracy with proper touch typing, a skill that helps in school, at work and in every other computer course.",
    topics: [
      "Keyboard familiarisation",
      "Touch typing",
      "Typing speed and accuracy practice"
    ],
    outcomes: [
      "Know the keyboard layout without looking",
      "Type with all fingers using correct technique",
      "Measure and steadily improve words-per-minute and accuracy"
    ],
    duration: "3 weeks",
    fee: "",
    schedule: "To be announced",
    modes: ["In-person"],
    registration: "Open"
  },
  {
    id: "microsoft-office",
    name: "Microsoft Office",
    icon: "file-text",
    status: "available",
    tagline: "Word, Excel and PowerPoint for school and work.",
    description:
      "Learn the three tools used in almost every office and classroom: write documents, work with data, and present your ideas clearly.",
    topics: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
    outcomes: [
      "Write, format and print professional documents",
      "Enter data, use formulas and build simple tables and charts in Excel",
      "Design and deliver a clear slide presentation"
    ],
    duration: "6 weeks",
    fee: "",
    schedule: "To be announced",
    modes: ["In-person"],
    registration: "Open"
  },
  {
    id: "programming",
    name: "Programming",
    icon: "code",
    status: "available",
    tagline: "Learn to think like a programmer: C++, Java and Python.",
    description:
      "Go from zero to writing real programs. You will learn core programming ideas through three widely used languages, with plenty of practice.",
    topics: ["C++", "Java", "Python"],
    outcomes: [
      "Understand variables, conditions, loops and functions",
      "Write and debug small programs in each language",
      "Solve problems step by step and build mini projects"
    ],
    duration: "12 weeks",
    fee: "",
    schedule: "To be announced",
    modes: ["In-person", "Online"],
    registration: "Open"
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: "globe",
    status: "available",
    tagline: "Build real websites with HTML, CSS and JavaScript.",
    description:
      "Learn how websites are made, then build your own: structure with HTML, style with CSS and add interactivity with JavaScript.",
    topics: ["HTML", "CSS", "JavaScript"],
    outcomes: [
      "Build and structure web pages with HTML",
      "Design responsive, good-looking layouts with CSS",
      "Add interactive features with JavaScript",
      "Publish a personal portfolio website"
    ],
    duration: "10 weeks",
    fee: "",
    schedule: "To be announced",
    modes: ["In-person", "Online"],
    registration: "Open"
  },
  {
    id: "networking",
    name: "Networking",
    icon: "network",
    status: "coming-soon",
    tagline: "Understand how computers talk to each other.",
    description:
      "An introduction to computer networks: the devices, the cables and the basics of setting up and fixing a small network.",
    topics: [
      "Introduction to computer networks",
      "Network devices and cables",
      "Basic network configuration and troubleshooting"
    ],
    outcomes: [
      "Explain how networks and the internet work",
      "Identify routers, switches and cable types",
      "Set up a basic network and fix common problems"
    ],
    duration: "6 weeks",
    fee: "",
    schedule: "Starts when equipment is available",
    modes: ["In-person"],
    registration: "Opening soon"
  },
  {
    id: "robotics",
    name: "Introduction to Robotics",
    icon: "cpu",
    status: "coming-soon",
    tagline: "Meet electronics, sensors and your first robot.",
    description:
      "A hands-on beginner course in robotics: learn the basic ideas, explore electronic components and sensors, and build simple practical projects.",
    topics: [
      "Basic robotics concepts",
      "Introduction to electronic components and sensors",
      "Beginner practical robotics activities"
    ],
    outcomes: [
      "Explain what a robot is and how it senses and acts",
      "Recognise common electronic components and sensors",
      "Complete beginner robotics projects hands-on"
    ],
    duration: "8 weeks",
    fee: "",
    schedule: "Starts when equipment is available",
    modes: ["In-person"],
    registration: "Opening soon"
  }
];

/* Newest first. image is optional (path inside /images).
   category: "Training" | "Community" | "Workshop" | "Student Projects" | "Announcement" */
const POSTS = [
  {
    date: "2026-10-19",
    category: "Announcement",
    title: "Code with Jallow is launching in Basse",
    summary:
      "JTECH Academy is opening its doors with practical ICT training for students, youths and community members.",
    body:
      "We are starting Code with Jallow to bring practical digital skills to Basse and the communities around it, from first-time computer users to future programmers. Registration for our first courses is open. Replace this sample post with your own news.",
    image: "images/class-teaching.jpg"
  }
];

/* type: "image" (file in /images) or "video" (YouTube link or video file) */
const GALLERY = [
  {
    type: "image",
    src: "images/jallow-speaking.jpg",
    caption: "Jallow speaking at a digital innovation event",
    category: "Events"
  },
  {
    type: "image",
    src: "images/jallow-tech-for-every-child.jpg",
    caption: "Technology for Every Child",
    category: "Events"
  },
  {
    type: "image",
    src: "images/class-network-toolkit.jpg",
    caption: "Hands-on networking workshop",
    category: "Classes"
  },
  {
    type: "image",
    src: "images/class-teaching.jpg",
    caption: "Teaching in the classroom",
    category: "Classes"
  }
  // Add more like this:
  // { type: "image", src: "images/class-01.jpg", caption: "Our first class", category: "Classes" },
  // { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID", caption: "Student demo", category: "Projects" },
];
