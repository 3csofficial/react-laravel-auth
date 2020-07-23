### react-laravel-auth

# Client
### Installation
```
yarn install
```

### Development
```
yarn start
```

# Server

### Run

environment
```
cpy env.example to env
provide necessary mysql configuration in env
```

```
composer install
php artisan migrate
php artisan key:generate
php artisan passport:install
```

for by default users
```
php artisan db:seed
```