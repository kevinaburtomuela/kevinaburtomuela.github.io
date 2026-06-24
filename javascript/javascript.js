// 🌙 MODO OSCURO / CLARO
const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

// 🌐 TRADUCCIONES
const translations = {
  en: {
    about_me: "ABOUT ME",
    about_me_text: "I am a tester with 9 years of experience in the testing area. I have an ISTQB certification and a Scrum certification. I have 7 years of experience working with Agile methodologies, 6 years of experience using SQL Server, and 2 years of experience using Oracle. I also have 6 years of experience using Jira, as well as various applications for test case creation, bug reporting, and trazability tools",
    work_experience: "WORK EXPERIENCE",
    fecha_qualtop: "March 2024 – March 2026 | CDMX",
    qualtop_perfoned: "Performed functional manual testing (black box, UAT, regression, confirmation, smoke, and system testing).",
    qualtop_analyzed: "Analyzed client requirements using Jira to create test cases.",
    qualtop_api: "Performed API testing using Postman.",
    qualtop_created: "Created and executed SQL Server queries.",
    qualtop_managed: "Managed test lifecycle using Jira and XRAY.",
    qualtop_cypress: "Developed automated test cases using Cypress.",
    qualtop_docker: "Configured and executed automated test suites in Jenkins and managed code deployment using Docker.",
    date_ready:"June 2022 – December 2023", 
    ready_review: "Reviewed requirements using Figma and Jira.",
    ready_perfomed: "Performed UI testing based on Figma files.",
    ready_execute: "Create and Execute queries in SQL Server and Oracle.",
    ready_manage:"Managed defects using Azure DevOps and Jira.",
    date_go:"July 2021 – June 2023",
    go_perfoned: "Performed functional manual testing (black box, UAT, regression, confirmation, smoke, and system testing).",
    go_understanding:"Understanding the client requirements by studying functional documents (Jira), in order to create test cases, validate and compare expected behaviors in the test runs.",
    go_performed:"Performed UI testing based on Excels, PDF´s, Words files by enabling the web browser console and comparing the displayed elements to the reference document.",
    go_training:"Personnel Training in Test Area for several applications for BANXICO wiretransfer services such as SPEI, SPID, GBS and CEP",
    go_manage:"Manage the bug traceability and the test life cycle with several tools, such as Octane and Jira",    
    go_create:"Create and maintain automated scripts using RAFT, with Java and UiMap.",
    praxis_performed:"Performed functional manual testing (black box, UAT, branch integration, regression, confirmation, smoke, and system testing).",
    date_praxis:"July 2018 – July 2021 | CDMX",    
    praxis_performed:"Performed functional manual testing (black box, UAT, branch integration, regression, confirmation, smoke, and system testing).",
    praxis_perfomed_ui:"Performed UI testing based on Figma files by enabling the web browser console and comparing the displayed elements to the reference document.",
    praxis_create:"Create and run querys for several data base managers such as SQL server, Oracle and Sybase.",
    praxis_manage:"Manage the bug traceability and the test life cycle with several tools, such as Bugzilla, testlink and Qtest.",
    praxis_deploy:"Deploy and Maintenance of environments with several appservers such as Weblogic, Jboss and WAS.",
    praxis_configuration:"Configuration of the automation environment.",
    praxis_maintenance:"Maintenance of automated scripts.",
    praxis_automated:"Create and maintain automated scripts using Selenium and Java.",
    praxis_understanding:"Understanding the client requirements by Google Docs, in order to create test cases, validate and compare expected behaviors in the test runs.",
    date_dydesa:"January 2016 – July 2017 | Acapulco, Gro",
    dydesa_performed:"Performed functional and performance testing.",
    dydesa_created:"Created test cases from user stories.",
    dydesa_functional:"Performed UI testing based on functional documentation.",
    soft_skills: "SOFT SKILLS",
    critical_thinking: "Critical thinking",    
    reliable: "Reliable",
    team_work: "Team work",    
    social_skills: "Social skills",
    work_ethics: "Work ethics",
    problem_solving: "Problem solving ability",
    cooperation: "Cooperation",
    handling_pressure: "Handlingpressure",
    leadership: "Leadership",
    lenguajes: "Lenguajes",    
    spanish: "Spanish – Native",
    english: "English - B2",
    tools: "TOOLS",
    certifications: "CERTIFICATIONS",    
    certifications_course: "Certifications",
    specialization_courses: "Specialization courses",
    other_courses: "Other courses",
    projects: "PROJECTS",
    contact: "CONTACT",
    project1: "QA Playground Bank Demo is a simulated banking application used for end-to-end test automation. The project's objective was to validate critical functionalities such as user authentication, savings account creation, and banking transactions through automated testing. A framework based on industry best practices was implemented to improve script maintainability and scalability, reducing manual effort in regression testing while enabling early defect detection. This project strengthened my skills in test automation, framework design, test case management, version control, and CI/CD integration.",
    project2: "OrangeHRM is an open-source Human Resource Management (HRM) application used to practice end-to-end test automation in a real-world business environment. The project's objective was to validate critical HR workflows, including user authentication, employee management, recruitment, leave requests, and personnel administration through automated testing. A scalable automation framework was implemented following industry best practices to ensure maintainability, reusability, and efficient test execution. As a result, regression testing efforts were reduced, application reliability was improved, and defects were identified earlier in the development cycle. This project enhanced my skills in test automation, framework design, test case development, version control, and CI/CD integration while providing hands-on experience with complex business processes and enterprise-level web applications.",
    project3: "The Internet Herokuapp is a web application designed for practicing functional testing and test automation across a variety of common web application scenarios. The project's objective was to validate critical functionalities such as authentication, dynamic elements, file uploads, alerts, tables, forms, and navigation through automated testing. An automation framework was developed following industry best practices to ensure maintainability, reusability, and scalability of the test scripts. As a result, regression testing became more efficient, functional test coverage was increased, and defects were identified earlier in the development cycle. This project strengthened my skills in test automation, framework design, test case development, web element identification, synchronization handling, and software quality best practices."
  },
  es: {
    about_me: "SOBRE MÍ",
    about_me_text: "Soy un tester con 9 años de experiencia en el área de pruebas. Cuento con una certificación ISTQB y una certificación Scrum. Tengo 7 años de experiencia trabajando con metodologías ágiles, 6 años de experiencia utilizando SQL Server y 2 años de experiencia utilizando Oracle. También tengo 6 años de experiencia usando Jira, así como diferentes aplicaciones para la creación de casos de prueba, reporte de errores y herramientas de trazabilidad.",
    work_experience: "EXPERIENCIA LABORAL",
    fecha_qualtop: "Marzo 2024 – Marzo 2026 | CDMX",    
    qualtop_perfoned: "Realicé pruebas funcionales manuales (caja negra, UAT, regresión, confirmación, smoke y pruebas de sistema).",
    qualtop_analyzed: "Analicé los requerimientos del cliente utilizando Jira para crear casos de prueba.",
    qualtop_api: "Realicé pruebas de APIs usando Postman.",    
    qualtop_created: "Crear y ejecutar consultas en SQL Server.",    
    qualtop_managed: "Gestioné el ciclo de vida de las pruebas utilizando Jira y Xray.", 
    qualtop_cypress: "Generé casos de prueba en Cypress.",
    qualtop_docker: "Ejecute y configure la automatización del set de pruebas en Jenkins y el despliegue del código en Docker.", 
    date_ready:"Junio 2022 – Diciembre 2023",  
    ready_review: "Analicé los requerimientos utilizando Figma y Jira.",    
    ready_perfomed: "Realicé pruebas de interfaz de usuario (UI) basadas en archivos de Figma.",    
    ready_execute: "Crear y ejecutar consultas en SQL Server y Oracle.",    
    ready_manage:"Gestioné defectos usando Azure DevOps y Jira.",    
    date_go:"Julio 2021 – Junio 2023",
    go_perfoned: "Realicé pruebas funcionales manuales (caja negra, UAT, regresión, confirmación, smoke y pruebas de sistema).",
    go_understanding:"Comprendí los requerimientos del cliente mediante el análisis de documentos funcionales (Jira) para crear casos de prueba y validar los comportamientos esperados durante las ejecuciones de prueba.",
    go_performed:"Realicé pruebas de interfaz de usuario (UI) basadas en archivos de Excel, PDF y Word, utilizando la consola del navegador web y comparando los elementos mostrados con el documento de referencia.",
    go_training:"Capacité al personal en el área de pruebas para diversas aplicaciones relacionadas con los servicios de transferencias de BANXICO, como SPEI, SPID, GBS y CEP",
    go_manage:"Gestioné la trazabilidad de errores y el ciclo de vida de las pruebas utilizando diversas herramientas, como Octane y Jira.",
    go_create:"Creé y mantuve scripts automatizados utilizando RAFT, con Java y UiMap.",    
    date_praxis:"Julio 2018 – Julio 2021 | CDMX",    
    praxis_performed:"Realicé pruebas funcionales manuales (caja negra, UAT, integración de ramas, regresión, confirmación, smoke y pruebas de sistema).",    
    praxis_perfomed_ui:"Realicé pruebas de interfaz de usuario (UI) basadas en archivos de Figma, utilizando la consola del navegador web y comparando los elementos mostrados con el documento de referencia.",
    praxis_create:"Creé y ejecuté consultas para varios gestores de bases de datos, como SQL Server, Oracle y Sybase.",    
    praxis_manage:"Gestioné la trazabilidad de errores y el ciclo de vida de las pruebas utilizando diversas herramientas, como Bugzilla, TestLink y qTest.",    
    praxis_deploy:"Despliegue y mantenimiento de ambientes utilizando diversos servidores de aplicaciones, como WebLogic, JBoss y WAS.",    
    praxis_configuration:"Configuré el entorno de automatización.",    
    praxis_maintenance:"Mantenimiento de scripts automatizados.",    
    praxis_automated:"Crear scripts automatizados usando Selenium y Java.",    
    praxis_understanding:"Comprensión de los requerimientos del cliente mediante Google Docs, con el fin de crear casos de prueba, validar y comparar los comportamientos esperados durante las ejecuciones de prueba.",
    date_dydesa:"Enero 2016 – Julio 2017 | Acapulco, Gro",    
    dydesa_performed:"Realicé pruebas funcionales y pruebas de rendimiento.",    
    dydesa_created:"Creé casos de prueba a partir de historias de usuario.",    
    dydesa_functional:"Realicé pruebas de interfaz de usuario (UI) basadas en documentación funcional.",
    soft_skills: "HABILIDADES BLANDAS",    
    critical_thinking: "Pensamiento crítico",
    reliable: "Confiable",    
    team_work: "Trabajo en equipo",    
    social_skills: "Habilidades sociales",    
    work_ethics: "Ética laboral",    
    problem_solving: "Resolución de problemas",
    cooperation: "Cooperador",
    handling_pressure: "Capacidad de trabajo bajo presión",
    leadership: "Liderazgo",
    lenguajes: "Idiomas",
    spanish: "Español - Nativo",
    english: "Inglés - B2",
    tools: "HERRAMIENTAS",
    certifications: "CERTIFICACIONES",
    certifications_course: "Certificaciones",    
    specialization_courses: "Cursos de especializaciones",    
    other_courses: "Otros cursos",
    projects: "PROYECTOS",
    contact: "CONTACTO",
    project1: "QA Playground Bank Demo es una aplicación bancaria simulada utilizada para la automatización de pruebas end-to-end. El proyecto tuvo como objetivo validar funcionalidades críticas como autenticación de usuarios, creación de cuentas de ahorro y operaciones bancarias mediante pruebas automatizadas. Se implementó una estructura basada en buenas prácticas para mejorar la mantenibilidad y escalabilidad de los scripts, logrando reducir el esfuerzo manual en pruebas de regresión y detectar defectos de forma temprana. Este proyecto fortaleció mis habilidades en automatización de pruebas, diseño de frameworks, gestión de casos de prueba e integración con herramientas de control de versiones y CI/CD",
    project2: "OrangeHRM es una aplicación de código abierto para la gestión de recursos humanos (HRM) utilizada para practicar la automatización de pruebas end-to-end en un entorno empresarial real. El objetivo del proyecto fue validar flujos críticos de recursos humanos, incluyendo autenticación de usuarios, gestión de empleados, reclutamiento, solicitudes de permisos y administración de personal mediante pruebas automatizadas. Se implementó un framework de automatización escalable siguiendo buenas prácticas de la industria para garantizar la mantenibilidad, reutilización y ejecución eficiente de las pruebas. Como resultado, se redujo el esfuerzo requerido para las pruebas de regresión, se mejoró la confiabilidad de la aplicación y se identificaron defectos de manera temprana durante el ciclo de desarrollo. Este proyecto fortaleció mis habilidades en automatización de pruebas, diseño de frameworks, desarrollo de casos de prueba, control de versiones e integración con CI/CD, además de brindarme experiencia práctica en procesos de negocio complejos y aplicaciones web de nivel empresarial.",
    project3: "The Internet Herokuapp es una aplicación web diseñada para la práctica de pruebas funcionales y automatización en diversos escenarios comunes de aplicaciones web. El objetivo del proyecto fue validar funcionalidades críticas como autenticación, manejo de elementos dinámicos, cargas de archivos, alertas, tablas, formularios y navegación mediante pruebas automatizadas. Se desarrolló un framework de automatización siguiendo buenas prácticas para garantizar la mantenibilidad, reutilización y escalabilidad de los scripts de prueba. Como resultado, se logró una ejecución más eficiente de las pruebas de regresión, una mayor cobertura de escenarios funcionales y una detección temprana de defectos. Este proyecto fortaleció mis habilidades en automatización de pruebas, diseño de frameworks, creación de casos de prueba, localización de elementos web, manejo de sincronización y aplicación de buenas prácticas de calidad de software."
  }
};

// SWITCH IDIOMA
const toggle = document.getElementById("toggleLang");

toggle.addEventListener("change", () => {
  const lang = toggle.checked ? "es" : "en";

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
});

