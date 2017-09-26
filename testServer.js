var fs = require('fs')
var path = require('path')
var mega = require('mega')
var ProgressBar = require('progress')

//Youtube

// var youtubedl = require('youtube-dl');
// var video = youtubedl('https://www.youtube.com/watch?v=o9UQSUHHdtA  ',
//   // Optional arguments passed to youtube-dl.
//   ['--format=18'],
//   // Additional options can be given for calling `child_process.execFile()`.
//   { cwd: __dirname });

// // Will be called when the download starts.
// video.on('info', function(info) {
//   console.log('Download started');
//   console.log('filename: ' + info.filename);
//   console.log('size: ' + info.size);
// });

// video.pipe(fs.createWriteStream('myvideo1.mp4'));


//youtube



var argv = require('optimist')
  .demand(1)
  .usage('USAGE: node example/upload [email] [password] <file>')
  .argv

var email = 'n.m.nadeeshan@gmail.com'
var password = 'tuktictec1'
var filepath = 'D:/Mega/myvideo1.mp4'


// if (argv._.length === 1) {
//   email = password = undefined
//   filepath = argv._[0]
// }

var storage = mega({email:email, password:password, keepalive: false})

var up = storage.upload({
    name: path.basename(filepath),
    size: fs.statSync(filepath).size // removing this causes data buffering.
  },
  // fs.readFileSync(filepath),
  function(err, file) {
    if (err) throw err
    console.log('\nUploaded', file.name, file.size + 'B')

    file.link(function(err, link) {
      if (err) throw err
      console.log('Download from:', link)
    })
  })

fs.createReadStream(filepath).pipe(up)

var bar
up.on('progress', function (stats) {
  if (!bar) bar = new ProgressBar('Uploading [:bar] :percent :etas', {
    total: stats.bytesTotal,
    width: 50
  })
  bar.tick(stats.bytesLoaded - bar.curr)
})
up.on('complete', function() {
  // bar.tick() 
})