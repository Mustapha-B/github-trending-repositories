import ApiService from './api.service';

class SearchError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const RepositoryService = {
  /**
   * @throws SearchError
   */
  async search(createdAt, page) {
    try {
      const response = await ApiService.get('https://api.github.com/search/repositories', {
        q: `created:>${createdAt}`,
        sort: 'stars',
        order: 'desc',
        page,
      });

      return response.data.items;
    } catch (error) {
      throw new SearchError(error.response.status, error.response.data.detail);
    }
  },
};

export default RepositoryService;

export { RepositoryService, SearchError };
