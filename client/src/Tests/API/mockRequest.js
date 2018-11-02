const fs = require('fs')

const request = () => new Promise((resolve, reject) => {
  // Load user json data from a file in de subfolder for mock data
  fs.readFile('./mockData.json', 'utf8', (err, data) => {
    if (err) reject(err)
    // Parse the data as JSON and put in the key entity (just like the request library does)
    resolve({ entity: JSON.parse(data) })
  })
})

export default request