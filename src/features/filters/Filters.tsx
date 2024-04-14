import styled from "./Filters.module.css";
import { FiltersCustomCheckbox } from "./FiltersCustomCheckbox/FiltersCustomCheckbox";
import { FiltersInput } from "./FiltersInput/FiltersInput";
import { Button } from "../ui/Button/Button";
import { useMediaQuery } from "react-responsive";
import { Modal } from "../modal/Modal";
import { FiltersModal } from "./FiltersModal/FiltersModal";
import { useModal } from "../modal/ModalContext/useModal";

export const Filters = () => {
  const { isOpen, open } = useModal();
  const isMobile = useMediaQuery({
    query: "(max-width:48rem)",
  });
  const checked = false;
  return (
    <>
      <form className={styled.filters} onSubmit={(e) => e.preventDefault()}>
        <FiltersInput
          id="title"
          placeholder="Filter by title..."
          icon="search"
        />
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
            <Button aria-label="Open filters" onClick={open}>
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
      {isOpen && (
        <Modal>
          <FiltersModal />
        </Modal>
      )}
    </>
  );
};
