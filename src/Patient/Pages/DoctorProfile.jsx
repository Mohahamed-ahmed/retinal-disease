import { useQuery } from "@tanstack/react-query";
import Profile from "../Components/doctor/Profile";
import doctorService from "../../services/doctor";

function DoctorProfile() {
  const { data: doctorData, isPending: pendingDoctorData } = useQuery({
    queryKey: ["doctor-profile"],
    queryFn: ({ signal }) => doctorService.getProfile({ signal }),
  });

  const { data: scheduleData, isPending: pendingScheduleData } = useQuery({
    queryKey: ["doctor-schedule"],
    queryFn: ({ signal }) => doctorService.getSchedule({ signal }),
  });

  return (
    <Profile
      doctorData={doctorData?.data}
      pendingDoctorData={pendingDoctorData}
      isPending={pendingDoctorData || pendingScheduleData}
      scheduleData={scheduleData?.data}
      pendingScheduleData={pendingScheduleData}
    ></Profile>
  );
}

export default DoctorProfile;
