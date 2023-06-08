export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dracula-ui.css","favicon.png","robots.txt"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e4cca1db.js","imports":["_app/immutable/entry/start.e4cca1db.js","_app/immutable/chunks/index.93d9d568.js","_app/immutable/chunks/singletons.6be44368.js","_app/immutable/chunks/paths.9e058b70.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.8455c55e.js","imports":["_app/immutable/entry/app.8455c55e.js","_app/immutable/chunks/index.93d9d568.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
