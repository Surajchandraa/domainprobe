const dns = require('dns');

let hostnamesfinal = [];


function getHostname(ip, callback) {
  dns.reverse(ip, (err, hostnames) => {
    if (err) {
      console.error(err);
      return callback(err, null);
    }

    console.log(`Hostnames for ${ip}:`);
    hostnames.forEach((hostname) => {
      hostnamesfinal.push(hostname);
    });

    callback(null, hostnamesfinal);
  });
}

module.exports = getHostname;
