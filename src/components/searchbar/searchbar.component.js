import React, { useState, useContext } from "react";
import { Searchbar, SearchBarContainer } from "./searchbar.style";
//context
import { LocationContext } from "../../services/location/location.context";

export const SearchBarComponent = () => {
  const {
    keyword,
    location,
    isLoading: isLoadingLocation,
    search,
  } = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onChangeSearchKeywordHandler = (input) => setSearchKeyword(input);
  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearchKeywordHandler}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        value={searchKeyword}
      />
    </SearchBarContainer>
  );
};
