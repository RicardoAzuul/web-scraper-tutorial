/*jshint esversion: 6 */

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const PORT = 5000;

const app = express();

const url = 'https://www.theguardian.com/international';

axios(url)
  .then(response => {
    const html = response.data;
    console.log(html);
  });

app.listen(PORT, () => console.log(`server running on PORT ${PORT} `));