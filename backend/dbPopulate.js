const mongoose = require('mongoose')
const { MONGODB_URI } = require("./utils/config");

const url = MONGODB_URI

mongoose.connect(url)

const Clip = require("./models/clip")

const clip1 = new Clip({
    startTime: "1:07:00",
    endTime: "1:10:00",
    title: "#297 - The Lodge from Hell",
    datePublished: "05/07/2022",
    link: "https://www.youtube.com/watch?v=7Ax6H7QP32k",
    name: "The Tim Dillon Show",
    guests: ["Sam Tallent"],
    hosts: [
        "Tim Dillon",
        "Ben Avery"
    ],
    notes: "Tim talks about the reasons for late-term abortions and does a theatrical presentation (and the NUMBER ONE REASON IS...)"
})

const clip2 = new Clip({
    startTime: "1:37:00",
    endTime: "1:40:00",
    title: "#8 Tim Dillon",
    datePublished: "02/20/2019",
    link: "https://www.youtube.com/watch?v=_cI5GTxKbBU",
    name: "The HoneyDew Podcast",
    guests: [
        "Tim Dillon"
    ],
    hosts: [
        "Ryan Sickler"
    ],
    notes: "Talking about how Tim was so miserable and wanted an escape so badly he purposefully got on jury duty and that relationships are great but you need to build your life in other areas"
})

const clip3 = new Clip({
    startTime: "00:00:00",
    endTime: "01:21:53",
    title: "#293 - Fat Activism with Jessica Kirson",
    datePublished: "04/02/2022",
    link: "https://www.youtube.com/watch?v=uZKxn5xl1bw",
    name: "The Tim Dillon Show",
    guests: ["Jessica Kirson"],
    hosts: [
        "Tim Dillon",
        "Ben Avery"
    ],
    notes: "Great episode overall. I think at around 12 minutes (could be wrong) they talk about Alcoholics Anonymous"
})

clip1.save().then(result => {
    console.log('clip1 saved!')
})

clip2.save().then(result => {
    console.log('clip2 saved!')
})

clip3.save().then(result => {
    console.log('clip3 saved!')
    mongoose.connection.close()
})

