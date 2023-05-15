# Установка и подготовка к запуску

## Миграции

### Накатить миграции
- `cd src/`
- `yarn db:migrate`
- `yarn db:migrate:logs`
- Холодный запуск backend (если запущен)
## Переменные окружения
### Описание некоторых переменных
- **IN_MEMORY_PUBSUB** - true / false



# Запуск
### Api

для корректной работы всех модулей апи необходимо запустить дополнительные сервисы:

```bash
 cd env && docker-compose up
```

запуск апи:

```bash
 cd packages/api
```
```bash
 yarn start:dev
```
### Web
```bash
 cd packages/web
```
```bash
 yarn start:dev
```
# Миграции
### Создать миграцию
- `cd `
- ` knex migrate:make migration_name`

Создастся файл в папке _migrations_

- `cd packages/api/src/`
- `yarn db:migrate`
