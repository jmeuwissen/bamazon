# [bamazon](https://github.com/jmeuwissen/bamazon)
Mock "amazon" CLI app using Node and MySQL



## Purpose

The purpose of this app is to retrieve one of three sets of information and print it in the terminal window:

* Next show time and venue of a band on-tour from Bandsintown

* Information about a song from Spotify

* Imformation about a movie from OMDB

These are specified via command-line arguments upon executing the program. These options may also be specified via file-input, after issuing the file input option via command-line arguments

## Usage

The options for execution are as follows:

### concert-this

* `concert-this "artist"` gives Bandisintown info

##### With Input
![stuff](/assets/images/concert-this.PNG)

### spotify-this-song

* `spotify-this-song "song"` gives Spotify info


##### Default

![spotify-this-song-default](/assets/images/spotify-this-song-default.PNG)

##### With Input

![spotify-this-song](/assets/images/spotify-this-song.PNG)


### movie-this

* `movie-this "movie"` give IMDB info


##### Default

![movie-this](/assets/images/movie-this.PNG)

##### With Input

![movie-this-default](/assets/images/movie-this-default.PNG)

### do-what-it-says

* `do-what-it-says` executes the contents of random.txt as though it was passed as command line options

![do-what-it-says](/assets/images/do-what-it-says.PNG)

## Technology

    * MySQL

## Implementation

We got our feet wet with callback hell! Each interaction with the database results in another promise layer. Five layers of promises in total, if you count the initial connection. One layer was eliminated by retrieving item price in the checkStock function and passing that value through successive functions as a paramete; ultimately it was used to calculate the total cost of the customer's purchase.
