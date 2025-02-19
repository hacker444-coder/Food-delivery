import Nav from "./Nav"
import tap1 from "./photo/Tab 1.png"
import tap2 from "./photo/Tab 2.png"
import ButtonOfSearch from "./photo/Button.png"
import headerPic from "./photo/header pic.png"

function Header() {
  return (
    <header className="bg-[#FACD2D] max-w-screen shadow-inner shadow-yellow-600 h-[430px]">
        <Nav/>
        <h1 className="text-white font-bold text-[50px] ml-[120px] mt-[50px] ">Are you starving?</h1>
        <p className="ml-[120px] text-[15px] font-sans text-gray-600">Within a few clicks, find meals that are accessible near you</p>
        <br />
        {/* address box */}
        <div className="bg-white border ml-[120px] p-[15px] border-white rounded-md w-[500px] h-[130px]">
         <button><img src={tap1} alt="" className="w-[100px]" /></button>
         <button><img src={tap2} alt="" className="w-[100px]"/></button>
         <div className="flex justify-center gap-3 mt-6 items-center">
          <input type="text" className="w-full bg-[#F5F5F5] rounded-md pl-2 h-[30px] " placeholder="Enter Your Address" />
          <button><img src={ButtonOfSearch} alt="" className="w-[190px]"/></button>
         </div>
        </div>
      {/* picture */}
      <img src={headerPic} className="w-[250px] absolute top-[145px] right-[100px] " alt="" />
    </header>
  )
}

export default Header
