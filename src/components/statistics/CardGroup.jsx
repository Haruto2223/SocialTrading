import Card from "./Card";
import { connect } from "react-redux";

const CardGroup = ({traders}) => {
    return (
        <div className="grid grid-cols-3 py-20">
            {traders.map(client => {
                return <Card key={client.accountID} data={client.data} id={client.accountID} title={client.accountID} content={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
            })}            
        </div>
    )
}

export default connect(null, {})(CardGroup);