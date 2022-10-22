import { Sequelize } from 'sequelize';
import { config as envConfig } from './config/config';

const config = envConfig.development;

export const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	port: config.port,
	dialect: 'mysql',
});
