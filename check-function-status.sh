#!/bin/bash

# Проверка статуса Edge Function
echo "Checking Edge Function status..."

FUNCTION_URL="https://htvbbyoghtoionbvzekw.supabase.co/functions/v1/admin-users"

# Проверяем OPTIONS запрос (CORS preflight)
echo "Testing CORS preflight (OPTIONS)..."
if curl -s -X OPTIONS -I "$FUNCTION_URL" > /tmp/options_response.txt; then
    echo "✅ Function is accessible"
    
    # Проверяем заголовки CORS
    if grep -q "Access-Control-Allow-Methods.*DELETE" /tmp/options_response.txt; then
        echo "✅ DELETE method is allowed"
    else
        echo "❌ DELETE method is NOT allowed"
    fi
    
    if grep -q "Access-Control-Allow-Origin: \*" /tmp/options_response.txt; then
        echo "✅ CORS origin is configured"
    else
        echo "❌ CORS origin is NOT configured"
    fi
    
    # Показываем заголовки
    echo "Response headers:"
    cat /tmp/options_response.txt
else
    echo "❌ Error testing function"
    echo "Function might not be deployed or accessible"
fi

echo ""
echo "To deploy the function, run:"
echo "supabase functions deploy admin-users --project-ref htvbbyoghtoionbvzekw"

# Очищаем временный файл
rm -f /tmp/options_response.txt
