import { useEffect, useState} from "react";
// import "react-input-range/lib/css/index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import "react-responsive-modal/styles.css";
// import WOW from 'wowjs';
// Swiper Slider
import "swiper/css";
import "swiper/css/navigation";
import StorageWrapper from "../components/ecommerce/storage-wrapper";
import "../public/assets/css/main.css";
import store from "../redux/store";
import Preloader from "./../components/elements/Preloader";

import axios from "axios"

function MyApp({ Component, pageProps, menuHeaderData }) {


    const [loading, setLoading] = useState(false);

    return (
        <>
            {!loading ? (
                
                <Provider store={store}>
                    <StorageWrapper>                      
                            <Component {...pageProps} menuHeaderData={menuHeaderData}/>
                            <ToastContainer />
                    </StorageWrapper>
                </Provider>
            ) : (
                <Preloader />
            )}
        </>
    );
}

export default MyApp;

MyApp.getInitialProps = async (params) => {
    
    // get data for the header menu 

    const res = await axios.get(`http://decotest2.herokuapp.com/api/superuniversdetailss?rayondetails,rayondetails.typeprods`)

    return { menuHeaderData : res.data.data}
}
