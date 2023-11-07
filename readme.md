# domainprobe
The Domain Info Extractor is a Node.js package that allows users to provide a domain name and retrieve detailed information such as IP address and location.

## Installation:
- You can install the package using npm:
```bash
    npm install domainprobe
```

## Usage:
- ***Importing the Package**
```bash
    const info = require('domainprobe');

```

## Functions available 1:
- ***get_ip('domain_name',callback)**
- This function retrieves the IP address of a domain.
- ***Example***-

```bash

    info.get_ip('https://github.com/', (err, address) => {
        if(err) {
            console.error(err);
        } else {
            console.log(address);
        }
    });


```

- ***Output***-
```js
    [ { address: '20.207.73.82', family: 4 } ]

```

## Function available 2:
- ***data_extract(domain_name, callback)**
- This function provides detailed information about a domain, including its IP address, city, region, country, organization, postal code, timezone, longitude, and latitude.
- ***Example***-


```bash

    info.data_extract('https://github.com/', (err, data) => {
        if(err) {
               console.error(err);
        } else {
            console.log(data);
        }
    });


```
- ***Output***-
```js
    {
      ip: '20.207.73.82',
      city: 'Pune',
      region: 'Maharashtra',
      country: 'IN',
      org: 'AS8075 Microsoft Corporation',
      postal: '411001',
      timezone: 'Asia/Kolkata',
      longitude: 18.5196,
      latitude: 73.8554
    }      

```

## Example 1:
- ***Code***-
```bash
    const info = require('domainprobe');
    info.get_ip('https://www.instagram.com/', (err, address) => {
        if(err) {
            console.error(err);
        } else {
            console.table(address);
        }
    });


```

- ***Output***-
![Screenshot](images/ip_insta_op.png)




## Example 2:

- ***Code***-
```bash
    const info = require('domainprobe');
    info.data_extract('https://www.instagram.com/', (err, address) => {
        if(err) {
            console.error(err);
        } else {
            console.table(address);
        }
    });
```

- ***Output***-
![Screenshot](images/data_insta_op.png)

## Example 3:
- ***Code***-
```bash
    const info = require('domainprobe');


    info.get_ip('https://www.instagram.com/', (err, address) => {
        if(err) {
            console.error(err);
        } else {
            console.table(address);
        }
    });

    info.data_extract('https://github.com/', (err, address) => {
        if(err) {
            console.error(err);
        } else {
            console.table(address);
        }
    });



```
- ***Output***-
![Screenshot](images/example3.png)