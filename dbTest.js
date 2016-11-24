var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demo_ag');

var catSchema = mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model('Cat', catSchema);

/*  Creating a cat and saving it to the DB, METHOD 1    */
var cristal = new Cat({
    name: 'Balf',
    age: 13,
    temperament: 'Grumpy'
});

cristal.save(function (err, cat) {
    if (err) {
        console.log('something went wrong');
    } else {
        console.log('We just saved a cat:');
        console.log(cat);
    }
});
/*  ENDOF: METHOD 1    */

/*  Creating a cat and saving it to the DB, METHOD 2    */
Cat.create({
    name: 'Makiri',
    age: 16,
    temperament: 'Sultanic'
}, function (err, cat) {
    if (err) {
        console.log('An error occured: ' + err);
    } else {
        console.log('A new cat has been added: ');
        console.log(cat);
    }
});
/*  ENDOF: METHOD 2    */

// Cat.find({}, function (err, cats) {
//     if (err) {
//         console.log('Error: ' + err);
//     } else {
//         console.log('cat Number 1\'s name : ' + cats[0].name);
//         console.log('cat Number 2\'s age : ' + cats[1].age);
//     }

// });