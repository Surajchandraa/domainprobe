const get_ip= require('./src/ip_extraction');
const data_extract=require('./src/data_using_ip');
const get_hostname=require('./src/other_data');
const data_extract_ip=require('./src/data_direct_by_ip');
const exact_location=require('./src/location');
const get_text=require('./src/txtrecord');
const {get_cname,get_mx}=require("./src/mx_cname_records")





module.exports={get_ip,data_extract,get_hostname,data_extract_ip,exact_location,get_text,get_cname,get_mx}