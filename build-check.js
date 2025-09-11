#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Проверка сборки для Timeweb Cloud...\n');

// Проверяем наличие папки dist
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ Папка dist не найдена. Запустите: npm run build');
  process.exit(1);
}

// Проверяем наличие index.html
const indexPath = path.join(distPath, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ Файл dist/index.html не найден');
  process.exit(1);
}

// Проверяем наличие assets
const assetsPath = path.join(distPath, 'assets');
if (!fs.existsSync(assetsPath)) {
  console.error('❌ Папка dist/assets не найдена');
  process.exit(1);
}

// Считаем файлы
const files = fs.readdirSync(distPath, { recursive: true });
const htmlFiles = files.filter(f => f.endsWith('.html'));
const jsFiles = files.filter(f => f.endsWith('.js'));
const cssFiles = files.filter(f => f.endsWith('.css'));

console.log('✅ Структура сборки:');
console.log(`   📁 dist/ - ${files.length} файлов`);
console.log(`   📄 HTML файлы: ${htmlFiles.length}`);
console.log(`   📄 JS файлы: ${jsFiles.length}`);
console.log(`   📄 CSS файлы: ${cssFiles.length}`);

// Проверяем размер файлов
const stats = fs.statSync(indexPath);
console.log(`   📊 Размер index.html: ${(stats.size / 1024).toFixed(2)} KB`);

console.log('\n✅ Сборка готова для деплоя на Timeweb Cloud!');
console.log('📋 Следующие шаги:');
console.log('   1. Зафиксируйте изменения: git add . && git commit -m "Fix build for Timeweb"');
console.log('   2. Отправьте на GitHub: git push');
console.log('   3. Попробуйте деплой снова в Timeweb Cloud');
