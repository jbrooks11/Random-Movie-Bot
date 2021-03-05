const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

const movie = require("node-movie").getByID;

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    var incorrect_episode_count = 0;
    var too_short_count = 0;

  
    if (command === "movie") {
        for (let tries = 0; tries < 120; tries++) {
        var rand_id = Math.floor(Math.random() * 800000) + 1000000;
        movie(("tt" + rand_id), data => {
            if (data.Type == "episode" | data.Genre == "Adult") {
                {
                    incorrect_episode_count += 1;
                    tries++;
                }
            }
            else {
                runtime = data.Runtime;
                rt_int =  parseInt(runtime);
                    if (rt_int > 60) {
                        message.reply("Title: " + data.Title +
                        "\nYear: " + data.Year +
                        "\nGenre: " + data.Genre +
                        "\nRating: " + data.imdbRating +
                        "\nLanguage: " + data.Language +
                        "\nLink: https://www.google.com/search?q=" + data.imdbID +
                        "\nEpisode Count: " + incorrect_episode_count +
                        "\nToo Short: " + too_short_count);
                        
                    }
                    else{
                        too_short_count += 1
                        tries++;
                    }
                }
            });
        }
    }
});
  

client.login(config.BOT_TOKEN);
