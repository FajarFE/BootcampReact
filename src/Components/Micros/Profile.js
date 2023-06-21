export default function Profile() {
    return (
      <>
        <div className="container flex justify-center items-center mx-auto min-h-screen px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8 block border rounded-md">
            <div className="md:col-span-6 mx-auto">
              <img src="https://placehold.co/600x400" alt="Gambar" className="w-full h-auto rounded-md" />
            </div>
            <div className="md:col-span-6 bg-white p-4">
              <div className="mx-auto flex items-center mt-4 text-center">
              <p className="font-roboto text-2xl font-bold text-blue-500">DAFTAR</p>
              </div>
              <form>
                <label className="block mb-2 mt-6 font-roboto text-1xl font-bold text-blue-500">
                  Username:
                  <input type="text" name="username" className="block w-full border border-gray-300 rounded-md p-2" />
                </label>
                <label className="block mb-2 font-roboto text-1xl font-bold text-blue-500">
                  Nama
                  <input type="password" name="password" className="block w-full border border-gray-300 rounded-md p-2" />
                </label>
                <label className="block mb-2 font-roboto text-1xl font-bold text-blue-500">
                  Nomer Telepon
                  <input type="password" name="confirmPassword" className="block w-full border border-gray-300 rounded-md p-2" />
                </label>
                <label className="block mb-2 font-roboto text-1xl font-bold text-blue-500">
                  Email
                  <input type="email" name="email" className="block w-full border border-gray-300 rounded-md p-2" />
                </label>
                <label className="block mb-2 mt-10">
                  <input type="checkbox" name="agree" className="mr-2" />
                  Nama Toko
                </label>
                <label className="block mb-2 mt-10">
                  <input type="checkbox" name="agree" className="mr-2" />
                  Tanggal Lahir
                </label>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-32">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
            <div className="text-center">
              <span>Sudah punya akun?</span><span className="ml-2 font-roboto text-1xl font-bold text-blue-500">Login</span>
            </div>
          </div>
      </>
    );
  }
  