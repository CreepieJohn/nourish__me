import { Link } from "react-router-dom"
import imageUrls from "../images/images"


export const EQUIVALENTS = () => {

  return (
    <>
      <div className="">
        <Link to="">
          <img src={imageUrls.imageFruits} className="equivalent__fruit" alt="Fruits" />
        </Link>
        <Link to="" className="link">
          <img src={imageUrls.imageVegetable} className="equivalent__vegetable" alt="Vegetables" />
        </Link>
        <Link to="">
          <img src={imageUrls.imageCereals} className="equivalent__cereal" alt="Cereals" />          
        </Link>
        {/* <Link to="">
          <img src={} className="" alt="" />
        </Link>
        <Link to="">
          <img src={} className="" alt="" />
        </Link>
        <Link to="">
          <img src={} className="" alt="" />
        </Link>
        <Link to="">
          <img src={} className="" alt="" />
        </Link>
        <Link to="">
          <img src={} className="" alt="" />
        </Link> */}
      </div>
    </>
  )
}
