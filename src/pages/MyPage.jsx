import { useEffect } from "react";
import { connect } from "react-redux";
import { getMyProviders, getMyFollowers } from "../actions/trader";
import FollowerTable from "../components/myPage/FollowerTable";
import ProviderTable from "../components/myPage/ProviderTable";
import Spinner from "../Spiner";

const MyPage = ({auth: {trader, category, myTraders}, getMyFollowers, getMyProviders}) => {
    useEffect(() => {
        if(category === 'provider') getMyFollowers();
        else if(category === 'follower') getMyProviders();
    }, [category, getMyFollowers, getMyProviders])
    if(!trader)
    {
        return <Spinner/>
    }
    return (
        <div className="py-40">
            <p className="text-6xl font-medium text-[#bb914a] text-center">{category === 'provider' ? 'My Followers' : 'My Providers'}</p>
            {category === 'provider' ? <FollowerTable followers={myTraders}/> : <ProviderTable providers={myTraders}/>}
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, {getMyFollowers, getMyProviders})(MyPage);