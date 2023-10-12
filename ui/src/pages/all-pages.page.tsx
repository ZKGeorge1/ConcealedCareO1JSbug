import NewReport from "./index.page";
import NewRequest from "./new-request.page";
import Patients from "./patients.page";
import { useState } from "react";


interface RequirementsFormInput {
  patientId: string;
  verifyTime: string;
  minBloodPressure: string;
  maxBloodPressure: string;
  allowConditionA: boolean | string;
  allowConditionB: boolean | string;
  allowConditionC: boolean | string;
}

function AllPages() {
  const [accommodationProofRequests, setAccommodationProofRequests] = useState<RequirementsFormInput[]>([]);

  const submitRequest = (data: RequirementsFormInput) => {
    setAccommodationProofRequests([...accommodationProofRequests, data]);
  };

  return (
    <div>
      <NewReport />
      <NewRequest submitRequest={submitRequest} />
      <Patients />
    </div>
  );
}

export default AllPages;
