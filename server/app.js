var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const Quest = require('./models/question');
var QList = require('./data/dummy_data');
var onQuestionRouter = require('./routes/onQuestion');
var onGameOverRouter = require('./routes/onGameOver');
var nextQuestionRouter = require('./routes/nextQuestion');
const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');


mongoose.connect('mongodb://localhost:27017/termProj-201520544',
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

// CONFIGURE APP TO USE bodyParser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send("Server is running");
});

app.use('/onQuestion', onQuestionRouter);
app.use('/nextQuest', nextQuestionRouter);
app.use('/onGameOver', onGameOverRouter);
// CONFIGURE SERVER PORT
// var port = process.env.PORT || 3001;
const port = 3001;

// CONFIGURE ROUTER
//var router = require('./routes')(app)

// RUN SERVER
app.listen(port, function () {
  console.log("Express server has started on port " + port);
  console.log("Data create");
  for (let i = 0; i < QList.length; i++) {
    var quest = new Quest({
      title: QList[i].title,
      bloodType: QList[i].bloodType
    });
    quest.save().then(() =>
      console.log(`${QList[i]} was saved into the mongo DB`))
      .catch((err) => {
        console.error(err);
      });
  }

  console.log("Data created Completely");

});

module.exports = app;