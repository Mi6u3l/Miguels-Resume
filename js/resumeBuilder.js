//Bio
var bio = {
	"first name": "Miguel",
	"last name": "Gomes",
	"role": "Full-Stack Web Developer",
	"welcome message": "I've been working the last 9 years as a .Net / SharePoint consultant, I'm now specialising in HTML, CSS and JavaScript to create beautiful web experiences.",
	"bio pic": "",
	"contacts": 
		{
			"mobile number": "000-000-0000",
			"email": "miguel.bgomes@gmail.com",
			"github username": "Mi6u3l",
			"location": "Dublin, Ireland"
		},
	"skills": ["HTML5", "CSS3", "Javascript", "C# .net", "SharePoint"]

};

//Education
var education = {
	"schools": [
		{
			"name": "Dublin Business School",
			"location": "Dublin, Ireland",
			"degree": "Advanced Diploma",
			"majors": ["Project Management"],
			"dates": "June 2013",
			"url": "http://www.dbs.ie/"
		},
		{
			"name": "Universidade Lusófona",
			"location": "Lisbon, Portugal",
			"degree": "Bachelor",
			"majors": ["Computer Science"],
			"dates": "June 2006",
			"url": "http://www.ulusofona.pt/"
		}
	
	]
	
};


//Work
var work = {
	"jobs":[
		{
			"employer": "Ergo",
			"title": "Senior Software Developer",
			"location": "Dublin, Ireland",
			"dates": "2012 - Present",
			"description": "Technical architecture analysis for web based applications; <br> Software Development (HTML5, CSS3, JavaScript, C#. net, SharePoint); <br> SharePoint Consultancy."
		}
	]
};

// Projects
var projects = {
	"projects": [
		{
			"title": "Resume",
			"date worked": "Apr, 2015",
			"description": "Resume project for Udacity Front-end Web Development Nanodegree."
		}
		
	]

};




//Show bio
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio["welcome message"]);

	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts ul").append(formattedMobile);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedLocation);

}



//Show education
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
	
	
}


//Show work
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

// Show projects
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			

	}

}

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
    value: 8,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "C# .net",
    labelcolor: "yellow"
  },
  {
    value: 10,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "SharePoint",
    labelcolor: "darkgray"
  }

];

// Show list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}

//Draw doughnut graph
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).Doughnut(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};


bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap)

