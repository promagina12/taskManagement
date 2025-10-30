import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ViewToken,
  Pressable,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Page from "../../Layouts/Page";
import moment from "moment";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import TeamCard from "./components/TeamCard";
import { responsiveWidth } from "react-native-responsive-dimensions";
import ChevronRightSVG from "../../assets/AppIcon/chevronRight";
import Style from "../../styles/Style";
import ProgressCard from "./components/ProgressCard";
import { navigate } from "../../navigation/NavigationService";
import { ROUTES } from "../../navigation/Routes";
import { useTaskData } from "../../providers/TaskDataProvider";
import { ITask } from "../../interface/task";
import { isEmpty } from "lodash";
import { useTeamData } from "../../providers/TeamDataProvider";
import { useTheme } from "../../providers/ThemeProvider";

const Home = () => {
  const { theme, isDark } = useTheme();
  const flatlistRef = useRef<FlatList>(null);
  const viewabilityConfig = useRef({
    minimumViewTime: 300,
    itemVisiblePercentThreshold: 50,
  }).current;
  const { getUserTasks, tasks, setTasks } = useTaskData();
  const { getUserTeams, setTeams } = useTeamData();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [newTask, setNewTask] = useState<ITask[]>([]);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const snappedIndex = viewableItems[0].index;
        setSelectedIndex(snappedIndex);
      }
    },
    []
  );

  const snapInterval = responsiveWidth(60) + 20;

  useEffect(() => {
    getUserTasks((tasks) => {
      setTasks(tasks);
      setNewTask([...tasks, { id: "Empty" }]);
    });
    getUserTeams((teams) => {
      setTeams(teams);
    });
  }, []);

  return (
    <Page
      title={moment().format("dddd, DD")}
      scrollEnabled
      containerStyle={{ paddingHorizontal: 0 }}
      headerStyle={{ paddingHorizontal: 24 }}
      onPressTitle={() => navigate(ROUTES.Calendar)}
    >
      <View style={{ flex: 1, gap: 30, paddingHorizontal: 24, paddingTop: 20 }}>
        <Text
          style={{
            ...styles.title,
            color: theme.secondary,
          }}
        >
          Let’s make a{"\n"}habits together 🙌
        </Text>
        <View style={{ width: responsiveWidth(100), left: -24 }}>
          <FlatList
            ref={flatlistRef}
            horizontal
            data={newTask}
            renderItem={({ item, index }) => {
              if (item.id === "Empty") {
                return <View style={{ width: responsiveWidth(30) }} />;
              }

              return (
                <TeamCard
                  selected={selectedIndex === index}
                  name={item.name}
                  membersInfo={item.membersInfo}
                  onPress={() => {
                    if (selectedIndex === index) {
                      navigate(ROUTES.AddTask, {
                        actions: "edit",
                        itemId: item.id,
                        data: item,
                      });
                    } else {
                      flatlistRef.current?.scrollToIndex({
                        animated: true,
                        index,
                      });
                    }
                  }}
                />
              );
            }}
            contentContainerStyle={{ gap: 16, paddingHorizontal: 24 }}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            decelerationRate={"fast"}
            snapToInterval={snapInterval}
            viewabilityConfig={viewabilityConfig}
            onViewableItemsChanged={onViewableItemsChanged}
          />
        </View>
        {!isEmpty(tasks) && (
          <View style={{ gap: 20 }}>
            <View style={Style.containerSpaceBetween}>
              <Text
                style={{
                  ...styles.inProgressTitle,
                  color: theme.secondary,
                }}
              >
                In Progress
              </Text>
              <Pressable onPress={() => navigate(ROUTES.TaskStatus)}>
                <ChevronRightSVG
                  color={isDark ? colors.white : colors.purple}
                />
              </Pressable>
            </View>
            <View style={{ gap: 16 }}>
              {tasks.map((item, index) => (
                <ProgressCard
                  key={index}
                  title={item.name}
                  time={moment(item.start_time).fromNow()}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
  },
  inProgressTitle: {
    fontSize: 18,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
  },
});
