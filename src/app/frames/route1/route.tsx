import { frames } from "../frames";
import { Button } from "frames.js/next";
 
export const POST = frames(async (ctx) => {
  const foo = ctx.searchParams.foo;
  const text = ctx.message?.inputText ? `${ctx.message.inputText}`.toLowerCase() : ""

  let image_display = ""
  if(text=== 'dog'){
    image_display =   `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmUixzkXN5cwrU3WgHtyCLv1bCrR12dtGBouwty9zn4pnv`
  }
  else if(text=== 'cat'){
    image_display =   `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmWkTTXVpjniKfNzTGdnWDNZXXn2gVe3SnVcKyJxfMQpVi`
  }
  else if(text=== 'deer'){
    image_display =   `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmfVREC5DrvVWD5Twj6a5EGvQpbSNX3Cfz8NpStzdrMtoZ`
  }
  else{
    image_display =   ""
  }
  

  return {
    image: image_display ? image_display : <div>Please enter correctly</div> , 
    buttons: [
      <Button key="buttonr11" action="post" target="/route2">
        Go to route 2
      </Button>,
      <Button key="buttonr12" action="post" target="/">
        Go back
      </Button>,
    ],
  };
}); 