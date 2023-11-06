import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Skeletone = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <Skeleton />
            </h2>
            <div className="flex justify-between">
              <p>
                <Skeleton />
              </p>
              <p>
                <Skeleton />
              </p>
            </div>
            <p>
              <Skeleton />
            </p>
            <p>
              <Skeleton />
            </p>
            <div className="">
              <p>
                <Skeleton />
              </p>
              <p>
                <Skeleton />
              </p>
            </div>
            <div className="card-actions justify-end">
              <Skeleton />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <Skeleton />
            </h2>
            <div className="flex justify-between">
              <p>
                <Skeleton />
              </p>
              <p>
                <Skeleton />
              </p>
            </div>
            <p>
              <Skeleton />
            </p>
            <p>
              <Skeleton />
            </p>
            <div className="">
              <p>
                <Skeleton />
              </p>
              <p>
                <Skeleton />
              </p>
            </div>
            <div className="card-actions justify-end">
              <Skeleton />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <Skeleton />
            </h2>
            <div className="flex justify-between">
              <p>
                <Skeleton />
              </p>
              <p>
                <Skeleton />
              </p>
            </div>
            <p>
              <Skeleton />
            </p>
            <p>
              <Skeleton />
            </p>
            <div className="">
              <p>
                <Skeleton />
              </p>
              <p>
                <Skeleton />
              </p>
            </div>
            <div className="card-actions justify-end">
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeletone;
