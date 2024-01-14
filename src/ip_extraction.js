const dns = require('dns');
const url = require('url');

function get_ip(domain_name,callback){

    const parsedUrl = url.parse(domain_name);
    const domain = parsedUrl.hostname;

    const lookupOptions = {
    all: true, 
    };

    dns.lookup(domain,lookupOptions,(err,address)=>{
        if(err){
            return callback(err,null)        }
        else{
            callback(null,address)
        }
    })

}

module.exports=get_ip;