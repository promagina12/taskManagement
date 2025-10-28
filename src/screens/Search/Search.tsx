import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Page from "../../Layouts/Page";
import SearchBar from "../../components/SearchBar";
import Style from "../../styles/Style";
import { colors } from "../../styles/colors";
import ProjectsCard from "../Projects/components/ProjectsCard";
import { useTaskData } from "../../providers/TaskDataProvider";
import debounce from "lodash/debounce";
import { ITask } from "../../interface/task";

const Search = () => {
  const { searchTaskbyName } = useTaskData();
  const [searchText, setSearchText] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("Task");
  const [searchResult, setSearchResult] = useState<ITask[]>([]);

  const onSearching = useCallback(async (value: string) => {
    setSearchText(value);
    onFetchSearch(value);
  }, []);

  const onFetchSearch = async (value: string) => {
    console.log("value: ", value);
    console.log("searchText: ", searchText);

    if (value.length > 0) {
      const response = await searchTaskbyName(value);
      console.log("response: ", response);
      setSearchResult(response!);
    } else {
      setSearchResult([]);
    }
  };

  const debounceSearchResults = useCallback(() => {
    debounce(onFetchSearch, 600);
  }, []);

  useEffect(() => {
    debounceSearchResults();
  }, [searchText]);

  return (
    <Page headerType="NAVIGATION" title="Search">
      <View style={{ flex: 1, paddingTop: 30, gap: 30 }}>
        <SearchBar
          value={searchText}
          onChangeText={onSearching}
          placeholder="Search"
        />
        {searchResult && (
          <>
            <View style={{ ...Style.containerRow, gap: 20 }}>
              {["Task", "File"].map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    ...styles.filterButtonContainer,
                    borderColor:
                      selectedFilter === item ? colors.purple : "transparent",
                  }}
                  onPress={() => setSelectedFilter(item)}
                >
                  <Text>{item}</Text>
                </Pressable>
              ))}
            </View>
            {searchResult.length > 0 &&
              searchResult.map((item, index) => (
                <ProjectsCard title={item.name} key={index} />
              ))}
          </>
        )}
      </View>
    </Page>
  );
};

export default Search;

const styles = StyleSheet.create({
  filterButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 8,
  },
});
