import { ServerRequest } from "./deps.ts";

interface Router {
  [key: string]: {
    [key: string]: (req: ServerRequest, data: { body: Record<string, unknown>, params: URLSearchParams }) => void
  }
}

const router: Router = {
  '/products': {
    get: (req, data) => {
      req.respond({
        status: 200,
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({message: 'get route products page'})
      })
    },
    post: (req, data) => {
      req.respond({
        status: 200,
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({message: 'get route products page'})
      })
    },
  },
  '/users': {
    get: (req, data) => {
      req.respond({
        status: 200,
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({message: 'get route users page'})
      })
    },
    post: (req, data) => {
      req.respond({
        status: 200,
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({message: 'get route users page'})
      })
    },
  }
}
export default router;

export const notFound = (req: ServerRequest) => {
    req.respond({
      status: 404,
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({message: 'not found'})
    })
  }