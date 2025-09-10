# 🚀 Руководство по развертыванию Edge Function

## Проблема CORS

Ошибка CORS возникает потому, что Edge Function не развернута на Supabase или не обновлена. Для исправления нужно развернуть функцию на сервере.

## 📋 Шаги развертывания

### 1. Установка Supabase CLI

```bash
# Установка через npm
npm install -g supabase

# Или через PowerShell
npm install -g supabase
```

### 2. Логин в Supabase

```bash
# Логин в Supabase
supabase login
```

### 3. Развертывание Edge Function

```bash
# Развертывание функции admin-users
supabase functions deploy admin-users --project-ref htvbbyoghtoionbvzekw
```

### 4. Альтернативный способ (PowerShell)

```powershell
# Запуск скрипта развертывания
.\deploy-supabase.ps1
```

## 🔧 Что было исправлено

### 1. CORS заголовки
- ✅ `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`
- ✅ `Access-Control-Allow-Headers: authorization, x-client-info, apikey, content-type`
- ✅ `Access-Control-Allow-Origin: *`
- ✅ `Access-Control-Max-Age: 86400`

### 2. Обработка preflight запросов
- ✅ Правильная обработка OPTIONS запросов
- ✅ Детальное логирование для отладки
- ✅ Модульная структура CORS

### 3. Конфигурационные файлы
- ✅ `cors.ts` - модуль для CORS
- ✅ `deno.json` - конфигурация Deno
- ✅ `tsconfig.json` - конфигурация TypeScript
- ✅ `package.json` - конфигурация npm
- ✅ `Dockerfile` - для контейнеризации
- ✅ `docker-compose.yml` - для локальной разработки

### 4. Документация и тесты
- ✅ `README.md` - подробная документация
- ✅ `test.ts` - тесты для функции
- ✅ Скрипты развертывания

## 🚨 Важно!

**Edge Function должна быть развернута на Supabase для работы!**

Без развертывания функция не будет доступна по URL `https://htvbbyoghtoionbvzekw.supabase.co/functions/v1/admin-users` и будет возникать ошибка CORS.

## 📞 Поддержка

Если проблемы остаются после развертывания:

1. Проверьте логи Edge Function в панели Supabase
2. Убедитесь, что функция развернута успешно
3. Проверьте права доступа к проекту
4. Обратитесь к документации Supabase

## ✅ После развертывания

После успешного развертывания:
- ✅ Удаление сотрудников будет работать
- ✅ CORS ошибки исчезнут
- ✅ Все API endpoints будут доступны
- ✅ Логирование будет работать
