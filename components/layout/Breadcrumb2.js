import { useState } from "react"

const Breadcrumb2 = ({title, elements, description, handleShowAllDescription}) => {

    const [showdDescription, setShowDescription] = useState (false)

    const handleShowDescription = (e) => {
        e.preventDefault()
        handleShowAllDescription(!showdDescription)
    }

    return (
        <>
            <div className="page-header mt-30 mb-50">
            <div className="container">
                <div className="archive-header">
                    <div className="row align-items-center">
                        <div>
                            <h1 className="h1 mb-15">{title}</h1>
                            <div className="breadcrumb">
                                {elements&&elements.map((val,index)=>(
                                    index==elements.length-1?
                                    <div key={index}>{val}</div>:
                                    <div key={index}>{val}<span></span></div>
                                ))} 
                            </div>
                        </div>
                        {description&&<p dangerouslySetInnerHTML={{__html: description}} className="mt-25"></p>}               
                    </div>
                    {description&&<button className="mt-25" onClick={handleShowDescription}>Lire la suite ...</button>}                 
                </div>
            </div>
        </div>
        </>
    );
};

export default Breadcrumb2;
