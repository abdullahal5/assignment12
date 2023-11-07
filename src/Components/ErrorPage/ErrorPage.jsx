import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <div>
          <h1 className="text-3xl font-semibold text-center">
            Something went <span className="text-[#00B0FF]">wrong</span> please
            try again
          </h1>
          <img
            src="https://i.ibb.co/rcvtbXM/undraw-Page-not-found-re-e9o6.png"
            alt=""
          />
          <div className="text-center">
            <Link to="/">
              <button className="bg-[#00B0FF] px-4 py-2 text-center font-bold text-white rounded-xl items-center flex justify-center mx-auto gap-5">
                <AiOutlineRollback className="inline"></AiOutlineRollback>
                <span className="items-center inline">Back To Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;