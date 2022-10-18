
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceRangeSlider = ({ min, max, handleFilter, filterKey }) => {

    const handleChangePriceSlider = (value) => {
        handleFilter(filterKey, value)
    }

    return (
        <>
            <Slider
                range
                allowCross={false}
                defaultValue={[min, max]}
                min={min}
                max={max}
                onChange={(value) => handleChangePriceSlider(value)} 
            />

            <div className="d-flex justify-content-between">
                <span>
                    {min}
                </span>
                <span>
                    {max}
                </span>
            </div>
        </>
    )
}

export default PriceRangeSlider
