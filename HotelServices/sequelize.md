## steps & notes for sequelize & sequelize CLI 

- sequelize CLI -> using this we can generate lot of things through command line

1. npm install sequelize

2. npm install mysql2 (driver provided by npm when we used mysql as a db then you should install this)

3.  npm i -D sequelize-cli ( install as a dev dependencie)

4. create ".sequelizerc" file where you write path for folder

5. npx sequelize-cli init

## migration folder

- To create migration
1. npx sequelize-cli migration:generate --name create-hotel-table

- To migration file (for up)
2. npx sequelize-cli db:migrate

- To revert you content (for down)
3. npx sequelize-cli db:migrate:undo