// Header
var bio = {
    "name"      :   "Sunit Jain",
    "fullName"  :   "Sunit Jain",
    "role"      :   "Bioinformatics Specialist",
    "contacts"  :   {
        "mobile"    :   "",
        "email"     :   "sunitj@umich.edu",
        "twitter"   :   "@SunitJain",
        "github"    :   "sunitj",
        "location"  :   "Ann Arbor, MI, USA"
    },
    "biopic"     :   "images/fry.jpg",
    "welcomeMessage"   :   "Welcome to my first attampt at a JavaScript website!",
    "skills"    :   ["R","Perl","Neo4j","JavaScript"]
};
var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
var formattedName = HTMLheaderName.replace("%data%", bio.fullName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedSkills = HTMLskillsStart.replace("%data%",bio.skills);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLoc = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLoc);

$("#header").append(formattedPic);
$("#header").append(formattedWelcome);
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var num in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[num]);
        $("#skills").append(formattedSkills);
    }
}

// Work
var work = {
    "jobs"  :   [
        {
            "employer"      :   "University of Michigan",
            "title"         :   "Research Computing Specialist",
            "location"      :   "Ann Arbor, MI, USA",
            "dates"         :   "2009 - present",
            "description"   :   "Still working here!"
        }
    ],
    display() {
        if (work.jobs.length > 0) {
            for (job in work.jobs) {
                $("#workExperience").append(HTMLworkStart);
                var formattedWorkEmp = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
                var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
                var catEmpTitle = formattedWorkEmp + formattedWorkTitle;
                
                var formattedWorkTime= HTMLworkDates.replace("%data%",work.jobs[job].dates);
                var formattedWorkDesc= HTMLworkDescription.replace("%data%",work.jobs[job].description);
                
                $(".work-entry:last").append(catEmpTitle);
                $(".work-entry:last").append(formattedWorkTime);
                $(".work-entry:last").append(formattedWorkDesc);
            }
        }
    }
};

work.display();

var projects = {
    "project"   :   [
        {
            "title"     :   "SuperMom: Super Meta*omics Miner",
            "dates"     :   "November 2014 - present",
            "description"   :   "Mining meta*omic data using graph databases.",
            "images"     :   ["images/fry.jpg"],
            "url"       :   ""
        },
        {
            "title"     :   "ESOM scripts",
            "dates"     :   "August 2009 - present",
            "description"   :   "Workflow scripts for binning and visualization of metagenomic data usnig ESOM",
            "images"     :   ["images/fry.jpg"],
            "url"       :   ""
        },
        {
            "title"     :   "Geomicro scripts",
            "dates"     :   "August 2009 - present",
            "description"   :   "General purpose scripts to manage Biological data",
            "images"     :   [ "images/fry.jpg"],
            "url"       :   ""
        }
    ],
    display() {
        if (projects.project.length > 0) {
            for (num in projects.project) {
                $("#projects").append(HTMLprojectStart);
                var formattedProjTitle = HTMLprojectTitle.replace("%data%",projects.project[num].title);
                var formattedProjDates = HTMLprojectDates.replace("%data%",projects.project[num].dates);
                var formattedProjDesc = HTMLprojectDescription.replace("%data%",projects.project[num].description);
                
                $(".project-entry:last").append(formattedProjTitle);
                $(".project-entry:last").append(formattedProjDates);
                $(".project-entry:last").append(formattedProjDesc);
                
                
                if (projects.project[num].images.length > 0) {
                    for (image in projects.project[num].images) {
                        var formattedProjImage = HTMLprojectImage.replace("%data%",projects.project[num].images[image]);
                        $(".project-entry:last").append(formattedProjImage);
                    }
                }
            }
        }
    }
    
}

projects.display();

// Education
var education = {
  "schools"     :   [
    {
        "name"      :   "Amity University",
        "location"      :   "New Delhi, India",
        "degree"    :   "B.Tech",
        "major"     :   ["Bioinformatics"],
        "graduation":   2008
    },
    {
        "name"      :   "University of Michigan",
        "location"      :   "Ann Arbor, MI, USA",
        "degree"    :   "Masters",
        "major"     :   ["Bioinformatics"],
        "graduation":   2011
    }
  ],
  "onlineCourses"   :   [
    {
        "title"     :   "JavaScript Basics",
        "school"    :   "Udacity",
        "dates"     :   "2015",
        "url"       :   "http://www.sunitjain.com"
    },
    {
        "title"     :   "Practical Machine Learning",
        "school"    :   "Coursera",
        "dates"     :   "2015",
        "url"       :   "http://www.sunitjain.com"
    },
    {
        "title"     :   "Data Scientist Toolbox",
        "school"    :   "Coursera",
        "dates"     :   "2014",
        "url"       :   "http://www.sunitjain.com"
    },
    {
        "title"     :   "Reproducible Research",
        "school"    :   "Coursera",
        "dates"     :   "2015",
        "url"       :   "http://www.sunitjain.com"
    },
    {
        "title"     :   "Exploratory Data Analysis",
        "school"    :   "Coursera",
        "dates"     :   "2014",
        "url"       :   "http://www.sunitjain.com"
    }
  ],
    display() {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
            for (var num in education.schools) {
                var formattedEduName = HTMLschoolName.replace("%data%", education.schools[num].name);
                var formattedEduDegree = HTMLschoolDegree.replace("%data%", education.schools[num].degree);
                var formattedEduMajor = HTMLschoolMajor.replace("%data%", education.schools[num].major);
                var formattedEduGrad = HTMLschoolDates.replace("%data%", education.schools[num].graduation);
                var formattedEduLoc = HTMLschoolLocation.replace("%data%", education.schools[num].location);
                
                var catNameDegree = formattedEduName + formattedEduDegree;
                
                $(".education-entry:last").append(catNameDegree);
                $(".education-entry:last").append(formattedEduGrad);
                $(".education-entry:last").append(formattedEduMajor);
                $(".education-entry:last").append(formattedEduLoc);
            }
        }
        
        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);
            for (var num in education.onlineCourses) {
                var formattedEduTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[num].title);
                var formattedEduName = HTMLonlineSchool.replace("%data%", education.onlineCourses[num].school);
                var formattedEduDates = HTMLonlineDates.replace("%data%", education.onlineCourses[num].dates);
                var formattedEduUrl = HTMLonlineURL.replace("#", education.onlineCourses[num].url);
                formattedEduUrl = formattedEduUrl.replace("%data%", education.onlineCourses[num].url);
                
                var catNameDegree = formattedEduTitle + formattedEduName;
                
                $(".education-entry:last").append(catNameDegree);
                $(".education-entry:last").append(formattedEduDates);
                $(".education-entry:last").append(formattedEduUrl);
            }
        }
    }
};

education.display();

$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedLoc);

function inName(){
    var name=bio.fullName;
    var nameArray=[];
    nameArray=name.trim().split(" ");
    console.log(name);
    var newName=nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase() +" "+ nameArray[1].toUpperCase();
    return newName;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);