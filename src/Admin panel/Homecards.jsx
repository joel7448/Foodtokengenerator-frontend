import { Paid } from "@mui/icons-material"
import "./homecards.css"

function Homecards(props) {
  return (
    <div className={`homecard ${props.color}`}>
        <Paid/>
        <h2> {props.data}</h2>
        <p>$ {props.rate}.00</p>
    </div>
  )
}

export default Homecards