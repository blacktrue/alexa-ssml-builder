'use strict'

const expect = require('chai').expect
const SSMLBuilder = require('../')

describe('SSMLBuilder', () => {
  it('break', () => {
    const ssml = new SSMLBuilder()
    const speak = ssml.break(0.5, 'ms')
    .getSpeak()

    expect(speak).to.equal('<speak><break time="0.5ms"/></speak>')
  })

  it('audio', () => {
    const ssml = new SSMLBuilder()
    const audioSrc = 'http://google.com/rr.mp3'
    const speak = ssml.audio(audioSrc)
    .getSpeak()

    expect(speak).to.equal('<speak><audio src="' + audioSrc + '"/></speak>')
  })

  it('text', () => {
    const ssml = new SSMLBuilder()
    const speak = ssml.text('hola')
    .getSpeak()

    expect(speak).to.equal('<speak><p> hola</p></speak>')
  })

  it('p', () => {
    const ssml = new SSMLBuilder()
    const speak = ssml.p('hola')
    .getSpeak()

    expect(speak).to.equal('<speak><p> hola</p></speak>')
  })

  it('sayAs', () => {
    const ssml = new SSMLBuilder()
    const speak = ssml.sayAs('number', 100)
    .getSpeak()

    expect(speak).to.equal('<speak><say-as interpret-as="number">100</say-as></speak>')
  })

  it('awsEffect', () => {
    const ssml = new SSMLBuilder()
    const speak = ssml.awsEffect('whispered', 'soy tu conciencia')
    .getSpeak()

    expect(speak).to.equal('<speak><amazon:effect name="whispered">soy tu conciencia</amazon:effect></speak>')
  })

  it('raw', () => {
    const speak = SSMLBuilder.raw('break', {time: '0.5s'})

    expect(speak).to.equal('<break time="0.5s"/>')
  })

  it('add', () => {
    const ssml = new SSMLBuilder()
    const speak = ssml.add('prosody', {volume: 'x-loud'}, 'Louder volume for the second sentence')
    .getSpeak()

    expect(speak).to.equal('<speak><prosody volume="x-loud">Louder volume for the second sentence</prosody></speak>')
  })
})
