import React, { useEffect, useState } from "react";
import { server } from "../../config/index";

import SingleProduct from "../ecommerce/SingleProduct";

function CategoryTab({title, produits}) {
    const [active, setActive] = useState("1");

    return (
        <>
            <div className="section-title style-2 wow animate__animated animate__fadeIn">
                <h3>{title}</h3>
            </div>
            <div className="tab-content wow fadeIn animated">
                <div
                    className={
                        active === "1"
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                    }
                >
                    <div className="product-grid-4 row">
                        {produits.map((item, i) => (
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={i}>
                                <SingleProduct item={item} />
                            </div>
                        ))}
                    </div>
                </div>  
            </div>
        </>
    );
}
export default CategoryTab;
