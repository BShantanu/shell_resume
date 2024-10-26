
var commandsInfo = {
  "help": "Shows list of implemented commands or info about a specific command.",
  "clear": "Clears the screen.",
  "skills": "Shows a list of my skills.",
  "experience": "Shows a list of my working experience.",
  "education": "Shows a list of my education information.",
  "projects": "Shows a list of projects that I'm working on currently.",
  "aboutme": "Shows a short summary about me.",
  "interests": "Shows a list of my interests.",
  "contact": "Let's get in touch.",
  "resume": "Shows a link to my PDF Résumé."
};

/* Resume information*/

var skillsInfo = "• Embedded C Programming\n" +
"• MATLAB\n" +
"• Circuit Design using Proteus and KiCad\n" +
"• PCB Design\n" +
"• Communication Protocols\n" +
"• Git\n" +
"• Linux\n" +
"• Operating Systems concepts\n" +
"• Basic networking concepts\n" +
"• Basic web scraping knowledge\n" +
"• Basic web development (HTML, CSS, JS, PHP)\n" +
"• Strong problem-solving and debugging skills\n" +
"• Creativity and ability to learn quickly\n" +
"• Exceptional communication\n" +
"• Successful working in a team environment, as well as independently\n" +
"• The ability to work under pressure and multi-task\n" +
"• The ability to follow instructions and deliver quality results\n" +
"• The ability to quickly come up to speed on a new project\n";


var experienceInfo = 
"Dec 2022 - Present\n" +
"President | SPARK CLUB, MIT Academy of Engineering\n" +
"• Organized various tech workshops and events for students under Spark Club.\n" +
"• Coordinated events to enhance technical skills and awareness in the college community.\n" +

"\nApr 2024\n" +
"Team Lead | TechnoPHILIA 2024\n" +
"• Led a national-level project competition and poster presentation event.\n" +
"• Managed a team to successfully execute the event, attracting participants from across the country.\n" +

"\nSep 2019 - Jun 2022\n" +
"Cultural Head | Government Polytechnic\n" +
"• Led the cultural committee in organizing and managing various events at the institute level.\n";


var educationInfo = 
"2025 Bachelor of Engineering - Electronics & Telecommunication Engineering\n" +
"MIT Academy of Engineering, Pune\n" +
"Notable courses:\n" +
"Embedded Systems, Digital Electronics, Communication Protocols, Circuit Design, VLSI Design\n" +
"Projects:\n" +
"Real Time Implementation of CAN Protocol, Warehouse Management System Using CC-link Protocol Devices and STM32, IOT Based Industrial Automation, Weapon Detection and Alert System\n" +

"\n2022 Diploma - Electronics & Telecommunication Engineering\n" +
"Government Polytechnic, Dharashiv | 86.00%\n" +
"Notable classes:\n" +
"Digital Electronics, C Programming, Microprocessor Architecture, Robotics\n" +
"Diploma Project:\n" +
"Automated Bottle Filling & Capping System\n";


var projectsInfo = {
"Real Time Implementation of CAN Protocol": "#",
"Warehouse Management System Using CC-link Protocol Devices and STM32": "#",
"IOT Based Industrial Automation": "#",
"Weapon Detection and Alert System": "#",
"IOT Based Air Quality Monitoring System": "#",
"Face Recognition Based Attendance System Using ESP32 CAM": "#",
"Automated Bottle Filling & Capping System (Diploma Project)": "#"
};

var aboutmeInfo = "A result-oriented Electronics & Telecommunication Engineering student from Pune, India, with a strong foundation in \n" +
"Embedded C Programming, MATLAB, and Embedded Systems, along with demonstrated leadership skills through significant roles in \n" +
"academic and extracurricular activities.\n" +
"\n" +
"Proactive learner with a passion for DIY electronics projects and exploring new technologies. Committed to applying theoretical \n" +
"knowledge to practical applications, as evidenced by a range of academic projects, including Real Time Implementation of CAN Protocol, \n" +
"IoT-Based Industrial Automation, and Automated Bottle Filling & Capping System.\n" +
"\n" +
"I actively engage in DIY electronics projects, always trying to build stuff from scratch, and I also prioritize eco-friendly living.\n";


var interestsInfo =
"• Software Development\n" +
"• Electronics  \n" +
"• Cyber Security\n" +
"• Ethical Hacking \n" +
"• Physics\n" +
"• Eastern Philosophy\n" +
"• Psychology \n" +
"• Everything DIY \n" +
"• Permaculture gardening\n" +
"• Cooking\n" +
"• Animal Welfare \n" +
"• Social Justice \n" +
"• Activism\n";

