<script setup>
import { useProfileStore } from '@/stores/profileStore';
import router from '@/router';
let profileStore = useProfileStore();
const goBack = () => {
    router.go(-1);
};
</script>

<template>
    <div class="container-fluid p-4" style="background-color: #f8f9fc;">

        <div class="d-flex align-items-center gap-3 mb-4">
            <button class="btn btn-link text-dark p-0 text-decoration-none border-0" @click="goBack">
                <i class="bi bi-arrow-left fs-3"></i>
            </button>
            <h2 class="fw-bold mb-0">Edit Profile</h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-9 col-xl-8">
                <div class="card border-0 shadow-sm rounded-4 p-5 bg-white">

                    <div class="d-flex align-items-center gap-4 mb-5">
                        <div class="position-relative">
                            <img :src="profileStore.dataProfiles?.avatar" alt="Profile"
                                class="rounded-circle border border-2 border-white shadow-sm" width="100" height="100"
                                style="object-fit: cover;">
                        </div>
                        <div>
                            <h5 class="fw-bold mb-2">Profile Picture</h5>
                            <div class="d-flex gap-2">
                                <button
                                    class="btn btn-custom-teal text-white btn-sm px-3 py-2 d-flex align-items-center gap-2">
                                    <i class="bi bi-cloud-arrow-up-fill"></i> Change Profile
                                </button>
                                <button
                                    class="btn btn-custom-light text-secondary btn-sm px-3 py-2 d-flex align-items-center gap-2">
                                    <i class="bi bi-x-lg"></i> Removed
                                </button>
                            </div>
                        </div>
                    </div>

                    <form>
                        <div class="row g-4">

                            <div class="col-md-6">
                                <label class="form-label text-teal fw-medium mb-2">First Name</label>
                                <input type="text" class="form-control form-control-custom">
                            </div>

                            <div class="col-md-6">
                                <label class="form-label text-teal fw-medium mb-2">Last Name</label>
                                <input type="text" class="form-control form-control-custom">
                            </div>

                            <div class="col-12">
                                <label class="form-label text-teal fw-medium mb-2">Email</label>
                                <input type="email" class="form-control form-control-custom">
                            </div>

                            <div class="col-12">
                                <label class="form-label text-teal fw-medium mb-2">Password</label>
                                <input type="password" class="form-control form-control-custom">
                            </div>

                            <div class="col-12">
                                <label class="form-label text-teal fw-medium mb-2">Confirm Password</label>
                                <input type="password" class="form-control form-control-custom"
                                    placeholder="Enter Your password">
                            </div>

                            <div class="col-12 pt-4 d-flex justify-content-end gap-3">
                                <button type="button"
                                    class="btn btn-custom-light px-4 py-2 fw-medium d-flex align-items-center gap-2">
                                    <i class="bi bi-x-lg"></i> Cancel
                                </button>
                                <button type="submit" class="btn btn-custom-dark-teal text-white px-5 py-2 fw-medium">
                                    Update
                                </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-teal {
    color: #4b6b7a;
}

.form-control-custom {
    background-color: #e0ebf0;
    border: none;
    border-radius: 6px;
    padding: 12px 16px;
    color: #5f7d8c;
    font-size: 0.95rem;
}

.form-control-custom:focus {
    background-color: #d6e4ea;
    box-shadow: none;
    outline: 2px solid #b0c4cd;
}

.form-control-custom::placeholder {
    color: #8faab6;
}

.btn-custom-teal {
    background-color: #3b6e7d;
    border: none;
    font-size: 0.85rem;
    border-radius: 6px;
}

.btn-custom-teal:hover {
    background-color: #2e5661;
}

.btn-custom-light {
    background-color: #e0ebf0;
    border: none;
    color: #4b6b7a;
    font-size: 0.85rem;
    border-radius: 6px;
}

.btn-custom-light:hover {
    background-color: #d1dee4;
    color: #374f5b;
}

.btn-custom-dark-teal {
    background-color: #325e6d;
    border: none;
    border-radius: 6px;
}

.btn-custom-dark-teal:hover {
    background-color: #254652;
}

.card {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03) !important;
}
</style>