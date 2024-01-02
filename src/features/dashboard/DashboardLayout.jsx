import styled from "styled-components";
import { useResentBookings } from "./useResentBookings";
import Spinner from "../../ui/Spinner";
import { useResentStays } from "./useResentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useResentBookings();
  const {
    confirmedStays,
    isLoading: isLoading1,
    stays,
    numDays,
  } = useResentStays();

  const { cabins, isLoading: isLoading2 } = useCabins();

  if (isLoading || isLoading1 || isLoading2) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>List of activity</div>
      <div>Chart stay duration</div>
      <div>Chart stay duration</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
