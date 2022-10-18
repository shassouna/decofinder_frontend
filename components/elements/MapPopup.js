import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'


const IntroPopup = ({openClass, setOpenClass, produit}) => {

    const handleRemove = () => {
        setOpenClass(!openClass);
    }

    const [Map, setMap] = useState()

    useEffect(()=>{
        if(openClass==0){
            const MapLocal = dynamic(
                () => import('../elements/Map2'),
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
                                        LES POINTS DE VENTE DE L'exposant
                                    </h2>
                                </div>
                                <div className="deal-content  detail-info">
                                    {Map&&<Map produit={produit}/>}
                                </div>
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
