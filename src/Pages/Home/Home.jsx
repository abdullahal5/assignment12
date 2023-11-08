import { AiOutlineSearch } from "react-icons/ai";
import JobData from "../../Components/Jobdata/JobData";
import Footer from "../../Components/Footer/Footer";
import Service from "../../Components/Service/Service";
import { Helmet } from "react-helmet-async";
const Home = () => {
        const style = { color: "#00B0FF", fontSize: "1.5em" };

  return (
    <div>
      <Helmet>
        <title>CareerCanvas | Home</title>
      </Helmet>
      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-10">
        <div className="space-y-4">
          <h1 className="lg:font-semibold md:font-semibold text-center lg:text-left md:text-left text-xl">
            <span className="text-2xl ">Discover</span> <br />
            <span className="text-3xl text-[#00B0FF]">Your Next Adventure</span>
            , <br />
            <span className="text-4xl">Join Our Job Search Journey</span>
          </h1>
          <hr className="border-[#00B0FF] lg:w-auto md:w-auto w-60 mx-auto" />
          <p className="italic lg:text-left md:text-left text-center">
            Discover Your Dream Career at CareerCanvas. <br /> We connect talent
            with opportunities, <br /> providing tailored job searches to help
            you achieve <br />
            professional success. Your future starts here.
          </p>
          {/* <hr className="border-[#00B0FF]" /> */}
          <div className="relative">
            <input
              name="search"
              className="lg:px-24 pl-14 mb-5 py-2 border border-[#00B0FF]"
              type="text"
              placeholder="Search here"
            />
            <button className="bg-[#00B0FF] ml-5 py-[9px] px-4 text-white font-bold">
              Search
            </button>
            <AiOutlineSearch
              style={style}
              className="absolute top-2 left-7"
            ></AiOutlineSearch>
          </div>
        </div>
        <div>
          <img 
            src="https://i.ibb.co/Hgy8WFv/undraw-Job-hunt-re-q203.png"
            alt=""
          />
        </div>
      </div>
      <JobData></JobData>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Home;
