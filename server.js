var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));





var articleOne= {
  title: 'Article-one! courtesy TOI and ISRO',
  heading: 'Article-one',
  date:'Sep 1 2017',
  content:`<p>
     This is the content of my first article.The Indian Space Research Organisation's (ISRO) workhorse,
     the Polar Satellite Launch Vehicle (PSLV), on Thursday failed for the first time in 24 years,
     after a glitch in its heat shield. This is the only second time in its history that the PSLV had failed.
     The only failure of the launch vehicle was when the rocket had failed to ignite after the second stage separated on September 20, 1993
  </p>
  <p>
    On Thursday, Isro announced that the heat shield on PSLV-C39 could not open
    and hence the satellite (IRNSS-1H) could not be released.
  </p>
  <p>
    Polar Satellite Launch Vehicle (PSLV) is the third generation launch vehicle of India. It is the first Indian launch vehicle to be equipped with liquid stages.
    After its first successful launch in October 1994, PSLV emerged as the reliable and versatile workhorse launch vehicle of India with 39 consecutively successful missions
    Besides, the vehicle successfully launched two spacecraft – Chandrayaan-1 in 2008 and Mars Orbiter Spacecraft in 2013 – that later traveled to Moon and Mars respectively.
    IRNSS-1H, the eighth in the NavIC constellation, was to replace IRNSS-1A, the first satellite in the constellation whose rubidium atomic clocks had stopped functioning.
    The clocks are a critical component in providing accurate locational data.
  </p>`
};
function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
       <head>
           <title>
             ${title}
           </title>
        <link href="/ui/style.css" rel="stylesheet" />
       </head>
    <body>
       <div class="container">
          <div>
            <a href="/">Home></a>
          </div>
          <hr/>
          <h3>${heading}</h3>
          <div>
            ${date}
          </div>
          <div>
            ${content}
          </div>
      </div>
    </body>
    </html>
    `;
    return htmlTemplate;
}





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/article-two',function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
