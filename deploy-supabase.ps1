# Развертывание Edge Function на Supabase
Write-Host "Deploying Edge Function to Supabase..." -ForegroundColor Green

# Проверяем, что Supabase CLI установлен
try {
    supabase --version | Out-Null
    Write-Host "Supabase CLI найден" -ForegroundColor Green
} catch {
    Write-Host "Supabase CLI не установлен. Устанавливаем..." -ForegroundColor Yellow
    npm install -g supabase
}

# Логинимся в Supabase (если нужно)
Write-Host "Logging in to Supabase..." -ForegroundColor Green
supabase login

# Развертываем Edge Function
Write-Host "Deploying admin-users function..." -ForegroundColor Green
supabase functions deploy admin-users --project-ref htvbbyoghtoionbvzekw

Write-Host "Deployment complete!" -ForegroundColor Green
