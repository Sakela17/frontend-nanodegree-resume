
//$("#header").append(formattedName,formattedRole);

//$("#header").prepend(formattedName);
//("#main").append(["Marina Valiquette"]);

var bio = {
    "name": "Marina Valiquette",
    "role": "Front-End Web Developer",
    "contacts": {
       "mobile": "920-213-1352",
       "email": "marina.valiquette@gmail.com",
       "github": "Sakela17",
       "location": "Kennesaw, GA"
    },
    "picture": "images/DSC05073.JPG",
    "welcomeMsg": "Welcome to my resume page!",
    "skills": ["JS","jQuery","Git"],
    "display": function() {
    var formattedName = HTMLheaderName.replace("%data%",this.name);
    var formattedRole = HTMLheaderRole.replace("%data%",this.role);
    var formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
    var formattedLoc = HTMLlocation.replace("%data%", this.contacts.location);
    var formattedPicture = HTMLbioPic.replace("%data%",this.picture);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",this.welcomeMsg);
    $("#header").prepend(formattedName).append(formattedPicture,formattedWelcomeMsg,HTMLskillsStart);
    $("#name").append(formattedRole);
    $("#topContacts").append(formattedMobile,formattedEmail,formattedGitHub,formattedLoc);
        this.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%",skill);
            $("#skills").append(formattedSkills);
        })
    }
};

var work = {
    "jobs": [
        {
            "employer": "Alcoa Inc. (now Arconic Inc.)",
            "title": "HQ Financial Analyst",
            "location": ["Lafayette, IN"],
            "dates": "2008 - 2010",
            "description": "Developed detailed spreadsheets and presentations to identify " +
            "trends and prepared forecasts for all business units. Reviewed financial " +
            "statements and analyzed sales revenues, costs, expenses, and tax rates. " +
            "Streamlined compilation of data. Also, temporary fulfilled Assistant Controller role " +
            "for a business unit executing month end closing and reporting, forecasting, and spend budget."
        },
        {
            "employer": "ThyssenKrupp Waupaca, Inc.",
            "title": "HQ Financial Analyst, Project Controller",
            "location": ["Waupaca, WI", "Etowah, TN"],
            "dates": "2005 - 2008",
            "description": "Collected and analyzed financial information compiled into " +
            "various reports for all six ThyssenKrupp facilities. Also, provided financial oversight for $162M " +
            "expansion project that involved numerous responsibilities, leadership, and strategic analysis."
        }
    ],
    "display": function() {
        this.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var locList = "";
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
                job.location.forEach(function (loc) {
                    locList += loc + "&nbsp";
                });
            var formattedLoc = HTMLworkLocation.replace("%data%", locList);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last-child").append((formattedEmployer + formattedTitle),formattedDates,formattedLoc,formattedDescription);
        });
    }
};


var projects = {
    "projects": [
        {
            "title": "Uknown",
            "dates": "2017",
            "description": "Uknown",
            "images": ["images/DSC05073.JPG", "images/fry.jpg"]
        }
    ],
    "display": function() {
        projects.projects.forEach(function(prjIndex) {
            $("#projects").append(HTMLprojectStart);
            var formattedprjTitle = HTMLprojectTitle.replace("%data%",prjIndex.title);
            var formattedprjDates = HTMLprojectDates.replace("%data%", prjIndex.dates);
            var formattedprjDesc = HTMLprojectDescription.replace("%data%", prjIndex.description);
            $(".project-entry:last").append(formattedprjTitle,formattedprjDates,formattedprjDesc);
            if (prjIndex.images.length > 0) {
                prjIndex.images.forEach(function(image) {
                    var formattedprjImg = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedprjImg);
                });
                /*for( image in prjIndex.images) {
                 var formattedprjImg = HTMLprojectImage.replace("%data%", prjIndex.images[image]);
                 $(".project-entry:last").append(formattedprjImg);
                 }*/
            }
        });
    }
};

var education = {
    "schools": [
        {
            "name": "Odessa National Economics University",
            "degree": "Bachelor",
            "location": "Odessa, Ukraine",
            "date": "2003",
            "major": "Bachelor Degree in Banking",
            "url": "http://oneu.edu.ua/index(en).php"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "UDACITY",
            "location": "Online School",
            "dates": "2017",
            "url": "www.udacity.com"
        }
    ],
    "display": function() {
    $("#education").append(HTMLschoolSchools);
        this.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSclName = HTMLschoolName.replace("%data%",school.name);
            var formattedSclDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSclDates = HTMLschoolDates.replace("%data%", school.date);
            var formattedSclLoc = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSclMjr = HTMLschoolMajor.replace("%data%", school.major);
            $(".education-entry:last").append((formattedSclName + formattedSclDegree),formattedSclDates,formattedSclLoc,formattedSclMjr);
        });
    $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);
            var formattedonlTitle = HTMLonlineTitle.replace("%data%",course.title);
            var formattedonlScl = HTMLonlineSchool.replace("%data%", course.school);
            var formattedonlLoc = HTMLonlineLocation.replace("%data%", course.location);
            var formattedonlDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedonlURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append((formattedonlTitle + formattedonlScl),formattedonlDates,formattedonlLoc,formattedonlURL);
        });
    }
};

bio.display();

work.display();

projects.display();

education.display();




// if (work.hasOwnProperty("jobs")) {
//     work.jobs.forEach(function (job) {
//         $("#workExperience").append(HTMLworkStart);
//         var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
//         var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
//         var formattedDates = HTMLworkDates.replace("%data%", job.dates);
//         $(".work-entry:last").append((formattedEmployer + formattedTitle),formattedDates);
//
//         job.location.forEach(function(loc) {
//             //var formattedLoc = HTMLworkLocation.replace("%data%", loc);
//             var length = job.location.length - 1;
//             if (job.location.indexOf(loc) < length) {
//                 var formattedLoc = HTMLworkLocation.replace("%data%", (loc + ",&nbsp"));
//                 $(".work-entry:last").prepend(formattedLoc);
//             } else {
//                 var formattedLoc = HTMLworkLocation.replace("%data%", loc);
//                 $(".work-entry:last").prepend(formattedLoc);
//             }
//         });
//         //var HTMLworkLocation = '<div class="location-text">%data%</div>';
//         //var HTMLworkStart = '<div class="work-entry"></div>';
//         //var formattedLoc = HTMLworkLocation.replace("%data%", job.location);
//
//         //var HTMLworkLocation = '<div class="location-text">%data%</div>';
//         var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
//         $(".work-entry:last").append(formattedDescription);
//     });
// }







$("#main").append(internationalizeButton);

function inName (name) {
    //trim() removes whitespace on both sides of a string; split() splits a string into an array of sub strings;
    name = name.trim().split(" ");
    name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    //myArray.length = 0;
    //myArray.push(lcName,ucName);
    return name[0] + " " + name[1];
}


$("#mapDiv").append(googleMap);


/*
function locationizer(work_obj) {
    var myArray = [];
    work.jobs.forEach(function(job) {
        //var addLoc = job.location;
        myArray.push(job.location);
    })
return myArray
}*/

//console.log(i);

//var HTMLworkDates = '<div class="date-text">%data%</div>';
//var HTMLworkLocation = '<div class="location-text">%data%</div>';
//var HTMLworkDescription = '<p><br>%data%</p>';


// ​var user = {
//     data:[{name:"T. Woods", age:37},{name:"P. Mickelson", age:43}],
//     clickHandler:function (event) {
//         var randomNum = ((Math.random () * 2 | 0) + 1) - 1;
//         console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
//     }
// };
// ("button").click (user.clickHandler);

