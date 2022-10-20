
const CheckBox = ({ handleCheckBox, filters, prop, filterKey }) => {

    return (
        <>
            {filters.map((element,index) => (
                
                <div key={Math.random()+element['id']+filterKey}>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name={element['id']}
                        value={element['checked']}
                        checked={element.checked}
                        onChange={(e) => handleCheckBox(e, element['id'])}
                        id={element['id']}   
                    />
                    {
                        index == 0 ?
                        <label className="form-check-label" htmlFor={element['id']} style={{textTransform:"capitalize"}}> {element['item'][1]+' € <'}</label>
                        : index > 0 && index < Object.keys(filters).length-1?
                        <label className="form-check-label" htmlFor={element['id']} style={{textTransform:"capitalize"}}> {element['item'][0]+' €'+' - '+element['item'][1]+' €'}</label>
                        : 
                        <label className="form-check-label" htmlFor={element['id']} style={{textTransform:"capitalize"}}> {'> '+element['item'][0]+' €'}</label>
                    }
                    <br/>
                </div>
            ))}
        </>
    );
};

export default CheckBox;

