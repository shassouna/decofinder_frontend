import { useState } from "react";

const Breadcrumb2 = ({title, elements, description, description2}) => {

    const [showdDescription, setShowDescription] = useState (false)

    const handleShowDescription = () => {
        setShowDescription(!showdDescription)
    }

    return (
        <>
            <div className="page-header mt-30 mb-50">
            <div className="container">
                <div className="archive-header">
                    <div className="row align-items-center">
                        <div className="col-xl-3">
                            <h1 className="mb-15 text-capitalize">{title}</h1>
                            <div className="breadcrumb">
                                {elements.map((val,index)=>(
                                    index==elements.length-1?
                                    <>{val}</>:
                                    <>{val}<span></span></>
                                ))} 
                            </div>
                        </div>
                        {!showdDescription&&<p dangerouslySetInnerHTML={{__html: description}} className="mt-25"></p>}      
                        {showdDescription&&<p dangerouslySetInnerHTML={{__html: description2}} className="mt-25"></p>}                 
                    </div>
                    {
                        description2&&!showdDescription?
                        <button className="mt-25" onClick={handleShowDescription}>Lire la suite ...</button>
                        :description2&&
                        <button className="mt-25" onClick={handleShowDescription}>Réduire</button>                        
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default Breadcrumb2;
