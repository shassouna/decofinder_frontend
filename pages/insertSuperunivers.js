import React from 'react';
const Index = () => {
    return (
        <div></div>
    );
}

export default Index

export async function getStaticProps(context) {

    const fs = require('fs')
    const csv = require('csv-parser')

    fs.createReadStream('C:/Decofinder/SiteDecofinder/decofinder_website_backend/data/data/SUPERUNIVERS_DETAILS.csv')
    .pipe(csv())
    .on('data', (row) => {
        const obj = {
            data : row
        }

        row['id'] = row['CLE_SUPERUNIVERS']
        row['slug'] = row['CLE_SUPERUNIVERS']
        
        fetch ("http://localhost:1337/api/superuniversdetailss",{
        method : "POST",
        headers : {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(obj)
        }
        )
    })    
   return {
    props : {
        data : []
    }
   }
}


