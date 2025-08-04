# Vercel Environment Variables Template

## Required Environment Variables for Vercel

Copy these variables to your Vercel project settings:

### Database Configuration
```
DATABASE_URL=postgresql://postgres:Ahmadkhan123+@db.dsqdwpivbzlppfqqxkbq.supabase.co:5432/postgres
DATABASE_URL_PRISMA=postgresql://postgres:Ahmadkhan123+@db.dsqdwpivbzlppfqqxkbq.supabase.co:5432/postgres
```

### Authentication (CRITICAL - Update NEXTAUTH_URL)
```
NEXTAUTH_SECRET=28c0f7715bb9dd69b624a14513bccaf5a4beb96fcfcf3201f4f766846a265a3
NEXTAUTH_URL=https://perfume-flame.vercel.app
```

### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=https://dsqdwpivbzlppfqqxkbq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzcWR3cGl2YnpscHBmcXF4a2JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODQ2OTksImV4cCI6MjA2OTY2MDY5OX0.YR9uV4JOXsTKwTv7MTWIFa0GbFcUjON2CBorm94kMhs
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzcWR3cGl2YnpscHBmcXF4a2JxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDA4NDY5OSwiZXhwIjoyMDY5NjYwNjk5fQ.fRQyOelO7d10hOP5JV1gloJfdc4lWoR-A-ZJpWfjP8g
```

### App Configuration
```
NEXT_PUBLIC_APP_NAME=Project X
NEXT_PUBLIC_APP_URL=https://perfume-flame.vercel.app
NEXT_PUBLIC_BASE_URL=https://perfume-flame.vercel.app
```

### Features
```
ENABLE_NOTIFICATIONS=true
ENABLE_OFFLINE_MODE=true
ENABLE_PWA=true
SKIP_MIDDLEWARE=false
```

## How to Set Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project (perfume-flame)
3. Go to Settings → Environment Variables
4. Add each variable above
5. Make sure to set them for **Production**, **Preview**, and **Development** environments
6. Redeploy your application

## Critical Note

The most important change is updating `NEXTAUTH_URL` from `http://localhost:3000` to `https://perfume-flame.vercel.app`. This is why authentication works locally but not on Vercel. 