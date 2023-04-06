import React, { useEffect } from 'react';
import Banner from '../components/statistics/Banner'
import { Link, useParams } from 'react-router-dom';
import WidgetCard from '../components/widgetCard/WidgetCard';
import { connect } from 'react-redux';
import { getClient } from '../actions/clients';

const Widget = ({ getClient, clients }) => {
    const { id } = useParams();
    useEffect(() => {
        getClient(id);
    }, [getClient, id])
    const client = clients.filter(item => id === item._id)[0];
    return (
        <div className='bg-slate-100'>
            <Banner />
            <div className='p-20'>
                <div className='text-4xl text-amber-300 flex items-center'>
                    <Link className='hover:text-indigo-600 border shadow-lg rounded-full p-3' to="/statistics">Go to leaderboard</Link>
                </div>
            </div>
            <WidgetCard client={client}/>
        </div>
    )
}

const mapStateToProps = state => ({
    clients: state.client.clients
})

export default connect(mapStateToProps, { getClient })(Widget);