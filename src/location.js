// This data includes location information provided by OpenStreetMap.
// Map data © OpenStreetMap contributors, CC BY-SA 2.0.


const baseUrl = 'https://nominatim.openstreetmap.org';
const https = require('https');


function exact_location(lat,long,callback){


      const apiUrl = `${baseUrl}/reverse?format=json&lat=${lat}&lon=${long}`;

      const options = {
        headers: {
          'User-Agent': 'Suraj/1.0 (surajjoshi@gmail.com)',
        },
      };

      // Pass options as the first argument
      https.get(apiUrl, options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          if (res.statusCode === 200) {
            let final = JSON.parse(data);
            callback(null, final.address);
          } else {
            callback(res.statusCode, null);
          }
        });
      }).on('error', (error) => {
        callback(error, null);
      });
    }
  

   module.exports=exact_location;