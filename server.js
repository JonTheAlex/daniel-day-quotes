const express = require('express')
const app = express()

app.use(express.json())

let quotes = [
    {
        id: 1,
        quote: "You're not my son. You're just a little piece of competition.",
        character: "Daniel Plainview",
        movie: "There Will Be Blood"
    },
    {
        id: 2,
        quote: "There are times when I... I look at people and I see nothing worth liking.\
         I want to earn enough money i can get away from everyone.",
        character: "Daniel Plainview",
        movie: "There Will Be Blood"
    },
    {
        id: 3, 
        quote: "HM Tilford: How's your boy?\
        Plainview: Thank you for asking\
        HM Tilford: Is there anything we can do?\
        Plainview: 'Thanks for asking' is enough",
        character: "Daniel Plainview",
        movie: "There Will Be Blood"
    },
    {
        id: 4,
        quote: "Even if you find one that has money and means to drill,\
        he'll maybe know nothing about drilling and he'll have to hire the\
        the job out on contract, and then you're depending on a contractor\
        who'll rush the job through so he can get another contract just as quick\
        as he can. This is... the way that this works.",
        character: "Daniel Plainview",
        movie: "There Will Be Blood"
    },
    {
        id: 5,
        quote: "You've been building your hate for me piece by piece.\
        I don't even know who you are because you have none of me in you.\
        You're someone else's. This anger, your maliciousness, backwards dealings\
        with me.",
        character: "Daniel Plainview",
        movie: "There Will Be Blood"
    },
    {
        id: 6,
        quote:"William Bandy: I know that you would like to build a pipeline through my property\
        Is that right, what I've hear?\
        Plainview: It's absolutely right.\
        William Bandy: God has told me what you must do. I'd like you to be part of our church.\
        Plainview: I'll pay you five thousand dollars.\
        William Bandy: Be baptized, be forgive for the sin that you've done.\
        Plainview: What sin are you, uh referring to, Mr. Bandy? My...my sin of\
        drilling?",
        character: "Daniel Plainview",
        movie: "There Will Be Blood"
    },
    {
        id: 7,
        quote: "I am a false prophet! God is a superstition!",
        character: "Daniel Plainview",
        movie: "There Will Be Blood"
    },
    {
        id: 8,
        quote: "I have abandoned my child! I have abandoned my boy!",
        character: "Daniel Plainview",
        movie: "There Will Be Blood"
    },
    {
        id: 9,
        quote: "There's a whole ocean of oil under our feet! No one can\
        get at it except for me!",
        character: "Daniel Plainview",
        movie: "There Will Be Blood"
    },
    {
        id: 10,
        quote: "I drink your milkshake. I drink it up!",
        character: "Daniel Plainview",
        movie: "There Will Be Blood"
    },
    {
        id: 10,
        quote: "I drink your milkshake. I drink it up!",
        character: "Daniel Plainview",
        movie: "Barney"
    }           
]

app.get('/', (request, response) => {
    response.send('<h1>Welcome to Daniel Day Lewis Quotes!</h1>')
})

app.get('/api/quotes', (request, response) => {
    response.json(quotes)
})

app.get('/api/quotes/:id', (request, response) => {
    const id = Number(request.params.id)
    const quote = quotes.find(quote => {
        return quote.id === id
    })

    if (quote){
        response.json(quote)
    } else {
        response.status(404).end()
    }
})

app.get('/api/movie/:movie', (request, response) => {
    const movie = request.params.movie
    console.log(movie)
    const quote = quotes.filter(quote => {
        return quote.movie === movie
    })

    if (quote){
        response.json(quote)
    } else {
        response.status(404).end()
    }
})

app.get('/api/character/:character', (request, response) => {
    const character = request.params.character
    console.log(character)
    const quote = quotes.filter(quote => {
        return quote.character === character
    })

    if (quote){
        response.json(quote)
    } else {
        response.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})