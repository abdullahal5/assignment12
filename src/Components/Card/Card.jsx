import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeletone from '../Skeleton/Skeletone';
const Card = ({ items, filteredData , loading}) => {
  
  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-3 justify-center gap-5">
        {loading ? (
          <div className='grid grid-cols-3 justify-center'>
            <Skeletone></Skeletone>
            <Skeletone></Skeletone>
            <Skeletone></Skeletone>
          </div>
        ) : (
          filteredData.map((val) => (
            <div key={val._id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{val.name}</h2>
                <div className="flex justify-between">
                  <p>Title: {val.title}</p>
                  <p>category: {val.category}</p>
                </div>
                <p>Salary Range:{val.salary}</p>
                <p>Job applicants Number: {val.applicants}</p>
                <div className="">
                  <p>Application Deadline: {val.deadline}</p>
                  <p>Posting Date: {val.date}</p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Card;