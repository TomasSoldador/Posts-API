import fastify from 'fastify';
import { postsRoutes } from './routes/posts.js';

const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
})

app.log.error('Erro aqui!')

app.register(postsRoutes)

app.listen({
    host: '0.0.0.0',
    port: 4000
})