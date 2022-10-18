import Inspiration from "../ecommerce/Inspiration";

function CategoryTab({title, produits}) {

    return (
        <>
            <div className="section-title style-2 wow animate__animated animate__fadeIn">
                <h3>{title}</h3>
            </div>
            <div className="tab-content wow fadeIn animated">
                <div className="tab-pane fade show active">
                    <div className="product-grid-4 row">
                        {produits.map((item) => (
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={item['id']}>
                                <Inspiration item={item} baseUrl='produits'/>
                            </div>
                        ))}
                    </div>
                </div>  
            </div>
        </>
    );
}
export default CategoryTab;
