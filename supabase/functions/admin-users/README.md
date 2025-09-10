# Admin Users Edge Function

Edge Function для управления пользователями в системе OZ.

## Развертывание

### Через Supabase CLI

```bash
# Установка Supabase CLI
npm install -g supabase

# Логин в Supabase
supabase login

# Развертывание функции
supabase functions deploy admin-users --project-ref htvbbyoghtoionbvzekw
```

### Через PowerShell

```powershell
# Запуск скрипта развертывания
.\deploy-supabase.ps1
```

## API Endpoints

### GET /functions/v1/admin-users
Получить список всех пользователей

### POST /functions/v1/admin-users
Создать нового пользователя
```json
{
  "email": "user@example.com",
  "password": "password123",
  "full_name": "Иван Иванов",
  "role": "employee"
}
```

### DELETE /functions/v1/admin-users
Удалить пользователя
```json
{
  "userId": "user-uuid"
}
```

## CORS

Функция настроена для работы с CORS и поддерживает:
- GET, POST, PUT, DELETE, OPTIONS методы
- Заголовки: authorization, x-client-info, apikey, content-type
- Origin: * (все домены)

## Логирование

Функция ведет подробные логи для отладки:
- Входящие запросы
- CORS preflight запросы
- Ошибки выполнения
- Результаты операций
