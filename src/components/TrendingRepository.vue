<template>
  <v-container grid-list-md text-xs-left>
    <div v-infinite-scroll="loadRepositories" infinite-scroll-disabled="busy">
      <v-layout row wrap>
        <v-flex xs12
                v-for="repository in repositories" :key="repository.id"
                data-aos="slide-up" data-aos-easing="ease-out-back"
        >
          <v-card class="repository-card">
            <v-layout row wrap>
              <v-flex xs4 sm3 md2>
                <v-img :src="repository.owner.avatar_url"></v-img>
              </v-flex>
              <v-flex xs8 sm9 md10>
                <v-layout column justify-space-between fill-height>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">
                        <a :href="repository.html_url" target="_blank">{{ repository.name }}</a>
                      </h3>
                      <div> {{ repository.description }} </div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-layout row wrap>
                      <v-flex>
                        <v-btn color="info">Stars: {{ repository.stargazers_count }} </v-btn>
                        <v-btn color="info">Issues: {{ repository.open_issues_count }} </v-btn>
                        <v-btn
                                flat
                                color="info"
                        >
                          Submitted {{ moment(repository.created_at).fromNow() }}
                          by {{ repository.owner.login }}
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-card-actions>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
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
  .repository-card {
    margin-bottom: 10px;
  }
</style>
