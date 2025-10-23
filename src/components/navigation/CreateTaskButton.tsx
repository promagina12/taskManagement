import { View, Pressable, StyleSheet } from "react-native";
import React, { useRef } from "react";
import AddSVG from "../../assets/AppIcon/add";
import { colors } from "../../styles/colors";
import Style from "../../styles/Style";
import DropShadow from "react-native-drop-shadow";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import TaskButton from "./TaskButton";
import AddSquareSVG from "../../assets/AppIcon/addSquare";
import UsersSVG from "../../assets/AppIcon/users";
import ClockSVG from "../../assets/AppIcon/clock";
import CloseSVG from "../../assets/AppIcon/close";
import { navigate } from "../../navigation/NavigationService";
import { ROUTES } from "../../navigation/Routes";
import PenSquareSVG from "../../assets/AppIcon/penSquare";

const TASK_BUTTONS = [
  {
    label: "Create Task",
    icon: <PenSquareSVG />,
    action: () => navigate(ROUTES.AddTask),
  },
  {
    label: "Create Project",
    icon: <AddSquareSVG />,
    action: () => {},
  },
  {
    label: "Create Team",
    icon: <UsersSVG />,
    action: () => navigate(ROUTES.CreateTeam),
  },
  {
    label: "Create Event",
    icon: <ClockSVG />,
    action: () => {},
  },
];

const CreateTaskButton = () => {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  return (
    <>
      <Pressable onPress={() => actionSheetRef.current?.show()}>
        <DropShadow style={styles.dropShadow}>
          <View style={styles.purpleButtonContainer}>
            <AddSVG />
          </View>
        </DropShadow>
      </Pressable>

      <ActionSheet
        ref={actionSheetRef}
        gestureEnabled={true}
        indicatorStyle={styles.indicatorStyle}
      >
        <View style={{ paddingHorizontal: 24, paddingVertical: 30, gap: 16 }}>
          {TASK_BUTTONS.map((button, index) => (
            <TaskButton
              key={index}
              {...button}
              action={() => {
                actionSheetRef.current?.hide();
                button.action?.();
              }}
            />
          ))}
          <Pressable
            onPress={() => actionSheetRef.current?.hide()}
            style={{ alignSelf: "center" }}
          >
            <DropShadow style={styles.dropShadow}>
              <View
                style={{
                  ...styles.purpleButtonContainer,
                  borderWidth: 1,
                  borderColor: colors.lightBlue,
                  width: 42,
                  height: 42,
                }}
              >
                <CloseSVG />
              </View>
            </DropShadow>
          </Pressable>
        </View>
      </ActionSheet>
    </>
  );
};

export default CreateTaskButton;

const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: "#00000025",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  purpleButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: colors.purple,
    ...Style.containerCenter,
  },
  indicatorStyle: {
    backgroundColor: colors.lightBlue,
    width: 42,
    height: 4,
    marginTop: 17,
  },
});
