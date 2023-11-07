import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
      <div>
        <Helmet>
          <title>CareerCanvas | Job Details</title>
        </Helmet>
        ji
      </div>
    );
};

export default JobDetails;