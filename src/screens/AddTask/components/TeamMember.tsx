import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../../styles/colors";
import { FONT_FAMILY } from "../../../styles/fonts";
import { placeholder } from "../../../assets";
import Style from "../../../styles/Style";
import AddSVG from "../../../assets/AppIcon/add";
import { SheetManager } from "react-native-actions-sheet";
import { IUser } from "../../../interface/users";
import { useUserData } from "../../../providers/UserDataProvider";
import ProfileSVG from "../../../assets/AppIcon/profile";
import { useTheme } from "../../../providers/ThemeProvider";

const TeamMember = () => {
  const { theme } = useTheme();
  const { members, setMembers } = useUserData();
  const [member, setMember] = useState<IUser | null>(null);

  useEffect(() => {
    if (member) {
      if (members.find((item) => item.id === member.id)) {
        return;
      }
      setMembers((prevMembers) => [...prevMembers, member]);
    }
  }, [member]);

  const onPressAdd = async () => {
    const payload = await SheetManager.show("TeamMember");
    setMember(payload);
  };

  return (
    <View style={{ gap: 12 }}>
      <Text style={styles.name}>Team Member</Text>
      <View
        style={{
          ...Style.containerRow,
          gap: 10,
        }}
      >
        {members.map((item, index) => (
          <View
            key={index}
            style={{
              gap: 6,
              ...Style.containerCenter,
            }}
          >
            {item?.image ? (
              <Image source={{ uri: item?.image }} style={styles.avatar} />
            ) : (
              <View
                style={{
                  ...styles.emptyProfile,
                  borderColor: theme.secondary,
                }}
              >
                <ProfileSVG size={30} color={theme.secondary} />
              </View>
            )}
            <Text
              style={{
                ...styles.name,
                color: theme.secondary,
              }}
            >
              {item?.name}
            </Text>
          </View>
        ))}
        <View
          style={{
            gap: 6,
          }}
        >
          <Pressable
            style={{
              ...styles.addButton,
              borderColor: theme.primary,
            }}
            onPress={onPressAdd}
          >
            <AddSVG size={24} color={theme.primary} />
          </Pressable>
          <Text
            style={{
              ...styles.name,
              color: theme.background,
            }}
          >
            Add
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TeamMember;

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    color: colors.gray2,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    ...Style.containerCenter,
    borderColor: colors.purple,
  },
  emptyProfile: {
    width: 40,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 100,
    ...Style.containerCenter,
    borderColor: colors.darkBlue,
  },
});
