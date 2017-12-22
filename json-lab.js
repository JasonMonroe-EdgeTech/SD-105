/**
 * Created by Edge Tech Academy on 5/5/2017.
 */
let casablanca = require('./Casablanca.json');

//  Let's output the casablanca object.
console.log(casablanca);

/*--------------------------------------------------------------------------------------------------------------
 *	 Less than fulfilling wasn't it. The greatest movie ever and all we get is
 *	     { data: { movies: [ [Object] ] },
 *		     about: { version: '2.30.1', serverTime: '2017/05/03 21:14:46' } }
 *		 But what did we see?
 *	     Why is the data section different from the about?
 *	         'about' has details and 'data' has movies and Object
 *	         when a member like data only contains string values, the individual members can be printed
 *	         when the member contains an Object, the Object does not get 'unwound' and 'Object' is displayed
 *	         but you can open it in debug and expand the inner layers
 *------------------------------------------------------------------------------------------------------------*/

//  The JSON object hides the actual movie data down a few levels.
//      To find the actual movie data we need to step over these fields -> casablanca.data.movies[0]
//      This gets us a reference to the movie item in the movies array underneath the data object.
//      BTW We happen to know that there is only ever one movie in the movies array.
let movie = casablanca.data.movies[0];

//  from here on out you are on your own
console.log(casablanca.data.movies[0].title);
console.log("Actors Listed:", casablanca.data.movies[0].actors.length);
