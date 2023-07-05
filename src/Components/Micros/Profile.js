import React, { useState } from 'react';


export default function Daftar () {
  const [image,setImage]=useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };



  const handleGenderChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'male') {
      setIsMaleChecked(checked);
      setIsFemaleChecked(!checked);
    } else if (name === 'female') {
      setIsMaleChecked(!checked);
      setIsFemaleChecked(checked);
    }
  };

  return (
    <>
      <div className="my-20 container flex justify-center items-center mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8 block border rounded-md">
          <div className="md:col-span-6 mx-auto flex justify-center items-center">
          <div className="w-[200px] h-[200px] rounded-full bg-gray-200 overflow-hidden relative flex items-center justify-center">
  <img src="https://placehold.co/600x400/000000/FFFFFF/png" alt="Gambar" className="w-full h-full object-cover" />

  <label htmlFor="" className="w-full h-[40px] flex justify-center items-center absolute bottom-0 opacity-[60%] bg-white">
    <p className="w-full h-full absolute text-center" >Ubah Profile</p>
<input type="file" accept="image/*" onChange={handleImageUpload} className="opacity-0 w-full h-full" s/>
  </label>
</div>

          
          </div>
          <div className="md:col-span-6 bg-white p-4">
            <div className="mx-auto flex items-center mt-4 text-center">
              <p className="font-roboto text-2xl font-bold text-blue-500">Propile</p>
            </div>
            <form>
              <label className="block mb-2 mt-6 font-roboto text-1xl font-bold text-blue-500">
                Username:
                <input type="text" name="username" className="block w-full border border-gray-300 rounded-md p-2" />
              </label>
              <label className="block mb-2 font-roboto text-1xl font-bold text-blue-500">
                Nama
                <input type="text" name="username" className="block w-full border border-gray-300 rounded-md p-2" />
              </label>
              <label className="block mb-2 font-roboto text-1xl font-bold text-blue-500">
                Nomer Telepon
                <input type="text" name="username" className="block w-full border border-gray-300 rounded-md p-2" />
              </label>
              <label className="block mb-2 font-roboto text-1xl font-bold text-blue-500">
                Email
                <input type="email" name="email" className="block w-full border border-gray-300 rounded-md p-2" />
              </label>
              <label className="block mb-2 mt-6 font-roboto text-1xl font-bold text-blue-500">
                Nama Toko
                <input type="text" name="username" className="block w-full border border-gray-300 rounded-md p-2" />
              </label>
              <label className="block mb-2 mt-6 font-roboto text-1xl font-bold text-blue-500">
                Jenis Kelamin:
                <div className="flex items-center mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="male"
                      checked={isMaleChecked}
                      onChange={handleGenderChange}
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">Pria</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="checkbox"
                      name="female"
                      checked={isFemaleChecked}
                      onChange={handleGenderChange}
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">Wanita</span>
                  </label>
                </div>
              </label>
              <label className="block mb-2 mt-6 font-roboto text-1xl font-bold text-blue-500">
                Tanggal Lahir:
                <input type="date" name="dob" className="ml-2 border"  />
                <span>{formattedDate}</span>
              </label>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-32">
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}