
const SideFilterLinks = ({ items, prop, filterKey, handleLinkToAnotherPage }) => {

    const handleClickItem = (event, id) => {
        event.preventDefault()
        handleLinkToAnotherPage(filterKey, id)
    }

    return (
        <ul>
            {
            items.map(val=>(
                val['item']['attributes'][prop]&&
                <li key={val['item']['id']+filterKey} onClick={(event) => handleClickItem(event, val['item']['id'])}>
                    <a key={val['item']['id']+filterKey}>{val['item']['attributes'][prop]}</a>
                    <span key={val['item']['id']+filterKey} className="count">{val['count']}</span>
                </li>
            ))
            }
        </ul>
    )
}

export default SideFilterLinks
