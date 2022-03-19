import "../../styles/HomeBanner.css"
export const HomeBanner = () => {
    return <div className="body-div">
        <div className="image-body">
            <img className="img-responsive" src={require("../../assets/main-img.png")} alt="alt-text-img" />
        </div>
        <div className="body-div-content h3">
            Great stores. Great choices.
        </div>
        <div className="body-div-content h3">
            <a href="/">Shop Products</a>
        </div>
    </div>
}