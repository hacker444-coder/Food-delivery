import logo from "./photo/Logo.png"
import user from './photo/user.png'
import locationLogo from "./photo/map-marker-alt.png"

function Nav() {
  return (
    <div className="bg-white max-w-screen gap-8 h-[58px] flex
      items-center pr-[150px] pl-[150px]">
     <img src={logo} alt="logo of nav" className="w-[200px]" />
     <div className="flex font-sans justify-center items-center w-[360px] gap-2 text-[12px]">
      <p className="font-bold">Deliver to:</p> 
      <img src={locationLogo} className="w-[11px] h-[11px]" alt=""/>
       <p>Current Location <b>Swoyambhu, Kathmandu</b></p>
      </div>
      <div className="flex justify-center items-center ml-20 gap-2">
        <div>
        <input type="text" className="text-black w-[100px] font- font-bold" placeholder="Search Food" />
        </div>
        <div className="flex items-center justify-center rounded-md border shadow-lg shadow-yellow-500 w-[90px] h-[30px]  gap-2">
        <img src={user}  alt="user logo" className="size-[14px]" /> 
        <button className="text-yellow-500  font-bold">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
