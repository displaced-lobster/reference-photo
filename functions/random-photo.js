const fetch = require('node-fetch')
const toJson = require('unsplash-js').toJson
const Unsplash = require('unsplash-js').default

global.fetch = fetch

const headers = { 'Content-Type': 'application/json' }

exports.handler = async function () {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY

  if (!accessKey) {
    return {
      body: JSON.stringify({ error: 'Failed to load access key' }),
      headers,
      statusCode: 500,
    }
  }

  const unsplash = new Unsplash({ accessKey })

  let error = ''

  const body = await unsplash.photos.getRandomPhoto().then(toJson).catch(err => { error = err })

  if (error) {
    return {
      body: JSON.stringify({ error }),
      headers,
      statusCode: 400,
    }
  }

  return {
    body: JSON.stringify(body),
    headers,
    statusCode: 200,
  }
}
