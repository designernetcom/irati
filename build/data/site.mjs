/**
 * WO's IRATI — site content.
 * Every fact here comes from irati.co.in (homepage, about, product & services,
 * course & syllabus, the six course pages, robotic arm events, contact, blog).
 * Nothing is invented: if the source does not state it, it is not in this file.
 */

export const brand = {
  name: "WO's IRATI",
  legalName: 'IRATI — Industrial Robotics Automation & Training Institute',
  full: 'Industrial Robotics Automation & Training Institute',
  parent: 'WO Group',
  founded: '2015',
  founder: 'Mr. WAGHCHOURE S. R.',
  domain: 'https://irati.co.in',
};

export const contact = {
  addressLines: [
    "WO's IRATI, Opposite Dapodi Metro Station,",
    'Behind Bharat Petrol Pump, Old Mumbai-Pune Highway,',
    'Dapodi, Pune 411012.',
  ],
  street: 'Opposite Dapodi Metro Station, Behind Bharat Petrol Pump, Old Mumbai-Pune Highway, Dapodi',
  city: 'Pune',
  region: 'Maharashtra',
  postal: '411012',
  country: 'IN',
  phones: ['+91 8446462448', '+91 8483902448'],
  emails: ['info@irati.co.in', 'project@wogroup.in'],
  whatsapp: '918446462448',
  geo: { lat: '18.583298', lng: '73.832566' },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.794571151432!2d73.832566!3d18.583297999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMTjCsDM0JzU5LjkiTiA3M8KwNDknNTcuMiJF!5e0!3m2!1sen!2sin!4v1660289633060!5m2!1sen!2sin',
  mapLink: 'https://www.google.com/maps?q=18.583298,73.832566',
};

/* Verified on irati.co.in — "installed more than 18 robots all over INDIA and
   completed more than 32 Automation Projects in INDIA", WO Group formed 2015,
   "WO is served various customers all over INDIA". */
export const stats = [
  { value: 18, suffix: '+', label: 'Robots Installed', note: 'Industrial robots installed by our team across India.' },
  { value: 32, suffix: '+', label: 'Automation Projects', note: 'Automation projects completed for industry in India.' },
  { value: null, text: '2015', label: 'WO Group Established', note: 'Founded by Mr. WAGHCHOURE S. R.', numeric: true },
  { value: null, text: 'PAN INDIA', label: 'Customer Presence', note: 'Customers and projects served all over India.' },
];

export const services = [
  {
    slug: 'industrial-robotics-automation-training',
    icon: 'training',
    title: 'Industrial Robotics Automation &amp; Training',
    short: 'Advanced industrial robotics programming and hands-on training.',
    body: 'Advanced industrial robotics programming training built around real robot cells — teach pendant work, welding programming and pick-and-place programming — so you build the technical skills industry actually asks for.',
  },
  {
    slug: 'industrial-robotics-automation',
    icon: 'automation',
    title: 'Industrial Robotics Automation',
    short: 'Robotic automation knowledge and solutions for industrial applications.',
    body: 'Robotic automation for production lines. We help businesses and professionals apply robotic systems to optimise production processes and increase efficiency, from system set-up through to performance enhancement.',
  },
  {
    slug: 'robotics-installation',
    icon: 'installation',
    title: 'Robotics Installation',
    short: 'Robot setup, configuration, calibration and optimization.',
    body: 'From setup to system optimisation — configuring, calibrating and fine-tuning robotic systems so they run reliably across industrial applications. We are known for completing projects at the customer site in seven days.',
  },
  {
    slug: 'robots-on-rent',
    icon: 'rental',
    title: 'Robots on Rent',
    short: 'Short-term robotics rental for demonstrations, events and process development.',
    body: 'Explore robotics without a long-term commitment. We rent robots to businesses and event organisers for product demonstrations, corporate events and process development.',
  },
  {
    slug: 'robotic-arm-events',
    icon: 'events',
    title: 'Robotics Arm Events',
    short: 'Robotic-arm solutions for product launches, inaugurations, corporate events and entertainment.',
    body: 'Robotics is no longer limited to the shop floor. We bring robotic arms to the entertainment industry for new product launches, inaugurations of events, stunts and performances.',
  },
];

/* "completed various projects involving operations as PICK and PLACE, Welding,
   Spray painting, Suction cup, Palletizing and other" + the applications listed
   under "Specialized Robotics Training" on the homepage. */
