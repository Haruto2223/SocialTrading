import React, { useEffect } from 'react';
import Banner from '../components/statistics/Banner'
import { Link, useParams } from 'react-router-dom';
import WidgetCard from '../components/widgetCard/WidgetCard';
import { connect } from 'react-redux';
import { getClient, clearClient } from '../actions/clients';
import Spinner from '../Spiner';

const Widget = ({ getClient, clearClient, client: {client, loading} }) => {
    const { id } = useParams();
    useEffect(() => {
        getClient(id);
        return () => {
            clearClient();
        }
    }, [getClient, clearClient, id])
    return (
        <>
            {loading ? <Spinner/> : <div className='bg-slate-100'>
            <Banner />
            <div className='p-20'>
                <div className='text-4xl text-amber-300 flex items-center'>
                    <Link className='hover:text-indigo-600 border shadow-lg rounded-full p-3' to="/statistics">Go to leaderboard</Link>
                </div>
            </div>
            <WidgetCard client={client}/>
        </div>}
        </>
    )
}

const mapStateToProps = state => ({
    client: state.client
})

export default connect(mapStateToProps, { getClient, clearClient })(Widget);