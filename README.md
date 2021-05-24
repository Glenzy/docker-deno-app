# Docker + Deno

```
docker build -t app . && docker run -it --init -p 1993:1993 app  
```

## Docker Comppose
```
 docker-compose -f docker-compose.dev.yml up --build
```