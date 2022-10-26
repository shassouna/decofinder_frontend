
import CheckBox from "./Checkbox"
import {useState} from 'react'

const VendorFilter = ({elements, prop, handleFilter, filterKey}) => {

    const [sizes, setSizeCheckbox] = useState(elements)

    const handleCheckBox = (event, id, filters, updatefilters) => {
        event.preventDefault()
        const updateSizes = filters

        updateSizes.forEach((element) => {
            if (element.item['id'] == id) {
                element['checked'] = !element['checked']
            }
        })

        updatefilters([...updateSizes])

        handleFilter(filterKey, updateSizes.filter(element=>element.checked).map(o=>o['item']['id']))
    }

    return (
        <>
            <div className="custome-checkbox">
                <CheckBox
                    heading="Select Size"
                    filters={sizes}
                    prop={prop}
                    filterKey={filterKey}
                    handleCheckBox={(e, id) => {
                        handleCheckBox(e, id, sizes, setSizeCheckbox)
                    }}
                />
            </div>
        </>
    )
}

export default VendorFilter
