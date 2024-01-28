<script setup lang="ts">
import type { Email } from '../models/Email';
import { ref } from 'vue';

const email = ref<Email | null>(null);

const displayEmail = (e: Email) => {
    console.log("entra!");
    email.value = e;
    console.log("este es", email.value._source);
}

let a = {
    foo: `console.log("this is the injection!");`
};

defineExpose({
    displayEmail
});

</script>

<template>
    <div class="w-1/2">
        <div v-if="email !== null" class="border border-red-500 py-10 px-8 space-y-4">
            <p>
                <strong>Subject:</strong> {{ email._source.email.subject }}
            </p>
            <p>
                <strong>From:</strong> {{ email._source.email.from }}
            </p>
            <p>
                <strong>To:</strong> {{ email._source.email.to.reduce((e, emailList) => emailList + ", " + e, "") }}
            </p>
            <pre>
            {{ a.foo }}
            </pre>
            <pre>
        {{ email._source.email.body }}
      </pre>
        </div>
        <div v-else class="h-screen flex">
            <div class="m-auto">
                <p>The email content will be displayed here.</p>
            </div>
        </div>
    </div>
</template>
