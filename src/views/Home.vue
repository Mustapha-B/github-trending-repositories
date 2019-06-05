<template>
  <div class="home">
    <TrendingRepository/>
  </div>
</template>

<script>
import TrendingRepository from '@/components/TrendingRepository.vue';

export default {
  name: 'home',
  components: {
    TrendingRepository,
  },
};
</script>
