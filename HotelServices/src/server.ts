import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
import logger from './config/logger.config';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
import sequelize from './db/models/sequelize';
//import Hotel from './db/models/hotel';
const app = express();

app.use(express.json());

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */

app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router); 


/**
 * Add the error handler middleware
 */

app.use(appErrorHandler);
app.use(genericErrorHandler);


app.listen(serverConfig.PORT,async () => {
    logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);
    await sequelize.authenticate(); // Test the connection to the database
    logger.info('Database connection has been established successfully.');
    
    // try {
        
    //     await sequelize.authenticate(); // Test the connection to the database
    //     logger.info('Database connection has been established successfully.');

    //     // create hotel
    //     // const hotel = await Hotel.create({
    //     //     name: 'Hotel California',
    //     //     address: '123 Sunset Blvd',
    //     //     location: 'Los Angles, CA',
    //     //     rating: 4.5,
    //     //     ratingCount: 100
    //     // });

    //     // const hotel = await Hotel.create({
    //     //     name: 'Hotel New Yourk',
    //     //     address: '123 Main St. New York, NY',
    //     //     location: 'New York',
    //     //     rating: 4.5,
    //     //     ratingCount: 100
    //     // });

    //     // logger.info('Hotel created successfully:', hotel.toJSON());

    //     // fetch details of the hotel those were created above
    //     const hotels = await Hotel.findAll();
    //     const hotelCount = await Hotel.count();
    //     logger.info('All hotels:',hotels)
    //     logger.info('Total Hotels count:',{hotelCount});

    // } catch (error) {
    //     logger.error("something went wrong in the db queries");
    // }
});
