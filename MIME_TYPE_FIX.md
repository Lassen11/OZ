# Решение проблемы MIME-типов для ES модулей

## Проблема
```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream". Strict MIME type checking is enforced for module scripts per HTML spec.
```

## Причины
1. Сервер неправильно настроен для обслуживания ES модулей
2. Проблемы с кэшированием браузера
3. Неправильная конфигурация MIME-типов

## Решения

### 1. Обновленная конфигурация Vite
Файл `vite.config.ts` был обновлен с правильными настройками для ES модулей:
- Добавлены CORS заголовки
- Настроена правильная обработка модулей
- Добавлена оптимизация для ES модулей

### 2. Файл .htaccess для Apache
Создан файл `public/.htaccess` с правильными MIME-типами для JavaScript модулей.

### 3. Скрипт очистки кэша
Добавлен скрипт `npm run clear-cache` для очистки кэша Vite.

## Команды для решения проблемы

1. **Очистка кэша:**
   ```bash
   npm run clear-cache
   ```

2. **Запуск с чистой конфигурацией:**
   ```bash
   npm run dev:clean
   ```

3. **Обычный запуск:**
   ```bash
   npm run dev
   ```

## Дополнительные решения

### Для браузера:
1. Очистите кэш браузера (Ctrl+Shift+R)
2. Откройте DevTools → Network → Disable cache
3. Попробуйте в режиме инкогнито

### Для сервера:
1. Убедитесь, что сервер правильно настроен для обслуживания `.js` файлов с MIME-типом `application/javascript`
2. Проверьте настройки CORS
3. Убедитесь, что файлы не сжаты неправильно

## Проверка
После применения исправлений:
1. Откройте DevTools → Network
2. Найдите загружаемые `.js` файлы
3. Проверьте, что Content-Type = `application/javascript` или `text/javascript`
