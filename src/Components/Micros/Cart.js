export default function Cart() {
  return(
    <>
    <div className="container mx-auto">
        <div className="flex flex-col w-full h-auto p-4 justify-center">
            <div className="flex justify-between">
            <label htmlFor="" className="block flex justify-center items-center">
                <input type="checkbox" name="" id="" className="mr-2  w-6 h-6" />
                <span className="text-sm">Select All</span>
            </label>
            </div>
            <div className="flex justify-between items-center my-4">
                <div className="flex gap-4 justify-center items-center">
                    <label htmlFor="" className="block flex justify-center items-center">
                        <input type="checkbox" name="" id="" className="mr-2 w-6 h-6" />
                        <span className="text-sm">Select All</span>
                    </label>
                    <div className="h-[100px] w-[150px] bg-[#C4C4C4]">
                    </div>
                    <div className="flex flex-col justify-items-start">
                        <span className="text-[24px] font-bold">Nama Produk</span>
                        <span className="text-[15px]">Rp. 100.000</span>
                        <span className="text-[15px]">Qty</span>
                    </div>
                </div>
            <div className="flex justify-center items-center gap-4">
                <span>Hapus</span>
                <span>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Close_MD">
                    <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                    </span>
            </div>
            </div> 
            <div className="flex justify-between items-center my-4">
                <div className="flex gap-4 justify-center items-center">
                    <label htmlFor="" className="block flex justify-center items-center">
                        <input type="checkbox" name="" id="" className="mr-2 w-6 h-6" />
                        <span className="text-sm">Select All</span>
                    </label>
                    <div className="h-[100px] w-[150px] bg-[#C4C4C4]">
                    </div>
                    <div className="flex flex-col justify-items-start">
                        <span className="text-[24px] font-bold">Nama Produk</span>
                        <span className="text-[15px]">Rp. 100.000</span>
                        <span className="text-[15px]">Qty</span>
                    </div>
                </div>
            <div className="flex justify-center items-center gap-4">
                <span>Hapus</span>
                <span>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Close_MD">
                    <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                    </span>
            </div>
            </div>      
            <div className="flex justify-between items-center my-4">
                <div className="flex gap-4 justify-center items-center">
                    <label htmlFor="" className="block flex justify-center items-center">
                        <input type="checkbox" name="" id="" className="mr-2 w-6 h-6" />
                        <span className="text-sm">Select All</span>
                    </label>
                    <div className="h-[100px] w-[150px] bg-[#C4C4C4]">
                    </div>
                    <div className="flex flex-col justify-items-start">
                        <span className="text-[24px] font-bold">Nama Produk</span>
                        <span className="text-[15px]">Rp. 100.000</span>
                        <span className="text-[15px]">Qty</span>
                    </div>
                </div>
            <div className="flex justify-center items-center gap-4">
                <span>Hapus</span>
                <span>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Close_MD">
                    <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                    </span>
            </div>
            </div>                
        </div>
        <div className="flex gap-6 ml-6">

        <button className="bg-blue px-10 py-2 text-white rounded rounded-lg">
            Checkout
        </button>
        <button className="border-red border-2 px-10 py-2 text-red rounded rounded-lg">
            Hapus
        </button>
        </div>
    </div>
    </>
  )
}