import { useParams } from "react-router-dom"
const DetailProduct = () => {
const {userId}= useParams()
  return (
    <div>
      {userId}
    </div>
  )
}

export default DetailProduct
