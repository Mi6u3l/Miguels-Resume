
//Work JSON 
var work = {
	"jobs":[
	 {
			"employer": "Datalynx Portugal",
			"title": "Full-Stack .NET Developer",
			"location": "Lisbon, Portugal",
			"dates": "2017 - Present",
			"description": "Technical analysis for software bespoke developments;<br>Software Development (.NET CORE MVC 6, JavaScript, AngularJS, HTML, CSS)."
		},
		{
			"employer": "Paddy Power Betfair",
			"title": "Software Delivery Manager",
			"location": "Porto, Portugal",
			"dates": "2015 - 2016",
			"description": "Scrum Master;<br>Application of Agile/Lean knowledge within the team;<br>Tasks prioritisation throughout all phases of project lifecycle;<br>Technical direction for design, development, testing and deployment from definition phase through planning, implementation and maintenance;<br>Technology stack: HTML5, CSS3, SASS, Bootstrap, JavaScript, AngularJS, Node.js."
		},
	   {
			"employer": "Ergo",
			"title": "Team Lead",
			"location": "Dublin, Ireland",
			"dates": "2012 - 2015",
			"description": "Technical architecture analysis for web based applications;<br>Software development team coordination;<br>Monitoring and assisting delivery of development tasks;<br>Software Development (HTML5, CSS3, JavaScript, C# .net, SQL Server, SharePoint);<br>SharePoint Consultancy."
		},
		{
			"employer": "Portugal Telecom",
			"title": "Software Engineer",
			"location": "Lisbon, Portugal",
			"dates": "2011 - 2012",
			"description": "Technical architecture analysis for web based applications;<br>Software development team coordination;<br>Monitoring and assisting delivery of development tasks;<br>Software Development (C# .net, JavaScript, SQL Server, SharePoint);<br>SharePoint Consultancy."
		},
		{
			"employer": "Truewind",
			"title": "Software Engineer",
			"location": "Lisbon, Portugal",
			"dates": "2010 - 2011",
			"description": "Technical architecture analysis for web based applications;<br>Software Development (C# .net, JavaScript, SQL Server, SharePoint);<br>SharePoint Consultancy."
		},
		{
			"employer": "Indra",
			"title": "Software Engineer",
			"location": "Lisbon, Portugal",
			"dates": "2008 - 2010",
			"description": "Technical analysis for software bespoke developments;<br>Software Development (C# .net, JavaScript, SQL Server, SharePoint)."
		},
		{
			"employer": "Deloitte",
			"title": "Consultant",
			"location": "Lisbon, Portugal",
			"dates": "2006 - 2008",
			"description": "Technical analysis for software bespoke developments;<br>Software Development (C# .net, JavaScript, SQL Server, SharePoint)."
		}

	]
	
};
// Display work json info
work.display = function(){
	
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
		
}
// Projects JSON
var projects = {
	"projects": [
		{
			"title": "SPDMov",
			"date worked": "Jan, 2017 - Present",
			"description": "Portuguese society of movement disorders website.",
			"demo": "http://23.94.156.22:9090",
			"progress": 80
		},
		{
			"title": "Start Wars Invaders",
			"date worked": "Jun, 2017 - Jun, 2017",
			"description": "Pet project.",
			"github": "https://github.com/mi6u3l/SpaceInvaders",
			"demo": "http://Mi6u3l.github.io/SpaceInvaders",
			"progress": 90
		},
		{
			"title": "Neighbourhood Map",
			"date worked": "Dec, 2014 - Jan, 2015",
			"description": "Pet project.",
			"github": "https://github.com/mi6u3l/Neighborhood-map",
			"demo": "http://Mi6u3l.github.io/NeighbourhoodMap",
			"progress": 100
		},
		{
			"title": "Arcade Game",
			"date worked": "Nov, 2014",
			"description": " Pet project.",
			"github": "https://github.com/Mi6u3l/Frogger-Arcade",
			"demo": "http://Mi6u3l.github.io/Frogger/",
			"progress": 100
		},
		{
			"title": "Portfolio",
			"date worked": "Oct, 2014",
			"description": "Portfolio project.",
			"github": "https://github.com/Mi6u3l/frontend-nanodegree-resume",
			"demo": "http://Mi6u3l.github.io/",
			"progress": 100
		},
		{
			"title": "FlowForma WebSite",
		    "date worked": "Mar, 2014 - Jun, 2014",
			"description": "Institutional WebSite for the FlowForma product.",
			"demo": "http://www.flowforma.com",
			"progress": 100
		},
		{
			"title": "Ergo Managed Services",
		    "date worked": "Mar, 2015 - May, 2015",
			"description": "Institutional WebSite for Ergo's Managed Services department.",
			"demo": "http://www.ergo-ids.com",
			"progress": 100
		},
		{
			"title": "FlowForma Community Support",
			"date worked": "May, 2015 - Jun, 2015",
			"description": "WebSite site for the FlowForma community.",
			"demo": "http://customer.flowforma.com",
			"progress": 70
		},
		{
			"title": "Conahy Shamrocks",
			"date worked": "Jul, 2014 - Oct, 2014",
			"description": "Institutional WebSite for the Irish gaelic team Conahyshamrocks.",
			"demo": "http://www.conahyshamrocks.gaa.ie",
			"progress": 100
		}
		
	]

};
// Display project json info
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
			
			// call d3 progress chart function
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
// project d3 progress chart function
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};


