const https = require('https');



function data_extract_ip(ip_address, callback) {
    
            const url = `https://ipinfo.io/${ip_address}/json`;

            https.get(url, (response) => {
                let data = '';
                response.on('data', (chunk) => {
                    data += chunk;
                });
                response.on('end', () => {
                    let finaldata=data;
                    let finaldata2=JSON.parse(finaldata);

                    let location=finaldata2.loc;
                    let [longitude, latitude]=location.split(',').map(parseFloat);
                    finaldata2.longitude=longitude;
                    finaldata2.latitude=latitude;
                    delete finaldata2.readme;
                    delete finaldata2.loc;
                    callback(null, finaldata2);
                });

            });
        }
    
    


module.exports=data_extract_ip;