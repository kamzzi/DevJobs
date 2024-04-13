import styled from "./Filters.module.css";
import { FiltersCustomCheckbox } from "./FiltersCustomCheckbox/FiltersCustomCheckbox";
import { FiltersInput } from "./FiltersInput/FiltersInput";
import { Button } from "../ui/Button/Button";
import { useMediaQuery } from "react-responsive";

export const Filters = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:48rem)",
  });
  const checked = false;
  return (
    <form className={styled.filters}>
      <FiltersInput id="title" placeholder="Filter by title..." icon="search" />
      {!isMobile ? (
        <>
          <FiltersInput
            id="location"
            placeholder="Filter by location..."
            icon="location"
          />
          <div className={styled.filters__item}>
            <FiltersCustomCheckbox checked={checked} />
          </div>
        </>
      ) : (
        <div className={styled.filters__item}>
          <Button aria-title="Open filters">
            <img src="./assets/mobile/icon-filter.svg" alt="" />
          </Button>
        </div>
      )}
      <Button modifier="form">
        {isMobile ? (
          <img src="./assets/mobile/icon-search.svg" alt="" />
        ) : (
          "Search"
        )}
      </Button>
    </form>
  );
};
