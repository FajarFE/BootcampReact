import {NavLogin,Card,Footer} from '../Components/Micros/index';
import React,{ useState } from 'react';

export default function LandingPage () {
    const [label,setLabel] =useState(true)
    return (
        <>
        <NavLogin/>
        <div className="container h-full w-full bg-white mx-auto my-20">
            <div className="flex grid grid-cols-12 justify-center items-center gap-20 p-5 outline outline-2 outline-blue my-20">
            <div className="grid col-span-3">
                <Card label={label}/>
            </div>
            <div className="grid col-span-3">
                <Card label={label}/>
            </div>
            <div className="grid col-span-3">
                <Card label={label}/>
            </div>
            </div>
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
        <Footer/>
        </>
    )
}