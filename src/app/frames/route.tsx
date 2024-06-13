import { frames } from "./frames"
import { Button } from "frames.js/next";
  


const frameHandler = frames(async (ctx) => {


  return {
    image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTk2UskDc8kC4HjRLKNj8qQjg5jJynYFrkqbZNk5EXgeS/pexels-yosstraore-2607423.jpg`,
    imageOptions: {
    width: 100,
    height: 100,
    },

    textInput: "Search: Dog/Cat/Deer",
    buttons: [
      // With query params
      <Button
        key="button1"
        action="post"
        target={{ pathname: "/route1", query: { foo: "" } }}
      >
        Search  
      </Button>,
      // Without query params
      <Button key="button2" action="post" target="/route2">
        Go to route 2
      </Button>,
    ],
  };
});


export const GET = frameHandler;
export const POST = frameHandler;