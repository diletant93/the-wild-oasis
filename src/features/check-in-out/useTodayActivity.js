import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

function useTodayActivity() {
  const { isLoading, data:activities
   } = useQuery({
    queryKey: ["today-activity"],
    queryFn: getStaysTodayActivity
  });
  return { isLoading, activities}; 
}

export { useTodayActivity };