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
    "biopic": "images/DSC05073.JPG",
    "welcomeMsg": "Welcome to my resume page!",
    "skills": ["JS", "jQuery", "Git"],
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedLoc = HTMLlocation.replace("%data%", this.contacts.location);
        var formattedPicture = HTMLbioPic.replace("%data%", this.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMsg);
        $("#header").prepend(formattedName).append(formattedPicture, formattedWelcomeMsg, HTMLskillsStart);
        $("#name").append(formattedRole);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLoc);
        this.skills.forEach(function (skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        })
    }
};

/**** WORK EXPERIENCE ****/
var work = {
    "jobs": [
        {
            "employer": "Alcoa Inc. (now Arconic Inc.)",
            "title": "HQ Financial Analyst",
            "location": "Lafayette, IN",
            "dates": "2008 - 2010",
            "description": "Developed detailed spreadsheets and presentations to identify " +
            "trends and prepared forecasts for all business units. Reviewed financial " +
            "statements and analyzed sales revenues, costs, expenses, and tax rates. " +
            "Streamlined compilation of data. Also, temporary fulfilled Assistant Controller role " +
            "for a business unit executing month end closing and reporting, forecasting, and spend budget."
        },
        {
            "employer": "ThyssenKrupp Waupaca, Inc.",
            "title": "Project Controller",
            "location": "Etowah, TN",
            "dates": "2007 - 2008",
            "description": "Collected and analyzed financial information compiled into " +
            "various reports for all six ThyssenKrupp facilities. Also, provided financial oversight for $162M " +
            "expansion project that involved numerous responsibilities, leadership, and strategic analysis."
        },
        {
            "employer": "ThyssenKrupp Waupaca, Inc.",
            "title": "HQ Financial Analyst",
            "location": "Waupaca, WI",
            "dates": "2005 - 2007",
            "description": "Collected and analyzed financial information compiled into " +
            "various reports for all six ThyssenKrupp facilities. Also, provided financial oversight for $162M " +
            "expansion project that involved numerous responsibilities, leadership, and strategic analysis."
        }
    ],
    "display": function () {
        this.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedLoc = HTMLworkLocation.replace("%data%", job.location);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append((formattedEmployer + formattedTitle), formattedDates, formattedLoc, formattedDescription);
        });
    }
};

/**** PROJECTS ****/
var projects = {
    "projects": [
        {
            "title": "Responsive Design",
            "dates": "2017",
            "description": "In this project, I worked with a provided design of a portfolio to develop a fully " +
            "responsive website that adapts to various screen sizes. As a bonus, all the images were minimized ",
            "images": ["images/udacity_portfolio_responsive_design.svg"]
        },
        {
            "title": "Uknown",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi dolore eaque " +
            "harum hic, illo illum labore molestiae, natus nesciunt nostrum provident, repellendus rerum!",
            "images": ["images/udacity_portfolio_screenshot.svg"]
        },
        {
            "title": "Uknown",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi dolore eaque " +
            "harum hic, illo illum labore molestiae, natus nesciunt nostrum provident, repellendus rerum!",
            "images": ["images/udacity_portfolio_screenshot.svg"]
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
            // if (prjIndex.images.length > 0) {
            //     prjIndex.images.forEach(function (image) {
            //         var formattedprjImg = HTMLprojectImage.replace("%data%", image);
            //         $(".project-entry:last").append(formattedprjImg);
            //     });
                /*for( image in prjIndex.images) {
                 var formattedprjImg = HTMLprojectImage.replace("%data%", prjIndex.images[image]);
                 $(".project-entry:last").append(formattedprjImg);
                 }*/

        });
    }
};

/**** EDUCATION ****/
var education = {
    "schools": [
        {
            "name": "Odessa National Economics University",
            "degree": "Bachelor",
            "location": "Odessa, Ukraine",
            "dates": "2003",
            "major": ["Bachelor Degree in Banking"],
            "url": "http://oneu.edu.ua/index(en).php"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "UDACITY",
            "location": "Online School",
            "dates": "2017",
            "url": "https://www.udacity.com/"
        }
    ],
    "display": function () {
        $("#education").append(HTMLschoolSchools);
        this.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);
            var formattedSclName = HTMLschoolName.replace("%data%", school.name);
            var formattedSclDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSclDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSclLoc = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSclMjr = HTMLschoolMajor.replace("%data%", school.major);
            var formattedSclURL = HTMLschoolURL.replace("#", school.url).replace("%data%", "http://oneu.edu.ua");
            $(".education-entry:last").append((formattedSclName + formattedSclDegree),formattedSclDates,formattedSclLoc,formattedSclMjr,formattedSclURL);
            //document.querySelector(".education-entry a:last-child").setAttribute("target", "_blank");
        });
        $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach(function (course) {
            $("#education").append(HTMLschoolStart);
            var formattedonlTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedonlScl = HTMLonlineSchool.replace("%data%", course.school);
            var formattedonlLoc = HTMLonlineLocation.replace("%data%", course.location);
            var formattedonlDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedonlURL = HTMLonlineURL.replace("#", course.url).replace("%data%", "www.udacity.com");
            $(".education-entry:last").append((formattedonlTitle + formattedonlScl), formattedonlDates, formattedonlLoc, formattedonlURL);
            //document.querySelector(".education-entry a:last-child").setAttribute("target", "_blank");
        });
        $(".education-entry a:last-child").attr( "target", "_blank" );
    }
};

bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);





// ​var user = {
//     data:[{name:"T. Woods", age:37},{name:"P. Mickelson", age:43}],
//     clickHandler:function (event) {
//         var randomNum = ((Math.random () * 2 | 0) + 1) - 1;
//         console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
//     }
// };
// ("button").click (user.clickHandler);

