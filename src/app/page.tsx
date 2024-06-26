import { fetchMetadata } from "frames.js/next";
 
export async function generateMetadata() {
  return {
    title: "My page",
    other: { ...(await fetchMetadata(
        // provide full URL to your /frames endpoint
        new URL(
          "/frames",
          process.env.NETLIFY_URL
            ? `http://${process.env.NETLIFY_URL}`
            : "http://localhost:3000"
        )
      ))
    },

  };
}
 
export default function Page() {
  return <span>My existing page</span>;
}