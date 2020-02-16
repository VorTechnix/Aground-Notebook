let fs = require("fs");
let p = process.argv;
let ret = [];

// Format: node mkdb {title} {sep1} {data} {sep2} {iterations}
// node mkdb.js Title "|." "Here is data: *&^%$#@!" "|*" 100

function remDirs(arr) {if (arr.indexOf("C:\\") == -1) return arr;}
p = p.filter(remDirs);
let t = p[0];
let s1 = p[1];
let d = p[2];
let s2 = p[3];
let g = parseInt(p[4]);

console.log([t,s1,d,s2,g]);

for (var i = 0; i <= g; i++) {
  ret.push(t+i+s1+d+i+s2);
  //console.log(t+i+s1+d+i+s2);
}

let tg = ["<action>function testBase(){return \"",ret.join(""),"\";}</action>"];

fs.writeFile('_test_database.xml',tg.join(""),'utf8',function(error){console.log(error);});
