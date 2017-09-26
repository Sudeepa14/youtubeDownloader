function download(url, tempFilepath, filepath, callback) {
    var tempFile = fs.createWriteStream(tempFilepath);
    tempFile.on('open', function(fd) {
        http.request(url, function(res) {
            res.on('data', function(chunk) {
                tempFile.write(chunk);
            }).on('end', function() {
                tempFile.end();
                fs.renameSync(tempFile.path, filepath);
                return callback(filepath);
            });
        });
    });
}