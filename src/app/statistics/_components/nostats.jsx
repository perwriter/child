export default function StatisticsError() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-xl w-full flex flex-col items-center text-center">
          <div className="w-48 h-48 mb-6">
            <img
              src="/nostats.svg?height=192&width=192"
              alt="Notebook and glasses illustration"
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-2">
            Sorry, statistics not available
            <span role="img" aria-label="sad face">🥺</span>
          </h1>
          
          <p className="text-gray-600 mb-8">
            To get statistics and keep track of your results, register or log in to your account
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-2.5 text-gray-900 font-semibold hover:text-gray-600 transition-colors">
              Log In →
            </button>
            <button className="px-6 py-2.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  