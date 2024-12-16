'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function StatisticsPage() {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 60, -15, 20, -90, -70, 15],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [90, 85, 50, 80, -50, 0, -70],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        min: -100,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        }
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Navigation Tabs */}
      <div className="flex gap-8 justify-center mb-8">
        <button className="text-black text-xl font-bold pb-2 border-b-2 border-black">
          For the day
        </button>
        <button className="text-gray-400 text-xl font-bold pb-2">
          For all the time
        </button>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Today's Statistics Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-2">Today's statistics</h2>
          <p className="text-gray-500 mb-8">Your statistics on all activities</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 mb-8">
            <div>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold">0</span>
                <span className="text-5xl font-bold text-blue-500">+</span>
              </div>
              <p className="text-gray-500">words studied</p>
            </div>
            <div>
              <div className="text-5xl font-bold">0%</div>
              <p className="text-gray-500">correct answers</p>
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-6">
            {/* Sprint Activity */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="/sprint.svg?height=64&width=64"
                  alt="Sprint"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold">Sprint</h3>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    speed task
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500">
                    <span className="font-bold text-black">0</span> words studied
                  </p>
                  <p className="text-gray-500">
                    <span className="font-bold text-black">0%</span> correct answers
                  </p>
                  <p className="text-gray-500">
                    <span className="font-bold text-black">0</span> best series of correct answers
                  </p>
                </div>
              </div>
            </div>

            {/* Audio-Call Activity */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="/audio.svg?height=64&width=64"
                  alt="Audio-Call"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold">Audio-Call</h3>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    audition task
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500">
                    <span className="font-bold text-black">0</span> words studied
                  </p>
                  <p className="text-gray-500">
                    <span className="font-bold text-black">0%</span> correct answers
                  </p>
                  <p className="text-gray-500">
                    <span className="font-bold text-black">0</span> best series of correct answers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <Line options={chartOptions} data={chartData} />
        </div>
      </div>
    </div>
  )
}

