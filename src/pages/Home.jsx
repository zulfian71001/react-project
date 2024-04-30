import { Suspense, useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../features/productList/productsReducer";

const Home = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state)=>state.products)
  const {userInfo} = useSelector((state)=>state.auth)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const { products } = await response.json();
        if (response.ok) {
          dispatch(addData(products));
        }
      } catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false)
      }
    };
    getData();
  }, []);
console.log(data)
console.log(userInfo)
  return (
    <div className="w-screen p-10">
      <div className="w-full grid grid-cols-4 gap-6">
        <Suspense fallback={<div className="w-full bg-white text-3xl font-semibold text-black">Loading...</div>}>
          {
            !loading ? (
              data.map((product, index) => (
                <Card key={index}  image={product.thumbnail} title={product.title} id={product.id}/>
            ))) : (
              <div className="w-full bg-white text-3xl font-semibold text-black">Loading...</div>
            ) 
          }
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
