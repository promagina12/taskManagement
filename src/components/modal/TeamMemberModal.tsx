import { View, Text } from "react-native";
import React from "react";
import ActionSheet, {
  FlatList,
  SheetManager,
} from "react-native-actions-sheet";
import SearchBar from "../SearchBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { responsiveHeight } from "react-native-responsive-dimensions";
import UserProfileCard from "../UserProfileCard";
import { useUserData } from "../../providers/UserDataProvider";

const TeamMemberModal = () => {
  const { users } = useUserData();
  const { bottom } = useSafeAreaInsets();

  return (
    <ActionSheet id="TeamMember" gestureEnabled>
      <View
        style={{
          paddingHorizontal: 24,
          marginTop: 20,
          gap: 30,
          paddingBottom: bottom,
        }}
      >
        <SearchBar />
        <View style={{ maxHeight: responsiveHeight(40) }}>
          <FlatList
            data={users}
            contentContainerStyle={{
              gap: 16,
              paddingBottom: bottom + 50,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <UserProfileCard
                image={item.image}
                name={item.name}
                onPress={() =>
                  SheetManager.hide("TeamMember", {
                    payload: item,
                  })
                }
              />
            )}
          />
        </View>
      </View>
    </ActionSheet>
  );
};

export default TeamMemberModal;
