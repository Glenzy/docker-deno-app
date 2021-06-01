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