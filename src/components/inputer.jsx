const Somu = () => {
    return ( 
        <div className="w-[1440px] h-[594px] bg-[#FFFFFF] mx-auto">
          <div className="w-[1050px] h-[574px]  bg-[#FFFFFF] mx-auto text-center">
          <div className="pt-[160px] ">
                    <h6 className="font-body font-bold text-base8 text-[#96BB7C]">Newsletter</h6>
                    <h2 className="text-base6 font-body font-bold text-[#252B42] mt-[10px]">Watch our Courses</h2>
                    <p className="text-base7 text-[#737373] font-body font-normal  mt-[10px]">Problems trying to resolve the conflict between</p>
                    <p className="text-base7 text-[#737373] font-body font-normal">the two major realms of classical physics:Nowtonian mechanics</p>
                 </div>
                 <div className="mt-[80px] w-[688px] h-[58px] ms-[215px] flex ">
                    <input className="py-[15px] px-[20px]  w-[500px] bg-[#E6E6E6] rounded-l-df" type="text " placeholder="Your Email" />
                    <button className="py-[15px] px-[22px] text-[#FFFFFF] bg-[#96BB7C] font-body  rounded-r-df">Subscribe</button>
                 </div>
          </div>
        </div>
     );
}
 
export default Somu;