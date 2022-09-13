
const Index = () => {
    return (
        <div></div>
    )
}

export default Index

export async function getStaticProps(context) {

    const fs = require('fs')
    const csv = require('csv-parser')

   fs.createReadStream('C:/Decofinder/SiteDecofinder/decofinder_website_backend/data/data/STYLE.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row){
            if(row[key]=="NULL") row[key] = null
        }
        const obj = {
            data : row  
        }
        
        row['id'] = row['CLE_STYLE']
        row['slug'] = row['CLE_STYLE']

        fetch ("http://localhost:1337/api/styles", {
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


