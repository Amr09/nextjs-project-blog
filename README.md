# NextJS Training Project - Blog
## Features
- Build pages i.e Homepage, Categories, Blog Post, Contact pages using shared components.
- Design components using a mix of tailwand css and moule.css.
- Implement layouts and use header and footer of the application.
- Implement app routing with different paths such as `/post/[slug]`, `/category/slog`
- Use Supabase to store the data of blogs, categories and users.
- Fetch data from supabase using Prisma client.
- Implement API endpoints for `categories` which return all the categories in the table. 
- Implement contact page which uses `contact` api to send data from client to server. The API handler uses the prisma client queries file insilde `lib` directory to perform CRDU operations.
- Query files insilde `lib` are shared accross API handlers and pages for reusability.
- Custom error page to handle errrs.
- Deploy on Vercel 
