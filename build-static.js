#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Создание статической сборки для Timeweb Cloud...\n');

try {
  // Очищаем предыдущую сборку
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Создаем папку dist
  fs.mkdirSync('dist', { recursive: true });

  // Копируем public файлы
  if (fs.existsSync('public')) {
    console.log('📁 Копируем файлы из public/...');
    copyDir('public', 'dist');
  }

  // Собираем проект
  console.log('🔨 Запускаем сборку Vite...');
  execSync('npm run build', { stdio: 'inherit' });

  // Проверяем результат
  if (fs.existsSync('dist/index.html')) {
    console.log('✅ Сборка успешно создана!');
    
    // Показываем структуру
    const files = getAllFiles('dist');
    console.log(`📊 Создано файлов: ${files.length}`);
    
    files.forEach(file => {
      const stats = fs.statSync(file);
      const size = (stats.size / 1024).toFixed(2);
      console.log(`   📄 ${path.relative('dist', file)} (${size} KB)`);
    });
    
  } else {
    console.error('❌ Ошибка: index.html не найден после сборки');
    process.exit(1);
  }

} catch (error) {
  console.error('❌ Ошибка при сборке:', error.message);
  process.exit(1);
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function getAllFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  
  return files;
}
