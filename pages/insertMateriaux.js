
const Index = () => {
    return (
        <div></div>
    )
}

export default Index

export async function getStaticProps(context) {

    const fs = require('fs')
    const csv = require('csv-parser')

   fs.createReadStream('C:/Decofinder/SiteDecofinder/decofinder_website_backend/data/data/MATERIAU.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row){
            if(row[key]=="NULL") row[key] = null
        }
        const obj = {
            data : row  
        }

        row['id'] = row['CLE_MATERIAU']
        row['slug'] = row['CLE_MATERIAU']
        
        fetch ("http://localhost:1337/api/materiaus", {
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