export const applications = [
  { slug: 'pick-and-place', icon: 'pickplace', filter: 'handling', title: 'Pick &amp; Place', text: 'Pneumatic gripper pick and place for fast-moving assembly lines.' },
  { slug: 'welding', icon: 'welding', filter: 'process', title: 'Welding', text: 'Arc welding programming — critical for automotive and metal industries.' },
  { slug: 'spray-painting', icon: 'spray', filter: 'process', title: 'Spray Painting', text: 'Robotic spray painting that ensures uniform coverage and efficiency.' },
  { slug: 'suction-cup', icon: 'suction', filter: 'handling', title: 'Suction Cup', text: 'Suction cup pick and place, ideal for delicate material handling.' },
  { slug: 'palletizing', icon: 'palletizing', filter: 'handling', title: 'Palletizing', text: 'Robotic palletizing for repeatable end-of-line stacking and handling.' },
  { slug: 'line-drawing', icon: 'linedrawing', filter: 'precision', title: 'Line Drawing', text: 'Path-accurate line drawing, suitable for precision applications like electronics.' },
];

export const applicationFilters = [
  { value: '*', label: 'All Applications' },
  { value: '.handling', label: 'Material Handling' },
  { value: '.process', label: 'Process Applications' },
  { value: '.precision', label: 'Precision Paths' },
];

/* "Forging industries, Automobile industries, Metal industries, Machining
   industries, Welding/Fabrication industries and others" + the "Industries We
   Serve" list on the homepage. */
export const industries = [
  { icon: 'automotive', title: 'Automotive', text: 'Robotic welding, handling and assembly support for automobile manufacturing.' },
  { icon: 'manufacturing', title: 'Manufacturing', text: 'Manufacturing and automation lines with robotic cells integrated into production.' },
  { icon: 'welding', title: 'Welding &amp; Fabrication', text: 'Arc welding and fabrication cells for consistent, repeatable weld quality.' },
  { icon: 'packaging', title: 'Packaging &amp; Logistics', text: 'Pick and place, palletizing and end-of-line handling for packaging lines.' },
  { icon: 'aerospace', title: 'Aerospace', text: 'Precision robotic operations for aerospace component handling and finishing.' },
  { icon: 'forging', title: 'Forging', text: 'Robots working hot, heavy and hazardous forging duty cycles.' },
  { icon: 'metal', title: 'Metal Industries', text: 'Material handling and process automation across metal industries.' },
  { icon: 'machining', title: 'Machining Industries', text: 'Machine tending and part transfer for machining shops.' },
];

const SYL_CORE = [
  'Basic Introduction of Robot',
  'Safety — General Instructions, Auto / T1 / T2 Switch',
  'Teach Pendant — Top, Middle and Bottom Portion',
  'Co-ordinate System — Joint, Tool, User, JGFRM',
  'Creating Program — Motion, Position, Speed, Termination, Touch-Up, Motion Default',
];
const SYL_DATA = ['Data — Numeric Registers, Position Registers'];
const SYL_PROGRAM = ['Program Details — Program Create, Deleting a Program', 'Inputs &amp; Outputs'];
const SYL_FUNCTION = [
  'Function Bar — EDCMD Menu, INST Menu',
  'INST Menu — Inputs &amp; Outputs, The WAIT Instruction, Labels &amp; Jump Labels, IF Statement, Call Program',
  'Miscellaneous — User Alarm, Remark, Message',
];
const SYL_ADV = [
  'I/O Communication',
  'Logic Building',
  'Troubleshooting And Error Solving',
  'Installation',
  'Back Up',
];