var contactInfo = [
"email: <a href='mailto: Vaibhav.kawade@mitaoe.ac.in'>Vaibhav.kawade@mitaoe.ac.in</a><br/>",
"phone: +91 9130601015 <br/>"
];


var files = {
"/" : ["bin", "dev", "home", "lib64", "media", "opt", "root", "sbin", "sys", "usr", "boot", "etc", "lib", "lost+found", "mnt", "proc", "run", "srv", "tmp", "var"],
"home" : ["classyvaibhav"],
"classyvaibhav" : ["resume.sh"]
};

// shantanu 

var contactInfoShantanu = [
  "email: <a href='mailto: shantanu.bhimanpallewar@mitaoe.ac.in'>shantanu.bhimanpallewar@mitaoe.ac.in</a><br/>",
  "phone: +91 7219759645 <br/>"
  ];


var contactInfoVaibhav = [
 "email: <a href='mailto: Vaibhav.kawade@mitaoe.ac.in'>Vaibhav.kawade@mitaoe.ac.in</a><br/>",
"phone: +91 9130601015 <br/>"
];

var contactInfoRiddhi = [
  "email: <a href='mailto: riddhi.badhel@mitaoe.ac.in'>riddhi.badhel@mitaoe.ac.in</a><br/>",
"phone: +91 91588075260 <br/>"
];

var contactInfoRicha = [
  "email: <a href='mailto: richa.badhel@mitaoe.ac.in'>richa.badhel@mitaoe.ac.in</a><br/>",
"phone: +91 7276054941 <br/>"
];




