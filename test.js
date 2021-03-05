const movie = require("node-movie").getByID;

var rand_id = Math.floor(Math.random() * 3000000) + 1000000;


movie(("tt" + rand_id), data => {
  console.log(data);
});
