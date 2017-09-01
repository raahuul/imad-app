var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles = {
    'article-one': {
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
    },

    'article-two': {
      title:  'Article-two! courtesy The Hindu',
      heading: 'Article-two',
      date:'Sep 2 2017',
      content:`<p>
         The Indian Meteorological Department had forecast “heavy to very heavy rains” in entire coastal Konkan region of Maharashtra, including Mumbai.
         Similar wet conditions shall prevail in the Konkan districts of Palghar, Thane, Mumbai, Raigad, Ratnagiri and Sindhudurg over the 48-72 hours from 8 am.
      </p>
      <p>
        Besides Konkan, heavy rains were expected in central Maharashtra and Marathwada region, in neighbouring Goa
        and Gujarat’s Kutchh and Saurashtra regions starting from Wednesday till Sunday.
      </p>
      <p>
        In case you ever get stuck in a car in a flood like situation, here are some essential dos and don'ts.

        1. Do not stay in the car, with the windows rolled up, thinking you'll stay safe and dry just because you're parked.
        After a while, the oxygen level inside the car will start depleting which can be fatal.
        If D water on D roads is heading up to the level of your tyres, please abandon the car.
        Being on your 2 feet may be uncomfortable but safer


        2. Park your car and get out, in case the water level reaches the door. Once water gets into the car,
        it can short circuit the electrical parts and make the security system malfunction leading to you getting locked inside the car.


        3. In case your car is almost submerged and you don't know how deep the waters are,
        do not try to open the doors. It is very difficult to do it against water pressure, and even if you manage to open the door, water will rush into the vehicle making it sink.


        4. If you think the car is indeed going to sink, unbuckle the seat belt. If the windows refuse to open,
        you would need to break it, to get out. For situations like these, it's ideal to have a small hammer handy, but in case it's not there,
        the head rest can be pulled out and the pointed end used to break the glass. "You can use your elbow or your heels also, right in the centre of the door window,
        not the front windscreen, not the rear windscreen. The front windscreen is laminated, so even if you're able to break it you will not be able to go through," the expert advised.



        5. If you're forced to drive through a flooded area,
        make sure you keep the engine rev higher than usual and the car in first gear to ensure that water does not enter the exhaust.

      </p>`
    },

    'article-three': {
      title:  'Article-three! courtesy the Citizen',
      heading: 'Article-three',
      date:'Sep 3 2017',
      content:`<p>
         The total value of demonetized currency, in the form of Rs.500 and Rs.1000 notes, was Rs. 15.44 lakh crores,
         of which Rs.15.28 lakh crores came back to the banking system, which is 98.96 percent. Since a few small windows are still open for the return of demonetized currency,
         the final figure will certainly exceed 99 percent, which puts paid to the government’s claim that demonetization would deal a crippling blow to the black economy
      </p>
      <p>
        The absurdity of this argument now stands exposed.
      </p>
      <p>
        Well, it now turns out that that the value of currency not returned till now is only a paltry Rs.16000 crores,
        and most of it no doubt from honest people who could not meet the deadline for turning in their old currency notes: it amounts in other words to a sheer loot of honest people by the government.

      </p>`
    }
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
app.get('/:articleName',function(req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
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
