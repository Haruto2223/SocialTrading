import React, { useEffect } from 'react';
import Banner from '../components/statistics/Banner'
import { Link, useParams } from 'react-router-dom';
import WidgetCard from '../components/widgetCard/WidgetCard';
import { connect } from 'react-redux';
import { getProviderInfo } from '../actions/trader';
import Spinner from '../Spiner';

const Widget = ({provider, getProviderInfo}) => {
    const { id } = useParams();

    useEffect(() => {
        getProviderInfo(id)
    }, [getProviderInfo])

    if(!provider)
    {
        return <Spinner/>
    }

    return (
        <>
            <div className='bg-slate-100'>
                <Banner />
                <div className='p-20'>
                    <div className='text-4xl text-amber-300 flex items-center'>
                        <Link className='hover:text-indigo-600 border shadow-lg rounded-full p-3' to="/statistics">Go to leaderboard</Link>
                    </div>
                </div>
                <WidgetCard provider={provider}/>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    provider: state.provider.provider
})

export default connect(mapStateToProps, {getProviderInfo})(Widget);