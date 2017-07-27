var fs = require('fs');
var path = require('path');
var youtubedl = require('youtube-dl');

module.exports = {
    DownloadYT: function (videoUrl, format) {
        // Check if link is valid
        if (!videoUrl.includes("youtube"))
            return;
        var video = youtubedl(videoUrl,
            ['--format=' + format]);

        video.on('info', function (info) {
            var filename = info._filename;
            var downloadDir = __dirname + "/ytdl/";

            console.log("Download started: " + videoUrl);
            console.log("Filename: " + info._filename);
            console.log('Size: ' + info.size);

            // Check if ytdl folder exists
            fs.stat(downloadDir, function (err, stats) {
                if (err == null) {
                    // Directory exists - Do nothing
                }
                else if (err.code == "ENOENT") {
                    // Directory doesn't exist - Create directory
                    fs.mkdir(downloadDir);
                }
                else {
                    // Unexpected error
                    console.log("Unknown error occured: " + err);
                    return;
                }
            });

            // Download specified file
            fs.stat(downloadDir + filename, function (err, stats) {
                if (err == null) {
                    // Stop process
                    return;
                }
                else if (err.code == "ENOENT") {
                    // Download file
                    video.pipe(fs.createWriteStream(downloadDir + filename));
                }
            });

        })
    }
}