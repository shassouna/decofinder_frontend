import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'


const IntroPopup = ({openClassAfficherPlan, setOpenClassAfficherPlan, exposant}) => {

    const handleRemove = () => {
        setOpenClassAfficherPlan(!openClassAfficherPlan);
    }

    const [Map, setMap] = useState()

    useEffect(()=>{
        if(openClassAfficherPlan==0){
            const MapLocal = dynamic(
                () => import('../elements/MapAfficherPlan'),
                { ssr: false }
            )
            setMap(MapLocal)
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
                        {Map&&<Map item={exposant}/>}
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
