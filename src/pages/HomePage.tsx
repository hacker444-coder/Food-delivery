import Header from "../HomePageComponent/Header"
import flashDeal from "../HomePageComponent/photo/Flash Deal Card.png"
import flashDeal1 from "../HomePageComponent/photo/Flash Deal Card (1).png"
import flashDeal2 from "../HomePageComponent/photo/Flash Deal Card (2).png"
import flashDeal3 from "../HomePageComponent/photo/Flash Deal Card (3).png"
import step1 from "../HomePageComponent/photo/Frame 730.png"
import step2 from "../HomePageComponent/photo/Frame 731.png"
import step3 from "../HomePageComponent/photo/Frame 732.png"
import step4 from "../HomePageComponent/photo/Frame 733.png"
import frame1 from "../HomePageComponent/photo/Frame 40 (1).png"
import frame2 from "../HomePageComponent/photo/Frame 40 (2).png"
import frame3 from "../HomePageComponent/photo/Frame 40 (3).png"
import frame4 from "../HomePageComponent/photo/Frame 40 (4).png"
import locationLogo from "../HomePageComponent/photo/map-marker-alt.png"
import p1 from "../HomePageComponent/photo/1.png"
import p2 from "../HomePageComponent/photo/2.png"
import p3 from "../HomePageComponent/photo/3.png"
import p4 from "../HomePageComponent/photo/4.png"
import p5 from "../HomePageComponent/photo/5.png"
import p6 from "../HomePageComponent/photo/6.png"
import p7 from "../HomePageComponent/photo/7.png"
import p8 from "../HomePageComponent/photo/8.png"
import leftArrow from "../HomePageComponent/photo/Arrow Left.png"
import rightArrow from "../HomePageComponent/photo/Arrow Right.png"
import items from "../HomePageComponent/photo/Items.png"

function HomePage() {
  return (
    <div>
      {/* header part */}
      <Header/>
      {/* main */}
      <main>
        {/* part-1 */}
      <div className="flex justify-center gap-4 items-center h-[300px] ">
        <img className="w-[200px]" src={flashDeal} alt="" />
        <img className="w-[200px]" src={flashDeal1} alt="" />
        <img className="w-[200px]" src={flashDeal2} alt="" />
        <img className="w-[200px]" src={flashDeal3} alt="" />
      </div>
      {/* part-2 */}
      <div className="h-[300px] flex-col gap-4 flex bg-gradient-to-t from-[#FDEDCA] to-[#fcefd3] items-center  justify-center">
      <div>
       <h1 className="text-[#F17228] text-[35px] font-bold ">How does it work</h1>
      </div>
      <div className="flex gap-2">
        <img src={step1} className="w-[200px]" alt="" />
        <img src={step2} className="w-[200px]" alt="" />
        <img src={step3} className="w-[200px]" alt="" />
        <img src={step4} className="w-[200px]" alt="" />
      </div>
      </div>
      {/* part-3 */}
      <div className="h-[550px] gap-10 flex justify-center items-center flex-col">
        <div>
        <h1 className="font-bold text-[35px]">Popular items</h1>
        </div>
        <div className="flex gap-5">
         <div>
          <img src={frame1} className="w-[220px]" alt="" />
          <p className="font-bold">Cheese Burger</p>
          <div className="flex items-center gap-2">
          <img src={locationLogo} className="w-[11px] h-[15px]" alt="" />
          <p className=" text-[#FFB30E]">Burger Arena</p>
          </div>
          <p className="font-bold">$3.88</p>
          <button className="bg-[#F17228] rounded-lg text-white text-[15px] h-[40px] w-[150px]">Order Now</button>
         </div>
         <div>
          <img src={frame2} className="w-[220px]" alt="" />
          <p className="font-bold">Cheese Burger</p>
          <div className="flex items-center gap-2">
          <img src={locationLogo} className="w-[11px] h-[15px]" alt="" />
          <p className=" text-[#FFB30E]">Burger Arena</p>
          </div>
          <p className="font-bold">$3.88</p>
          <button className="bg-[#F17228] rounded-lg text-white text-[15px] h-[40px] w-[150px]">Order Now</button>
         </div>
         <div>
          <img src={frame3} className="w-[220px]" alt="" />
          <p className="font-bold">Crispy Sandwitch</p>
          <div className="flex items-center gap-2">
          <img src={locationLogo} className="w-[11px] h-[15px]" alt="" />
          <p className=" text-[#FFB30E]">Fastfood Dine</p>
          </div>
          <p className="font-bold">$3.00</p>
          <button className="bg-[#F17228] rounded-lg text-white text-[15px] h-[40px] w-[150px]">Order Now</button>
         </div>
         <div>
          <img src={frame4} className="w-[220px]" alt="" />
          <p className="font-bold">Thai Soup</p>
          <div className="flex items-center gap-2">
          <img src={locationLogo} className="w-[11px] h-[15px]" alt="" />
          <p className=" text-[#FFB30E]">Foody man</p>
          </div>
          <p className="font-bold">$2.79</p>
          <button className="bg-[#F17228] rounded-lg text-white text-[15px] h-[40px] w-[150px]">Order Now</button>
         </div>
        </div>
      </div>
      {/* part-4 */}
      <div className="h-[1050px] flex items-center gap-10 flex-col">
       <h1 className="font-bold text-[35px]">Featured Restaurants</h1>
       <div className="flex gap-4">
        <img src={p1} className="w-[230px] " alt="" />
        <img src={p2} className="w-[230px] " alt="" />
        <img src={p3} className="w-[230px] " alt="" />
        <img src={p4} className="w-[230px] " alt="" />
       </div>
       <br />
       <div className="flex gap-4">
       <img src={p5} className="w-[230px] " alt="" />
        <img src={p6} className="w-[230px] " alt="" />
        <img src={p7} className="w-[230px] " alt="" />
        <img src={p8} className="w-[230px] " alt="" />
       </div>
       <button className="bg-[#FF9A0E] text-white font-sans font-bold w-[100px] h-[30px] rounded-lg">View All</button>
      </div>
      {/* part-5 */}
      <div className="bg-[#FEFAF1] h-[450px] p-20">
        <div className="flex justify-between font-bold items-center ">
          <h1 className="text-[30px]">Search By Food</h1>
          <div className="flex">
            <button className="text-[#FFB30E] mb-5 text-[17px]">View All</button>
            <button><img src={leftArrow} className="w-[100px]" alt="" /></button>
            <button><img src={rightArrow} className="w-[100px]" alt="" /></button>
          </div>
        </div>
        <div>
          <img src={items} alt="" />
        </div>
      </div>
      </main>
    </div>
  )
}

export default HomePage
