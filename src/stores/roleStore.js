import { defineStore } from "pinia";
import api from "@/api/api";
import { ref } from "vue";

export const useRoleStore = defineStore("roleStore", () => {
  const roles = ref([]);
  const getRoles = async () => {
    try {
      const res = await api.get("/roles");
      roles.value = res.data.data;
      console.log(roles.value);
    } catch (error) {
      console.error("Error fetching roles:", error);
      throw error;
    }
  };
  return { getRoles, roles };
});
