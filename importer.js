// This program needs to be run once
// to import our book data from JSON to MongoDB

const mongoose = require('mongoose');

// Connect to db
let dbName = 'cinema'
mongoose.connect(`mongodb://localhost/${dbName}`);
global.db = mongoose.connection;
db.on('error', () => console.log('Could not connect to DB'));
db.once('open', () => {
  console.log('Connected to DB');
  importJsonDataToDb();
});

// Load the Mongoose model
let Auditorium = require('./Auditorium');
let Movie = require('./Movie');
let Repertoire = require('./Repertoire');

// Load the json data from file
let AuditoriumData = require('./json/auditoriums.json');
let MovieData = require('./json/movies.json');
let RepertoireData = require('./json/repertoires.json')


//import function
async function importJsonDataToDb(){
  let allAuditoriumsCount = await Auditorium.count();
  let allMoviesCount = await Movie.count();
  let allRepertoiresCount = await Repertoire.count();


  // if the db already contains data then delete it
  if(allAuditoriumsCount > 0){
    console.log('Deleted old Auditorium', await Auditorium.remove({}));
  }
  if(allMoviesCount > 0){
    console.log('Deleted old Movies', await Movie.remove({}));
  }
  if(allRepertoiresCount > 0){
    console.log('Deleted old Repertoire', await Repertoire.remove({}));
  }


  for(let data of AuditoriumData){
    let auditorium = new Auditorium(data);
    // save the auditorium to MongoDB
    await auditorium.save();
  }

  for(let data of MovieData){
    let movie = new Movie(data);
    // save the movie to MongoDB
    await movie.save();
  }

  for(let data of RepertoireData){
    let repertoire = new Repertoire(data);
    // save the Repertoire to MongoDB
    await repertoire.save();
  }


  // after the import count the items again
  allAuditoriumCount = await Auditorium.count();
  console.log(`Imported ${allAuditoriumsCount} Auditoriums to the database`);

  allMovieCount = await Movie.count();
  console.log(`Imported ${allMoviesCount} Movies to the database`);

  allRepertoireCount = await Repertoire.count();
  console.log(`Imported ${allRepertoiresCount} Repertoires to the database`);


  // Exit the app
  process.exit();
}