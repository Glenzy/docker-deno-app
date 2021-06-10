import { serve, listenAndServe } from "./deps.ts";

import router, { notFound } from "./router.ts";

const PORT = 1993;


listenAndServe({ port: PORT }, async (req: any) => {
  const parsedUrl = req.url.replace(/\/+$/g, '').split('?');
  const pathName = parsedUrl[0] || '/';
  const method = req.method.toLowerCase();
  const params = new URLSearchParams(parsedUrl[1]);
  const page = params.get('page');
  const limit = params.get('limit');

  // get the body
  const buffer = await Deno.readAll(req.body);
  const decoder = new TextDecoder();
  const body = decoder.decode(buffer);

  console.log('body: ', body);

  const data = { body: body ? JSON.parse(body) : {}, params }


  const routeHandler = router[pathName] && router[pathName][method] ? router[pathName][method] : notFound;

  routeHandler(req, data);

})

console.log(`Server started on port ${PORT}`);

