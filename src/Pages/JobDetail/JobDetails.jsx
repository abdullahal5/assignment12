import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            ji
        </div>
    );
};

export default JobDetails;