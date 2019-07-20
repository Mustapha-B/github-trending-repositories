# GitHub trending repositories
A small webapp that lists the most starred Github repositories that were created in the last 30 days. The data is fetched directly from the official GitHub API.

The app is hosted in Netlify under https://github-trending-repos.netlify.com
## Project setup
### Using Docker Compose
Use `docker-compose` to boot up dockerized environment for development
```
docker-compose up --build
```
You should now be able to access the application on localhost:8080

To run any command inside your container
```
docker-compose exec frontend [YOUR COMMAND]
```

To add another node package
```
docker-compose exec frontend yarn add <package-name>
```

To run unit tests
```
docker-compose exec frontend yarn run test:unit
```

### Using Yarn
Install dependencies
```
yarn install
```

Compile and hot-reload for development
```
yarn run serve
```

Run unit tests
```
yarn run test:unit
```

## Built With
* [Vue.js](https://vuejs.org/) - The javascript framework used
* [Axios](https://github.com/axios/axios) - Used to make http request
* [moment](https://momentjs.com/docs/) - Used to manipulate dates
* [vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll) - Used to implement infinite scroll
* [Vuetify](https://vuetifyjs.com/en/) - The vue UI framework used
* [AOS](https://michalsnik.github.io/aos/) - Used to add an animate on scroll effect

## TODO
- [ ] Handle API errors and display a nice message to the user
- [ ] Add a small loader while waiting data fetch
- [ ] Image lazy loading
- [ ] Handle mobile view
- [ ] Add unit tests
- [ ] Filter repositories based on the main language they're written in
- [x] Deploy somewhere

## License
This project is freely distributable under the terms of MIT license.

