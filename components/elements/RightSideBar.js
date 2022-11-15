
import Link from "next/link"

function RightSideBar() {

    return (
        <>
            <div className="col-md-10 mb-40" style={{textAlign:'center'}}>
                <img src="/assets/imgs/produit400wd_FR.jpg" alt="" className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4 mb-10" />
                <h5>Page Produit</h5>
            </div>
            <div className="col-md-10 mb-40" style={{textAlign:'center'}}>
                <img src="/assets/imgs/partenaire400wd_FR.jpg" alt="" className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4 mb-10" />
                <h5>Page Partenaire</h5>
            </div>
            <div className="col-md-10 mb-40" style={{textAlign:'center'}}>
                <img src="/assets/imgs/univers400wd_FR.jpg" alt="" className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4 mb-10" />
                <h5>Page Univers</h5>
            </div>
            <div className="col-md-10 mb-40" style={{textAlign:'center'}}>
                <img src="/assets/imgs/marketplace400wd_FR.jpg" alt="" className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4 mb-10" />
                <h5>Page Marketplace</h5>
            </div>
        </>
    )
}

export default RightSideBar
