import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const UseMyJob = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["myjobs"],
    queryFn: async () => {
      const dd = await fetch(
        `http://https://b8a11-server-side-abdullahal5-33g7geoxz.vercel.app/myjobs?email1=${user?.email}`
      );
      return await dd.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default UseMyJob;