export const courses = [
  {
    slug: 'operators',
    file: 'training/operators.html',
    nav: 'Operators',
    title: 'Industrial Robotics Programming Training for Operators',
    audience: 'Operators &amp; Technicians',
    tagline: 'Unlock the Future of Manufacturing with Advanced Robotics Training',
    short: 'Industrial Robotics Programming Training for Operators.',
    intro:
      "In today's fast-paced industrial landscape, staying ahead of the curve means mastering the latest technology. Our Industrial Robotics Programming Training for Operators is designed to equip you with the skills and knowledge required to excel in this dynamic field. Whether you are new to robotics or looking to enhance your current skill set, this training programme is your gateway to a career in industrial automation.",
    hours: 32,
    weeks: 2,
    schedule: '4 hrs/day, 4 days/week — or 8 hrs/day, 2 days/week',
    fee: '15,000',
    feeNote: '+ GST (18%)',
    image: 'teach-pendant-training.webp',
    imageAlt: 'IRATI trainee operating an industrial robot with a teach pendant at the Dapodi, Pune workshop',
    attend: [
      ['Operators &amp; Technicians', 'Those currently working in manufacturing or automation who want to upskill and take on more complex tasks.'],
      ['Manufacturing Operators', 'Individuals looking to enhance their skills in industrial robotics programming.'],
      ['Career Changers', 'Individuals from other fields interested in transitioning to a career in industrial automation.'],
    ],
    objectives: [
      ['Hands-On Training', 'Practical experience with industry-standard robotic systems and industrial robotics programming.'],
      ['Comprehensive Curriculum', 'From basic robot operation through to advanced programming techniques and troubleshooting.'],
      ['Expert Instructors', 'Learn from professionals with extensive experience in robotics and automation.'],
      ['Flexible Scheduling', 'Both online and on-site training options to fit around shift work.'],
    ],
    syllabus: [...SYL_CORE],
  },
  {
    slug: 'supervisors',
    file: 'training/supervisors.html',
    nav: 'Supervisors',
    title: 'Industrial Robotics Programming Training for Supervisors',
    audience: 'Supervisors &amp; Managers',
    tagline: 'Lead the Future of Automation with Advanced Robotics Training',
    short: 'Industrial Robotics Programming Training for Supervisors.',
    intro:
      'In the rapidly evolving world of industrial automation, effective supervision is key to ensuring seamless operations and maximising efficiency. Our Industrial Robotics Programming Training for Supervisors is designed to provide the leadership skills and technical knowledge needed to oversee complex robotic systems, and to manage teams in high-tech manufacturing environments.',
    hours: 32,
    weeks: 2,
    schedule: '4 hrs/day, 4 days/week — or 8 hrs/day, 2 days/week',
    fee: '25,000',
    feeNote: '+ GST (18%)',
    image: 'classroom-training.webp',
    imageAlt: 'Supervisors attending an industrial robotics training session at IRATI, Pune',
    attend: [
      ['Supervisors', 'Those currently in supervisory roles in manufacturing or automation who want to deepen their technical expertise in robotics.'],
      ['Managers', 'Operations and production managers who need a better understanding of robotics programming and its applications in their facilities.'],
      ['Engineers in Leadership Roles', 'Mechanical, electrical and industrial engineers moving into supervisory positions.'],
      ['Aspiring Leaders', 'Individuals aiming to step into supervisory roles within the robotics and automation industries.'],
    ],
    objectives: [
      ['Advanced Robotics Programming', 'Master the industrial robotics programming techniques used on the shop floor; optimise and troubleshoot robotic systems.'],
      ['Supervisory Skills Development', 'Best practices for overseeing robotic operations, ensuring safety and maintaining productivity.'],
      ['Automation Integration', 'Integrate robotics into larger automated systems and manage those integrations effectively.'],
      ['Safety and Compliance Management', 'Implement and enforce current safety standards in your workplace.'],
      ['Project Management in Robotics', 'Plan, execute and oversee robotics projects from start to finish.'],
    ],
    syllabus: [
      ...SYL_CORE,
      ...SYL_DATA,
      'Frames — Tool Frames and Tool Centre Points (TCP), Jog Frames, User Frames',
      ...SYL_PROGRAM,
      'Mastering, Calibration and Home Position',
    ],
  },
  {
    slug: 'robot-programmers',
    file: 'training/robot-programmers.html',
    nav: 'Robot Programmers',
    title: 'Industrial Robotics Programming Training for Robotic Programmers',
    audience: 'Robotic Programmers',
    tagline: 'Master the Art of Robotic Programming and Shape the Future of Automation',
    short: 'Industrial Robotics Programming Training for Robotic Programmers.',
    intro:
      'In the era of Industry 4.0, robotic programmers are the architects of modern manufacturing. Our Industrial Robotics Programming Training for Robotic Programmers is designed to give you the advanced skills and knowledge needed to excel in this critical role — whether you are an aspiring robotic programmer or refining existing expertise.',
    hours: 64,
    weeks: 4,
    schedule: '4 hrs/day, 4 days/week — or 8 hrs/day, 2 days/week',
    fee: '35,000',
    feeNote: '+ GST (18%)',
    image: 'robot-programming.webp',
    imageAlt: 'Industrial robot arm being programmed alongside a laptop in a training environment',
    attend: [
      ['Aspiring Robotic Programmers', 'Individuals entering industrial robotics programming who need a comprehensive skill set.'],
      ['Experienced Programmers', 'Professionals upgrading their skills to stay current with robotic technology.'],
      ['Engineers and Technicians', 'Mechanical, electrical and automation engineers or technicians specialising in robotics programming.'],
      ['Industry Professionals', 'Those in manufacturing, automotive, electronics or related fields deepening their expertise in robotic systems.'],
    ],
    objectives: [
      ['Core Programming', 'Write, optimise and debug complex programs for a range of robotic tasks.'],
      ['Robotic System Integration', 'Integrate robotic systems with other automation technologies.'],
      ['Running and Testing', 'Run robotic operations, test programs and troubleshoot issues before deployment.'],
      ['Optimization Techniques', 'Cycle time reduction, energy efficiency and accuracy improvements.'],
      ['Industry Standards and Safety', 'Design programs that prioritise both efficiency and safety.'],
    ],
    syllabus: [
      ...SYL_CORE,
      ...SYL_DATA,
      'Frames — Tool Frames and Tool Centre Points (TCP), User Frames',
      ...SYL_PROGRAM,
      ...SYL_FUNCTION,
      'Mastering, Calibration and Home Position',
      ...SYL_ADV,
    ],
  },
  {
    slug: 'robotic-engineers',
    file: 'training/robotic-engineers.html',
    nav: 'Robotic Engineers',
    title: 'Industrial Robotics Programming Training for Robotic Engineers',
    audience: 'Robotic &amp; Automation Engineers',
    tagline: 'Elevate Your Engineering Expertise with Cutting-Edge Robotics Training',
    short: 'Industrial Robotics Programming Training for Robotic Engineers.',
    intro:
      "As the backbone of modern automation, robotic engineers design and implement the systems that drive today's industries. This programme is tailored to provide the advanced technical skills required in that role — including the gearbox, servo motor and installation work that sits at the heart of our hands-on approach.",
    hours: 64,
    weeks: 4,
    schedule: '4 hrs/day, 4 days/week — or 8 hrs/day, 2 days/week',
    fee: '45,000',
    feeNote: '+ GST (18%)',
    image: 'robot-installation.webp',
    imageAlt: 'IRATI engineer working hands-on on an industrial robot arm during maintenance training',
    attend: [
      ['Robotic Engineers', 'Professionals in robotics and automation enhancing their programming and system integration skills.'],
      ['Mechanical and Electrical Engineers', 'Engineers specialising in robotics programming and automation.'],
      ['Automation Engineers', 'Those designing and maintaining automated systems who want to expand into robotics.'],
      ['Advanced Technicians', 'Technicians upgrading their skills to move into engineering roles within robotics.'],
    ],
    objectives: [
      ['Advanced Industrial Robotics Programming', 'Create, test and optimise complex robotic systems using industry-standard tools.'],
      ['System Design and Integration', 'Work with PLCs, sensors, actuators and other components to build cohesive systems.'],
      ['Optimization and Efficiency', 'Improve cycle times, enhance accuracy and reduce energy consumption.'],
      ['Compliance and Safety Engineering', 'Design robotic systems that meet stringent safety and compliance requirements.'],
    ],
    syllabus: [
      ...SYL_CORE,
      ...SYL_DATA,
      'Frames — Tool Frames and Tool Centre Points (TCP), Jog Frames, User Frames',
      ...SYL_PROGRAM,
      ...SYL_FUNCTION,
      'Mastering, Calibration and Home Position',
      ...SYL_ADV,
      'Internal Working / Greasing of Gearbox',
      'Robot Installation &amp; Integration',
      'Servo Motor Replacement',
    ],
  },
  {
    slug: 'college-students',
    file: 'training/college-students.html',
    nav: 'College Students',
    title: 'Industrial Robotics Programming Training for College Students',
    audience: 'College Students',
    tagline: 'Graduate With Industrial Robotics Experience, Not Just Theory',
    short: 'Industrial Robotics Programming Training for College Students.',
    intro:
      'WO started this institute for working professionals and for college students so that anyone can gain working knowledge of industrial robots. This programme gives students the practical, industrial-level robotics experience that a degree course rarely covers — on real robots, using an actual industrial training syllabus.',
    hours: 64,
    weeks: 4,
    schedule: '4 hrs/day, 4 days/week — or 8 hrs/day, 2 days/week',
    fee: '25,000',
    feeNote: '+ GST (18%)',
    image: 'student-robotics-training.webp',
    imageAlt: 'Engineering students learning industrial robotics around a robot cell',
    attend: [
      ['Engineering &amp; Science Students', 'College students pursuing degrees in engineering, computer science or related fields.'],
      ['Future Automation Professionals', 'Students exploring career opportunities in industrial robotics and automation.'],
      ['Educational Institutions', 'Colleges seeking to enhance their robotics curriculum with practical industry training.'],
    ],
    objectives: [
      ['Practical Experience', 'Hands-on training with real robotic systems and programming tools.'],
      ['Student-Focused Curriculum', 'Essential topics from basic robot operation to intermediate programming techniques.'],
      ['Career Readiness', 'Skills that employers in the robotics and manufacturing industries actively look for.'],
      ['Flexible Learning', 'Online and on-site options that fit around an academic schedule.'],
    ],
    syllabus: [
      ...SYL_CORE,
      ...SYL_DATA,
      'Frames — Tool Frames and Tool Centre Points (TCP), Jog Frames, User Frames',
      ...SYL_PROGRAM,
      'Mastering, Calibration and Home Position',
    ],
  },
  {
    slug: 'entrepreneurs',
    file: 'training/entrepreneurs.html',
    nav: 'Entrepreneurs',
    title: 'Training for Robotics Entrepreneurs, Startup Leaders and Freelancers',
    audience: 'Entrepreneurs, Startup Leaders &amp; Freelancers',
    tagline: 'Build a Robotics Business, Not Just a Skill Set',
    short: 'Training for Robotics Entrepreneurs, Startup Leaders and Freelancers.',
    intro:
      "At WO's IRATI we bridge the gap between technology and business, with specialised programmes for entrepreneurs, startup leaders and freelancers in industrial robotics. Each track combines detailed industrial robotics programming training with the commercial skills needed to launch, lead or freelance in this sector.",
    hours: null,
    weeks: null,
    schedule: 'Scheduled around your business commitments',
    fee: null,
    feeNote: 'Customised — contact us for a quotation',
    customised: true,
    image: 'robotics-engineering-lab.webp',
    imageAlt: 'Robotics engineers collaborating in an industrial robotics laboratory',
    attend: [
      ['Entrepreneurs', 'Founders who want the business knowledge and technical skills needed to start and scale a robotics company.'],
      ['Startup Leaders', 'Leaders who must master both the technical side of robotics and business management.'],
      ['Freelancers', 'Independent engineers expanding the services they can offer to industrial clients.'],
    ],
    objectives: [
      ['Detailed Training', 'Detailed industrial robotics programming training as the technical foundation.'],
      ['Business Planning', 'Draft effective business plans and secure funding.'],
      ['Product Development', 'Design robotics products and solutions.'],
      ['Market Insights', 'Understand market trends, competition and customer needs.'],
      ['Leadership Development', 'Manage teams, scale operations and lead innovation in robotics.'],
      ['Automation Strategies', 'Implement robotic systems that boost efficiency in manufacturing and logistics.'],
      ['Financial Strategy', 'Budgeting, revenue models and operational efficiency for a competitive startup.'],
      ['Installation and Maintenance', 'Offer robot installation, system optimisation and troubleshooting as a service.'],
      ['Client Acquisition', 'Market freelance services and build a client base.'],
    ],
    syllabus: null,
    syllabusNote:
      'The syllabus for this programme is fully customised. WO builds the course content around your specific business goals, vision or freelancing needs — contact us to have a syllabus prepared for you.',
  },
];

