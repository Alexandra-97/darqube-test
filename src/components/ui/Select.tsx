import Select, {
  components,
  IndicatorProps,
  OptionTypeBase,
  Theme,
} from "react-select";
import styled from "styled-components";
import { ReactComponent as DropdownIcon } from "../../assets/icons/dropdown.svg";

const DropdownIndicator = (props: IndicatorProps<OptionTypeBase, false>) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownIcon />
    </components.DropdownIndicator>
  );
};

export const StyledSelect = () => {
  return (
    <CustomSelect
      defaultValue={{ value: 6, label: 6 }}
      options={[
        { value: 6, label: 6 },
        { value: 10, label: 10 },
      ]}
      classNamePrefix={"react-select"}
      dropdownIndicator={"s"}
      components={{ DropdownIndicator }}
      menuPlacement={"top"}
      theme={(theme: Theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "var(--lightestGrey)",
          primary25: "var(--lightGrey)",
          dangerLight: "var(--white)",
        },
      })}
    />
  );
};

const CustomSelect = styled(Select)`
  width: 59px;
  .react-select__control {
    height: 30px;
    min-height: 30px;
    font-size: 12px;
    background-color: var(--darkGrey);
    border: none;
    outline: none;
    &:hover {
      cursor: pointer;
    }
    &:focus-within {
      border: none;
      box-shadow: none;
    }
    .react-select__single-value {
      color: var(--lightestGrey);
    }
    .react-select__indicators {
      height: 30px;
      .react-select__indicator-separator {
        display: none;
      }
    }
  }
  .react-select__menu {
    font-size: 12px;
    box-shadow: none;
    color: var(--lightestGrey);
    background: var(--darkGrey);
    .react-select__menu-list {
      border-radius: 4px;
      padding: 0;
      .react-select__option {
        outline: none;
        &:hover {
          cursor: pointer;
          color: var(--darkGrey);
        }
        &:active {
          background: var(--red);
        }
      }
      .react-select__option--is-focused,
      .react-select__option--is-selected {
        color: var(--darkGrey);
      }
    }
  }
`;
