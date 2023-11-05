import { Link } from "react-router-dom";

const Registration = () => {
    return (
      <div>
        <div className="flex justify-center items-center h-[100vh]">
          <div className="flex justify-center flex-row-reverse items-center">
            <form>
              <h1 className="text-4xl text-center mb-4 font-semibold">
                Register
              </h1>
              <p className="text-sm italic text-center">
                Join our community and embark on a journey of discovery. <br />
                Register now to unlock exclusive content, <br /> connect with
                like-minded individuals, <br />
                and be part of our family
              </p>

              <hr className="border-t-1 border-black mx-2 my-4" />
              <div>
                <input
                  name="name"
                  className="px-24 py-2 mb-5 border border-[#00B0FF]"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  name="email"
                  className="px-24 mb-5 py-2 border border-[#00B0FF]"
                  type="email"
                  placeholder="email address"
                />
              </div>
              <div>
                <input
                  name="password"
                  className="px-24 py-2 mb-5 border border-[#00B0FF]"
                  type="password"
                  placeholder="password"
                />
                <div>
                  <input
                    name="photo"
                    className="px-24 py-2 mb-5 border border-[#00B0FF]"
                    type="text"
                    placeholder="photo URL"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-[138px] py-2 border bg-[#00B0FF] text-white font-bold flex items-center"
                >
                  Register Now
                </button>
                <p className="my-3">
                  Already have an account?
                  <Link to="/login">
                    <span className="text-[#00B0FF] pl-5 underline">
                      Please Login
                    </span>
                  </Link>
                </p>
              </div>
            </form>
            <div>
              <img src="https://i.ibb.co/4KxnRcY/undraw-Sign-up-n6im.png" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;