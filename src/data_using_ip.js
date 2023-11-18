const get_ip = require('./ip_extraction');
const https = require('https');



function data_extract(domain_name, callback) {
    
    get_ip(domain_name, (err, ip) => {
        for(let i=0;i<ip.length;i++){
        if (!err) {
            
            let ipadd=ip[i].address
            const url = `https://ipinfo.io/${ipadd}/json`;

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
                    delete finaldata2.postal;
                    callback(null, finaldata2);
                });

            });
        } else {
            callback(err, null);
        }
    }
    });
}

module.exports=data_extract