/*import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";
import CheckBox from "./Checkbox";

const VendorFilter = ({ updateProductFilters, handleFilter, filterKey, elements }) => {

    const [sizes, setSizeCheckbox] = useState(elements)

    useEffect(()=>{
        elements.map(element=>element.checked=false)
        setSizeCheckbox(elements)
    },[])

    const handleCheckBox = (t) => {
        console.log(t)

       /* const value = event.target.value;
        const updateSizes = filters;

        updateSizes.forEach((item) => {
            if (item.value === value) {
                if (item.checked) {
                    item.checked = false;
                    const newsize = text.filter((item) => item !== value);
                    selectFilter([...newsize]);
                } else {
                    item.checked = true;
                    const newsize = text.includes(value) ? text : [...text, value];
                    selectFilter([...newsize]);
                }
            }
        });

        updatefilters([...updateSizes]);

        handleFilter(filterKey, filters.filter(element=>element.checked).map(o=>o))*/
   /* };

    return (
        <>
            <div className="custome-checkbox">
                <CheckBox
                    heading="Select Size"
                    elements={sizes}
                    handleCheckBox={(e) => {
                        handleCheckBox(e, sizes, setSizeCheckbox);
                    }}
                />
            </div>
        </>
    )
}

export default VendorFilter*/
import CheckBox from "./Checkbox"
import {useState} from 'react'

const VendorFilter = ({elements, prop, handleFilter, filterKey}) => {

    const [sizes, setSizeCheckbox] = useState(elements)

    const handleCheckBox = (e, id, filters, updatefilters) => {

        const updateSizes = filters

        updateSizes.forEach((element) => {
            if (element.item['id'] == id && element['item']['attributes'][prop]==e.target.value) {
                if (element.checked) {
                    element.checked = false
                } else {
                    element.checked = true
                }
            }
        })

        updatefilters([...updateSizes])

        handleFilter(filterKey, filters.filter(element=>element.checked).map(o=>o['item']['id']))
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
