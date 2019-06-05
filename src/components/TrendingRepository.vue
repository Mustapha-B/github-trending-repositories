<template>
  <div class="container" v-infinite-scroll="loadRepositories" infinite-scroll-disabled="busy">
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
      page: 1,
      busy: false,
    };
  },
  methods: {
    async loadRepositories() {
      const createdAt = moment().subtract(30, 'days').format('YYYY-MM-DD');
      this.busy = true;

      try {
        const items = await RepositoryService.search(createdAt, this.page);
        items.forEach(item => this.repositories.push(item));
        this.page += 1;
      } catch (e) {
        if (e instanceof SearchError) {
          console.log(e.message);
        }
      }

      this.busy = false;
    },
  },
  created() {
    this.loadRepositories();
  },
};
</script>

<style scoped>

</style>
