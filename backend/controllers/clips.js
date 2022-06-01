const clipsRouter = require('express').Router()
const Clip = require('../models/clip')

clipsRouter.get('/', (request, response) => {
  Clip.find({}).then(clips => {
    response.json(clips)
  })
})

clipsRouter.get('/:id', (request, response, next) => {
  Clip.findById(request.params.id)
    .then(clip => {
      if (clip) {
        response.json(clip)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

clipsRouter.post('/', (request, response, next) => {
  const body = request.body

  const clip = new Clip({
    startTime: body.startTime || "",
    endTime: body.endTime || "",
    title: body.title,
    datePublished: body.datePublished,
    link: body.link,
    name: body.name,
    guests: body.guests || [],
    hosts: body.hosts,
    notes: body.notes || "",
  })

  clip.save()
    .then(savedClip => {
      response.json(savedClip)
    })
    .catch(error => next(error))
})

clipsRouter.delete('/:id', (request, response, next) => {
  Clip.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

clipsRouter.put('/:id', (request, response, next) => {
    const body = request.body
    const clip = {
        startTime: body.startTime || "",
        endTime: body.endTime || "",
        title: body.title,
        datePublished: body.datePublished,
        link: body.link,
        name: body.name,
        guests: body.guests || [],
        hosts: body.hosts,
        notes: body.notes || "",
    }

    Clip.findByIdAndUpdate(request.params.id, clip, { new: true })
        .then(updatedClip => {
        response.json(updatedClip)
        })
        .catch(error => next(error))
})

module.exports = clipsRouter