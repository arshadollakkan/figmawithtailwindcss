const Pop = () => {
    let go=[{
        jk:"/images/f1.jpg",
        jk2:"/images/f4.jpg"
    },{
        jk:"/images/f2.jpg",
        jk2:"/images/f4.jpg"
    },{
        jk:"/images/f3.jpg",
        jk2:"/images/f4.jpg"
    },{
        jk:"/images/f5.jpg",
        jk2:"/images/f4.jpg"
    }]

    return ( 
        <div className="w-[1430px] h-[849px] bg-[#FFFFFF] mx-auto">
            <div className=" w-[880px] h-[827px] bg-[#FFFFFF] mx-auto">
            <div className="pt-[112px] ">
                    <h6 className="font-body font-bold text-base8 text-[#96BB7C]">Team</h6>
                    <h2 className="text-base6 font-body font-bold text-[#252B42] mt-[10px]">Our Popular Courses</h2>
                    <p className="text-base7 text-[#737373] font-body font-normal  mt-[10px]">Problems trying to resolve the conflict between</p>
                    <p className="text-base7 text-[#737373] font-body font-normal">the two major realms of classical physics:Nowtonian mechanics</p>
                 </div>
                 <div className="grid grid-cols-4 gap-x-4 mt-[112px] pe-[0px] ">
                  {go.map((x)=>(
                    <div className="w-[205px] h-[320px]  bg-[#FFFFFF]  rounded-df4 text-center shadow-[0_13px_19px_0px_rgba(0,0,0,0.07)]">
                        <img className="w-[206px] h-[190px] rounded-t-df4" src={x.jk} alt="" />
                        <h5 className="pt-[15px]">Julian Jameson</h5>
                        <p className="pt-[5px] pb-[5px]">Profession</p>
                       <div className="ps-[50px]">
                       < img className="" src={x.jk2} alt="" /></div>
                       </div>
                    
                  ))}

                 </div>
            </div>
        </div>
     );
}
 
export default Pop;