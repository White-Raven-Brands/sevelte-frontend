// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            // Vercel-specific configuration options
            // These are optional and can be omitted if using default settings
            runtime: 'nodejs18.x', // Specify Node.js runtime version
            regions: ['all'], // Optional: specify deployment regions
            split: true // Optional: enable route splitting
        })
    }
};

export default config;
