import { NavCart, Cart,Card, Footer } from "../Components/Micros/index";

export default function App() {
    return (
     <div className="bg-[#F6F6F6]">
        
         <NavCart />
         <div className="container mx-auto bg-white rounded rounded-lg my-20 p-5">
        <Cart/>

         </div>

         <div className="container mx-auto my-20">

         <div className="flex grid grid-cols-12 gap-10 justify-center items-center">
            <div className="grid col-span-3">
                <Card/>
            </div>
            <div className="grid col-span-3">
                <Card/>
            </div>
            <div className="grid col-span-3">
                <Card/>
            </div>
            <div className="grid col-span-3">
                <Card/>
            </div>
            <div className="grid col-span-3">
                <Card/>
            </div>
            <div className="grid col-span-3">
                <Card/>
            </div>
            <div className="grid col-span-3">
                <Card/>
            </div>
            <div className="grid col-span-3">
                <Card/>
            </div>
        </div>
         </div>
         <Footer />
     </div>
    
    );
}