const Login = () => {
    return (
      <div>
        <form>
          <h1 className="text-5xl">Login</h1>
          <div>
            <input
              className="px-24 mb-5 py-2 border border-[#00B0FF]"
              type="email"
              placeholder="email address"
            />
          </div>
          <div>
            <input
              className="px-24 py-2 mb-5 border border-[#00B0FF]"
              type="password"
              placeholder="password"
            />
          </div>
          <div>
            <button className="px-[167px] py-2 border bg-[#00B0FF] text-white font-bold">Login</button>
          </div>
        </form>
      </div>
    );
};

export default Login;