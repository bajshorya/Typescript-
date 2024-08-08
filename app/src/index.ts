import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate());

		try {
			console.log('Request received:', request.method, request.url);

			const response = await prisma.log.create({
				data: {
					level: 'Info',
					message: `asdsadd`,
					meta: {
						headers: JSON.stringify(request.headers),
					},
				},
			});

			console.log('Database response:', JSON.stringify(response));
			return new Response(`request method:${request.method}!`);
		} catch (error) {
			console.error('An error occurred:', error);
			return new Response('An error occurred while processing the request.', { status: 500 });
		}
	},
};
