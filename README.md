<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clone repo
2. Execute
```
yarn install
```
3. Install Nest CLI
```
npm i -g @nestjs/cli
```

4. Get the DB running
```
docker-compose up -d
```

5. Clone  ```.env.template``` and rename it to ```
.env```

6. Fill Environment variables in ```.env```

7. Start application on Dev
```
yarn start:dev
```

8. Rebuild database with the seed provided
```
http://localhost:3000/api/v2/seed
```

## Stack
* MongoDB
* Nest


# Production Build
1. Create file ```.env.prod```
2. Fill prod variables up
3. Make a new image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```