/* Topics taken from the published IRATI course syllabi. */
export const handsOn = [
  {
    id: 'fundamentals',
    label: 'Robot Fundamentals',
    lead: 'Start at the pendant and work up to full motion programs on a live industrial robot.',
    items: ['Robot Programming', 'Teach Pendant', 'Coordinate Systems', 'Motion Programming'],
  },
  {
    id: 'data-frames',
    label: 'Data &amp; Frames',
    lead: 'Registers, frames and signal handling — the parts of a program that make it reusable.',
    items: ['Position Registers', 'Tool Frames', 'User Frames', 'Inputs &amp; Outputs'],
  },
  {
    id: 'accuracy',
    label: 'Accuracy &amp; Setup',
    lead: 'Getting a robot to its true position, and getting it back there after a fault.',
    items: ['Mastering', 'Calibration', 'Robot Installation', 'Backup'],
  },
  {
    id: 'maintenance',
    label: 'Maintenance &amp; Integration',
    lead: 'The mechanical work that our engineer programme is built around.',
    items: ['Troubleshooting', 'Gearbox Maintenance', 'Servo Motor Replacement', 'Robot Integration'],
  },
];

export const whyChoose = [
  { icon: 'hands', title: 'Hands-On Learning', text: 'Practical experience with industrial robotics and automation systems — on real robots, not simulators alone.' },
  { icon: 'factory', title: 'Industry-Focused Training', text: 'Training designed around real industrial applications, using an actual industrial-level syllabus.' },
  { icon: 'roles', title: 'Role-Specific Programs', text: 'Separate courses for operators, supervisors, programmers and engineers, so the content matches the job.' },
  { icon: 'group', title: 'WO Group Experience', text: 'IRATI is backed by WO Group, which has worked in industrial robotics and automation since 2015.' },
  { icon: 'target', title: 'Real Industrial Applications', text: 'Training covers the applications we deliver in the field: pick and place, welding, spray painting, suction cup and palletizing.' },
  { icon: 'sliders', title: 'Customized Training', text: 'Programmes can be tailored for companies, for specific roles and for individual business goals.' },
];

