import { Balance } from "../components/Balance/Balance"
import { Card } from "../components/Card/Card"


export const MainPage = () => {
  return (
    <div className="h-screen w-screen bg-green40 px-8">
        <div className="flex flex-col gap-[10px] text-white">
            <p className="font-medium">Welcome back</p>
            <p className="font-bold text-lg">UI Unleashed</p>
        </div>
        <div className="flex gap-1 items-center ">
            <p>Status: </p>
            <div className="w-3 h-3 bg-green-500 rounded-full "></div>
        </div>
        <Card />
        <Balance />
    </div>
  )
}


