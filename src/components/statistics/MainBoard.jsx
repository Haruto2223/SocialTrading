import React, {useEffect} from "react";
import FilterBar from "./FilterBar";
import CardGroup from "./CardGroup";
import { connect } from "react-redux";
import Spinner from "../../Spiner";
import { getAllProviders } from "../../actions/trader";

const MainBoard = ({providers, getAllProviders}) => {

    useEffect(() => {
        getAllProviders();
    }, [getAllProviders])

    if(!providers.length)
    {
        return <Spinner/>
    }
    
    return (
        <div className="p-40 bg-slate-100 ">
            <FilterBar/>
            <CardGroup traders={providers}/>
        </div>
    )
}


const mapStateToProps = state =>({
    providers: state.provider.allProviders
})

export default connect(mapStateToProps, {getAllProviders})(MainBoard);