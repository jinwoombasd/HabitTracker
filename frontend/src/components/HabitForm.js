import React, { useState } from "react";
import api from "../utils/api"; // axiosInstance

export default function HabitForm({ onHabitAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/habits", { name, description });
      if (onHabitAdded) onHabitAdded();
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Failed to add habit:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}
