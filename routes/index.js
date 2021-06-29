var express = require('express');
var router = express.Router();
const distanceInWords = require("date-fns/formatDistanceToNow");

const messages = [
  {
    text: "Pizaa's on me!!",
    user: "Gh0st",
    added: new Date(),
  },
  {
    text: "GG!",
    user: "l0newolf",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Message Board', messages:messages, format: distanceInWords});
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add Your Message'});
});

router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date()
  })
  res.redirect("/")
});
module.exports = router;
