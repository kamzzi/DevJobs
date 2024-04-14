import { Button } from "../../ui/Button/Button";
import { Input } from "../../ui/Input/Input";
import { FiltersCustomCheckbox } from "../FiltersCustomCheckbox/FiltersCustomCheckbox";
import { FiltersInputContainer } from "../FiltersInputContainer/FiltersInputContainer";

import styled from "./FiltersModal.module.css";

export const FiltersModal = () => {
  return (
    <div className={styled.container}>
      <FiltersInputContainer id="location" icon="location" modifier="modal">
        <Input id="location" placeholder="Filter by location..." />
      </FiltersInputContainer>

      <div className={styled.filters__item}>
        <FiltersCustomCheckbox checked={false} />
      </div>
      <Button modifier="form">Search</Button>
    </div>
  );
};
