<script setup lang="ts">
import type { Email } from '../models/Email';
import type { Hit } from '../models/Hit';
import { ref } from 'vue';

const email = ref<Email | null>(null);

const displayEmail = (h: Hit) => {
    email.value = h._source.email;
}

defineExpose({
    displayEmail
});

</script>

<template>
    <div class="w-1/2">
        <div v-if="email !== null" class="border border-red-500 py-10 px-8 space-y-4 ">
            <p>
                <strong>Subject:</strong> {{ email.subject }}
            </p>
            <p>
                <strong>From:</strong> {{ email.from }}
            </p>
            <p>
                <strong>To:</strong> {{ email.to.reduce((e, emailList) => emailList + ", " + e, "") }}
            </p>
            <pre>{{ email.body }}</pre>
        </div>
        <div v-else class="h-screen flex">
            <div class="m-auto">
                <p>The email content will be displayed here.</p>
            </div>
        </div>
    </div>
</template>
