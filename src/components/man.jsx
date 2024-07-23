import { IoChevronForward } from "react-icons/io5";
const Man = () => {
    return ( 
        <div className="m-auto w-[1440px] h-[980px] bg-[#FFFFFF]">
          <div className="w-[1440px] bg-[#FFFFFF] h-[264px] py-[80px] ps-[285px]">
               <div className="w-[865px] h-[104px] bg-[#FFFFFF] flex justify-evenly pe-[65px]">
                    <div>
                        <h1 className="text-[#96BB7C] font-body font-bold text-base4 ms-[-10px]">15K</h1>
                        <small className="ms-[-20px] text-base5 font-body font-bold">Happy Customers</small>
                    </div>
                    <div>
                        <h1 className="text-[#96BB7C] font-body font-bold text-base4">150K</h1>
                        <small className="text-base5 font-body font-bold">Monthly Visitors</small>
                    </div>
                    <div className="me-[-150px]">
                        <h1 className="text-[#96BB7C] font-body font-bold text-base4 ms-[34px]">15</h1>
                        <small className="text-base5 font-body font-bold">Countries Worldwide</small>
                    </div>
                    <div className="ms-[20px] ps-[150px] me-[-50px]">
                        <h1 className="text-[#96BB7C] font-body font-bold text-base4">100+</h1>
                        <small className="text-base5 font-body font-bold">Top Partners</small>
                    </div>
               </div>
          </div>
          <div className="w-[1440px] h-[751px] bg-[#FFFFFF]">
            <div className="w-[1440px] h-[744px] bg-[#FFFFFF]">
                <div className="h-[424px] w-[860px] bg-[#FFFFFF] my-[160px] ms-[290px] flex">
                    <div className="mt-[80px]  mb-[88.96px] ms-[3px] me-[30px] ">
                        <div className="bg-[#E74040] w-[94px] h-[7px] pb-[0px] mb-[-40px] "></div>
                        <h2 className="font-body font-bold text-base6 my-[48px] w-[380px] pt-[15px]">Every Client Matters</h2>
                        <p className="text-base7 text-[#737373]">Problems trying to solve the conflict between</p>
                        <p className="text-base7 text-[#737373]">the two major realms of classical physics:</p>
                        <p className="text-base7 text-[#737373]">Newtonian mechanics</p>
                       <div className="flex justify-start items-center mt-[30px] mb-[6px]">
                       <button className="text-[#96BB7C] text-base8 font-bold font-body">Learn More  </button> <div className="text-[#96BB7C] mt-[5px] ms-[5px] scale-y-150"><IoChevronForward /></div>
                       </div>
                    </div>
                    <div className="w-[513px] relative">
                        <img className=" absolute top-[48.31px] w-[53.32px] h-[53.32px]" src="images/a.jpg" alt="" />
                        <img  className="absolute top-[48.31px] left-[64.13px] w-[337.67px] h-[337.83px]" src="images/b.png" alt="" />
                        <img   className="absolute left-[89px] top-[2px] w-[337.67px] h-[377.83px]" src="images/c1.png" alt="" />
                        <img className=" absolute left-[292px] top-[45px] w-[138px] h-[138px]" src="images/d.png" alt="" />
                        <img className=" absolute top-[288px] left-[112px] w-[322px] h-[120px]" src="images/e.png" alt="" />
                        <div className=" absolute bg-[#FEF3D9] h-[34px] w-[58px] top-[332px] left-[42px] rounded-df"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
     );
}
 
export default Man;