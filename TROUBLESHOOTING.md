# ⚖️ Устранение неполадок Edge Function

## Проблема: CORS ошибка при удалении сотрудников

### Симптомы
```
Access to fetch at 'https://htvbbyoghtoionbvzekw.supabase.co/functions/v1/admin-users' 
from origin 'https://lassen11-oz-e9ba.twc1.net' has been blocked by CORS policy: 
Method DELETE is not allowed by Access-Control-Allow-Methods in preflight response.
```

### Причины
1. **Edge Function не развернута** - самая частая причина
2. **Устаревшая версия функции** - изменения не применились
3. **Неправильные CORS заголовки** - конфигурация неверна
4. **Проблемы с правами доступа** - нет доступа к проекту

## 🚀 Решения

### 1. Развертывание Edge Function

```bash
# Установка Supabase CLI
npm install -g supabase

# Логин в Supabase
supabase login

# Развертывание функции
supabase functions deploy admin-users --project-ref htvbbyoghtoionbvzekw
```

### 2. Проверка статуса

```bash
# Проверка через PowerShell
.\check-function-status.ps1

# Проверка через Bash
./check-function-status.sh
```

### 3. Проверка в панели Supabase

1. Откройте [Supabase Dashboard](https://supabase.com/dashboard)
2. Выберите проект `htvbbyoghtoionbvzekw`
3. Перейдите в раздел "Edge Functions"
4. Проверьте, что функция `admin-users` развернута
5. Посмотрите логи функции

### 4. Проверка CORS заголовков

```bash
# Тест OPTIONS запроса
curl -X OPTIONS -I https://htvbbyoghtoionbvzekw.supabase.co/functions/v1/admin-users

# Ожидаемые заголовки:
# Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
# Access-Control-Allow-Origin: *
# Access-Control-Allow-Headers: authorization, x-client-info, apikey, content-type
```

## 🔍 Диагностика

### Проверка 1: Доступность функции
```bash
curl -I https://htvbbyoghtoionbvzekw.supabase.co/functions/v1/admin-users
```

### Проверка 2: CORS preflight
```bash
curl -X OPTIONS -I https://htvbbyoghtoionbvzekw.supabase.co/functions/v1/admin-users
```

### Проверка 3: Логи функции
1. Откройте Supabase Dashboard
2. Перейдите в Edge Functions
3. Выберите функцию `admin-users`
4. Посмотрите логи

## 🛠️ Альтернативные решения

### Если развертывание не работает

1. **Проверьте права доступа**
   - Убедитесь, что у вас есть доступ к проекту
   - Проверьте, что вы вошли в правильный аккаунт

2. **Проверьте конфигурацию**
   - Убедитесь, что `project-ref` правильный
   - Проверьте, что функция существует в папке

3. **Попробуйте пересоздать функцию**
   ```bash
   # Удаление функции
   supabase functions delete admin-users --project-ref htvbbyoghtoionbvzekw
   
   # Создание заново
   supabase functions deploy admin-users --project-ref htvbbyoghtoionbvzekw
   ```

### Если CORS все еще не работает

1. **Проверьте браузер**
   - Очистите кэш браузера
   - Попробуйте в режиме инкогнито
   - Проверьте консоль разработчика

2. **Проверьте сеть**
   - Убедитесь, что нет блокировщиков
   - Проверьте настройки прокси

## 📞 Поддержка

Если проблемы остаются:

1. **Проверьте логи Supabase**
2. **Обратитесь к документации Supabase**
3. **Создайте issue в репозитории**
4. **Обратитесь к команде поддержки Supabase**

## ✅ После исправления

После успешного развертывания:
- ✅ Удаление сотрудников работает
- ✅ CORS ошибки исчезают
- ✅ Все API endpoints доступны
- ✅ Логирование работает корректно
