const FilterBar = () => {
    return (
        <div className="flex justify-around space-x-20">
            <div className="w-1/5">
                <label for="default-search" className="block mb-2 w-1/2 text-xl max-w-lg font-medium text-gray-900">Search</label>
                <div className="flex">
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </div>
            <div className="w-1/5">
                <label for="countries" className="block mb-2 w-1/2 text-xl max-w-lg font-medium text-gray-900">Select an option</label>
                <select id="countries" className="bg-gray-50 border p-4 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Rating</option>
                    <option value="US">Max Profit</option>
                    <option value="CA">Max Drawdown</option>
                    <option value="FR">Average Profit</option>
                    <option value="DE">Return (Total)</option>
                    <option value="DE">Performance Fee</option>
                    <option value="DE">Server</option>
                </select>
            </div>
            <div className="w-1/5">
                <label for="countries" className="block mb-2 w-1/2 text-xl max-w-lg font-medium text-gray-900">Sort by:</label>
                <select id="countries" className="bg-gray-50 border p-4 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Ascending</option>
                    <option value="US">Descending</option>
                </select>
            </div>
        </div>
    )
}

export default FilterBar;