import { Filters } from "../../features/filters/Filters";
import { Jobs } from "../../features/jobs/Jobs";
import { Wrapper } from "../../features/ui/Wrapper/Wrapper";
import { Global } from "../../layout/Global/Global";
import { Header } from "../../layout/Header/Header";
import { Main } from "../../layout/Main/Main";

export const Home = () => {
  return (
    <Global>
      <Header />
      <Main>
        <Wrapper>
          <Filters />
          <Jobs />
        </Wrapper>
      </Main>
    </Global>
  );
};
