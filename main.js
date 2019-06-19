// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

let jumpStopArtists = []
let chattenRecordsArtists = []
let polarRecordsArtists = []

// Create a factory function for each possible genre (e.g. createBluegrassArtist()).

function createBluegrassCountryArtist(name, age){
    return {
        name: name,
        genre: "bluegrass and country",
        age: age
    }
}

function createPopArtist(name, age){
    return {
        name: name,
        genre: "pop",
        age: age
    }
}

function createRapandFunkArtist(name, age){
    return {
        name: name,
        genre: "rap and funk",
        age: age
    }
}

// Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

// Bruce Atikins is a Country artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old

let bruceAtkins = createBluegrassCountryArtist("Bruce Atkins", 23)
chattenRecordsArtists.push(bruceAtkins)

let avileeDallas = createBluegrassCountryArtist("Avilee Dallas", 19)
chattenRecordsArtists.push(avileeDallas)

let bartholomewDanielson = createBluegrassCountryArtist("Bartholomew Danielson", 23)
chattenRecordsArtists.push(bartholomewDanielson)
console.log(chattenRecordsArtists)

// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Loyoncé Branis is a Rap artist and is 27 years old

let dreFunkz = createRapandFunkArtist("Dre Funkz", 25)
jumpStopArtists.push(dreFunkz)

let dustaGrimes = createRapandFunkArtist("Dusta Grimes", 21)
jumpStopArtists.push(dustaGrimes)

let loyonceBranis = createRapandFunkArtist("Loyoncé", 27)
jumpStopArtists.push(loyonceBranis)

console.log(jumpStopArtists)

// Austin Kinkaid is a Pop artist and is 22 years old
// Jensen Brown is a Pop artist and is 20 years old

let austinKinkaid = createPopArtist("Austin Kinkaid", 22)
polarRecordsArtists.push(austinKinkaid)

let jensenBrown = createPopArtist("Jensen Brown", 20)
polarRecordsArtists.push(jensenBrown)

console.log(polarRecordsArtists)