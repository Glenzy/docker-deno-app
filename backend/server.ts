import { App } from './main.ts';
import "https://deno.land/x/dotenv/load.ts";

console.log('Hey we\'re working')

const PORT =  Deno.env.get("PORT") || 1993;
const app = new App(PORT);

app.listen();

console.log(`App started on ${PORT}`)