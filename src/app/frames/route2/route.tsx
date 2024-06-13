import { frames } from "../frames";
import { Button } from "frames.js/next";
 
export const POST = frames(async () => {
  return {
    image: <div tw="flex">Route 2</div>,
    buttons: [
      <Button key="buttonr21" action="post" target={{ pathname:"/route1", query: {foo: "Visiting from route 2!"}}}>
        Go to route 1
      </Button>,
      <Button key="buttonr22" action="post" target="/">
        Go back
      </Button>,
    ],
  };
});