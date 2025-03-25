import axiosInstance from "../utils/api";

export const addHabit = async (habitData) => {
  try {
    const response = await axiosInstance.post("/add-habit", habitData);
    console.log(response.data);
  } catch (error) {
    console.error("Error adding habit:", error);
  }
};
