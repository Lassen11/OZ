# OZ - Личный кабинет клиентов

Система управления клиентами юридической компании по банкротству физических лиц.

## 🚀 Технологии

- **Frontend:** React 18 + TypeScript
- **UI:** Tailwind CSS + shadcn/ui
- **Сборка:** Vite
- **Роутинг:** React Router
- **Состояние:** React Query + Context API
- **База данных:** Supabase

## 📦 Установка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр сборки
npm run preview
```

## 🔧 Настройка

1. Скопируйте `.env.example` в `.env.local`
2. Заполните переменные окружения для Supabase
3. Запустите `npm run dev`

## 🐳 Docker

```bash
# Сборка образа
docker build -t oz-app .

# Запуск контейнера
docker run -p 80:80 oz-app

# Или через docker-compose
docker-compose up
```

## 🌐 Деплой

### Timeweb Cloud
Приложение уже настроено для деплоя в Timeweb Cloud:
- **URL:** lassen11-oz-439e.twc1.net
- **IP:** 82.97.243.54

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📁 Структура проекта

```
src/
├── components/          # React компоненты
│   ├── ui/             # UI компоненты (shadcn/ui)
│   └── ...             # Бизнес компоненты
├── contexts/           # React контексты
├── hooks/              # Кастомные хуки
├── integrations/       # Интеграции (Supabase)
├── lib/                # Утилиты
├── pages/              # Страницы приложения
└── main.tsx           # Точка входа
```

## 🔒 Безопасность

- Все API запросы защищены через Supabase RLS
- JWT токены для аутентификации
- Валидация данных через Zod
- Защита от XSS и CSRF

## 📝 Лицензия

MIT License