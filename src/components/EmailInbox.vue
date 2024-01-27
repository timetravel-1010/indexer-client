<script setup lang="ts">
import { ref } from 'vue';
import type { Email } from '../models/Email';
import InboxTable from './InboxTable.vue';

const props = defineProps<{
    searchTerm: string
}>()


const emails = ref<Email[]>([]);

const searchEmails = (term: string) => {
    console.log("term:", term);
    fetch('http://localhost:8080/email?index=foo2024&page=4', {
        method: 'GET', // o 'POST', 'PUT', etc.
        headers: {
            'Content-Type': 'application/json',
            // Otros encabezados personalizados aquí
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data: Email[]) => {
            emails.value = data
            console.log(emails.value)
        })
        .catch(error => {
            console.error('Error: ', error);
        });
};

defineExpose({
    searchEmails
});

</script>


<template>
    <div class="flex flex-row border border-green-500 mx-auto items-center">
        <div class="mx-40 w-auto flex h-96 my-10 border border-red-500 flex-col items-center">
            <div class="flex justify-center border border-blue-500 m-5">
            </div>
            <div class="border border-green-500">
                <!--
                <ul>
                    <li v-for="email in emails" :key="email._id">
                        {{ email._source.email.messageId }}
                    </li>
                </ul>
                -->
                <InboxTable :emails=emails />
            </div>
        </div>

        <div class="border border-sky-500">
            This is a text of test!
        </div>
    </div>
</template>


