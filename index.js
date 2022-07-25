
const axios = require('axios')
const cheerio = require('cheerio');
const express = require('express')
const app = express()
const port = 3000



const URL = 'https://www.theguardian.com/international'

axios(URL)
     .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        // create array to push the data to it 
        const articles = []
   // search by class name 
        $('.fc-item__title',html).each(function()
        {
      const title =  $(this).text()
      const URL = $(this).find('a').attr('href')
      articles.push({
        title,
        URL
      })
     })
console.log(articles)
    }).catch(err => console.log(err))

    // check the server is work 
app.listen(port, () => console.log(`server running on PORT ${port}`))
