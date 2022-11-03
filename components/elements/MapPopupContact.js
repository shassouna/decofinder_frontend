
import Map from '../elements/MapContact'

const IntroPopup = ({openClassContact, setOpenClassContact}) => {

    const handleRemove = () => {
        setOpenClassContact(!openClassContact);
    }

    return (
        <>
            <div
                className={
                    openClassContact
                        ? "modal fade custom-modal d-none"
                        : "modal fade custom-modal  show d-block"
                }
            >
                <div className="modal-dialog">
                    <div className="modal-content" style= {{width:'80%', marginLeft:'10%'}}>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleRemove}
                        ></button>
                        <div className="deal-top">
                            <h2 className="text-brand">
                                DEMANDE D'INFORMATIONS
                            </h2>
                        </div>
                        <br/>
                        <div className="modal-body">
                            <div
                                className="deal"
                                style={{
                                    backgroundImage:
                                        "url('assets/imgs/banner/popup-1.png')",
                                }}
                            >
                                <Map/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={
                    openClassContact
                        ? "modal-backdrop fade d-none"
                        : "modal-backdrop fade show"
                }
            ></div>
        </>
    );
};

export default IntroPopup;
