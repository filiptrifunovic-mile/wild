/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams, useSearchParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    data: booking,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { booking, error, isLoading };
}
