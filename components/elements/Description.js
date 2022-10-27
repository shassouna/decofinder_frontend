import { useState, useEffect } from "react"

const Description = ({description}) => {

    const [descriptionState, setDescriptionState] = useState([])

    useEffect(()=>{
        setDescriptionState(description.split('\n'))
    },[description])

    return (
            <div className="page-content pt-50">
                <div className="container">
                    <div className="row">
                        <section className="row align-items-end mb-50">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6 mb-6">
                                        {descriptionState.slice(0,descriptionState.length/2+1).map(item=>(
                                        <>
                                            <p dangerouslySetInnerHTML={{__html: item}} className="mt-25"></p>  
                                            <br/>                                            
                                        </>
                                        ))}
                                    </div>
                                    <div className="col-lg-6 mb-6">
                                       {descriptionState.slice(descriptionState.length/2+1,descriptionState.length).map(item=>(
                                        <>
                                         <p dangerouslySetInnerHTML={{__html: item}} className="mt-25"></p>  
                                            <br/>                                            
                                        </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
    );
};

export default Description