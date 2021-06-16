# Docker + Deno

```
docker build -t app . && docker run -it --init -p 1993:1993 app  
```

## Docker Comppose
```
 docker-compose -f docker-compose.dev.yml up --build
```

## VSCode Settings for Deno:

Please note, these settings are incorrect outside of Docker. You will need to update the `deno.path` if you are using deno outside of a container. 

```
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "deno.path":"/bin/deno",
  "deno.enable": true
}
```

### TODO
[ ] allow docker comppose to be run within the container so that running the above command works as expected and the `command` is run inside the deno environment. While it works as is, the development experience is not ideal without actually installing deno on your computer for VS code to use it's extensions to properly lint. I don't want this, I want the command run inside the container where deno exists. 