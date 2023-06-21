import React from "react";

export default function NavCart (){
    const [show, setShow] = React.useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    const handleClose=()=>{
        setShow(false)
    }
    return(
        <>
       
        <div className="bg-blue mb-2 relative w-screen">
            <nav className="container mx-auto py-2  flex flex-col gap-1">
                <div className="flex justify-between gap-4 text-white items-center">
                    <div className="flex gap-4">
                    <a href="#">Home</a><span>|</span>
                    <a href="#">Discount</a><span>|</span>
                    <a href="#">Category</a><span>|</span>
                    </div>
                    <div className="flex gap-4">
                    <button className=" rounded rounded-2 w-auto flex justify-center items-center h-auto"
                        onClick={handleShow}>
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>
                    </div>
                </div>
            </nav>
          
            {show && (
                <div className="absolute right-20 button-0 mt-1 w-[220px] h-[240px] py-10 px-10 text-white rounded-lg font-bold flex flex-col gap-4 bg-blue items-start">
                <a href="#" >
                    Profile
                </a>
                <a href="#" >
                    Profile
                </a>
                <a href="#" >
                    Profile
                </a>
                <a href="#" >
                    Profile
                </a>
                </div>
            )}
            
           
        </div>
        <nav className=" bg-white h-[80px] flex flex-col justify-between items-center">
                <div className="container mx-auto  flex justify-between items-center  ">

                <div class="flex justify-center items-center gap-7">
  <h1 class="text-[50px] text-blue font-bold">Shop</h1>
  <hr class="border-r-4 h-[50px] text-blue  "/>
  <h1 class="text-[50px] text-blue ">Cart</h1>
</div>
                 
                        <div className="flex justify-center w-auto h-auto items-center relative rounded-md p-2 border-2 border-blue">
                            <input type="text" placeholder="Search" className="w-[730px] h-auto rounded-[7px] focus:outline-none px-4 text-[16px]"/>
                            <button className="absolute right-1 w-[70px] h-[30px] flex justify-center text-white items-center rounded-[7px] bg-blue">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Interface / Search_Magnifying_Glass">
                            <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </svg>
                            </button>
                        </div>  
                </div>
                </nav>
 
        
      
        </>
    )
}