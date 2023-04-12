import { useEffect } from "react";
import { connect } from "react-redux";
import { getMyProviders, getMyFollowers } from "../actions/trader";
import CardGroup from "../components/statistics/CardGroup";

const MyPage = ({trader: {trader, category, traders}, getMyFollowers, getMyProviders}) => {
    useEffect(() => {
        if(category === 'provider') getMyFollowers();
        else if(category === 'follower') getMyProviders();
    }, [category, getMyFollowers, getMyProviders])
    return (
        <div className="py-40 bg-sky-700">
            <p className="text-4xl text-[#bb914a] text-center">{trader.accountID}, {category}</p>
            <CardGroup traders={traders}/>
        </div>
    )
}

const mapStateToProps = state => ({
    trader: state.trader
})

export default connect(mapStateToProps, {getMyFollowers, getMyProviders})(MyPage);