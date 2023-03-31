import React from 'react';
import { Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [100, 240, 400, 1000, 500, 600, 700],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Card = ({ title, content }) => {
    return (
        <Link to="/widget">
            <div className="flex justify-center py-5">
                <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                    <div className="flex justify-between pr-10">
                        <a href="#!">
                            <img
                                className="rounded-full w-24 h-24 m-5"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                                alt="avatar" />
                        </a>
                        <button
                            type="button" className="rounded-xl bg-white outline outline-3 outline-blue-900 text-black mt-10 w-1/3 h-1/2">
                            Copy
                        </button>
                    </div>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {title}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {content}
                        </p>
                    </div>
                    <Line options={options} data={data} className='w-100 h-100' />
                </div>
            </div>
        </Link>
    )
}

export default Card;