const List = () => {
    let gold=[{
        a1:"/images/a1.jpg",
        a2:"/images/a2.jpg"
    },
    {
        a1:"/images/a1.jpg",
        a2:"/images/a3.jpg"
    },{
        a1:"/images/a1.jpg",
        a2:"/images/a4.jpg"
    }]
    return ( <div className="w-[1430px] mx-auto h-[750px] bg-[#FFFFFF]">
        <div className="w-[870px] h-[750px] bg-[#FFFFFF] mx-auto">
        <div className="pt-[160px] ">
                    <h6 className="font-body font-bold text-base8 text-[#96BB7C]">Particle Advice</h6>
                    <h2 className="text-base6 font-body font-bold text-[#252B42] mt-[10px]">Every Client Matters</h2>
                    <p className="text-base7 text-[#737373] font-body font-normal  mt-[10px]">Problems trying to resolve the conflict between</p>
                    <p className="text-base7 text-[#737373] font-body font-normal">the two major realms of classical physics:Nowtonian mechanics</p>
                 </div>

                 <div className="w-[870px] h-[316px] bg-[#FFFFFF] mt-[80px] grid grid-cols-3 gap-x-7">
                    {
                        gold.map((x)=>(
                           <div className=" bg-[#FFFFFF] text-center">
                            <img  className="my-[30px] ms-[75px] w-[130px] h-[22px]" src={x.a1} alt="" />
                            <p className="font-normal font-body text-base7 text-[#737373]">Slate helps you see</p>
                            <p className="font-normal font-body text-base7 text-[#737373]">how many more days</p>
                            <p className="font-normal font-body text-base7 text-[#737373]">you need to work to</p>
                            <p className="font-normal font-body text-base7 text-[#737373]">reach your financial</p>
                            <p className="font-normal font-body text-base7 text-[#737373]">goal for the month</p>
                            <p className="font-normal font-body text-base7 text-[#737373]">and year.</p>
                            <div className="flex justify-center">
                                <img src={x.a2} alt="" />
                                <div className="flex flex-col items-start ms-[10px]"><h6 className="text-[#96BB7C] text-base8 font-body font-bold ">Regina Miles</h6>
                                <p className="text-base9 text-[#252B42]">Designer</p></div>
                            </div>
                           </div> 
                        ))
                    }
   
                 </div>
                 

                 
        </div>
    </div> );
}
 
export default List;