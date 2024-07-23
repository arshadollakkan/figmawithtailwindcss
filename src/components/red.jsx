const Red = () => {
  let list=[{
   sale:"/images/Sale.png",
   background:"/images/bg1.png",
   circle1:"/images/c.png",
   circle2:"/images/b1.png",
   circle3:"/images/i.png",
   line1:"Training Courses",
   star:"/images/star.png",
   line2:"Get Quality Education",
   line3:"We focus on ergonomics and meeting",
   line4:"you where you work.it's only a",
   line5:"Keystroke away.",
   inbox:"/images/in.jpg",
   line6:"15 Sales",
   line7:"/images/s.jpg"
  },{
   sale:"/images/Sale.png",
   background:"/images/c2.png",
   circle1:"/images/c.png",
   circle2:"/images/b1.png",
   circle3:"/images/i.png",
  line1:"2.769 online courses",
  star:"/images/star.png",
  line2:"Our Popular Courses",
  line3:"We focus on ergonomics and meeting",
  line4:"you where you work.it's only a",
  line5:"Keystroke away.",
  inbox:"/images/in.jpg",
  line6:"15 Sales",
   line7:"/images/s.jpg"
 },{
   sale:"/images/Sale.png",
   background:"/images/c3.png",
   circle1:"/images/c.png",
   circle2:"/images/b1.png",
   circle3:"/images/i.png",
 line1:"Expert instruction",
  star:"/images/star.png",
  line2:"Most Popular Courses",
  line3:"We focus on ergonomics and meeting",
  line4:"you where you work.it's only a",
  line5:"Keystroke away.",
  inbox:"/images/in.jpg",
  line6:"15 Sales",
   line7:"/images/s.jpg"
 },]

    return ( 
        <div className="w-[1430px] h-[1050px] bg-[#FFF2F3] m-auto">
            <div className="w-[870px] h-[810px] bg-[#FFF2F3] mx-auto">
                 <div className="pt-[160px] ">
                    <h6 className="font-body font-bold text-base8 text-[#96BB7C]">Particle Advice</h6>
                    <h2 className="text-base6 font-body font-bold text-[#252B42] mt-[10px]">Our Experts Teacher</h2>
                    <p className="text-base7 text-[#737373] font-body font-normal  mt-[10px]">Problems trying to resolve the conflict between</p>
                    <p className="text-base7 text-[#737373] font-body font-normal">the two major realms of classical physics:Nowtonian mechanics</p>
                 </div>
                 <div className=" grid grid-cols-3 gap-x-3 bg-[#FFF2F3] w-[871px] h-[562px] mt-[80px]">
                   {
                     list.map((x)=>(
                        <div className=" bg-[#FFFFFF] relative  me-[0px] ">
                              <div className="">
                           <div className="h-[275px]">
                           
                           <img  src={x.background} alt="" />
                           </div>
                          <button className=" absolute  top-[20px] left-[20px] bg-[#E74040] text-[#FFFFFF] w-[51px] h-[24px] rounded-df1 px-[10px] py-[0px] font-body font-bold text-base8"><h6>Sale</h6></button>
                           <img className="absolute top-[192px] left-[85px]    w-[35px] h-[35px] rounded-df2" src={x. circle1} alt="" />
                           <img className="absolute top-[192px] left-[129px]   w-[35px] h-[35px] rounded-df2" src={x.circle2} alt="" />
                           <img className="absolute top-[192px] left-[169px]   w-[35px] h-[35px] rounded-df2" src={x.circle3} alt="" />
                        </div>
                        <div className="">
                         <div className="flex justify-between px-[18px]">
                           <p className="text-[#96BB7C] font-body font-bold text-base8">{x.line1}</p>
                           <img src={x.star} alt="" />
                         </div>
                         <h5 className="mt-[11px] text-base5 font-body font-bold px-[18px]">{x.line2}</h5>
                         <p className="pt-[10px] text-[#737373] font-normal px-[18px] text-base7">{x.line3}</p>
                         <p className=" text-[#737373] font-normal px-[18px] text-base7">{x.line4}</p>
                         <p className=" text-[#737373] font-normal px-[18px] text-base7">{x.line5}</p>
                         <div className=" px-[18px] flex mt-[10px] justify-start items-center">
                           <img className="w-[16px] h-[16px]" src={x.inbox} alt="" />
                           <h6 className="ms-[10px] text-[#737373] text-base8 font-body font-bold">{x.line6}</h6>
                         </div>
                     <h5 className="px-[18px] mt-[15px] text-[#BDBDBD] font-body font-bold text-base5 mb-[10px]">$16.48 <span className="ms-[5px] text-[#FFAB71]">$6.48</span></h5>
                     <div className=" ms-[18px] flex justify-start items-center  text-[#96BB7C] border-solid border-2 border-asd w-[122.1px] h-[36px] rounded-df3 ps-[8px] pe-[8px]"><button  className="me-[10px] pb-[3px] text-base8 ps-[8px]">Learn More </button> <img src={x.line7} alt="" /></div>
                           </div> 
                        </div>
                     ))
                   }
                 </div>
            </div>
        </div>
     );
}
 
export default Red;