/**** BIOGRAPHY ****/
var bio = {
    "name": "Marina Valiquette",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "920-213-1352",
        "email": "marina.valiquette@gmail.com",
        "github": "Sakela17",
        "location": "Kennesaw, GA"
    },
    "welcomeMsg": "&#8275;This year I decided to pursue a new career path in web development. " +
    "It quickly became my passion that satisfies my creative and logical thinking skills. " +
    "I'm enthusiastic, sociable, broad-minded, and responsible individual who is eager to build a long-term career in " +
    "this new field.&#8275;",
    "skills": ["HTML / CSS", "JS", "jQuery", "GitHub / Git Bash", "Photoshop"],
    "biopic": "images/DSC05073.JPG",
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedLoc = HTMLlocation.replace("%data%", this.contacts.location);
        var formattedPicture = HTMLbioPic.replace("%data%", this.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMsg);
        $("#header").prepend(formattedName,formattedRole).append(formattedPicture,formattedWelcomeMsg,HTMLskillsStart);
        $(".header-role").after(formattedPicture);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLoc);
        this.skills.forEach(function (skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }
};

/**** WORK EXPERIENCE ****/
var work = {
    "jobs": [
        {
            "employer": "Arconic Inc.",
            "title": "HQ Financial Analyst",
            "location": "Lafayette, IN",
            "dates": "2008 - 2010",
            "description": "Developed detailed spreadsheets and presentations to identify " +
            "trends and prepared forecasts for all business units. Reviewed financial " +
            "statements and analyzed sales revenues, costs, expenses, and tax rates. " +
            "Streamlined compilation of data. Also, temporary fulfilled Assistant Controller role " +
            "for a business unit executing month end closing and reporting, forecasting, and spend budget.",
            "url": "https://www.arconic.com/global/en/home.asp"
        },
        {
            "employer": "Waupaca Foundry",
            "title": "Project Controller",
            "location": "Etowah, TN",
            "dates": "2007 - 2008",
            "description": "Conducted financial oversight for $162M " +
            "expansion project that involved numerous responsibilities, leadership, and strategic analysis.",
            "url": "http://www.waupacafoundry.com/en"
        },
        {
            "employer": "Waupaca Foundry",
            "title": "HQ Financial Analyst",
            "location": "Waupaca, WI",
            "dates": "2005 - 2007",
            "description": "Collected and analyzed financial information compiled into " +
            "various reports for all six ThyssenKrupp facilities.",
            "url": "http://www.waupacafoundry.com/en"
        }
    ],
    "display": function () {
        this.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedLoc = HTMLworkLocation.replace("%data%", job.location);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append((formattedEmployer + formattedTitle), formattedDates, formattedLoc, formattedDescription);
        });
        $(".work-entry a").attr( "target", "_blank" );
    }
};

/**** PROJECTS ****/
var projects = {
    "projects": [
        {
            "title": "Responsive Portfolio",
            "dates": "2017",
            "description": "This UDACITY project demonstrates my skills of utilizing CSS media queries as well " +
            "as Bootstrap framework for delivering responsive web pages.",
            "images": ["images/udacity_portfolio_responsive_design.svg"]
        },
        {
            "title": "Personalized Resume",
            "dates": "2017",
            "description": "This UDACITY project focused on building a personalized resume page using JS and jQuery. " +
            "skills. Features RWD and is print friendly.",
            "images": ["images/udacity-resume-crop.png"]
        },
        {
            "title": "Frogger Clone",
            "dates": "2017",
            "description": "Using a barebones game engine provided by Udacity, I worked heavily with the HTML5 canvas " +
            "element in this project to implement various features.",
            "images": ["images/frogger.svg"]
        }
    ],
    "display": function () {
        projects.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);
            var formattedprjTitle = HTMLprojectTitle.replace("%data%",project.title);
            var formattedprjDates = HTMLprojectDates.replace("%data%",project.dates);
            var formattedprjDesc = HTMLprojectDescription.replace("%data%",project.description);
            var formattedprjImg = HTMLprojectImage.replace("%data%",project.images);
            $(".project-entry:last").append(formattedprjTitle,formattedprjDates,formattedprjDesc,formattedprjImg);
        });
    }
};

/**** EDUCATION ****/
var education = {
    "schools": [
        {
            "name": "Odessa National Economics University",
            "location": "Odessa, Ukraine",
            "degree": "Bachelor",
            "majors": ["B.S. Finance and Credit"],
            "dates": "2003",
            "url": "http://oneu.edu.ua/index(en).php"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree Program",
            "school": "UDACITY",
            "location": "Online School",
            "dates": "2017",
            "url": "https://www.udacity.com/"
        }
    ],
    "display": function () {
        // $("#education").append(HTMLschoolSchools); - don't want to include it
        this.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);
            var formattedSclName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            // var formattedSclDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSclDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSclLoc = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSclMjr = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedSclName,formattedSclDates,formattedSclLoc,formattedSclMjr);
        });
        // $("#education").append(HTMLonlineClasses); - don't want to include it
        this.onlineCourses.forEach(function (course) {
            $("#education").append(HTMLschoolStart);
            var formattedonlTitle = HTMLonlineCourse.replace("%data%", course.title);
            var formattedonlScl = HTMLonlineSchool.replace("%data%", course.school).replace("#", course.url);
            var formattedonlLoc = HTMLonlineLocation.replace("%data%", course.location);
            var formattedonlDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedonlScl,formattedonlDates,formattedonlLoc,formattedonlTitle);
        });
        $(".education-entry a").attr( "target", "_blank" );
    }
};

bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);