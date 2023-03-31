import Banner from '../components/statistics/Banner'
import { Link } from 'react-router-dom';
import WidgetCard from '../components/WidgetCard';

const Widget = () => {
    return (
        <>
            <Banner />
            <div className='p-20'>
                <Link className='text-4xl text-amber-300 hover:text-indigo-600 flex items-center' to="/statistics">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <p>Go to leaderboard</p>
                </Link>
            </div>
            <WidgetCard/>
        </>
    )
}

export default Widget;