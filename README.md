### Deployment Instructions for Astro Project

To deploy your Astro project, follow these steps:

1. **Build Project:**

   Create .env file with PUBLIC_SITE_URL

   Run the following command to build your project:

   ```bash
   npm i
   npm run build
   ```

2. **Accessing Static Files:**
   After running the build command, navigate to the `dist` directory. Here, you will find all the static files ready for deployment.

3. **Setting Base URL:**
   If you need to set a base URL for your project, you can do so by configuring it in your Astro project. Refer to the [Astro documentation](https://docs.astro.build/ru/guides/environment-variables/) for detailed instructions on how to set the base URL and its purpose.