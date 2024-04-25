
import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

const PrrotectedRoute = () => {
const context = useOutletContext()
if(!context.user){
return <Navigate to="/"/>;
}
return (
<Outlet context={context}/>
  )
}

export default PrrotectedRoute
