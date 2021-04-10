import { InputHTMLAttributes, ChangeEvent, useState, useEffect } from "react";
import styled from "styled-components";
import searchIcon from "../../assets/icons/search.svg";
import { useDebounce } from "../../core/hooks/useDebounce";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../core/redux/store";
import { newsActions } from "../../modules/news/newsSlice";

export const Search = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce({ value });

  useEffect(() => {
    dispatch(newsActions.search(debouncedValue));
  }, [dispatch, debouncedValue]);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearchWrapper
      placeholder={"Search"}
      value={value}
      onChange={handleValueChange}
      {...props}
    />
  );
};

const SearchWrapper = styled.input`
  width: 162px;
  height: 30px;
  color: var(--white);
  font-size: 12px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 10px 10px 10px 30px;
  background: var(--darkGrey) url(${searchIcon}) no-repeat left 10px center;
  &::placeholder {
    color: var(--lightGrey);
  }
`;
