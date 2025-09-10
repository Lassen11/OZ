#!/bin/bash

# Развертывание Edge Function на Supabase
echo "Deploying Edge Function to Supabase..."

# Проверяем, что Supabase CLI установлен
if ! command -v supabase &> /dev/null; then
    echo "Supabase CLI не установлен. Устанавливаем..."
    npm install -g supabase
fi

# Логинимся в Supabase (если нужно)
echo "Logging in to Supabase..."
supabase login

# Развертываем Edge Function
echo "Deploying admin-users function..."
supabase functions deploy admin-users --project-ref htvbbyoghtoionbvzekw

echo "Deployment complete!"
