exports.handler = async function (event, context) {
  return {
    body: JSON.stringify({ event, context }),
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
  }
}
