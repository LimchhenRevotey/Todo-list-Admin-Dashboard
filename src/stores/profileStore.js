import { defineStore } from "pinia";
import api from "@/api/api";
import { ref } from "vue";

export const useProfileStore = defineStore("profileStore", () => {
  let dataProfiles = ref({
    fullname: "",
    email: "",
    avatar: ""
  });
  const getProfiles = async () => {
    try {
      const res = await api.get('/auth/profile');
      dataProfiles.value = res.data.data;
    } catch (error) {
      console.error("Error fetching profiles:", error);
      throw error;
    }
  }
  return { getProfiles, dataProfiles };
});

