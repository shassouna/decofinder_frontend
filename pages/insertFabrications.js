
const Index = () => {
    return (
        <div></div>
    )
}

export default Index

export async function getStaticProps(context) {

    const fs = require('fs')
    const csv = require('csv-parser')

   fs.createReadStream('C:/Decofinder/SiteDecofinder/decofinder_website_backend/data/data/FABRICATION.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row){
            if(row[key]=="NULL") row[key] = null
        }
        const obj = {
            data : row  
        }

        row['id'] = row['CLE_FABRICATION']
        row['slug'] = row['CLE_FABRICATION']

        fetch ("http://localhost:1337/api/fabrications", {
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


