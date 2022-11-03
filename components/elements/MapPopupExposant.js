import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'


const IntroPopup = ({openClass, setOpenClass, exposant, revendeurs}) => {

    const handleRemove = () => {
        setOpenClass(!openClass);
    }

    const [Map, setMap] = useState()

    useEffect(()=>{
        if(openClass==0){
            const MapLocal = dynamic(
                () => import('../elements/MapExposant'),
                { ssr: false }
            )
            setMap(MapLocal)
        }
    },[openClass])

    return (
        <>
            <div
                className={
                    openClass
                        ? "modal fade custom-modal d-none"
                        : "modal fade custom-modal  show d-block"
                }
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleRemove}
                        ></button>
                        <div className="modal-body">
                            <div
                                className="deal"
                                style={{
                                    backgroundImage:
                                        "url('assets/imgs/banner/popup-1.png')",
                                }}
                            >
                                <div className="deal-top">
                                    <h2 className="text-brand">
                                        LES POINTS DE VENTE DE {exposant['attributes']['NOM']}
                                    </h2>
                                </div>
                                <div className="deal-content  detail-info">
                                    {Map&&<Map items={revendeurs}/>}
                                </div>
                            </div>

                            <div className="row vendor-grid">
                            {[1,2,3].map((item, i) => (
                                
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-6" key={i}>
                                        <div className="vendor-wrap mb-40  style-2">
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">Mall</span>
                                            </div>
                                            <div className="vendor-img-action-wrap">
                                                <div className="vendor-img">
                                                    <a>
                                                        <img className="default-img" src={`assets/imgs/vendor/vendor-1.png`} alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="vendor-content-wrap">
                                                <div className="mb-30">
                                                    <div className="product-category">
                                                        <span className="text-muted">Since 2012</span>
                                                    </div>
                                                    <h4 className="mb-5">cjfkdfjgnqkdfjnqsd</h4>

                                                    <div className="product-rate-cover">
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ "width": "90%" }}></div>
                                                        </div>
                                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                    </div>
                                                    <div className="vendor-info d-flex justify-content-between align-items-end mt-30">
                                                        <ul className="contact-infor text-muted">
                                                            <li><img src="/assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                            <li><img src="/assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                                        </ul>
                                                        dqdjfhiqudghiqosdufh
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                            ))}
                        </div>



                        </div>
                    </div>
                </div>
            </div>

            <div
                className={
                    openClass
                        ? "modal-backdrop fade d-none"
                        : "modal-backdrop fade show"
                }
            ></div>
        </>
    );
};

export default IntroPopup;
