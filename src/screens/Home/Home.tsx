import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ViewToken,
  Pressable,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import Page from "../../Layouts/Page";
import moment from "moment";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import TeamCard from "./components/TeamCard";
import { responsiveWidth } from "react-native-responsive-dimensions";
import ChevronRightSVG from "../../assets/AppIcon/chevronRight";
import Style from "../../styles/Style";
import ProgressCard from "./components/ProgressCard";

const Home = () => {
  const viewabilityConfig = useRef({
    minimumViewTime: 300, // Time in milliseconds before an item is considered viewable
    itemVisiblePercentThreshold: 50, // Percentage of the item that must be visible
  }).current;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

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

  return (
    <Page
      title={moment().format("dddd, DD")}
      scrollEnabled
      containerStyle={{ paddingHorizontal: 0 }}
      headerStyle={{ paddingHorizontal: 24 }}
    >
      <View style={{ flex: 1, gap: 30, paddingHorizontal: 24, paddingTop: 20 }}>
        <Text style={styles.title}>Let’s make a{"\n"}habits together 🙌</Text>
        <View style={{ width: responsiveWidth(100), left: -24 }}>
          <FlatList
            horizontal
            data={Array.from({ length: 5 })}
            renderItem={({ item, index }) => {
              if (Array.from({ length: 5 }).length - 1 === index) {
                return <View style={{ width: responsiveWidth(60) }} />;
              }

              return <TeamCard selected={selectedIndex === index} />;
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
        <View style={{ gap: 20 }}>
          <View style={Style.containerSpaceBetween}>
            <Text style={styles.inProgressTitle}>In Progress</Text>
            <Pressable>
              <ChevronRightSVG />
            </Pressable>
          </View>
          <View style={{ gap: 16 }}>
            {Array.from({ length: 3 }).map((_, index) => (
              <ProgressCard key={index} />
            ))}
          </View>
        </View>
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
