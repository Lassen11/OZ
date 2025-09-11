# 🚀 Деплой на Timeweb Cloud

## 📋 Инструкции по деплою

### 1. Подготовка проекта
```bash
# Установка зависимостей
npm install

# Сборка проекта
npm run build:static

# Проверка сборки
node build-check.js
```

### 2. Конфигурация для Timeweb Cloud

Проект настроен для деплоя на Timeweb Cloud с помощью файла `timeweb.json`:

```json
{
  "buildCommand": "npm run build:static",
  "outputDirectory": "dist",
  "framework": "static",
  "nodeVersion": "18"
}
```

### 3. Структура сборки

После сборки создается папка `dist/` со следующими файлами:
- `index.html` - главная страница
- `assets/` - CSS и JS файлы
- `favicon.ico` - иконка сайта
- `.htaccess` - конфигурация Apache
- `robots.txt` - для поисковых систем

### 4. Особенности конфигурации

- **Vite target**: `es2015` для лучшей совместимости
- **Apache**: настроен для SPA routing через `.htaccess`
- **CORS**: настроены заголовки для API запросов
- **Кэширование**: настроено для статических файлов

### 5. Устранение неполадок

Если деплой не удается:

1. **Проверьте сборку локально:**
   ```bash
   npm run build:static
   node build-check.js
   ```

2. **Убедитесь, что все файлы зафиксированы:**
   ```bash
   git add .
   git commit -m "Fix deployment"
   git push
   ```

3. **Проверьте логи деплоя** в панели Timeweb Cloud

### 6. После успешного деплоя

- Приложение будет доступно по вашему домену
- Все API запросы будут работать через Supabase
- SPA routing настроен для всех маршрутов

## 🔧 Технические детали

- **Фреймворк**: React + Vite
- **Стили**: Tailwind CSS
- **Backend**: Supabase
- **Деплой**: Timeweb Cloud (статический)
- **Веб-сервер**: Apache + Nginx
