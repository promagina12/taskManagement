import { View } from "react-native";
import React, { useEffect, useState } from "react";
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
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../interface/stack";

type Props = RouteProp<RootStackParamList, "AddTask">;

const AddTask = () => {
  const params = useRoute<Props>()?.params;
  const { actions, data, itemId } = params || {};

  const { createTask, updateTaskbyId, getTaskbyId } = useTaskData();

  const {
    control,
    handleSubmit,
    setValue,
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

  useEffect(() => {
    if (actions === "edit") {
      getTaskbyId(itemId, (task) => {
        setValue("name", task?.name!);
        setValue("date", task?.date?.toDate()!);
        setValue("start_time", task?.start_time?.toDate()!);
        setValue("end_time", task?.end_time?.toDate()!);
      });
    } else {
      setValue("date", new Date());
      setValue("start_time", new Date());
      setValue("end_time", new Date());
    }
  }, [actions, data, itemId]);

  const onCreateTask = async (data: TaskFormData) => {
    try {
      await createTask(data);

      Toast.show({
        type: "success",
        text1: "Sucess",
        text2: "Task has been created successfully",
      });

      goBack();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const onUpdateTask = async (data: TaskFormData) => {
    try {
      await updateTaskbyId(data, itemId);

      Toast.show({
        type: "success",
        text1: "Sucess",
        text2: "Task has been updated successfully",
      });

      goBack();
    } catch (error) {}
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

    if (actions === "edit") {
      handleSubmit(onUpdateTask)();
    } else {
      handleSubmit(onCreateTask)();
    }
  };

  return (
    <Page
      headerType="NAVIGATION"
      title={`${actions === "edit" ? "Edit" : "Add"} Task`}
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
