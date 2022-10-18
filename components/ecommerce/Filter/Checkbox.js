
const CheckBox = ({ handleCheckBox, filters, prop, filterKey }) => {

    return (
        <>
            {filters.map((element,index) => (
                <div key={element['item']['id']+filterKey}>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name={element.item['id']}
                        value={element.item['attributes'][prop]}
                        checked={element.checked}
                        onChange={(e) => handleCheckBox(e, element.item['id'])}
                        id={element['item']['id']+filterKey}   
                    />
                    <label className="form-check-label" htmlFor={element['item']['id']+filterKey} style={{textTransform:"capitalize"}}> {element.item['attributes'][prop]}</label>
                    <br/>
                </div>
            ))}
        </>
    );
};

export default CheckBox;

