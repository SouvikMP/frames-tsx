import { frames } from "./frames"
import { Button } from "frames.js/next";
  


const frameHandler = frames(async () => {
  return {
    image: <div tw="flex">Welcome Souvik</div>,
    buttons: [
      // With query params
      <Button
        key="button1"
        action="post"
        target={{ pathname: "/route1", query: { foo: "Visiting from home!" } }}
      >
        Go to route 1
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