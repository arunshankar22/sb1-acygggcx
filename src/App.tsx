import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Code2, Cpu, Database } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'employment', label: 'Employment History' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const categorizedSkills = {
    "Architecture & Design": [
      "Digital Transformation",
      "Enterprise Architecture",
      "Architecture Governance",
      "Architecture Strategic",
      "Microservices Architecture",
      "Service Oriented Architecture (SOA)",
      "Event Driven Architecture",
      "Synchronous & Asynchronous patterns"
    ],
    "Cloud & Infrastructure": [
      "Multi Cloud (AWS, GCP, PCF, Openshift)",
      "Cloud Computing",
      "Public Cloud",
      "Docker and Kubernetes",
      "Platform Engineering"
    ],
    "AI & Data": [
      "Data and AI",
      "AI/ML Models",
      "Gen AI",
      "Realtime Complex Event Processing",
      "Data Science"
    ],
    "Development & Programming": [
      "Java",
      "Spring Boot/Batch",
      "React JS",
      "React Stomp and Websocket",
      "Python",
      "Angular JS",
      "HTML5 & CSS3",
      "Javascript",
      "Node.js"
    ],
    "Frameworks & Tools": [
      "Spring 6",
      "Spring Security",
      "Hibernate 6",
      "IBatis",
      "Drools Jboss Rules",
      "Drools Guvnor",
      "Activiti",
      "Flowable Workflow"
    ],
    "APIs & Integration": [
      "API Gateway (Spring, Kong, Axway)",
      "REST API",
      "OAuth 2.0",
      "JSON Web Token (JWT)",
      "SAML 2.0",
      "OpenID Connect (OIDC)",
      "Publish Subscribe (Apache Kafka)"
    ],
    "Databases & Storage": [
      "Maria DB",
      "Oracle 10g (PL/SQL)",
      "MySQL",
      "H2",
      "MongoDB",
      "SingleStore",
      "ElasticSearch",
      "Redis",
      "Aerospike",
      "Geode"
    ],
    "Visualization & Analytics": [
      "Cloudera Viz",
      "Grafana",
      "Tableau",
      "Apache Nifi"
    ],
    "DevOps & Engineering Practices": [
      "DevOps",
      "SRE",
      "Test-Driven Development (TDD)",
      "Maven",
      "Gradle"
    ],
    "Operating Systems": [
      "Linux",
      "Unix",
      "Windows"
    ],
    "Soft Skills": [
      "Leadership",
      "Collaboration",
      "Innovation",
      "Change Management",
      "Stakeholder Management"
    ]
  };

  const certificates = [
    {
      title: "Distinguished Engineer (DE - Principal Engineer)",
      date: "February 2023",
      description: "Recognized as distinguished Principal Engineer at DBS Bank for technical mastery and expertise.",
      icon: Award
    },
    {
      title: "TOGAF 9 Certified",
      date: "January 2019",
      description: "Globally recognized certification for Enterprise Architecture framework.",
      icon: BookOpen
    },
    {
      title: "AWS Certified Solutions Architect - Professional",
      date: "October 2020",
      description: "Professional exam for solutions architect role with 2+ years of hands-on AWS experience.",
      icon: Award
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      date: "October 2020",
      description: "Associate certification for designing available, cost-efficient systems on AWS.",
      icon: Award
    },
    {
      title: "C2MA Best Team Player Award",
      date: "December 2019",
      description: "Awarded for exceptional contribution to Customer Science platform development.",
      icon: Award
    },
    {
      title: "*STAR* Performer Award",
      date: "January 2013",
      description: "Best design award for Multi Channel Engine (MCE) at Barclays Technology.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-gray-900">Arun Shankar Balasubramanian</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === section.id
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                alt="Tech Background 1"
                className="w-96 h-96 object-cover rounded-lg transform rotate-6 animate-float"
              />
              <img
                src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                alt="Tech Background 2"
                className="w-96 h-96 object-cover rounded-lg transform -rotate-6 animate-float-delayed"
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Senior Solutions Architect
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Specializing in AI, ML, Cloud Solutions & Digital Innovation
            </p>
            <p className="text-lg md:text-xl text-indigo-600 mb-8">
              Holding Australia PR Visa - Global Talent (Subclass 858)
            </p>
            <div className="flex justify-center space-x-4">
              <button onClick={() => scrollToSection('contact')} className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
                Get in Touch
              </button>
              <button onClick={() => scrollToSection('about')} className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <div className="flex items-start space-x-4">
                    <Cpu className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Innovation Expert</h3>
                      <p className="text-gray-600">
                        Expertise in Digital Innovation and Big Data Analytics with over 15 years of experience in implementing digital strategies and innovative real-time analytics solutions. Specialized in transforming complex business requirements into scalable technical solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <div className="flex items-start space-x-4">
                    <Database className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Distinguished Engineer</h3>
                      <p className="text-gray-600">
                        Recognized as a Distinguished Engineer (DE) with extensive architectural experience in designing and building solutions for large-scale enterprise systems. Led and mentored teams of 50+ members across onsite and remote locations, driving innovation and technical excellence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <div className="flex items-start space-x-4">
                    <Code2 className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud & AI Solutions Architect</h3>
                      <p className="text-gray-600">
                        Experienced Cloud Architect with over 5 years of expertise in Cloud Native solutions, including microservices, APIs, and DevOps. Proven track record in implementing AI/ML solutions, Gen AI applications, and real-time analytics platforms that drive business value.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <div className="flex items-start space-x-4">
                    <Award className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Leadership</h3>
                      <p className="text-gray-600">
                        Successfully led digital transformation initiatives resulting in $150K revenue uptick in 2024 and $1M+ in cost savings. Expert in Test-Driven Development (TDD), stakeholder management, and implementing enterprise-wide solutions across multiple countries.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <div className="flex items-start space-x-4">
                    <Briefcase className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Experience</h3>
                      <p className="text-gray-600">
                        Extensive experience in Banking and Financial Services, specializing in developing innovative solutions for major institutions including DBS Bank, Standard Chartered Bank, Citibank, and Barclays Technologies. Proven expertise in regulatory compliance and secure system design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <img
                  src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Technology workspace"
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                />

                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Highlights</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-lg">•</span>
                      <span className="text-gray-600">AWS Certified Solutions Architect (Professional & Associate)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-lg">•</span>
                      <span className="text-gray-600">TOGAF 9 Certified Enterprise Architect</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-lg">•</span>
                      <span className="text-gray-600">Led development of award-winning Cognitive Nudge Suite</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-lg">•</span>
                      <span className="text-gray-600">Expertise in AI/ML, Cloud Computing, and Digital Transformation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-lg">•</span>
                      <span className="text-gray-600">Strong background in microservices and event-driven architecture</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Competencies</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      <span className="text-gray-600">Digital Innovation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      <span className="text-gray-600">Cloud Architecture</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      <span className="text-gray-600">AI/ML Solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      <span className="text-gray-600">Tech Leadership</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      <span className="text-gray-600">Enterprise Architecture</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      <span className="text-gray-600">DevOps & SRE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Employment History */}
        <section id="employment" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Employment History</h2>
            <div className="space-y-12">
              {/* DBS Bank */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">Senior Solutions Architect</h3>
                    <p className="text-gray-600">DBS Bank, Singapore (May 2019 - Present)</p>
                  </div>
                </div>
                <div className="pl-9">
                  <p className="text-gray-600 mb-4">Key Projects:</p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Cognitive Nudge Suite (CNS)</h4>
                      <p className="text-gray-600 mb-2">IMDA Awards top 3 finalist for Best Adoption. A Low Code/No Code platform consisting of:</p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Cognitive Rules Engine (CRE) – Custom built Drools-based rule engine</li>
                        <li>Cognitive Arbitration Layer (CAL) - Overarching common layer for customer-centric nudges</li>
                        <li>Contextual FX pricing system</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">AI Industrialization & Wealth Copilot</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Built SAM (automated machine learning platform)</li>
                        <li>Developed RM facing UI tool using Gen AI</li>
                        <li>Implemented Next Best Conversation system</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Achieved $150K revenue uptick in 2024</li>
                        <li>Scaled solutions across multiple countries with $1M savings</li>
                        <li>Led team of 50 members across onsite and remote locations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standard Chartered Bank */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">Architect</h3>
                    <p className="text-gray-600">Standard Chartered Bank, Singapore (July 2018 - May 2019)</p>
                  </div>
                </div>
                <div className="pl-9">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Projects</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Voice Biometrics implementation for Private Banking customers</li>
                        <li>Client Collaboration platform using Moxtra</li>
                        <li>PSD2 regulatory requirement implementation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technical Achievements</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Implemented OAuth framework using WSO2</li>
                        <li>Developed JWT token-based authentication system</li>
                        <li>Created resource-based REST APIs using CUPID</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* DBS Bank (Senior Consultant) */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">Senior Consultant</h3>
                    <p className="text-gray-600">DBS Bank, Singapore (January 2016 - July 2018)</p>
                  </div>
                </div>
                <div className="pl-9">
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Implemented microservices in Pivotal Cloud Foundry (PaaS)</li>
                    <li>Led Test-Driven Development (TDD) initiatives</li>
                    <li>Expertise in Spring frameworks and UI development</li>
                    <li>Experience with SAML 2.0 and OpenID Connect (OIDC)</li>
                  </ul>
                </div>
              </div>

              {/* Citibank */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">Solution Architect</h3>
                    <p className="text-gray-600">Citibank, Singapore (November 2014 - January 2016)</p>
                  </div>
                </div>
                <div className="pl-9">
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Led solution design for Retail Banking system in AGILE environment</li>
                    <li>Created Design Charters and Target state architecture models</li>
                    <li>Collaborated with multiple stakeholders for design solutions</li>
                  </ul>
                </div>
              </div>

              {/* Oracle Financial Services */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">Developer</h3>
                    <p className="text-gray-600">Oracle Financial Services Software Ltd, Bengaluru (January 2010 - April 2012)</p>
                  </div>
                </div>
                <div className="pl-9">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Projects</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Credit Application Scoring system integration with Experian</li>
                        <li>ATM transaction system implementation</li>
                        <li>Design document creation and analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-4">{category}</h3>
                  <div className="space-y-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Certificates & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-12 h-12 text-indigo-600" />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                        <p className="text-gray-600">{cert.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{cert.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact & Socials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                  <span className="text-gray-600">Sydney, Australia</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-indigo-600" />
                  <span className="text-gray-600">arun.zorro@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w- 6 h-6 text-indigo-600" />
                  <span className="text-gray-600">+61 493 907 943</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="w-6 h-6 text-indigo-600" />
                  <a href="https://github.com/arunshankar22" className="text-indigo-600 hover:text-indigo-700">
                    github.com/arunshankar22
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-6 h-6 text-indigo-600" />
                  <a href="https://linkedin.com/in/arun-shankar-b-657827a6" className="text-indigo-600 hover:text-indigo-700">
                    linkedin.com/in/arun-shankar-b-657827a6
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;