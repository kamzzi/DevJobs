import { Button } from "../ui/Button/Button";
import styled from "./Filters.module.css";
import { FiltersCustomCheckbox } from "./FiltersCustomCheckbox/FiltersCustomCheckbox";
import { FiltersInput } from "./FiltersInput/FiltersInput";

export const Filters = () => {
  const checked = false;
  return (
    <form className={styled.filters}>
      <FiltersInput
        id="title"
        placeholder="Filter by title, companies"
        icon="search"
      />
      <FiltersInput
        id="location"
        placeholder="Filter by location..."
        icon="location"
      />
      <div className={styled.filters__item}>
        <FiltersCustomCheckbox checked={checked} />
      </div>
      <Button modifier="form">Search</Button>
    </form>
  );
};
