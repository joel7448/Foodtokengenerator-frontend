import "./servicecards.css"
import {OutdoorGrillOutlined,SentimentVerySatisfied,LocalShippingOutlined,DinnerDining } from "@mui/icons-material"
function Servicecards() {
  return (
    <div className="servicecards-wrapper">
        <div className="servicecards">
            <div className="icon-wrapper">
            <OutdoorGrillOutlined className="homefood"/>
            <div className="background"></div>

            </div>
            <h3 className="servicedesc">Quality food</h3>
        </div>
        <div className="servicecards">
            <div className="icon-wrapper">
            <SentimentVerySatisfied className="homefood"/>
            <div className="background"></div>

            </div>
            <h3 className="servicedesc">Super Taste</h3>
        </div>

        <div className="servicecards">
            <div className="icon-wrapper">
            <LocalShippingOutlined className="homefood"/>
            <div className="background"></div>

            </div>
            <h3 className="servicedesc">Fast Delivery</h3>
        </div>

        <div className="servicecards">
            <div className="icon-wrapper">
            <DinnerDining className="homefood"/>
            <div className="background"></div>

            </div>
            <h3 className="servicedesc">Cooking Service</h3>
        </div>
    </div>
  )
}

export default Servicecards