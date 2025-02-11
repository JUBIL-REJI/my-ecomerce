import { useDispatch } from "react-redux"
import { handlePlus } from "./redux/couterSlice"
import Reduxrg from "./eg1"




function Eg() {

const dispatch = useDispatch()

  return (
<div className="flex justify-center mt-36 gap-8">
<button className="bg-red-400" onClick={()=>dispatch(handlePlus())}>plus</button>
<Reduxrg/>
</div>


  )
}

export default Eg