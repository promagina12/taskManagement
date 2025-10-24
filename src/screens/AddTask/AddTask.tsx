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
import { useTaskData } from "../../providers/TaskDataProvider";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BOARD } from "../../utils";
import { TaskFormData } from "../../interface/task";
import Toast from "react-native-toast-message";
import { addTaskSchema } from "../../utils/schema";

const AddTask = () => {
  const { createTask } = useTaskData();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    defaultValues: {
      name: "",
      date: new Date(),
      start_time: new Date(),
      end_time: new Date(),
    },
    resolver: yupResolver(addTaskSchema),
  });

  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);

  const onCreateTask = async (data: TaskFormData) => {
    try {
      const newTask = await createTask(data);

      if (newTask) {
        Toast.show({
          type: "success",
          text1: "Sucess",
          text2: "Task has been created successfully",
        });

        goBack();
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const onSubmit = () => {
    if (errors.end_time) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: errors.end_time?.message,
      });
    }
    if (errors.name) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: errors.name?.message,
      });
    }
    if (errors.date) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: errors.date?.message,
      });
    }
    handleSubmit(onCreateTask)();
  };

  return (
    <Page
      headerType="NAVIGATION"
      title="Add Task"
      bottomComponent={() => (
        <View style={{ paddingVertical: 10, alignItems: "center" }}>
          <Button
            title="Save"
            containerStyle={{ width: 218 }}
            onPress={onSubmit}
          />
        </View>
      )}
    >
      <View style={{ flex: 1, gap: 30, marginTop: 30 }}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Task Name"
              placeholder="Enter task name"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="name"
        />
        <TeamMember />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Date"
              placeholder={moment().format("MMMM DD, YYYY")}
              type="date"
              onDateChange={(event, date) => {
                onChange(date);
              }}
              value={moment(value).format("MMMM DD, YYYY")}
              dateValue={value}
            />
          )}
          name="date"
        />
        <View
          style={{
            ...Style.containerRow,
            gap: 31,
          }}
        >
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Start Time"
                placeholder={moment().format("hh:mm A")}
                containerStyle={{
                  flex: 1,
                }}
                type="time"
                onDateChange={(event, date) => {
                  onChange(date);
                }}
                value={moment(value).format("hh:mm A")}
                dateValue={value}
              />
            )}
            name="start_time"
          />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="End Time"
                placeholder={moment().format("hh:mm A")}
                containerStyle={{
                  flex: 1,
                }}
                type="time"
                onDateChange={(event, date) => {
                  onChange(date);
                }}
                value={moment(value).format("hh:mm A")}
                dateValue={value}
              />
            )}
            name="end_time"
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
