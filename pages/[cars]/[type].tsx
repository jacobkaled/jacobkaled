import { useRouter } from "next/router"

const Test=(props)=>{
const router =useRouter()
const  {cars,type}  = router.query
 return <h1>types of {cars}{type}</h1>
}   

export default Test