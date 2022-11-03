
const Description = ({description}) => {

    return (
            <div className="page-content">
                <section className="row align-items-end mb-50">
                    <div className="col-lg-12">
                    <div dangerouslySetInnerHTML={{__html: description}} className="mt-25"></div>
                    </div>
                </section>
            </div>
    );
};

export default Description