import { Link } from "react-router-dom"
import imageUrls from "../images/images"


export const EQUIVALENTS = () => {
 
  return (
      <>
        <h2 className="groups">GRUPOS DE ALIMENTOS</h2>
          <div className="equivalents">
            <div className="container">
              <Link to="/fruits">
                <img src={imageUrls.imageFruits} className="equivalent fruit" alt="Fruits" />
              </Link>
            </div>

            <div className="container">
              <Link to="">
                <img src={imageUrls.imageVegetable} className="equivalent vegetable" alt="Vegetables" />
              </Link>
            </div>

            <div className="container">
              <Link to="">
                <img src={imageUrls.imageCereals} className="equivalent cereal" alt="Cereals" />          
              </Link>
            </div>

            <div className="container">
              <Link to="">
                <img src={imageUrls.imageBeans} className="equivalent beans" alt="Beans" />
              </Link>
            </div>

            <div className="container">
              <Link to="">
                <img src={imageUrls.imageMeat} className="equivalent meat" alt="Meat" />
              </Link>
            </div>

            <div className="container">
              <Link to="">
                <img src={imageUrls.imageMilk} className="equivalent milk" alt="Milk" />
              </Link>
            </div>

            <div className="container">
              <Link to="">
                <img src={imageUrls.imageHoney} className="equivalent honey" alt="Honey" />
              </Link>
            </div>

            <div className="container">
              <Link to="">
                <img src={imageUrls.imageOil} className="equivalent oil" alt="Oil" />
              </Link>
            </div>
          </div>
      </>
  )
}
