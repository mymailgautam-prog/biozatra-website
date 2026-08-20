const https = require('https');
const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&generator=search&gsrsearch=aerial+wetland+river&gsrlimit=1&gsrnamespace=6";
https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      const pages = json.query.pages;
      const pageId = Object.keys(pages)[0];
      console.log(pages[pageId].imageinfo[0].url);
    } catch(e) {
      console.log("Error");
    }
  });
});
