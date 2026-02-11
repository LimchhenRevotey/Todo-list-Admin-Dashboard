<script setup>
import { ref, onMounted } from "vue";
import Chart from "primevue/chart";
import api from "@/api/api";

const chartData = ref();
const chartOptions = ref();
const selectedPeriod = ref('សប្ដាហ៍');
const dataUser = ref({
    totalUsers: 0,
    totalNotes: 0,
    totalCompletedNotes: 0,
    totalIncompletedNotes: 0,
});

const updateChartData = async (period) => {
    selectedPeriod.value = period;
    try {
        const response = await api.get(`/admin/summary?period=${period}`);
        dataUser.value = response.data.data;

        chartData.value = {
            labels: period === 'សប្ដាហ៍' ? ['ច័ន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហ', 'សុក្រ', 'សៅរ៍', 'អាទិត្យ'] :
                period === 'ខែ' ? ['សប្តាហ៍ទី១', 'សប្តាហ៍ទី២', 'សប្តាហ៍ទី៣', 'សប្តាហ៍ទី៤'] :
                    ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'],
            datasets: [{
                barThickness: window.innerWidth < 768 ? 20 : 40,
                label: `ស្ថិតិកិច្ចការ (${period})`,
                backgroundColor: '#13707F',
                data: dataUser.value.chart_values || [10, 20, 15, 25, 22, 30, 28, 18, 12, 26, 24, 20],
                borderRadius: 6
            }]
        };
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

onMounted(() => {
    updateChartData('សប្ដាហ៍');
    chartOptions.value = {
        maintainAspectRatio: false,
        aspectRatio: window.innerWidth < 768 ? 0.6 : 0.8,
        plugins: {
            legend: { display: false }
        }
    };
});
</script>

<template>
    <section id="section-dashboard" class="content-section active p-2 p-md-2">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
            <div>
                <h3 class="fw-900 mb-0">ផ្ទាំងព័ត៌មាន</h3>
                <p class="text-muted small mb-0">របាយការណ៍សកម្មភាព ReabList</p>
            </div>
            <div class="d-flex gap-2">
                <button class="btn btn-light border btn rounded-3 flex-fill">ផ្ទុកឡើងវិញ</button>
                <button class="btn btn-brand btn flex-fill shadow-sm">របាយការណ៍ PDF</button>
            </div>
        </div>

        <div class="row g-3 g-md-4 mb-4">
            <div class="col-12 col-sm-6 col-xl-3">
                <div class="card stat-card shadow-sm border-0 h-100">
                    <h6 class="text-muted small fw-bold mb-2">អ្នកប្រើប្រាស់ប្រព័ន្ធ</h6>
                    <div class="d-flex align-items-end justify-content-between">
                        <h3 class="fw-bold mb-0">{{ dataUser.totalUsers }}</h3>
                        <span class="text-success small fw-bold">{{ dataUser.totalUsers > 0 ? (dataUser.totalUsers / 100
                            * 100).toFixed(1) : 0 }}%</span>
                    </div>
                    <div class="progress mt-3" style="height: 4px;">
                        <div class="progress-bar"
                            :style="{ width: Math.min((dataUser.totalUsers / 100) * 100, 100) + '%', backgroundColor: '#13707F' }">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 col-xl-3">
                <div class="card stat-card shadow-sm border-0 h-100">
                    <h6 class="text-muted small fw-bold mb-2">ភារកិច្ចកំពុងដំណើរការ</h6>
                    <div class="d-flex align-items-end justify-content-between">
                        <h3 class="fw-bold mb-0">{{ dataUser.totalIncompletedNotes || 0 }}</h3>
                        <span class="text-info small fw-bold">{{ dataUser.totalIncompletedNotes > 0 ?
                            (dataUser.totalIncompletedNotes / dataUser.totalNotes * 100).toFixed(1) : 0 }}%</span>
                    </div>
                    <div class="progress mt-3" style="height: 4px;">
                        <div class="progress-bar bg-info"
                            :style="{ width: dataUser.totalNotes > 0 ? (dataUser.totalIncompletedNotes / dataUser.totalNotes * 100) + '%' : '0%' }">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 col-xl-3">
                <div class="card stat-card shadow-sm border-0 h-100">
                    <h6 class="text-muted small fw-bold mb-2">ភារកិច្ចដែលបានបញ្ចប់</h6>
                    <div class="d-flex align-items-end justify-content-between">
                        <h3 class="fw-bold mb-0">{{ dataUser.totalCompletedNotes || 0 }}</h3>
                        <span class="text-success small fw-bold">សម្រេចបាន</span>
                    </div>
                    <div class="progress mt-3" style="height: 4px;">
                        <div class="progress-bar bg-success"
                            :style="{ width: dataUser.totalNotes > 0 ? (dataUser.totalCompletedNotes / dataUser.totalNotes * 100) + '%' : '0%' }">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 col-xl-3">
                <div class="card stat-card shadow-sm border-0 h-100">
                    <h6 class="text-muted small fw-bold mb-2">ភារកិច្ចទាំងអស់</h6>
                    <div class="d-flex align-items-end justify-content-between">
                        <h3 class="fw-bold mb-0 text-danger">{{ dataUser.totalNotes }}</h3>
                        <span class="text-danger small fw-bold">សរុប</span>
                    </div>
                    <div class="progress mt-3" style="height: 4px;">
                        <div class="progress-bar bg-danger" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-12 col-lg-8">
                <div class="card p-3 p-md-4 h-100 border-0 shadow-sm rounded-4">
                    <div
                        class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
                        <h6 class="fw-bold mb-0 text-dark">លំហូរនៃសកម្មភាពសរុប</h6>
                        <div class="pill-group d-flex p-1 bg-light rounded-3">
                            <button v-for="p in ['សប្ដាហ៍', 'ខែ', 'ឆ្នាំ']" :key="p" @click="updateChartData(p)"
                                class="btn btn-sm flex-fill border-0 px-3"
                                :class="selectedPeriod === p ? 'btn-teal' : ''">
                                {{ p }}
                            </button>
                        </div>
                    </div>
                    <div class="chart-wrapper" style="height: 300px;">
                        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-100" />
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-4">
                <div class="card border-0 shadow-sm h-100 rounded-4">
                    <div class="card-body p-4">
                        <h6 class="fw-bold mb-4">សកម្មភាពថ្មីៗ</h6>
                        <div class="activity-feed">
                            <div v-for="n in 3" :key="n" class="d-flex align-items-start gap-3 mb-4">
                                <div class="icon-avatar flex-shrink-0"
                                    :style="{ backgroundColor: n == 1 ? '#e0f2fe' : n == 2 ? '#dcfce7' : '#fee2e2' }">
                                    <i
                                        :class="n == 1 ? 'bi-person-fill' : n == 2 ? 'bi-check-lg' : 'bi-exclamation-triangle-fill'"></i>
                                </div>
                                <div class="flex-grow-1 border-bottom pb-2">
                                    <h6 class="mb-0 fw-bold small">{{
                                        n == 1 ? 'អ្នកប្រើប្រាស់ថ្មី' : n ==2?'ភារកិច្ចសម្រេច':'សុវត្ថិភាព' }}</h6>
                                    <p class="mb-0 text-muted tiny">ទិន្នន័យត្រូវបានបច្ចុប្បន្នភាព</p>
                                    <small class="text-body-tertiary tiny">{{ n * 5 }} នាទីមុន</small>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-light w-100 mt-2 fw-bold rounded-3">មើលកំណត់ត្រាសរុប</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css');

.dashboard-wrapper {
    font-family: 'Kantumruy Pro', sans-serif;
}

.fw-900 {
    font-weight: 900;
}

.rounded-4 {
    border-radius: 20px !important;
}

.tiny {
    font-size: 0.75rem;
}

/* Stat Cards */
.stat-card {
    padding: 1.5rem;
    border-radius: 20px;
    transition: transform 0.2s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
}

/* Buttons & Switcher */
.btn-brand {
    background: #13707F;
    color: white;
    border-radius: 10px;
    font-weight: 700;
}

.btn-teal {
    background: #13707F !important;
    color: white !important;
    border-radius: 8px !important;
}

/* Activity Icon */
.icon-avatar {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1e293b;
}

/*========== RESPONSIVE ========*/

/* Phone */
@media (max-width: 576px) {
    .content-section {
        padding: 10px !important;
    }

    h3 {
        font-size: 1.4rem;
    }

    .stat-card {
        padding: 1.2rem;
    }

    .chart-wrapper {
        height: 250px !important;
    }
}

/* Tablet */
@media (max-width: 991px) {

    .col-lg-8,
    .col-lg-4 {
        width: 100%;
    }
}

/*  Laptop */
@media (min-width: 1200px) {
    .stat-card h3 {
        font-size: 2rem;
    }
}

/* Animations */
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(15px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.content-section {
    animation: slideUp 0.4s ease-out;
}
</style>