const users = {

  // My info object
  shantanu: {
      aboutmeInfo: "Proficient in electronics and telecommunication fundamentals, skilled in software and hardware integration, and enthusiastic about applying knowledge to real-world challenges. I am seeking an opportunity to leverage my strong analytical and problem-solving skills within a collaborative team environment. Passionate about IOT, robotics and embedded systems, eager to learn and contribute to technological advancements in these fields.",
      skillsInfo: "• Embedded C Programming\n" +
                  "• MATLAB\n" +
                  "• Circuit Design using Proteus and KiCad\n" +
                  "• PCB Design\n" +
                  "• Communication Protocols\n" +
                  "• Git\n" +
                  "• Automation\n"+
                  "• Internet of Things\n"+
                  "• Sensor Integration\n"+
                  "• Home Automation\n",
                 
      experienceInfo: "Dec 2022 - Treasurer\n" +
"Treasurer | SPARK CLUB, MIT Academy of Engineering\n" +
"•  Managed Finances: Handled the club’s budget, tracked all financial transactions, and kept accurate records.\n" +
"• Fundraising: Organized events to raise money and created budget plans to make sure funds were used effectively.\n" +
"•  Reporting: Prepared financial reports to show how the clubs money was spent and helped make decisions.\n" +
"• Teamwork: Worked with other club members to ensure financial plans supported our goals.\n" +
"•  Improved Processes: Made financial processes more efficient and transparent.\n" +


"\nApr 2024\n" +
"Treasurer | TechnoPHILIA 2024\n" +
"•  Managed Budget: Took care of the event’s finances, keeping track of all income and expenses.\n" +
"•  Created Budget Plans: Made detailed plans to ensure we used our money wisely for the event.\n" +
"•   Prepared Reports: Made reports on how the money was spent and shared this with the team to help make decisions.\n" +
"•   Improved Processes: Made the financial process smoother and more transparent.\n" ,

      educationInfo: 
"2025 Bachelor of Engineering - Electronics & Telecommunication Engineering\n" +
"MIT Academy of Engineering, Pune\n" +
"Notable courses:\n" +
"Embedded Systems, Digital Electronics, Communication Protocols, Circuit Design, VLSI Design\n" +
"Projects:\n" +
"Real Time Implementation of CAN Protocol, Warehouse Management System Using CC-link Protocol Devices and STM32, IOT Based Industrial Automation, Weapon Detection and Alert System\n" +

"\n2022 Diploma - Electronics & Telecommunication Engineering\n" +
"Government Polytechnic, Pune| 81.80%\n" +
"Notable classes:\n" +
"Digital Electronics, C Programming, Microprocessor Architecture, Robotics\n" +
"Diploma Project:\n" +
"Gesture Controlled Robotic Car\n",

      projectsInfo:
      "Real Time Implementation of CAN Protocol\n"+
"Warehouse Management System Using CC-link Protocol Devices and STM32\n"+
"IOT Based Industrial Automation\n"+
"Weapon Detection and Alert System"+
"IOT Based Air Quality Monitoring System\n"+
"Face Recognition Based Attendance System Using ESP32 CAM\n"+
"Gesture Controlled Robotic Car(Diploma Project)",



    interestsInfo:
    "• VLSI\n" +
"• Electronics  \n" +
"• Cyber Security\n" +
"• Ethical Hacking \n" +
"• Physics\n" +
"• Eastern Philosophy\n" +
"• Psychology \n" +
"• Everything DIY \n" +
"• Permaculture gardening\n" +
"• Cooking\n" +
"• Animal Welfare \n" +
"• Social Justice \n" +
"• Activism\n",


contactInfo: "email: <a href='mailto: shantanu.bhimanpallewar@mitaoe.ac.in'>shantanu.bhimanpallewar@mitaoe.ac.in</a><br/>" +
  "phone: +91 7219759645 <br/>",
  },




// vaibhav info object
  classyvaibhav: {
      aboutmeInfo: "A result-oriented Electronics & Telecommunication Engineering student from Pune, India, with a strong foundation in \n" +
"Embedded C Programming, MATLAB, and Embedded Systems, along with demonstrated leadership skills through significant roles in \n" +
"academic and extracurricular activities.\n" +
"\n" +
"Proactive learner with a passion for DIY electronics projects and exploring new technologies. Committed to applying theoretical \n" +
"knowledge to practical applications, as evidenced by a range of academic projects, including Real Time Implementation of CAN Protocol, \n" +
"IoT-Based Industrial Automation, and Automated Bottle Filling & Capping System.\n" +
"\n" +
"I actively engage in DIY electronics projects, always trying to build stuff from scratch, and I also prioritize eco-friendly living.\n",
 skillsInfo: "• Embedded C Programming\n" +
"• MATLAB\n" +
"• Circuit Design using Proteus and KiCad\n" +
"• PCB Design\n" +
"• Communication Protocols\n" +
"• Git\n" +
"• Linux\n" +
"• Operating Systems concepts\n" +
"• Basic networking concepts\n" +
"• Basic web scraping knowledge\n" +
"• Basic web development (HTML, CSS, JS, PHP)\n" +
"• Strong problem-solving and debugging skills\n" +
"• Creativity and ability to learn quickly\n" +
"• Exceptional communication\n" +
"• Successful working in a team environment, as well as independently\n" +
"• The ability to work under pressure and multi-task\n" +
"• The ability to follow instructions and deliver quality results\n" +
"• The ability to quickly come up to speed on a new project\n",

experienceInfo: "Dec 2022 - Present\n" +
"President | SPARK CLUB, MIT Academy of Engineering\n" +
"• Organized various tech workshops and events for students under Spark Club.\n" +
"• Coordinated events to enhance technical skills and awareness in the college community.\n" +

"\nApr 2024\n" +
"Team Lead | TechnoPHILIA 2024\n" +
"• Led a national-level project competition and poster presentation event.\n" +
"• Managed a team to successfully execute the event, attracting participants from across the country.\n" +

"\nSep 2019 - Jun 2022\n" +
"Cultural Head | Government Polytechnic\n" +
"• Led the cultural committee in organizing and managing various events at the institute level.\n",
educationInfo: "2025 Bachelor of Engineering - Electronics & Telecommunication Engineering\n" +
"MIT Academy of Engineering, Pune\n" +
"Notable courses:\n" +
"Embedded Systems, Digital Electronics, Communication Protocols, Circuit Design, VLSI Design\n" +
"Projects:\n" +
"Real Time Implementation of CAN Protocol, Warehouse Management System Using CC-link Protocol Devices and STM32, IOT Based Industrial Automation, Weapon Detection and Alert System\n" +

"\n2022 Diploma - Electronics & Telecommunication Engineering\n" +
"Government Polytechnic, Dharashiv | 86.00%\n" +
"Notable classes:\n" +
"Digital Electronics, C Programming, Microprocessor Architecture, Robotics\n" +
"Diploma Project:\n" +
"Automated Bottle Filling & Capping System\n",

projectsInfo:
"Real Time Implementation of CAN Protocol\n"+
"Warehouse Management System Using CC-link Protocol Devices and STM32\n"+
"IOT Based Industrial Automation\n"+
"Weapon Detection and Alert System"+
"IOT Based Air Quality Monitoring System\n"+
"Face Recognition Based Attendance System Using ESP32 CAM\n"+
"Gesture Controlled Robotic Car(Diploma Project)",
interestsInfo: "• Software Development\n" +
"• Electronics  \n" +
"• Cyber Security\n" +
"• Ethical Hacking \n" +
"• Physics\n" +
"• Eastern Philosophy\n" +
"• Psychology \n" +
"• Everything DIY \n" +
"• Permaculture gardening\n" +
"• Cooking\n" +
"• Animal Welfare \n" +
"• Social Justice \n" +
"• Activism\n",

contactInfo: "email: <a href='mailto: Vaibhav.kawade@mitaoe.ac.in'>Vaibhav.kawade@mitaoe.ac.in</a><br/>"+
"phone: +91 9130601015 <br/>",

  },


  // Richa info object
  richa: { 
    aboutmeInfo: " I seek challenging opportunities where I can fully use my skills for the success of organization. I am adept at collaborating with multidisciplinary teams and communicating complex ideas effectively facilitating smooth project execution. As I progress in my academic journey, I am eager to leverage my skills and enthusiasm to contribute meaningfully to challenging projects.\n",

    skillsInfo:" circuit design\n"+
                "MATLAB\n"+
                "Embedded C\n"+
                "c\n"+
                "Java\n"+
                "Network Design\n"+
                "Documentation and paper writing\n",

    experienceInfo:"Member of ISA | International Society of Automation\n"+
                  "Member of SAE international | Society of Automative Engineers\n"+
                  "Co-ordinator | TechnoPhilia 2024",

    educationInfo:"2025 Bachelor of Engineering - Electronics & Telecommunication Engineering\n" +
      "MIT Academy of Engineering, Pune\n" +
      "Notable courses:\n" +
      "Embedded Systems, Digital Electronics, Communication Protocols, Circuit Design, VLSI Design\n" +
      "Projects:\n" +
      "Real Time Implementation of CAN Protocol, Warehouse Management System Using CC-link Protocol Devices and STM32, IOT Based Industrial Automation\n" +


      "\n2022 Diploma - Electronics & Telecommunication Engineering\n" +
    " cusrow wadia institute of technology, pune, Pune | 84.00%\n" +
    "Notable classes:\n" +
    "Digital Electronics, C Programming, Microprocessor Architecture, Robotics\n" ,

    projectsInfo:"Automatic Water bottle filling system"+
                " Welcome robot"+
                " Automatic plant watering system",
    
    interestsInfo:"Music"+
                  " learning foreign languages"+
                  " Art and painting"+
                  " Team building",
                
    contactInfo: "email: <a href='mailto: richa.badhel@mitaoe.ac.in'>richa.badhel@mitaoe.ac.in</a><br/>"+
"phone: +91 91588075260 <br/>",
  
    

   },

   // Riddhi info object
  riddhi: { 
    aboutmeInfo:"I'm Riddhi Badhe from E&TC engineering.",

    skillsInfo:"IOT Technologies:\n"+
                "Arduino, Rasberry pi, MQTT"+
                "Programming:"+
                "C/C++, Python, Embedded C"+
                "Ability to work independantly and collabaratively",
                
    experienceInfo: "Member of ISA | International Society of Automation\n"+
                  "Member of SAE international | Society of Automative Engineers\n"+
                  "Co-ordinator | TechnoPhilia 2024",

    educationInfo:"2025 Bachelor of Engineering - Electronics & Telecommunication Engineering\n" +
                  "MIT Academy of Engineering, Pune\n" +
                  "Notable courses:\n" +
                  "Embedded Systems, Digital Electronics, Communication Protocols, Circuit Design, VLSI Design\n" +
                  "Projects:\n" +
                  "Real Time Implementation of CAN Protocol, Warehouse Management System Using CC-link Protocol Devices and STM32, IOT Based Industrial Automation, Weapon Detection and Alert System\n" +
            
            
                  "\n2022 Diploma - Electronics & Telecommunication Engineering\n" +
                " cusrow wadia institute of technology, pune, Pune | 90.00%\n" +
                "Notable classes:\n" +
                "Digital Electronics, C Programming, Microprocessor Architecture, Robotics\n" ,
    projectsInfo:"Automatic Water bottle filling system"+
                "Weapon Detection and Alert System"+
                " Automatic plant watering system",
    interestsInfo:"",

    contactInfo:"email: <a href='mailto: Riddhi.badhel@mitaoe.ac.in'>riddhi.badhel@mitaoe.ac.in</a><br/>"+
"phone: +91 7276054941 <br/>",

   }
};
