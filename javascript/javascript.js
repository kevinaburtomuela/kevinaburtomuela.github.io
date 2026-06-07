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
    about_me_text: "I am a tester with more than 8 years of experience in the testing area. I have an ISTQB certification and a Scrum certification. I have 7 years of experience working with Agile methodologies, 6 years of experience using SQL Server, and 2 years of experience using Oracle. I also have 6 years of experience using Jira, as well as various applications for test case creation, bug reporting, and trazability tools",
    work_experience: "WORK EXPERIENCE",
    fecha_qualtop: "January 2024 – May 2025 | CDMX",
    qualtop_perfoned: "Performed functional manual testing (black box, UAT, regression, confirmation, smoke, and system testing).",
    qualtop_analyzed: "Analyzed client requirements using Jira to create test cases.",
    qualtop_api: "Performed API testing using Postman.",
    qualtop_created: "Created and executed SQL Server queries.",
    qualtop_managed: "Managed test lifecycle using Jira and XRAY.",
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
    project1: "QA Playground Bank Demo is a simulated banking application designed for practicing end-to-end test automation.",
    project2: "Automated end-to-end testing of the OrangeHRM web application, covering authentication, employee management, leave management, recruitment workflows, and dashboard validation.",
    project3: "A web application designed for QA automation practice, featuring a variety of common web elements and testing scenarios such as login, forms, dynamic content, file uploads, and JavaScript interactions."
  },
  es: {
    about_me: "SOBRE MÍ",
    about_me_text: "Soy un tester con más de 8 años de experiencia en el área de pruebas. Cuento con una certificación ISTQB y una certificación Scrum. Tengo 7 años de experiencia trabajando con metodologías ágiles, 6 años de experiencia utilizando SQL Server y 2 años de experiencia utilizando Oracle. También tengo 6 años de experiencia usando Jira, así como diferentes aplicaciones para la creación de casos de prueba, reporte de errores y herramientas de trazabilidad.",
    work_experience: "EXPERIENCIA LABORAL",
    fecha_qualtop: "Enero 2024 – Mayo 2025 | CDMX",    
    qualtop_perfoned: "Realicé pruebas funcionales manuales (caja negra, UAT, regresión, confirmación, smoke y pruebas de sistema).",
    qualtop_analyzed: "Analicé los requerimientos del cliente utilizando Jira para crear casos de prueba.",
    qualtop_api: "Realicé pruebas de APIs usando Postman.",    
    qualtop_created: "Crear y ejecutar consultas en SQL Server.",    
    qualtop_managed: "Gestioné el ciclo de vida de las pruebas utilizando Jira y Xray.",  
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
    project1: "QA Playground Bank Demo es una aplicación bancaria simulada diseñada para practicar pruebas de automatización end-to-end.",
    project2: "Pruebas automatizadas end-to-end de la aplicación web OrangeHRM, cubriendo autenticación, gestión de empleados, gestión de permisos y ausencias, flujos de reclutamiento y validación del panel de control (dashboard).",
    project3: "Una aplicación web diseñada para la práctica de automatización de pruebas QA, que incluye una variedad de elementos web y escenarios de prueba comunes, como inicio de sesión, formularios, contenido dinámico, carga de archivos e interacciones con JavaScript."
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

