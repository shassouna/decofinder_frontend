
const Index = () => {
    return (
        <div></div>
    )
}

export default Index

export async function getStaticProps(context) {

    const fs = require('fs')
    const csv = require('csv-parser')

   fs.createReadStream('C:/Users/Stanislas/Documents/strapi_decofinder_website/data/STYLE.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row){
            if(row[key]=="NULL") row[key] = null
        }
        const obj = {
            data : row  
        }
        fetch ("http://decotest2.herokuapp.com/api/styles", {
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


