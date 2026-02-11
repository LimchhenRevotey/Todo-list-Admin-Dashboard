<script setup>
import router from '@/router';
import { useProfileStore } from '@/stores/profileStore';
import { useDate } from '@/composible/UseDate';
import { onMounted } from 'vue';

let { formatDate } = useDate();
let profileStore = useProfileStore();

onMounted(() => {
    profileStore.getProfiles();
})
const editProfile = () => {
    router.push({ name: 'Edit Profile' });
}
const goBack = () => {
    router.go(-1);
};

</script>

<template>
    <div class="container-fluid p-2 p-md-4 min-vh-100" style="background-color: #f8f9fc;">

        <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 mb-4 mt-2">
            <div class="d-flex align-items-center gap-3 w-100 w-sm-auto">
                <button class="btn btn-link text-dark p-0 border-0" @click="goBack">
                    <i class="bi bi-arrow-left fs-3"></i>
                </button>
                <h2 class="fw-bold mb-0 text-teal fs-4">ប្រវត្តិរូប</h2>
            </div>

            <button
                class="btn btn-custom-teal text-white w-25 w-sm-auto px-4 py-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2"
                @click="editProfile">
                <i class="bi bi-pencil-square"></i> កែប្រែប្រវត្តិរូប
            </button>
        </div>

        <div class="row justify-content-center m-0">
            <div class="col-12 col-md-8 col-lg-5 p-1">
                <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                    <div class="card-body text-center p-4">

                        <div class="mb-3 d-inline-block">
                            <img :src="profileStore.dataProfiles?.avatar || 'https://via.placeholder.com/120'"
                                alt="User Avatar" class="rounded-circle shadow-sm profile-img" width="120" height="120">
                        </div>

                        <h4 class="fw-bold mb-1 text-dark">{{ profileStore.dataProfiles?.fullname }}</h4>
                        <p class="text-muted mb-3 small text-break">{{ profileStore.dataProfiles?.email }}</p>

                        <span class="badge rounded-pill px-4 py-2 mb-4 badge-soft-blue">
                            {{ profileStore.dataProfiles?.role?.name }}
                        </span>

                        <hr class="my-4 opacity-25">

                        <div class="text-start px-2 px-md-3">
                            <div class="info-row d-flex justify-content-between mb-3  pb-2">
                                <span class="fw-medium text-secondary small">ស្ថានភាពគណនី</span>
                                <span class="fw-bold text-success small">{{ profileStore.dataProfiles?.status }}</span>
                            </div>

                            <div class="info-row d-flex justify-content-between mb-3  pb-2">
                                <span class="fw-medium text-secondary small">សមាជិកតាំងពី</span>
                                <span class="fw-bold text-dark small">{{
                                    formatDate(profileStore.dataProfiles?.registeredAt) }}</span>
                            </div>

                            <div class="info-row d-flex justify-content-between">
                                <span class="fw-medium text-secondary small">ការចូលចុងក្រោយ</span>
                                <span class="fw-bold text-dark small">២ នាទីមុន</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-teal {
    color: #325e6d;
}

.btn-custom-teal {
    background: #325e6d;
    border: none;
    font-weight: 600;
    transition: 0.3s;
}

.btn-custom-teal:hover {
    background: #264b56;
    transform: translateY(-2px);
}

.profile-img {
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
}

.badge-soft-blue {
    background: #e0f2fe;
    color: #0369a1;
    font-weight: 700;
}


@media (max-width: 768px) {
    .container-fluid {
        padding-left: 15px !important;
        padding-right: 15px !important;
    }

 
    @media (max-width: 400px) {
        .info-row {
            flex-direction: column;
            align-items: flex-start !important;
        }

        .info-row span:last-child {
            margin-top: 5px;
        }
    }
}
</style>