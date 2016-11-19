// ====================================== Configuration ======================================

var express = require('express'),
    app = express(),
    ejs = require('ejs'),
    bodyParser = require('body-parser');

app.set('view engine', 'ejs');

// ====================================== Variables ======================================

var campgrounds = [{
    name: "Salmon Creek",
    image: "https://farm9.staticflickr.com/8225/8524305204_43934a319d.jpg"
}, {
    name: "Granite Hill",
    image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"
}, {
    name: "Mountain Goat's Rest",
    image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"
}, {
    name: "Rasberry's domain",
    image: "http://i.telegraph.co.uk/multimedia/archive/03386/alamy-raspberries-_3386897b.jpg"
}, {
    name: "Salmon Creek",
    image: "https://farm9.staticflickr.com/8225/8524305204_43934a319d.jpg"
}, {
    name: "Granite Hill",
    image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"
}, ];

// ====================================== Middleware ======================================

app.use(express.static('public'));
app.use(express.static('src'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// ====================================== Routes ======================================

app.get('/', function (req, res) {
    res.render('landing');
});
app.get('/campgrounds', function (req, res) {
    res.render('campgrounds', {
        campgrounds: campgrounds
    });
});
app.get('/test', function (req, res) {
    res.render('test', {
        campgrounds: campgrounds
    });
});
app.get('/campgrounds/new', function (req, res) {
    res.render('new');
});
app.post('/campgrounds', function (req, res) {
    var newCamp = {
        name: req.body.campNameField,
        image: req.body.campImageField
    };
    campgrounds.push(newCamp);
    console.log('Someone sent a POST request to /campgrounds !');
    res.redirect('/campgrounds');
});

// ====================================== Server ======================================

app.listen(8080, '0.0.0.0', function () {
    console.log('Server started on port 8080');
})