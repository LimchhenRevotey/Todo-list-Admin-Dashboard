<script setup>
import { useRoleStore } from "@/stores/roleStore";
import { onMounted } from "vue";

const roleStore = useRoleStore();
onMounted(() => {
    roleStore.getRoles();
});
</script>
<template>
    <section id="section-roles" class="content-section">
        <h4 class="fw-bold mb-4">RBAC: Admin & User Permissions</h4>
        <div class="row g-4">
            <div class="col-md-12">
                <div class="card p-4">
                    <h6 class="fw-bold mb-4">Role-Based Endpoint Access</h6>
                    <div class="table-responsive">
                        <table class="table table-bordered text-center align-middle">
                            <thead class="bg-light">
                                <tr>
                                    <th class="text-start">Role Name</th>
                                    <th>Get All Users</th>
                                    <th>Get Single User</th>
                                    <th>Create User</th>
                                    <th>Change Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="role in roleStore.roles" :key="role.id">
                                    <td class="text-start fw-bold">{{ role.name }}</td>

                                    <!-- Get All Users -->
                                    <td class="text-success">
                                        <check-circle />
                                    </td>

                                    <!-- Get Single User -->
                                    <td class="text-success">
                                        <check-circle />
                                    </td>

                                    <!-- Create User -->
                                    <td :class="role.name?.toLowerCase() === 'admin'
                                            ? 'text-success'
                                            : 'text-danger'
                                        ">
                                        <check-circle v-if="role.name?.toLowerCase() === 'admin'" />
                                        <x-circle v-else />
                                    </td>

                                    <!-- Change Status -->
                                    <td :class="role.name?.toLowerCase() === 'admin'
                                            ? 'text-success'
                                            : 'text-danger'
                                        ">
                                        <check-circle v-if="role.name?.toLowerCase() === 'admin'" />
                                        <x-circle v-else />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
