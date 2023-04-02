import Banner from '../components/statistics/Banner'
import { Link } from 'react-router-dom';
import WidgetCard from '../components/widgetCard/WidgetCard';

const Widget = () => {
    return (
        <>
            <Banner />
            <div className='p-20'>
                <div className='text-4xl text-amber-300 flex items-center'>
                    <Link className='hover:text-indigo-600 border shadow-lg rounded-full p-3' to="/statistics">Go to leaderboard</Link>
                </div>
            </div>
            <WidgetCard/>
        </>
    )
}

export default Widget;