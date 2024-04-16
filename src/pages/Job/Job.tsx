import { Global } from "../../layout/Global/Global";
import { Header } from "../../layout/Header/Header";
import { Main } from "../../layout/Main/Main";
import { JobDescription } from "../../features/jobs/Job/JobDescription/JobDescription";

export const Job = () => {
  return (
    <Global>
      <Header />
      <Main>
        <JobDescription />
      </Main>
    </Global>
  );
};
