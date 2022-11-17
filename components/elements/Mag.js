
import Link from "next/link"

const Mag = ({ magElements }) => {

    return (
            magElements.map((mag, i) => (
                <article
                    className="col-xl-3 col-lg-6 col-md-6 text-center hover-up mb-30 animated"
                    key={i}
                >
                    <div className="post-thumb">
                        <Link href="/blog-post-right">
                            <a>
                                <img
                                    className="border-radius-15"
                                    src={`/assets/imgs/blog/${mag.img}`}
                                    alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="entry-content-2">
                        <h6 className="mb-10 font-sm">
                            <Link href="/blog-category-grid">
                                <a className="entry-meta text-muted">
                                    {mag.category}
                                </a>
                            </Link>
                        </h6>
                        <h4 className="post-title mb-15">
                            <Link href="/blog-post-right">
                                <a>{mag.title}</a>
                            </Link>
                        </h4>
                    </div>
                </article>
            ))
    )
}

export default Mag
