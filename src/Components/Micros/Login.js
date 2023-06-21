

export default function Login() {
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="flex-col">
        <div className="w-[542px] h-[405px] rounded-xl bg-white flex justify-center items-center shadow-xl flex-col gap-4">
          <label htmlFor="username" className="w-[395px]">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="text-gray-500 w-full focus:outline-none flex justify-center text-center h-[42px] text-[36px] placeholder:text-gray"
            />
          </label>
          <hr className="border-[4px] border-gray w-[395px] h-[4px]" />
          <label htmlFor="password" className="w-[395px]">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="text-gray-500 w-full focus:outline-none flex justify-center text-center h-[42px] text-[36px] placeholder:text-gray"
            />
          </label>
          <button
            type="submit"
            className="w-[395px] h-[60px] text-white bg-blue text-[28px] mt-5"
          >
            Login
          </button>
        </div>
        <span className="text-[24px] text-center flex justify-center mt-8 gap-2">
          Belum punya akun? <span className="text-blue font-bold">Daftar</span>
        </span>
      </div>
    </div>
    
    </>
  );
}
