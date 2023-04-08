import Card from "./Card";
import { connect } from "react-redux";

const CardGroup = () => {
    return (
        <div className="grid grid-cols-3 py-20">
            {/* {clients.map(client => {
                return <Card key={`${client.firstName}_${client.lastName}`} id={client._id} title={client.firstName + ' ' + client.lastName} data={client.data} content={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
            })}             */}
        </div>
    )
}

export default connect(null, {})(CardGroup);