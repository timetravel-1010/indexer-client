<script setup lang="ts">
import EmailInbox from './components/EmailInbox.vue';
import MainHeader from './components/MainHeader.vue';
//import type { Email } from './models/Email.ts';

import { ref } from 'vue';

const searchTerm = ref<string>("");
const emailInbox = ref();

const setTerm = (term: string) => {
    searchTerm.value = term;
    console.log(term);
    emailInbox.value.searchEmails(term);
}


</script>

<template>
    <header>
        <MainHeader @on-search="setTerm" />
    </header>
    <main class="border border-black">
        <EmailInbox :search-term=searchTerm ref="emailInbox" />
    </main>
</template>

<style ></style>
