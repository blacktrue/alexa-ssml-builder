'use strict'

const builder = require('xmlbuilder')

class SSMLBuilder {
  constructor () {
    this.init()
  }

  /**
   *
   * @param time
   * @param unit
   * @returns {SSMLBuilder}
   */
  break (time = 0.5, unit = 's') {
    this.speak.ele('break', {
      time: `${time}${unit}`
    })

    return this
  }

  /**
   *
   * @param url
   * @returns {SSMLBuilder}
   */
  audio (url = null) {
    if (url) {
      this.speak.ele('audio', {
        src: url
      })
    }

    return this
  }

  /**
   *
   * @param text
   * @returns {SSMLBuilder}
   */
  text (text) {
    return this.p(text)
  }

  /**
   *
   * @param text
   * @returns {SSMLBuilder}
   */
  p (text) {
    this.speak.ele('p', null, text)

    return this
  }

  /**
   *
   * @param interpretAs
   * @param value
   * @returns {SSMLBuilder}
   */
  sayAs (interpretAs, value) {
    this.speak.ele('say-as', {
      'interpret-as': interpretAs
    }, value)

    return this
  }

  /**
   *
   * @param effect
   * @param value
   * @returns {SSMLBuilder}
   */
  awsEffect (effect, value) {
    this.speak.ele('amazon:effect', {
      'name': effect
    }, value)

    return this
  }

  /**
   *
   * @param pretty
   * @returns {*|void|number}
   */
  getSpeak (pretty = false) {
    return this.speak.end({
      pretty: pretty
    })
  }

  /**
   *
   * @returns {SSMLBuilder}
   */
  init () {
    this.speak = {}
    this.speak = builder.create('speak', null, null, {headless: true})
    return this
  }
}

module.exports = SSMLBuilder