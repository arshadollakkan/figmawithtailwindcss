
const Section = () => {
    let fasali=[{
        img:"/images/cap.jpg",
        title:"Expert instruction",
        sm:"the gradual accumulation of",
        sm1:"information about atomic and",
        sm2:"small-scale behaviour..."

    },{
        img:"/images/two.jpg",
        title:"Training Courses",
        sm:"the gradual accumulation of",
        sm1:"information about atomic and",
        sm2:"small-scale behaviour..."

    },{
        img:"/images/three.jpg",
        title:"Expert instruction",
        sm:"the gradual accumulation of",
        sm1:"information about atomic and",
        sm2:"small-scale behaviour..."

    }
]

    return ( 
        
          <section>
              <div className=" relative flex h-[401px]  bg-[#FAFAFA] justify-around max-w-[1044px] m-auto">
              <div className="ms-[86px] mt-[80px]">
              <p className="text-[#96BB7C]">Join Us</p>
               <div className="max-w-[542px] m-0 ms-[-10px]">
               <h1 className="text-[#252B42] font-body font-bold text-base2">25K+ STUDENTS</h1>
               <h1 className="text-[#252B42] font-body font-bold text-base2">TRUST US</h1>
               </div>
                <h4 className="text-[#737373]">Every day brings with it a fresh set of learning</h4>
                <h4 className="text-[#737373]">possibilities</h4>
                <div className="w-[365px] h-[52px] mt-[35px]">
                    <button className="me-[10px] text-[#FFFFFF] bg-[#96BB7C] px-40px py-15px w-[193px] h-[52px] font-bold font-base3 rounded-df">Get Quote Now</button>
                    <button className="border-solid border-2 border-[#96BB7C] text-[#96BB7C] px-40px py-15px bg-[#FFFFFF] w-[162px] h-[52px] font-bold font-base3 rounded-df">Learn More</button>
                </div>
              </div>
             <div className= "me-[0px] ms-[-80px]"> <img className="w-[515px] h-[551px]" src="images/one.png" alt="" /></div>
            </div>
         <div className="grid grid-cols-3 absolute gap-x-8 ps-[290px] mt-[66px]">
         {
            fasali.map((x)=>(
                <div className="flex w-[268px] px-[35px] h-[286px]
                py-[40px] flex-col items-start  bg-[#FFFFFF] mb-[80px]" >
               <div>
               <img src={x.img} alt="" />
               </div>
               <div className="m-0">
               <h1 className="gap-y-5 my-[20px] font-body font-bold text-base ">{x.title}</h1>
               <div className="w-[50px] h-[2px] bg-red-600 mb-[20px]"></div>
               </div>
               <small>{x.sm}</small>
               <small>
                {x.sm1}
               </small>
               <small>{x.sm2}</small>
            </div>
            ))
          }
         </div>
          </section>
        
     );
}
 
export default Section;