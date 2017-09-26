var express = require('express')
const router=express.Router();
var bodyParser = require('body-parser'); 

var html = require('HTML');

var fs = require('fs-extra');
// var path = require('path')
var mega = require('mega');
// for async functioning
var async =require('async');
var ProgressBar = require('progress');
// var argv = require('optimist')
//   .demand(1)
//   .usage('USAGE: node example/upload [email] [password] <file>')
//   .argv

var youtubedl = require('youtube-dl');
var controller=require('./controller/UpDld.js');
var promise =require('bluebird');
var rp=require('request-promise');

router.get('/', (req, res) => {
   res.sendFile('index.html', {
     root: '/views'
   });
});

router.post('/d4',function(req,res){
  console.log(req.body);
  var video=req.body.video;
  controller.uploadDownload(req,res,video);
});
module.exports = router;