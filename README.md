# alexa-ssml-builder

[![Build Status](https://travis-ci.org/blacktrue/alexa-ssml-builder.svg?branch=master)](https://travis-ci.org/blacktrue/alexa-ssml-builder)

## Install

```
npm install @blacktrue/alexa-ssml-builder --save
```

## Example of use

```javascript
const SSMLBuilder = require('@blacktrue/alexa-ssml-builder')

const ssmlBuilder = new SSMLBuilder()

const speak = ssmlBuilder.text('hi, my name is alexa')
.break(5, 'ms')
.text('¿How can I help you?')
.getSpeak()

console.log(speak)
```