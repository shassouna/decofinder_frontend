import { useEffect, useState } from "react";

function SelectOp({ selectChange, showLimit, limitValue }) {

    const [limits, setLimits] = useState([])

    useEffect(()=>{
        const tab = []
        for (let i=5;i<showLimit+1;i=i+5){
            tab.push(i)
        }

        setLimits(tab)
    },[showLimit])
    return (
        <>
            <div className="sort-by-product-wrap">
                <div className="sort-by">
                    <span>
                        <i className="fi-rs-apps"></i>
                        Afficher:
                    </span>
                </div>
                <div className="sort-by-dropdown-wrap custom-select">
                    <select onChange={selectChange} value={limitValue}>
                        <option value={showLimit}>Tout</option>
                        {limits.map(limit=>(
                            <option value={limit}>{limit}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}
export default SelectOp;
