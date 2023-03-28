
export const Balance = () => {






    return (
        <div className="bg-green60 w-[380px] flex flex-col gap-2 text-white p-4 relative items-">
            <p>Your Balance</p>
            <p>$15,059.45</p>
            <div className="flex justify-between">
                <div >
                    <p>Income</p>
                    <div className="flex gap-2 items-center">
                        <div className="flex justify-center items-center w-4 h-4  relative bg-green40 box-border  rounded-sm rotate-45">
                            <i className="fa-solid fa-arrow-up text-green-500"></i>
                        </div>
                        <p className="">+$20,000.00</p>
                    </div>
                </div>
                <div >
                    <p>Expense</p>
                    <div className="flex gap-2 items-center">
                        <div className="flex justify-center items-center w-4 h-4  relative bg-green40 box-border  rounded-sm rotate-[-135deg]">
                            <i className="fa-solid fa-arrow-up text-red-600"></i>
                        </div>
                        <p className="">-$20,000.00</p>
                    </div>
                </div>
            </div>
            <button className="bg-green20 w-20 h-8 rounded-lg absolute top-4 right-4">More info</button>
        </div>
    )
}
