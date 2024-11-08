<script setup>
import { RouterView } from 'vue-router';
import AdminNavbar from '@/components/AdminNavbar.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
    <section class="layout">
        <AdminNavbar />
        <section class="sidebar-content-container">
            <Sidebar />
            <div class="router-view">
                <RouterView />
            </div>
        </section>
    </section>
</template>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
}

.sidebar-content-container {
    display: flex;
    flex-grow: 1;
    height: calc(100vh - 60px);
}

.router-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-top: 20px; 
    overflow-y: auto;
}
</style>



  