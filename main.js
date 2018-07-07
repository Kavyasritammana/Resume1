function LoadJson(file,callback) {
var a=new XMLHttpRequest();
a.overrideMimeType("application/json");
a.open("GET",file,true);
a.onreadystatechange=function(){
  if (a.readyState===4 && a.status=="200"){
    callback(a.responseText);
  }
}
a.send();
}
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  careerObject(data.co);
  education(data.educationalQualifications);
  technicalskills(data.techni);
  achievements(data.Achieve);
  console.log(data.Achieve);
})
var right=document.getElementById("right");

function careerObject(careerObj){
  var career=document.createElement("h4");              //text
 career.textContent="Career Object :";
 career.appendChild(document.createElement("hr"));      //underline
 var para=document.createElement("p");
 para.textContent=careerObj;
  right.appendChild(career);
 right.appendChild(para);

}
//educationalQualifications
function education(edu){
var Educational=document.createElement("h4");
Educational.textContent="Educational Qualification :";
Educational.appendChild(document.createElement("hr"));
right.appendChild(Educational);
var para1=document.createElement("p");
var li="";
for (i in edu) {
 li+=edu[i].name+edu[i].inst;
}
para1.textContent=edu;
para1.innerHTML=li;
right.appendChild(para1);

}

function technicalskills(tech){
var technical=document.createElement("h4");
technical.textContent="technical skills :";
technical.appendChild(document.createElement("hr"));
right.appendChild(technical);
var para2=document.createElement("p");
var l2="";
for(j in tech){
l2+=tech[j].name + tech[j].value;
}
para2.textContent=tech;
para2.innerHTML=l2;
right.appendChild(para2);
}
function achievements(achieve){
var achievement=document.createElement("h4");
achievement.textContent="achievements :";
achievement.appendChild(document.createElement("hr"));
var para3=document.createElement("p");
para3.textContent=achieve.details;
right.appendChild(achievement);
right.appendChild(para3);

}
