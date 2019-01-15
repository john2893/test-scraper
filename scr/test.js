var cheerio = require("cheerio");
var axios = require("axios");
axios.get("https://www.nytimes.com/section/todayspaper").then(function(response) {
  var $ = cheerio.load(response.data);
  var results = [];
  $(".css-141drxa").each(function(i, element) {
    var title = $(element).text();
    console.log (title)
    var link = "https://www.nytimes.com" + $(element).children().attr("href");
    results.push({
      titles: title,
      link: link
    });
  });
  console.log(results.length);
  for (var i=0; i<results.length; i++){
    console.log("Title: " + results[i].titles + "\n\r" + "Links: " + results[i].link)
  }
});
