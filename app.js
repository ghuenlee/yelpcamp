// ====================================== Configuration ======================================

var express = require('express'),
    app = express(),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));
mongoose.connect('mongodb://localhost/yelpcamp');

// ====================================== Schemas ======================================

var campgroundSchema = mongoose.Schema({
    name: String,
    url: String,
    description: String
});
var Campground = mongoose.model('Campground', campgroundSchema);



// ====================================== Variables ======================================

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
    Campground.find({}, function (err, campgrounds) {
        res.render('campgrounds', {
            campgrounds: campgrounds
        });
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
    Campground.create({
        name: req.body.campNameField,
        description: req.body.campDescField,
        url: req.body.campImageField
    }, function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            console.log('Campground created!');
            console.log(campground);
            res.redirect('/campgrounds');
        }
    });

});

app.get('/campgrounds/:id', function (req, res) {
    res.render('show');
});
// ====================================== Server ======================================

app.listen(app.get('port'), function () {
    console.log('Server started ');
})