
const CategoryProduct = ({ items, prop, filterKey, handleFilter }) => {

    const handleClickItem = (event, value, id) => {
        event.preventDefault()
        handleFilter(filterKey, value, id)
    }

    return (
        <ul>
            {
            items.map(val=>(
                val['item']['attributes'][prop]&&
                <li key={Math.random(1000).toString()} onClick={(event) => handleClickItem(event, val['item']['attributes'][prop], val['item']['id'])}>
                    <a key={Math.random(1000).toString()}>{val['item']['attributes'][prop]}</a>
                    <span key={Math.random(1000).toString()} className="count">{val['count']}</span>
                </li>
            ))
            }
        </ul>
    )
}

export default CategoryProduct;
