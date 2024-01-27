<script setup lang="ts">
import { ref } from 'vue';
import type { Email } from '../models/Email';
import InboxTable from './InboxTable.vue';
import ContentPane from './ContentPane.vue';

const emails = ref<Email[]>([]);
const contentPane = ref();

const onDisplayEmail = (e: Email) => {
  console.log("row clicled!");
  contentPane.value.displayEmail(e);
}

const searchEmails = (term: string) => {
  console.log("term:", term);
  let url = new URL('http://localhost:8080/email/search?index=foo2024&page=10');
  url.searchParams.append("term", term);
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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
  <div class="flex flex-col w-1/2">
    <InboxTable @on-select="onDisplayEmail" :emails=emails />
    <button>Load more</button>
  </div>
  <ContentPane ref="contentPane" />
</template>


