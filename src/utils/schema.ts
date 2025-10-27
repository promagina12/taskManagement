import moment from "moment";
import * as yup from "yup";

export const addTaskSchema = yup
  .object({
    name: yup.string().required(),
    date: yup
      .date()
      .required()
      .test("not-in-past", "Date cannot be in the past", function (value) {
        if (!value) return false;
        const selected = moment(value).startOf("day");
        const today = moment().startOf("day");
        return !selected.isBefore(today);
      }),
    start_time: yup.date().required(),
    end_time: yup
      .date()
      .required()
      .test(
        "is-after-start",
        "End time must be later than start time",
        function (value) {
          const { start_time } = this.parent as { start_time?: Date };
          if (!start_time || !value) return false;
          return new Date(value).getTime() > new Date(start_time).getTime();
        }
      ),
  })
  .required();

export const taskSchema = yup
  .object({
    name: yup.string().required("Name is required"),
  })
  .required();

export const profileSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  username: yup.string().required("Username is required"),
  number: yup.string().required("Number is required"),
});
