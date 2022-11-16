import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'


const IntroPopup = ({openClassAfficherPlan, setOpenClassAfficherPlan, exposant}) => {

    const handleRemove = () => {
        setOpenClassAfficherPlan(!openClassAfficherPlan);
    }

    const [Modal, setModal] = useState()

    useEffect(()=>{
        if(openClassAfficherPlan==0){
            const ModalLocal = dynamic(
                () => import('../elements/ModalAfficherPlan'),
                { ssr: false }
            )
            setModal(ModalLocal)
        }
    },[openClassAfficherPlan])

    return (
        <>
            <div 
                className={
                    openClassAfficherPlan
                        ? "modal fade custom-modal d-none"
                        : "modal fade custom-modal  show d-block"
                }
            >
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleRemove}
                        ></button>
                        {Modal&&<Modal item={exposant}/>}
                    </div>
                </div>
            </div>

            <div
                className={
                    openClassAfficherPlan
                        ? "modal-backdrop fade d-none"
                        : "modal-backdrop fade show"
                }
            ></div>
        </>
    );
};

export default IntroPopup;
