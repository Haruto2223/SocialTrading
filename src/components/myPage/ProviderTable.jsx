const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']

const ProviderTable = ({ providers }) => {
    return (
        <div className="flex flex-col mt-20 w-3/4 mx-auto border border-slate-200 text-3xl rounded-lg">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">No</th>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Fee</th>
                                    <th scope="col" className="px-6 py-4">AccountID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {providers.map((provider, index) => (
                                    <tr className={`bg-${colors[index % 6]}-100 border-${colors[index % 6]}-200`}>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                                            {index + 1}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">{provider.nickname ?? 'No name'}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{provider.fee}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{provider.accountID}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProviderTable;