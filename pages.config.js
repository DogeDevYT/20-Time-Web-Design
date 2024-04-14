module.exports = {
  // Required: Specify the name of your project. This will be used as the name of your Cloudflare Pages project.
  name: "20-Time-Web-Design",

  // Optional: Specify the directory where your static files (e.g., build output) are located.
  // If not specified, Cloudflare Pages will attempt to auto-detect the directory.
  staticBuildDir: "build",

  // Optional: Specify any routes that need custom configuration.
  // This is useful for configuring custom headers, redirects, etc.
  // For example:
  // routes: [
  //   {
  //     route: "/",
  //     script: "worker.js", // Optional: Path to a Cloudflare Worker script
  //     headers: {
  //       "Cache-Control": "public, max-age=3600" // Example: Set Cache-Control header
  //     }
  //   }
  // ],

  // Optional: Specify the build command for your project.
  // If not specified, Cloudflare Pages will attempt to auto-detect the build command.
  // buildCommand: "npm run build",

  // Optional: Specify the build environment variables.
  // These will be passed to your build command.
  // buildEnvironmentVariables: {
  //   REACT_APP_API_URL: "https://api.example.com"
  // },
};
