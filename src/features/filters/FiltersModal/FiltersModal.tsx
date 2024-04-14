import { UseFormRegister } from "react-hook-form";
import { Button } from "../../ui/Button/Button";
import { Input } from "../../ui/Input/Input";
import { FiltersCustomCheckbox } from "../FiltersCustomCheckbox/FiltersCustomCheckbox";
import { FiltersInputContainer } from "../FiltersInputContainer/FiltersInputContainer";

import styled from "./FiltersModal.module.css";

type FiltersModalProps = {
  checked: boolean;
  register: UseFormRegister<{
    location: string;
    title: string;
    fullTime: boolean;
  }>;
};

export const FiltersModal = ({ checked, register }: FiltersModalProps) => {
  return (
    <div className={styled.container}>
      <FiltersInputContainer id="location" icon="location" modifier="modal">
        <Input
          id="location"
          placeholder="Filter by location..."
          {...register("location")}
        />
      </FiltersInputContainer>

      <div className={styled.filters__item}>
        <FiltersCustomCheckbox checked={checked} {...register("fullTime")} />
      </div>
      <Button modifier="form">Search</Button>
    </div>
  );
};
