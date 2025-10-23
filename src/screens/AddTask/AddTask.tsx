import { View } from "react-native";
import React, { useState } from "react";
import Page from "../../Layouts/Page";
import Input from "../../components/Input";
import TeamMember from "./components/TeamMember";
import moment from "moment";
import Style from "../../styles/Style";
import Badges from "../../components/Badges";
import Button from "../../components/Button";
import { goBack } from "../../navigation/NavigationService";

const BOARD = ["Urgent", "Running", "ongoing"];

const AddTask = () => {
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);

  return (
    <Page
      headerType="NAVIGATION"
      title="Add Task"
      bottomComponent={() => (
        <View style={{ paddingVertical: 10, alignItems: "center" }}>
          <Button
            title="Save"
            containerStyle={{ width: 218 }}
            onPress={goBack}
          />
        </View>
      )}
    >
      <View style={{ flex: 1, gap: 30, marginTop: 30 }}>
        <Input label="Task Name" placeholder="Enter task name" />
        <TeamMember />
        <Input label="Date" placeholder={moment().format("MMMM DD, YYYY")} />
        <View
          style={{
            ...Style.containerRow,
            gap: 31,
          }}
        >
          <Input
            label="Start Time"
            placeholder={moment().format("hh:mm A")}
            containerStyle={{
              flex: 1,
            }}
          />
          <Input
            label="End Time"
            placeholder={moment().format("hh:mm A")}
            containerStyle={{
              flex: 1,
            }}
          />
        </View>
        <Badges
          data={BOARD}
          label="Board"
          onPress={(e) => setSelectedBoard(e)}
          selected={selectedBoard}
        />
      </View>
    </Page>
  );
};

export default AddTask;
