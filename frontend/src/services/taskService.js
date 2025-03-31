import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

// Mengambil semua tugas
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Tambah Tugas Baru
export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

// Hapus tugas
export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/${taskId}`);
  return response.data;
};

// Update tugas
export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateTask),
    });
    return await response.json();
  } catch (error) {
    console.error(`Gagal memperbarui tugas`, error);
  }
};
