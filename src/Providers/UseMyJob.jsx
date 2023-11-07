import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const UseMyJob = () => {
    const {user} = useContext(AuthContext)
    const { data, isLoading, isFetching , refetch} = useQuery({
      queryKey: ["myjobs"],
      queryFn: async () => {
        const dd = await fetch(
          `http://localhost:5000/myjobs?email1=${user?.email}`
        );
        return await dd.json();
      },
    });
    return { data, isLoading, isFetching , refetch}
};

export default UseMyJob;