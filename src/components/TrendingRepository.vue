<template>
  <div class="container">
    <div class="repository" v-for="repository in repositories" :key="repository.id">
      <h1> {{ repository.name }} </h1>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { RepositoryService, SearchError } from '../services/repository.service';

export default {
  name: 'TrendingRepository',
  data() {
    return {
      repositories: [],
    };
  },
  methods: {
    async getInitialRepositories() {
      const createdAt = moment().subtract(30, 'days').format('YYYY-MM-DD');

      try {
        const items = await RepositoryService.search(createdAt, 1);
        items.forEach(item => this.repositories.push(item));
      } catch (e) {
        if (e instanceof SearchError) {
          console.log(e.message);
        }
      }
    },
  },
  beforeMount() {
    this.getInitialRepositories();
  },
};
</script>

<style scoped>

</style>
