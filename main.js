function LoadJson(file,callback) {
var a=  new XMLHttpRequest();
a.overrideMimeType("application/json");
a.opn("GET",file,true);
a.onreadystatuschange=function(){
  if (a.readyState===4 && a.status=="200") {
    callback(a.responseText);
  }
}
a.send(null);
  }
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.co);
    // console.log(data.co);
})
var right=document.getElementById('right');
var career=document.createElement('h4');
career.textContent="Career Object";
career.appendChild(document.createElement("HR"));
function career(kavya) {
  var cop=document.createElement("p");
  cop.textContent=kavya.co;
  career.appendChild
}
right.appendChild(career);
