import React from "react";

export default function NavLogin (){
    const [show, setShow] = React.useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    const handleClose=()=>{
        setShow(false)
    }
    return(
        <>
        <div>
        <div className="bg-blue mb-2 relative w-screen">
            <nav className="container mx-auto py-2  flex flex-col gap-1">
                <div className="flex justify-start gap-4 text-white items-center">
                    <a href="#">Home</a><span>|</span>
                    <a href="#">Discount</a><span>|</span>
                    <a href="#">Category</a><span>|</span>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-[48px] text-white font-bold">Shop</h1>
                    </div>
                    <div className="gap-4 flex">
                        <div className="flex justify-center items-center relative">
                            <input type="text" placeholder="Search" className="w-[730px] h-auto rounded-[7px] focus:outline-none px-4 text-[24px]"/>
                            <button className="absolute right-1 w-[50px] h-[30px] flex justify-center text-white items-center rounded-[7px] bg-blue">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Interface / Search_Magnifying_Glass">
                            <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </svg>
                            </button>
                        </div>
                        <div className=" rounded rounded-2 border-2 border relative border-white w-[80px] flex justify-center items-center h-auto">
                        <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4H2.47241C2.92336 4 3.31852 4.30182 3.43717 4.73688L3.85342 6.26312L6 14.1339V16C6 16.6935 6.23533 17.3321 6.63048 17.8402C6.23824 18.2816 6 18.863 6 19.5C6 20.8807 7.11929 22 8.5 22C9.88071 22 11 20.8807 11 19.5C11 19.3288 10.9828 19.1616 10.95 19H14.05C14.0172 19.1616 14 19.3288 14 19.5C14 20.8807 15.1193 22 16.5 22C17.8807 22 19 20.8807 19 19.5C19 19.1715 18.9366 18.8578 18.8215 18.5704C18.934 18.4086 19 18.212 19 18C19 17.4477 18.5523 17 18 17H16.5H9C8.44772 17 8 16.5523 8 16V15H18.236C19.1381 15 19.9285 14.3962 20.1657 13.5258L21.8007 7.52583C22.1473 6.25364 21.1896 5 19.871 5H5.58198L5.3667 4.21065C5.01074 2.90547 3.82526 2 2.47241 2H2ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM18.236 13H7.7638L6.12743 7H19.871L18.236 13ZM8.5 19C8.22386 19 8 19.2239 8 19.5C8 19.7761 8.22386 20 8.5 20C8.77614 20 9 19.7761 9 19.5C9 19.2239 8.77614 19 8.5 19Z" fill="#ffffff"/>
                        </svg>
                        <span className="absolute top-0 buttom-0 right-3 w-[20px] h-[20px] bg-red rounded-full flex justify-center items-center text-white text-[12px] z-[99]">0</span>
                        </div>
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
       
        </div>
        
      
        </>
    )
}