let fs = require("fs");
let p = process.argv;
let ret = [];

// node tagify.js typ args bdy
// node tagify.js dialogue text="We have found some notes that look like they were from an older version of notebook. Click on any of the following to import them:"

let tg = ["@lt;",p[2]]; let args = p[3]; let bdy = p[4];
if (args != null) tg.push(" "+args);
if( bdy != null ) tg.push(">"+bdy+tg[0]+tg[1]+">"); else tg.push("/>");

fs.writeFile('tagifty_output.xml',tg.join(""),'utf8',function(error){console.log(error);});
