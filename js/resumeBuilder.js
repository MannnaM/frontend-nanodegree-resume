/*
This is empty on purpose! Your code to build the resume will go here.
 */
  
var bio = {
    "name": "MannaM Aant",
    "role": "Data Analyst",
    "contacts": {
        "email": "NotPuttingOnline@gmail.com",
        "github": "MannnaM",
        "twitter": "@NotSharingOnline",
        "mobile": "+1-555-381-4522",
        "location": "Anywhere, USA"
    },
    "biopic": "images/Me.jpg",
    "welcomeMessage": "Hi, hello how are you?",
    "skills": ["JavaScript", "Responsive Design","Excel", "SQL","Data Analysis","AdWords"]
};

var work = {
    "jobs": [{
        "employer": "Sparkly",
        "title": "Data Analyst",
        "location": "New York, NY",
        "dates": "July 2017 - Present",
        "description": "Analyze data across various platforms including AdWords, Facebook Ads, Bing Ads, Datorama, Prisma, etc. Implement pacing based on the data, budgets, spends, and event. Create ads for client and maitntain social and media sites"
    }, {
        "employer": "Coup",
        "title": "Captain/Mentor",
        "location": "New York, NY",
        "dates": "January 2016 - Present",
        "description": "As Captain I mentored 16 students per semster, teaching digital marketing skills and soft skills to obtain a career in the industry."
    }, {
        "employer": "The Path",
        "title": "SEO Analyst",
        "location": "New York, NY",
        "dates": "June 2016 - December 2016",
        "description": "Perfomred SEO audit on over 20 client accounts. Posted content for websites and blogs that increased organic reach including moving to page 1 on all seach enginges for 55% of clients."
    }, {
        "employer": "Sustainble Research",
        "title": "Techincal Coordinator",
        "location": "New York, NY",
        "dates": "June 2010 - January 2013",
        "description": "Developed a sustainability projects database, generated reports, and presentation graphs for staff access. Created a newsletter, booklets, and web mailer for projects that reached 500 subscribers. Feasibility research and analysis on project goals, costs, and environmental impact to fund projects."
    }]
};

var projects = {
    "projects": [ {
        "title": "Online Portfolio",
        "dates": "September 2017",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
        "images": ["images/coined-for-money.jpg"],
        "url": "https://github.com/MannnaM"
    }, {
        "title": "Coined For Money",
        "dates": "July 2005 - Present",
        "description": "Created a blog for amatuer coin collectors to get information and ask questions.",
        "images": ["images/coinedformoney.png"],
        "url": "http://CoinedForMoney.com/"
    }]
};
var education = {
    "schools": [{
        "name": "Grove School of Engineering",
        "dates": "2007-2010",
        "location": "New York, NY",
        "degree": "Bachelors of Engineering",
        "majors": ["Mechanical Engineering"],
        "url": "https://www.ccny.cuny.edu/engineering"
    }, {
        "name": "BMCC",
        "dates": "2005-2007",
        "location": "New York, NY",
        "degree": "Associates of Science",
        "majors": ["Enginnering"],
        "url": "http://www.bmcc.cuny.edu/j2ee/index.jsp"
    }, {
        "name": "General Assembly",
        "dates": "2017",
        "location": "New York, NY",
        "degree": "Data Analytics Certification",
        "majors": ["Data Analytics"],
        "url": "https://generalassemb.ly/education/data-analytics"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front End Web Developer",
        "date": "2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
};



bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    $("#header").prepend(formattedName, formattedRole);
    $('#header').append(formattedBiopic, formattedWelcome, HTMLskillsStart);
    //skills loop below
    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });
    $('#topContacts').prepend(formattedLocation, formattedEmail, formattedGithub, formattedTwitter, formattedMobile);
    $('#footerContacts').prepend(formattedLocation, formattedEmail, formattedGithub, formattedTwitter, formattedMobile);
};
bio.display();

$("#education").append(HTMLschoolStart);

education.display = function() {

    //loop starts below
    education.schools.forEach(function(school) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", school.url);


        $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedschoolDates, formattedSchoolMajor, formattedSchoolLocation, formattedSchoolUrl);
    });

    $("#education").append(HTMLschoolStart);
    $("#education").append(HTMLonlineClasses);

    //loop starts below
    education.onlineCourses.forEach(function(s) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", s.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", s.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", s.date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", s.url);


        $(".education-entry:last").append(formattedOnlineSchool, formattedOnlineTitle, formattedOnlineDates, formattedOnlineURL);

    });
};

education.display();

projects.display = function() {

    // Start of the loop
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

        //$('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
            $('.project-entry:last').append(formattedProjectImage);
        });
    });
};
projects.display();

var map = {};
map.display = function() {
    var formattedGoogleMap = googleMap;

    $('#mapDiv').append(formattedGoogleMap);

};
map.display();


work.display = function() {

    //for (job in work.jobs) 
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle, formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};
work.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];

    //for (job in work_obj.jobs) 
    work_obj.jobs.forEach(function(job) {
        var newLocation = job.location;
        locationArray.push(newLocation);
    });
    return locationArray;
}

console.log(locationizer(work));

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

var map = {};
map.display = function() {
    var googleMap;
};

function displayMap() {
    $('#mapDiv').append(googleMap);
}

function display() {
    displayMap(googleMap);
}
