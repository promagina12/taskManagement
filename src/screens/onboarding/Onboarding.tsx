import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import { placeholder } from "../../assets";
import Pagination from "../../components/Pagination";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { navigate } from "../../navigation/NavigationService";
import { ROUTES } from "../../navigation/Routes";

const Onboarding = () => {
  const { bottom } = useSafeAreaInsets();
  const scrollRef = useRef<SwiperFlatList>(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onNextPage = useCallback(() => {
    const isLast = selectedIndex === 2;

    if (isLast) {
      navigate(ROUTES.Login);
    } else {
      setSelectedIndex(selectedIndex + 1);
      scrollRef.current?.scrollToIndex?.({
        index: selectedIndex + 1,
        animated: true,
      });
    }
  }, [selectedIndex]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1 }}>
        <SwiperFlatList
          horizontal
          ref={scrollRef}
          disableGesture
          index={selectedIndex}
          style={{ width: responsiveWidth(100) }}
        >
          <FirstScreen />
          <SecondScreen />
          <ThirdScreen />
        </SwiperFlatList>
        <View
          style={{
            paddingHorizontal: 30,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 110,
          }}
        >
          <Pagination
            selected={selectedIndex}
            onPress={(e) => {
              setSelectedIndex(e);
              scrollRef.current?.scrollToIndex?.({
                index: e,
                animated: true,
              });
            }}
          />
          <Pressable style={styles.skipContainer}>
            <Text style={styles.skip}>Skip</Text>
          </Pressable>
          <Pressable
            style={{
              ...styles.nextContainer,
              bottom: bottom ? -bottom : 0,
            }}
            onPress={onNextPage}
          >
            <Image source={placeholder.onboardingNext} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  skip: {
    fontSize: 14,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  skipContainer: {
    position: "absolute",
    left: 30,
    bottom: 30,
  },
  nextContainer: {
    position: "absolute",
    right: 0,
  },
});
