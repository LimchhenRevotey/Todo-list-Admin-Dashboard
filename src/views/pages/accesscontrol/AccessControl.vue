<template>
    <!-- 3. ROLES & PERMISSIONS -->
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
                                <tr>
                                    <td class="text-start fw-bold">Admin</td>
                                    <td class="text-success">
                                       <check-circle/>
                                    </td>
                                    <td class="text-success">
                                        <check-circle/>
                                    </td>
                                    <td class="text-success">
                                        <check-circle/>
                                    </td>
                                    <td class="text-success">
                                        <check-circle/>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-start fw-bold">User</td>
                                    <td class="text-success">
                                        <check-circle/>
                                    </td>
                                    <td class="text-success">
                                        <check-circle/>
                                    </td>
                                    <td class="text-danger"><x-circle/></td>
                                    <td class="text-danger"><x-circle/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
