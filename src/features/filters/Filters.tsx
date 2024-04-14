import styled from "./Filters.module.css";
import { FiltersCustomCheckbox } from "./FiltersCustomCheckbox/FiltersCustomCheckbox";
import { FiltersInputContainer } from "./FiltersInputContainer/FiltersInputContainer";
import { Button } from "../ui/Button/Button";
import { useMediaQuery } from "react-responsive";
import { Modal } from "../modal/Modal";
import { FiltersModal } from "./FiltersModal/FiltersModal";
import { useModal } from "../modal/ModalContext/useModal";
import { useForm } from "react-hook-form";
import { FiltersSchema, FiltersSchemaType } from "./FiltersSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/Input/Input";
import { useFiltersQuery } from "./useFiltersQuery";

export const Filters = () => {
  const { isOpen, open } = useModal();
  const [params] = useFiltersQuery();
  const isMobile = useMediaQuery({
    query: "(max-width:48rem)",
  });

  const { register, handleSubmit, watch } = useForm<FiltersSchemaType>({
    defaultValues: {
      ...params,
    },
    resolver: zodResolver(FiltersSchema),
  });

  const submitHandler = (data: FiltersSchemaType) => {
    console.log(data);
  };

  const isCheckboxChecked = watch("fullTime");

  return (
    <>
      <form className={styled.filters} onSubmit={handleSubmit(submitHandler)}>
        <FiltersInputContainer id="title" icon="search">
          <Input
            id="title"
            placeholder="Filter by title..."
            {...register("title")}
          />
        </FiltersInputContainer>

        {!isMobile ? (
          <>
            <FiltersInputContainer id="location" icon="location">
              <Input
                {...register("location")}
                id="location"
                placeholder="Filter by location..."
              />
            </FiltersInputContainer>
            <div className={styled.filters__item}>
              <FiltersCustomCheckbox
                checked={isCheckboxChecked}
                {...register("fullTime")}
              />
            </div>
          </>
        ) : (
          <div className={styled.filters__item}>
            <Button aria-label="Open filters" onClick={open}>
              <img src="./assets/mobile/icon-filter.svg" alt="" />
            </Button>
          </div>
        )}

        <Button modifier="form" type="submit">
          {isMobile ? (
            <img src="./assets/mobile/icon-search.svg" alt="" />
          ) : (
            "Search"
          )}
        </Button>
      </form>
      {isOpen && (
        <Modal>
          <FiltersModal checked={isCheckboxChecked} register={register} />
        </Modal>
      )}
    </>
  );
};
