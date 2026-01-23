<template>
  <section id="section-security" class="content-section">
    <h4 class="fw-bold mb-4 text-danger">Security Command Center</h4>
    <div class="alert alert-danger border-0 rounded-4 p-4 mb-4">
      <div class="d-flex align-items-center gap-3">
        <i data-lucide="shield-alert" size="32"></i>
        <div>
          <h5 class="mb-1 fw-bold">Suspicious Access Blocked</h5>
          <p class="mb-0 small">
            Multiple failed login attempts detected on UID#8201 from IP
            192.168.1.10.
          </p>
        </div>
      </div>
    </div>
    <div class="card p-4">
      <h6 class="fw-bold">Recent Alerts</h6>
      <div class="list-group list-group-flush small">
        <div class="list-group-item px-0 py-3">
          <span class="badge bg-warning text-dark me-2">Warn</span> Password
          reset requested for Admin account Sarah J.
        </div>
      </div>
    </div>
  </section>
</template>
