import { BsFacebook, BsTwitter } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    const style = { color: "#FFFFF", fontSize: "2em" };
  return (
    <div>
      <footer className="bg-black p-10 text-neutral-content">
        <div className="flex justify-center items-center">
          <img
            className="w-24 "
            src="https://i.ibb.co/ZS4CdBG/370267382-3049849525148107-486017350057683538-n-removebg-preview.png"
            alt=""
          />
          <h1 className="text-2xl">CareerCanvas</h1>
        </div>
        <div className="flex justify-evenly">
          <div className="space-y-3">
            <h1>For contact information :</h1>
            <hr className="w-44" />
            <span className="block">phone no. - 01798***50*</span>
            <span>Email- abdullahalfahin183@gmail.com</span>
            <div>
              <h1>Address:</h1>
              <hr className="w-44" />
              1/2 tarabo, rupgonj, narayanganj
            </div>
          </div>
          <div className="">
            Explore Our social Links
            <hr className="w-44 mb-4" />
            <div className="flex gap-7">
              <BsFacebook style={style}></BsFacebook>
              <BsTwitter style={style}></BsTwitter>
              <BiLogoInstagramAlt style={style}></BiLogoInstagramAlt>
              <FaLinkedinIn style={style}></FaLinkedinIn>
            </div>
          </div>
        </div>
        <p className="text-center text-sm py-5">Copyright © 2023 - All right reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
