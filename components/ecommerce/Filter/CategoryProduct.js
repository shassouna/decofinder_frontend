import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory, items, prop }) => {

    const router = useRouter()

    const selectCategory = (e, category) => {
        e.preventDefault()
        // removeSearchTerm();
        updateProductCategory(category)
        router.push({
            pathname: "/products",
            query: {
                cat: category
            }
        })
    }

    return (
        <ul>
            {
            items.map(val=>(
                val['item']['attributes'][prop]&&
                <li onClick={(e) => selectCategory(e, "")}>
                    <a>{val['item']['attributes'][prop]}</a>
                    <span className="count">{val['count']}</span>
                </li>
            ))
            }
        </ul>
    )
}

export default connect(null, { updateProductCategory })(CategoryProduct);
