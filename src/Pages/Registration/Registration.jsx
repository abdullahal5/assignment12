import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const [err, setErr] = useState('')
  const {createUser} = useContext(AuthContext)
  const handleRegister = e =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(name, email, password, photo)


if (password.length < 6) {
  setErr("Your password must be 6 character or longer");
  return;
} else if (!/[A_Z]/.test(password)) {
  setErr("You have to give atleast one captial letter");
  return;
} else if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
  setErr("There need atleast one special character");
  return;
}

    setErr('')
    createUser (email, password)
    .then(res => {
      console.log(res.user)
      Swal.fire({
        title: "Good job!",
        text: "You successfylly Registered",
        icon: "success",
      });
      e.target.reset()
      updateProfile(res.user, {
        displayName: name,
        photoURL: photo
      })
      .then(() =>{
        console.log('updated')
      })
      .catch(err =>{
        console.log(err)
      })
    })
    .catch(err =>{
       console.log(err)
       setErr(err.message)
    })
  }
    return (
      <div>
        <div className="flex justify-center items-center h-[100vh]">
          <div className="flex justify-center flex-row-reverse items-center">
            <form onSubmit={handleRegister}>
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
                <p className="py-3">{err && <p className="text-red-600">{err}</p>}</p>
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