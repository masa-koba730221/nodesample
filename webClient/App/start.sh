docker run -it --rm --hostname webclient --name webclient -w /app -v $(pwd):/app -p 4200:4200 webclient:0.1 sh