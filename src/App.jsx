
import FirstPage from "./pages/FirstPage"
import LoginPage from "./pages/LoginPage"
import { MainPage } from "./pages/MainPage"



function App() {


  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center">
        <div className="w-[375px] h-[600px] rounded-3xl overflow-hidden">
          {/* <FirstPage /> */}
          {/* <LoginPage /> */}
          <MainPage />
        </div>
      </main>
    </>
  )
}

export default App
