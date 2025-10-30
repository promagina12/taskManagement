import { View, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import Page from "../../Layouts/Page";
import Style from "../../styles/Style";
import { colors } from "../../styles/colors";
import AddSVG from "../../assets/AppIcon/add";
import SearchBar from "../../components/SearchBar";
import GridSVG from "../../assets/AppIcon/grid";
import FilterButton from "./components/FilterButton";
import ProjectsCard from "./components/ProjectsCard";
import { navigate } from "../../navigation/NavigationService";
import { ROUTES } from "../../navigation/Routes";
import { useTaskData } from "../../providers/TaskDataProvider";
import { useTheme } from "../../providers/ThemeProvider";

const FILTER = ["Favourites", "Recents", "All"];

const Projects = () => {
  const { tasks } = useTaskData();
  const { theme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState<string>(FILTER[0]);

  return (
    <Page
      headerType="NAVIGATION"
      title="Projects"
      rightComponent={() => (
        <Pressable
          style={{
            ...styles.addContainer,
            borderColor: theme.borderColor,
          }}
        >
          <AddSVG color={theme.secondary} size={20} />
        </Pressable>
      )}
      scrollEnabled
    >
      <View style={{ flex: 1, paddingTop: 20, gap: 30 }}>
        <SearchBar
          placeholder="Search"
          onPress={() => navigate(ROUTES.Search)}
        />
        <View style={Style.containerSpaceBetween}>
          <View style={{ ...Style.containerRow, gap: 16 }}>
            {FILTER.map((item, index) => (
              <FilterButton
                key={index}
                label={item}
                onPress={() => setSelectedFilter(item)}
                selected={selectedFilter === item}
              />
            ))}
          </View>
          <Pressable>
            <GridSVG size={24} color={colors.gray2} />
          </Pressable>
        </View>
        <View style={{ gap: 30 }}>
          {tasks &&
            tasks.map((item, index) => (
              <ProjectsCard key={index} title={item.name} />
            ))}
        </View>
      </View>
    </Page>
  );
};

export default Projects;

const styles = StyleSheet.create({
  addContainer: {
    width: 42,
    height: 42,
    borderRadius: 100,
    borderWidth: 1,
    ...Style.containerCenter,
    borderColor: colors.lightBlue,
  },
});
