const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for an author
let repertoireSchema = new Schema({
  "auditorium": [{type: Schema.Types.ObjectId, ref: 'Auditorium'}], // populate the auditorium
	"movie": [{type: Schema.Types.ObjectId, ref: 'Movie'}], // populate the movie
	"date": String,
	"time": String,
	"guests": Number, // (value that will increase for every new booking)
	"price": Number,
	"seatsTaken": [ // each row in the auditorium (gets nr of rows from the Auditorium property "seatsPerRow"
					[ // each seat in the auditorium
						{
							"seatTaken": false, // (turns true when taken)
							"user": [{type: Schema.Types.ObjectId, ref: 'User'}] // populate the user
						}
					]
				]
});

module.exports = db.model('Repertoire', repertoireSchema);