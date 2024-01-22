<template>
    <div class="flex">
        <input v-model="searchTerm" type="text" placeholder="Buscar correos..."
            class="flex-grow p-2 border border-gray-300 rounded" />
        <button @click="searchEmails" class="ml-2 p-2 bg-blue-500 text-white rounded">
            Buscar
        </button>
    </div>
    <div class="mt-4 border border-gray-300 rounded p-2">
        <ul>
            <li v-for="email in emails" :key="email._id" class="mb-2">
                {{ email._source.email.messageId }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

const searchTerm = ref('');
const emails = ref([]);

fetch('http://localhost:8080/email?index=foo2024&page=4', {
    method: 'GET', // o 'POST', 'PUT', etc.
    headers: {
        'Content-Type': 'application/json',
        // Otros encabezados personalizados aquí
    },
})
    .then(response => response.json())
    .then(data => {
        emails.value = data
        console.log(emails.value)
    });
</script>
