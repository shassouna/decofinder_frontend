
import CheckBox from "./CheckboxPrice"
import {useState} from 'react'

const VendorFilter = ({elements, prop, handleFilter, filterKey}) => {

    const [sizes, setSizeCheckbox] = useState(elements)

    const handleCheckBox = (e, id, filters, updatefilters) => {
        e.preventDefault()
        const updateSizes = [...filters]
        updateSizes.forEach((element) => {
            if (element['id'] == id) {
                element['checked'] = !element['checked']
            } else {
                element['checked'] = false               
            }
        })
        updatefilters([...updateSizes])

        handleFilter(filterKey, updateSizes.find(element=>element.checked)?updateSizes.find(element=>element.checked)['item']:[])
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
