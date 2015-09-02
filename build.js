// this require nodejs
// INSTALL 
// npm install easy-zip
function tD(n){return (n < 10) ? '0'+n: n; }
var fs = require('fs');
var datetime = new Date();
var folderBuilds = 'builds/';
var fileBuildName = folderBuilds
    + datetime.getFullYear()
    + tD(datetime.getMonth()+1)
    + tD(datetime.getDate())
    + '-'
    + tD(datetime.getHours())
    + tD(datetime.getMinutes())
    + tD(datetime.getSeconds())
    + '.crx';

if (!fs.exists(folderBuilds)) {
    fs.mkdir(folderBuilds);
}

var EasyZip = require('easy-zip').EasyZip;

var zip2 = new EasyZip();

// add folders
var appFolder = zip2.folder('app');
var imgFolder = zip2.folder('img');
//appFolder.file('hello.js','alert("hello world")');
//
var files = [
	{source: 'chrome.js', target:'chrome.js'},
	{source: 'jquery.min.js', target:'jquery.min.js'},
	{source: 'main.css', target:'main.css'},
	{source: 'main.js', target:'main.js'},
	{source: 'manifest.json', target:'manifest.json'},
	{source: 'settings.js', target:'settings.js'},
];
// add files
zip2.batchAdd(files, function(){
	zip2.writeToFile(fileBuildName);
});
zip2.writeToFile(fileBuildName);