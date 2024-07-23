const Nav = () => {
    return ( 
       
          <div className=" text-center mx-[59px] my-0 bg-[#FAFAFA] max-w-[1322px]   h-[91px]  flex justify-around items-center">
          <div className="flex justify-start ms-[136px]">
                <h1 className="mt-[-7px] text-base font-bold font-body  w-[141px] h-[32px]">Brandname</h1>
               <ul className=" text-arshad  flex justify-start gap-[21px] ms-[41px] font-bold">
                <li><a href="">Home</a>
                </li>
                <li><a href="">Product</a>
                </li>
                <li><a href="">Pricing</a>
                </li>
                <li><a href="">Contact</a>
                </li>
               </ul>
            </div>
            <div className="max-w-[214px] h-[52px] me-[220px] pt-[2px] flex justify-center items-center">
                <button className="text-[#96BB7C] me-[40px]">Login</button>
                <button className="bg-[#96BB7C] text-[#FFFFFF] w-[137px] h-[52px] py-[15px] px-[25px] rounded-df">Join Us →</button>
            </div>
          </div>
       
     );
}
 
export default Nav;