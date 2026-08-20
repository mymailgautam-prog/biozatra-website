const https = require('https');
const req = https.get('https://api.unsplash.com/search/photos?query=aerial%20river%20wetland%20sunset&client_id=L9x_W8Q4jM_-T_L0j6P5E1HlO6W9j-9eZ4D9s_4s', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log(json.results[0].urls.regular);
    } catch(e) {
      console.log("Error parsing");
    }
  });
});
req.on('error', (e) => {
  console.error(e);
});
