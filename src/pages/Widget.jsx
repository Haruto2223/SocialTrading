import React, { useEffect } from 'react';
import Banner from '../components/statistics/Banner'
import { Link, useParams } from 'react-router-dom';
import WidgetCard from '../components/widgetCard/WidgetCard';
import { connect } from 'react-redux';
// import Spinner from '../Spiner';

const Widget = ({allProviders}) => {
    const { id } = useParams();

    const provider = allProviders.filter(item => item.accountID == id)[0]

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
    allProviders: state.trader.allProviders
})

export default connect(mapStateToProps, {})(Widget);