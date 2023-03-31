const ContextCard = ({ text, number }) => {
    return (
        <div className="block w-sm rounded-lg border border-purple-200 bg-white p-6 shadow-lg text-center">
            <h5 className="mb-4 text-4xl font-medium leading-tight text-neutral-800 w-full">
                {number}
            </h5>
            <p className="mt-4 text-purple-900 text-xl shrink-0">
                {text}
            </p>
        </div>
    )
}

export default ContextCard;