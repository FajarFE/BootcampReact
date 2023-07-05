import React, { useState } from 'react';

const Card = ({ image, name, price,label }) => {
    const [wishlist, setWishlist] = useState(true);

    const handleWishlist = () => {
        setWishlist(!wishlist);
    };

    return (
        <div className="relative w-[300px] bg-white rounded rounded-[7px] shadow-lg">
           {label && (
                <div className="absolute top-7 -left-4">
                    <label className="bg-blue hover:bg-blue text-white font-bold py-3 px-10 rounded">
                        12.12
                    </label>
                </div>
            )}
            <img className="h-[200px] object-fit rounded-t-[7px]" src={image} alt={name} />
            <div className="flex flex-col gap-2 px-5 py-4">
                <div className="font-bold text-xl">{name}</div>
                <p className="text-gray text-base">${price}</p>
                <div className="flex justify-between items-center">
                    <button className="bg-blue hover:bg-blue text-white font-bold py-2 px-10 rounded">
                        Beli
                    </button>
                    <div className="flex justify-center items-center relative">
                        <input
                            type="checkbox"
                            className="absolute opacity-0 w-8 h-8"
                            checked={wishlist}
                            onChange={handleWishlist}
                        />
                        <svg
                            width="50px"
                            height="50px"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                            strokeWidth="3"
                            stroke={wishlist ? '#000000':'none'}
                            fill={wishlist ? "none" : "red"}
                            style={{ cursor: "pointer" }}
                            onClick={handleWishlist}
                        >
                            <path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
