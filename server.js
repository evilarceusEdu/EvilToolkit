var cfg = require('./app/Config');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var ytdl = require('youtube-dl');
var app = express();
var downloadDir = path.join(__dirname, cfg.ytdl.downloadDir);
app.use(bodyParser.urlencoded({ extended: false }));



// Check stuff before starting
function preInit() {
    // Make sure downloadDir ends with a trailing slash
    if (!downloadDir.endsWith("/")) {
        downloadDir += "/";
        console.warn("The download directory for YouTubeDL does not contain a trailing slash. Please add it to remove this message.");
    }

    // Create download directory for YTDL
    fs.stat(downloadDir, function (err, stats) {
        if (err === null) {
            // Directory exists - Do nothing
        }
        else if (err.code === "ENOENT") {
            // Directory doesn't exist - Create directory
            fs.mkdir(downloadDir);
        }
        else {
            // Unexpected error
            console.log("Unknown error occured: " + err);
            throw err;
        }
    });
}

// Send index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './app/index.html'));
});

// Send bundle.js
app.get('/bundle.js', function(req, res) {
    res.sendFile(path.join(__dirname, './dist/bundle.js'));
});

// TODO: Make this thing actually work
app.get('/getSource', function(req, res) {
    var source = fs.readFileSync(path.join(__dirname, req.headers.file), 'utf8');
    res.send(source);
});


app.get('/scripts/ytdl', function(req, res) {
    var videoInfo = undefined;
    var videoId = req.headers.videoid;
    var extension = req.headers.filetype;

    res.set("Content-Type", "application/octet-stream");
    res.set("Content-Disposition", "attachment; filename=" + videoId + extension);

    ytdl.getInfo("https://youtube.com/watch?v=" + videoId, function(err, info) {
        if (err) throw err;
        videoInfo = info;
        console.log("[YTDL] Downloading video: " + videoInfo.title);
        var args;
        if (extension === ".mp4") {
            args = ["-f", "bestvideo[ext=mp4]+bestaudio[ext=m4a]", "-o", downloadDir + "%(title)s-%(id)s.%(ext)s"];
        }
        if (extension === ".mp3") {
            args = ["-f", "bestaudio", "-o", downloadDir + "%(title)s-%(id)s.%(ext)s", "--extract-audio", "--audio-format=mp3"];
        }

        ytdl.exec("https://youtube.com/watch?v=" + videoId, args, function (err, info) {
                if (err) throw err;

                while (false) {
                    fs.existsSync(path.join(downloadDir, videoInfo.title + "-" + videoId + extension));
                }

                fs.createReadStream(path.join(downloadDir, videoInfo.title + "-" + videoId + extension)).pipe(res);
                console.log("[YTDL] Video uploaded: " + videoInfo.title);

                // Delete video after to save space
                fs.unlinkSync(path.join(downloadDir, videoInfo.title + "-" + videoId + extension));
            });
    });
});

preInit();
console.log("App listening on http://localhost:8080/");
app.listen(cfg.port);