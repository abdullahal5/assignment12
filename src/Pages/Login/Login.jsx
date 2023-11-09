import { useContext, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
const Login = () => {
  const { signInUser, auth } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const provider = new GoogleAuthProvider();
  const style = { color: "#00B0FF", fontSize: "1.5em" };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    signInUser(email, password).then((res) => {
      e.target.reset();
      console.log(res);
      Swal.fire({
        title: "Good job!",
        text: "You successfylly logged in",
        icon: "success",
      });
      // jwt fetch
      axios
        .post("https://b8a11-server-side-abdullahal5.vercel.app/jwt", email, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
        });
    });
    setErr("");
  };
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Good job!",
          text: "You successfylly logged in",
          icon: "success",
        });
        axios
          .post(
            "https://b8a11-server-side-abdullahal5.vercel.app/jwt",
            result.user.email,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center gap-10 items-center h-[100vh]">
      <form onSubmit={handleLogin}>
        <h1 className="text-4xl text-center mb-4 font-semibold">Login</h1>
        <p className="text-sm italic text-center">
          Unlock a world of possibilities with a single click
        </p>
        <hr className="border-t-1 border-black mx-2 my-4" />
        <div className="relative">
          <input
            name="email"
            className="px-24 mb-5 py-2 border border-[#00B0FF]"
            type="email"
            placeholder="email address"
          />
          <AiOutlineMail
            style={style}
            className=" absolute top-2 left-5"
          ></AiOutlineMail>
        </div>
        <div className="relative">
          <input
            name="password"
            className="px-24 py-2 mb-5 border border-[#00B0FF]"
            type="password"
            placeholder="password"
          />
          <BiLock style={style} className=" absolute top-2 left-5"></BiLock>
        </div>
        <div className="mb-5">
          <p className="py-3">{err && <p className="text-red-600">{err}</p>}</p>

          <button
            type="submit"
            className="px-[167px] block py-2 border bg-[#00B0FF] text-white font-bold"
          >
            Login
          </button>
        </div>
        <p className="my-3 text-center">or login with </p>
        <div>
          <button
            onClick={handleGoogle}
            type="submit"
            className="px-[120px] py-2 border bg-white text-[#00B0FF] font-bold flex items-center"
          >
            <BsGoogle className="inline" style={style}></BsGoogle>
            <span className="inline pl-3">Google Login</span>
          </button>
        </div>
        <p className="py-3">
          Don't have an account?
          <Link to="/registration">
            <span className="text-[#00B0FF] pl-4 underline ">
              Please Register
            </span>
          </Link>
        </p>
      </form>
      <div>
        <img src="https://i.ibb.co/4s79mRC/undraw-login-re-4vu2.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
