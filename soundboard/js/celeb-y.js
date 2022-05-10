console.log("Hello, world!");

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyv95oI4fnSU3EgP" }).base(
  "apprYjkG6aBXj2WbE"
);

base("Main").select({view: "celeb-y"}).eachPage(gotPageOfSeasons, gotAllSeasons);

