//1.
var obj1={
    name: "Person 1",
    age:5
};

var obj2={
    age: 5,
    name:"Person 1"
};

JSON.stringify(obj1)===JSON.stringify(obj2)

console.log(JSON.stringify(obj1)=== JSON.stringify(obj2))

//2.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);

for(var i=0;i<result.length;i++){
console.log(result[i].flags);
}
};

//3.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);

for(var i=0;i<result.length;i++){
console.log(result[i].name);
console.log(result[i].region);
console.log(result[i].subregion);
console.log(result[i].population)
}
};





