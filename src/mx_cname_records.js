const dns = require("dns");
const url= require("url");

function get_mx(domainname,callback){
    let parsedUrl=url.parse(domainname);
    let domain= parsedUrl.hostname;

    dns.resolveMx(domain,(err,records)=>{
        if(err){
            return callback(err,null);
        }
        else{
            callback(null,records);
        }
    })
}

function get_cname(domainname,callback){
    let parsedUrl=url.parse(domainname);
    let domain= parsedUrl.hostname;

    dns.resolveCname(domain,(err,records)=>{
        if(err){
            return callback(err,null);
        }
        else{
            callback(null,records);
        }
    })
}

module.exports={get_cname,get_mx}