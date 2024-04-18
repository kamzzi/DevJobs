import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { Button } from "../../ui/Button/Button";
import { Input } from "../../ui/Input/Input";
import { FiltersCustomCheckbox } from "../FiltersCustomCheckbox/FiltersCustomCheckbox";
import { FiltersInputContainer } from "../FiltersInputContainer/FiltersInputContainer";

import styled from "./FiltersModal.module.css";
import { FiltersSchemaType } from "../FiltersSchema";
import { useModal } from "../../modal/ModalContext/useModal";

type FiltersModalProps = {
  checked: boolean;
  register: UseFormRegister<FiltersSchemaType>;
  handleSubmit: UseFormHandleSubmit<FiltersSchemaType>;
  submitHandler: (data: FiltersSchemaType) => void;
};

export const FiltersModal = ({
  checked,
  register,
  handleSubmit,
  submitHandler,
}: FiltersModalProps) => {
  const { close } = useModal();

  const submit = (data: FiltersSchemaType) => {
    submitHandler(data);
    close();
  };

  return (
    <form className={styled.container} onSubmit={handleSubmit(submit)}>
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
      <Button modifier="form" type="submit">
        Search
      </Button>
    </form>
  );
};
