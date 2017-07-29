var Themes = require('./components/Themes');

module.exports = {
    /* Port to run server on */
    port: 8080,

    /* Default theme
         Valid options: MainTheme, MainTheme_Dark
         Default: MainTheme
    */
    theme: Themes.Light,

    ytdl: {
        /* Directory to download files to
             Default: "ytdl/"
        */
        downloadDir: "ytdl/"
    }

};