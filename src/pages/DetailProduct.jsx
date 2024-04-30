import { useParams } from "react-router-dom"
const DetailProduct = () => {
const {id}= useParams()
  return (
    <div>
      {id}
    </div>
  )
}

export default DetailProduct
