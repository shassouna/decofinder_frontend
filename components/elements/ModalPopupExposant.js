import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'


const IntroPopup = ({openClass, setOpenClass, exposant, revendeurs}) => {

    const handleRemove = () => {
        setOpenClass(!openClass);
    }

    const [Modal, setModal] = useState()

    useEffect(()=>{
        if(openClass==0){
            const ModalLocal = dynamic(
                () => import('./ModalExposant'),
                { ssr: false }
            )
            setModal(ModalLocal)
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
                                    {Modal&&<Modal items={revendeurs}/>}
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
