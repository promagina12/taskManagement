import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import Page from "../../Layouts/Page";
import SearchBar from "../../components/SearchBar";
import Style from "../../styles/Style";
import { colors } from "../../styles/colors";
import ProjectsCard from "../Projects/components/ProjectsCard";

const Search = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("Task");

  return (
    <Page headerType="NAVIGATION" title="Search">
      <View style={{ flex: 1, paddingTop: 30, gap: 30 }}>
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search"
        />
        {searchText.length > 0 && (
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
            <ProjectsCard />
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
