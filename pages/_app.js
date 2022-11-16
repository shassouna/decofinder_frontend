
// import "react-input-range/lib/css/index.css"
import "react-perfect-scrollbar/dist/css/styles.css"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import "slick-carousel/slick/slick-theme.css"
// import "slick-carousel/slick/slick.css"
import "react-responsive-modal/styles.css"
// import WOW from 'wowjs'
// Swiper Slider
import "swiper/css"
import "swiper/css/navigation"
import "../public/assets/css/main.css"


import axios from "axios"

import Layout from "./../components/layout/Layout"

function MyApp({ Component, pageProps, menuHeaderData }) {

    return (    
            <Layout noBreadcrumb="d-none" menuHeaderData={menuHeaderData}>                     
                        <Component {...pageProps} menuHeaderData={menuHeaderData}/>
                        <ToastContainer />
            </Layout>
    )
}

export default MyApp

MyApp.getInitialProps = async () => {

    // import qs
    const qs =require('qs')
    
    // get data for the header menu 
    const query = qs.stringify({
          populate: ['rayondetails.categories','rayondetails'],
      }, {
        encodeValuesOnly: true, // prettify URL
      })

    const res = await axios.get(`http://localhost:1337/api/superuniversdetailss?${query}`)

    return { menuHeaderData : res.data.data}
}
