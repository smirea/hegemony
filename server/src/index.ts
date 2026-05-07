const apiPort = Number(Bun.env.API_PORT ?? 3000);
if (Number.isNaN(apiPort)) throw new Error('API_PORT must be a valid number');

const server = Bun.serve({
	development: true,
	idleTimeout: 120,
	port: apiPort,
	routes: {
		'/status': Response.json({ ok: true }),
		'/*': Response.json({ ok: false, error: 'Not found' }, { status: 404 }),
	},
});

console.log('Server running at:', server.url);
