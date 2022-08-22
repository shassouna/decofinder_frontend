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

    fs.createReadStream('C:/Users/Stanislas/Documents/SALIM_PROJECTS/strapi_decofinder_website/data/SUPERUNIVERS_DETAILS.csv')
    .pipe(csv())
    .on('data', (row) => {
        const obj = {
            data : row
        }
        fetch ("http://decotest2.herokuapp.com/api/superuniversdetailss",{
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


