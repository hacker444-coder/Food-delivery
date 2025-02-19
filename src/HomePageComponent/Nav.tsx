import logo from "./photo/Logo.png"
import sentence from "./photo/Deliver Address.png"
import user from './photo/user.png'

function Nav() {
  return (
    <div className="bg-white max-w-screen gap-8 h-[58px] flex
      items-center pr-[150px] pl-[150px]">
     <img src={logo} alt="logo of nav" className="w-[200px]" />
      <img src={sentence} alt="sentence in nav" className="w-[350px]" />
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
