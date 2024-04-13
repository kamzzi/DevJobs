import { Button } from "../../ui/Button/Button";
import { FiltersCustomCheckbox } from "../FiltersCustomCheckbox/FiltersCustomCheckbox";
import { FiltersInput } from "../FiltersInput/FiltersInput";

import styled from "./FiltersModal.module.css";

export const FiltersModal = () => {
  return (
    <div className={styled.container}>
      <FiltersInput
        id="location"
        placeholder="Filter by location..."
        icon="location"
        modifier="modal"
      />
      <div className={styled.filters__item}>
        <FiltersCustomCheckbox checked={false} />
      </div>
      <Button modifier="form">Search</Button>
    </div>
  );
};
