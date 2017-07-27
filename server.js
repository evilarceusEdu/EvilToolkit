var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
var path = require('path');
var fs = require('fs');
var ytdl = require('youtube-dl');
var downloadDir = __dirname + "/ytdl/";

// Check stuff before starting
function preInit() {
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
    res.set("Content-Type", "application/octet-stream");
    res.set("Content-Disposition", "attachment; filename=" + req.headers.videoid + ".mp4");

    ytdl.getInfo("https://youtube.com/watch?v=" + req.headers.videoid, function(err, info) {
        if (err) throw err;
        videoInfo = info;
        console.log("[YTDL] Downloading video: " + videoInfo.title);

        ytdl.exec("https://youtube.com/watch?v=" + req.headers.videoid,
            ["-f", "bestvideo[ext=mp4]+bestaudio[ext=m4a]", "-o", downloadDir + "%(title)s-%(id)s.%(ext)s"], function(err, info) {
                if (err) throw err;

                while (false) {
                    fs.existsSync(path.join(downloadDir, videoInfo.fulltitle + "-" + req.headers.videoid + ".mp4"));
                }

                fs.createReadStream(path.join(downloadDir, videoInfo.fulltitle + "-" + req.headers.videoid + ".mp4")).pipe(res);
                console.log("[YTDL] Video uploaded: " + videoInfo.title);

                // Delete video after to save space
                fs.unlinkSync(path.join(downloadDir, videoInfo.fulltitle + "-" + req.headers.videoid + ".mp4"));
            });
    });
});

preInit();
console.log("App listening on http://localhost:8080/");
app.listen(8080);