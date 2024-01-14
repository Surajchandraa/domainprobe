const dns = require("dns");

const url = require("url")

function get_text(domainname,callback){
    const parsedUrl = url.parse(domainname);
    let domain = parsedUrl.hostname

    dns.resolveTxt(domain,(err,records)=>{
        if(err){
            return callback(err,null);
        }
        else{
            callback(null,records)

        }
    })
}

module.exports=get_text