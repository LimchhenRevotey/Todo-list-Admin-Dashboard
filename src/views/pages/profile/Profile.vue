<script setup>
import router from '@/router';
import { useProfileStore } from '@/stores/profileStore';
import { useDate } from '@/composible/UseDate';
let { formatDate } = useDate();
let profileStore = useProfileStore();

const editProfile = () => {
    router.push({ name: 'Edit Profile' });
}
const goBack = () => {
    router.go(-1);
};

</script>

<template>
    <div class="container-fluid min-vh-100 p-4" style="background-color: #f8f9fc;">

        <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="d-flex align-items-center gap-3">
                <button class="btn btn-link text-dark p-0 text-decoration-none border-0" @click="goBack">
                    <i class="bi bi-arrow-left fs-3"></i>
                </button>
                <h2 class="fw-bold mb-0">Profile</h2>
            </div>

            <button class="btn btn-custom-teal text-white px-4 py-2 rounded-2 d-flex align-items-center gap-2"
                @click="editProfile">
                <i class="bi bi-pencil-square"></i> Edit profile
            </button>
        </div>

        <div class="row g-4">

            <div class="col-lg-12">
                <div class="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                    <div class="card-body text-center p-0">

                        <div class="mb-3 d-inline-block position-relative">
                            <img :src="profileStore.dataProfiles?.avatar" alt="User Avatar" class="rounded-circle"
                                width="120" height="120"
                                style="object-fit: cover; border: 4px solid #fff; box-shadow: 0 0 0 1px #dee2e6;">
                        </div>

                        <h4 class="fw-bold mb-1">{{ profileStore.dataProfiles?.firstName }} {{
                            profileStore.dataProfiles?.lastName }}</h4>
                        <p class="text-muted mb-3">{{ profileStore.dataProfiles?.email }}</p>

                        <span class="badge rounded-pill px-4 py-2 mb-4 badge-soft-blue">
                            {{ profileStore.dataProfiles?.role?.name }}
                        </span>

                        <hr class="my-4 text-muted opacity-25">

                        <div class="text-start px-2">
                            <div class="d-flex justify-content-between mb-3">
                                <span class="fw-medium text-secondary">Account Stats :</span>
                                <span class="fw-bold text-success"> {{ profileStore.dataProfiles?.status }}</span>
                            </div>
                            <div class="d-flex justify-content-between mb-3">
                                <span class="fw-medium text-secondary">Member Since :</span>
                                <span class="fw-bold text-dark">{{ formatDate(profileStore.dataProfiles?.registeredAt)
                                    }}</span>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span class="fw-medium text-secondary">Last Login :</span>
                                <span class="fw-bold text-dark">2 min ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 1. Header Button (Teal) */
.btn-custom-teal {
    background-color: #325e6d;
    border-color: #325e6d;
    font-weight: 500;
}

.btn-custom-teal:hover {
    background-color: #264b56;
}

/* 2. Admin Badge (Light Blue Pill) */
.badge-soft-blue {
    background-color: #dbeafe;
    color: #2563eb;
    font-size: 0.9rem;
    font-weight: 600;
}

/* 3. Stat Boxes */
.stat-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform 0.2s;
}

.stat-gray {
    background-color: #e3e8ef;
}

.stat-blue {
    background-color: #dbeafe;
}

.stat-green {
    background-color: #e8f5e9;
}

/* 4. Text Styling */
.tracking-wide {
    letter-spacing: 0.5px;
    font-size: 0.75rem;
    text-transform: uppercase;
}

/* 5. Logs Icons */
.icon-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>