//Bio JSON
var bio = {
	"first name": "Miguel",
	"last name": "Gomes",
	"role": "Full-Stack Web Developer",
	"welcome message": "I've been working the last 10 years as a Software developer - C# .Net, SharePoint, JavaScript, HTML, CSS.",
	"contacts": 
		{
			"mobile number": "+351 96 300 10 24" ,
			"email": "miguel.bgomes.@gmail.com",
			"github username": "mi6u3l",
			"location": "Barcelona, Spain"
		},
	"skills": ["HTML", "CSS", "JavaScript", "jQuery", "C#.net", "SharePoint", "Scrum"]

};
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts ul").append(formattedMobile);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedLocation);

}
//Education JSON
var education = {
	"schools": [
	{
			"name": "University College Dublin",
			"location": "Dublin, Ireland",
			"degree": "Master",
			"majors": ["Msc Advanced Software Engineering"],
			"dates": "December 2018 (Expected)",
			"url": "http://www.dbs.ie/"
		},
		{
			"name": "Ironhack",
			"location": "Barcelona, Spain",
			"degree": "",
			"majors": ["JavaScript Bootcamp"],
			"dates": "August 2017",
			"url": "http://www.ironhack.com/"
		},
		{
			"name": "Dublin Business School",
			"location": "Dublin, Ireland",
			"degree": "",
			"majors": ["Advanced Diploma in Project Management"],
			"dates": "June 2012",
			"url": "http://www.dbs.ie/"
		},
		{
			"name": "Universidade Lusófona",
			"location": "Lisbon, Portugal",
			"degree": "Bachelor",
			"majors": ["BSc Computer Science"],
			"dates": "June 2006",
			"url": "http://www.ulusofona.pt"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Web Development",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/nanodegrees"
		}
	],
};
// Display education json info
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
																											
		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
	$("#education").append(HTMLonlineClasses);
	// Display online courses
	for (var onlineCourse in education.onlineCourses){	
		var num = education.schools.length + parseInt(onlineCourse);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
	}
}
//Map
$("#mapDiv").append(googleMap);

// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "HTML",
    labelcolor: "red"
  },
  {
    value: 8,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "CSS",
    labelcolor: "orange"
  },
  {
    value: 7,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "JavaScript",
    labelcolor: "green"
  },
  {
    value: 5,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "jQuery",
    labelcolor: "yellow"
  },
  {
    value: 8,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "C#.net",
    labelcolor: "gray"
  },
  {
    value: 10,
    color: "#23582b",
    highlight: "#A8B3C5",
    label: "SharePoint",
    labelcolor: "darker-green"
  },
  {
    value: 8,
    color: "#4D5360",
    highlight: "#616774",
    label: "Scrum",
    labelcolor: "darker-gray"
  }

  ];
// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}

// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();





