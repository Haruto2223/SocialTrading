const Card = ({ title, content }) => {
    return (
        <>
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
                </div>
            </div>
        </>
    )
}

export default Card;