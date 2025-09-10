# Проверка статуса Edge Function
Write-Host "Checking Edge Function status..." -ForegroundColor Green

$functionUrl = "https://htvbbyoghtoionbvzekw.supabase.co/functions/v1/admin-users"

try {
    # Проверяем OPTIONS запрос (CORS preflight)
    Write-Host "Testing CORS preflight (OPTIONS)..." -ForegroundColor Yellow
    $optionsResponse = Invoke-WebRequest -Uri $functionUrl -Method OPTIONS -UseBasicParsing
    Write-Host "OPTIONS Status: $($optionsResponse.StatusCode)" -ForegroundColor Green
    
    if ($optionsResponse.Headers.'Access-Control-Allow-Methods' -like "*DELETE*") {
        Write-Host "✅ DELETE method is allowed" -ForegroundColor Green
    } else {
        Write-Host "❌ DELETE method is NOT allowed" -ForegroundColor Red
    }
    
    if ($optionsResponse.Headers.'Access-Control-Allow-Origin' -eq "*") {
        Write-Host "✅ CORS origin is configured" -ForegroundColor Green
    } else {
        Write-Host "❌ CORS origin is NOT configured" -ForegroundColor Red
    }
    
} catch {
    Write-Host "❌ Error testing function: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Function might not be deployed or accessible" -ForegroundColor Yellow
}

Write-Host "`nTo deploy the function, run:" -ForegroundColor Cyan
Write-Host "supabase functions deploy admin-users --project-ref htvbbyoghtoionbvzekw" -ForegroundColor White
