# Assignment 1C. HTTP module

---

## Goals

- Create a server
- Respond to URL requests with text
- Respond to URL requests with JSON
- Respond to URL requests with HTML

---

![Data Dealer](https://i.imgur.com/RYHwn2X.png)

As your Web Developer skills begin to grow, word on the street is that you can serve various kinds of data at different URL extensions. It's time to flex your skills with a new API! For each of the following URL extensions, follow their instructions:

First, create a file called `index.js`. This is the file you'll be working on.

URL extension: `localhost:3000/jokes`

Select a random joke from the following data, and send it as a response to `localhost:3000/jokes`.

Jokes:

```js
[
  "What's the pirate's favorite letter? The 'C.'",
  "How do you make a squid laugh? Give it ten-tickles.",
  "What's the best way to make an egg roll? Push it.",
  "What did one eye say to the other? Between us, something smells.",
  "When does a dad joke become a dad joke? When it becomes apparent.",
  "Why did the leaf go to the doctor? It had a bad fall.",
  "A bossy man walked into a bar, then ordered everyone a round.",
  "I'm not a hard drinker. I actually find it pretty easy.",
  "Did you hear about the tree that went into banking? It started its own branch.",
  "How does a lumberjack know how many trees he's cut down? He keeps a log.",
  "Why do barbers make good drivers? They know a lot of short cuts.",
  "I'd tell you a pizza joke, but it's probably too cheesy.",
  "Did you hear about the kidnapping? They woke her up.",
];
```

URL extension: `localhost:3000/albums`

Select a random album from the following data, and send it as a response to `localhost:3000/albums`.

Albums:

```js
[
  {
    artist: "AFI",
    album: "The Art of Drowning",
    release_date: "2020-06-24",
    track_list: [
      "Initiation",
      "The Lost Souls",
      "The Nephilim",
      "Ever and a Day",
      "Sacrifice Theory",
      "Of Greetings and Goodbyes",
      "Smile",
      "A Story at Three",
      "Dream of Waking",
      "The Days of the Phoenix",
      "Catch a Hot One",
      "Wester",
      "The Despair Factor",
      "Morningstar",
    ],
  },
  {
    artist: "Adjy",
    album: "June Songs Vol. 1",
    release_date: "2023-06-02",
    track_list: [
      "Stepping in the Same River Twice",
      "June Song",
      "Here Here",
      "Idioglossia",
      "One 4th of July",
    ],
  },
  {
    artist: "Hail The Sun",
    album: "Wake",
    release_date: "2014-09-23",
    track_list: [
      "Rolling Out the Red Carpet",
      "Human Target Practice",
      "Black Serotonin",
      "Mourning Sickness",
      "Falling On Deaf Ears",
      "Cosmic Narcissism",
      "Relax / Divide",
      "Disappearing Syndrome",
      "Missed Injections",
      "Hanging Revelation",
      "Jane Doe",
      "Anti-Eulogy (I Hope You Stay Dead)",
    ],
  },
  {
    artist: "With Sails Ahead",
    album: "Infinite Void",
    release_date: "2024-04-26",
    track_list: [
      "every day the sky falls",
      "Honey (feat. pulses.)",
      "Darting Eyes",
      "Ryn",
      "Swear Words",
      "Lemongrab",
      "Peach Tea (Obituary)",
      "Picture Perfect Pixels",
      "what if i fall",
      "Oblivion",
      "In Search Of (feat. Kevin Torres from Poeta)",
      "Catastrophe",
      "is this really it?",
    ],
  },
  {
    artist: "Childish Gambino",
    album: "Awaken, My Love!",
    release_date: "2016-12-02",
    track_list: [
      "Me and Your Mama",
      "Have Some Love",
      "Boogieman",
      "Zombies",
      "Riot",
      "Redbone",
      "California",
      "Terrified",
      "Baby Boy",
      "The Night Me and Your Mama Met",
      "Stand Tall",
    ],
  },
  {
    artist: "Michelle Branch",
    album: "The Spirit Room",
    release_date: "2001-08-14",
    track_list: [
      "Everywhere",
      "You Get Me",
      "All You Wanted",
      "You Set Me Free",
      "Something to Sleep To",
      "Here with Me",
      "Sweet Misery",
      "If Only She Knew",
      "I'd Rather Be in Love",
      "Goodbye to You",
      "Drop in the Ocean",
    ],
  },
];
```

URL extension: `localhost:3000/[anything else]`

If someone tries to access any other URL extension, respond with this. Create an HTML file to send back as a response to `localhost:3000/[anything else]*`. On the body of this HTML file, you should have the following:

```html
<h1>Error: Page not found</h1>
<ul>
  Try to access the following:
  <li><a href="/jokes">Jokes</a></li>
  <li><a href="/albums">Albums</a></li>
</ul>
```