export const processSteps = [
  { n: '01', title: 'Planning', text: 'Understanding the application, cycle time and layout before anything is ordered or moved.' },
  { n: '02', title: 'Installation', text: 'Mechanical installation of the robot, controller and cell hardware at your site.' },
  { n: '03', title: 'Configuration', text: 'Controller configuration, I/O mapping and end-effector setup for your process.' },
  { n: '04', title: 'Calibration', text: 'Mastering, tool frames and user frames set so positions are accurate and repeatable.' },
  { n: '05', title: 'Programming', text: 'Motion, logic and I/O programming written for the actual production sequence.' },
  { n: '06', title: 'Testing', text: 'Full trial runs — we build the complete trial at our premises before dispatch.' },
  { n: '07', title: 'Integration', text: 'Integration with the surrounding line and handover, with your staff trained on the cell.' },
];

export const eventUses = [
  { icon: 'launch', title: 'Product Launches', text: 'A robotic arm reveal for the launch of a new product.' },
  { icon: 'ribbon', title: 'Inaugurations', text: 'Robotic-arm inaugurations for events and new facilities.' },
  { icon: 'corporate', title: 'Corporate Events', text: 'Robotics as the centrepiece of a corporate function or exhibition stand.' },
  { icon: 'entertain', title: 'Entertainment', text: 'Stunts and performances using industrial robotic arms.' },
  { icon: 'demo', title: 'Interactive Demonstrations', text: 'Live, programmable demonstrations an audience can watch up close.' },
];

