/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


/* =========================
   PROJECT MODAL
========================= */

const projectData = {

    soc: {

        title: "SOC Home Lab",

        description:
        "A defensive cybersecurity lab designed to practice SOC monitoring and security event investigation.",

        details: [

            "Set up Windows and Linux endpoints",

            "Collected security logs",

            "Configured SIEM monitoring",

            "Investigated authentication events",

            "Created security alerts",

            "Documented investigation findings"

        ]

    },


    bruteforce: {

        title: "Brute Force Detection",

        description:
        "Investigation of repeated failed authentication attempts to identify possible brute-force activity.",

        details: [

            "Collected authentication logs",

            "Identified repeated failed logins",

            "Analyzed source IP addresses",

            "Created detection logic",

            "Investigated successful login after failures",

            "Documented incident findings"

        ]

    },


    phishing: {

        title: "Phishing Email Analysis",

        description:
        "Analyzed suspicious emails and investigated indicators associated with phishing attacks.",

        details: [

            "Examined email headers",

            "Investigated suspicious URLs",

            "Checked domains and IP addresses",

            "Identified indicators of compromise",

            "Documented phishing indicators",

            "Created an investigation report"

        ]

    },


    network: {

        title: "Network Traffic Analysis",

        description:
        "Analyzed network traffic to understand suspicious communication and abnormal network behavior.",

        details: [

            "Captured network packets",

            "Analyzed TCP/IP traffic",

            "Investigated suspicious connections",

            "Examined DNS traffic",

            "Identified unusual communication",

            "Documented network findings"

        ]

    }

};


/* =========================
   OPEN PROJECT
========================= */

function showProject(project) {

    const data = projectData[project];

    document.getElementById("modalTitle").textContent =
        data.title;

    document.getElementById("modalDescription").textContent =
        data.description;


    const detailsContainer =
        document.getElementById("modalDetails");

    detailsContainer.innerHTML = "";


    const list = document.createElement("ul");


    data.details.forEach(function(detail) {

        const item = document.createElement("li");

        item.textContent = detail;

        list.appendChild(item);

    });


    detailsContainer.appendChild(list);


    document
        .getElementById("projectModal")
        .classList.add("active");

}


/* =========================
   CLOSE PROJECT
========================= */

function closeProject() {

    document
        .getElementById("projectModal")
        .classList.remove("active");

}


/* Close modal when clicking outside */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("projectModal");

    if (event.target === modal) {

        closeProject();

    }

});


/* =========================
   TERMINAL TYPING EFFECT
========================= */

const terminalStatus = document.querySelector(
    ".terminal-body p:last-child"
);

let statusText = "SOC_STATUS: ACTIVE";

let index = 0;

function typeStatus() {

    if (index < statusText.length) {

        terminalStatus.textContent =
            statusText.substring(0, index + 1);

        index++;

        setTimeout(typeStatus, 80);

    }

}

setTimeout(typeStatus, 1500);