export const rentalUses = ['Product demonstrations', 'Corporate events', 'Process development'];

export const requirementTypes = [
  'Robotics Training',
  'Industrial Automation',
  'Robotics Installation',
  'Robot Rental',
  'Robotic Arm Event',
  'Corporate Training',
  'General Enquiry',
];

/* Images picked per post from the IRATI media library. */
export const blogImages = {
  'industrial-robotics-classes-in-pune': ['robotics-training-pune.webp', 'An industrial robotics class in progress at IRATI, Dapodi, Pune'],
  'industrial-robotics-programming-training-by-wo-group': ['classroom-training.webp', 'A WO Group industrial robotics training session in progress'],
  'how-industrial-robotics-programming-training-helps-you-get-promoted': ['robot-programming.webp', 'Engineer programming an industrial robot arm from a laptop'],
  'how-industrial-robotics-training-will-make-you-the-futures-industry-leader': ['robotics-engineering-lab.webp', 'Robotics engineers working together in an industrial robotics lab'],
  'why-provide-industrial-robotics-programming-training-to-your-staff': ['factory-automation.webp', 'Robotic cells running on a manufacturing plant floor'],
  'how-industrial-robotics-training-will-improve-your-chances-of-getting-hired': ['student-robotics-training.webp', 'Students gaining practical experience on industrial robot arms'],
  'why-robotic-arm-welding-programming-training-trumps-traditional-welding': ['industrial-automation.webp', 'Robotic welding arms on an automotive production line'],
  'why-working-professionals-should-take-industrial-robotics-programming-training': ['teach-pendant-training.webp', 'A working professional learning teach pendant programming at IRATI'],
};
