### Тестовое задание для тренеров модуля “Автоматизация тестирования веб-интерфейсов”

#### Задание 1 - Cypress - запуск тестов параллельно

1. Ознакомился с [проектом](https://github.com/Evgeniy-Varlamov/FS21-diplom) 
2. Написал тесты:
   
- тест-спек с тестами для проверки корректности отображения главной страницы
- тест-спек с тестами для проверки логина в админку
3. Подключил свой Github репозиторий с проектом к Dashboard
4. Организовал параллельный запуск тестов для тест спеков
   
[Отчет о параллельном тестировании в Dashboard](https://cloud.cypress.io/projects/vik539/runs/8/specs)

#### Задание 2 -  Подключение Jenkins

1. Shell скрипт Jenkins для запуска двух потоков в разных браузерах:

`npm run test:admin-jen --browser=$browser_spec1 & npm run test:cinema-jen --browser=$browser_spec2`

где  browser_spec1 и browser_spec2 параметры в сборке Jenkins где указываем разные браузеры

[Логи Jenkins по заданию об успешной сборке](https://docs.google.com/document/d/1HSV1DsreL3ER535sood4EWX_A5JEUoJRDp5QX0gd9vU/edit?usp=share_link) 


2. Shell скрипт Jenkins для запуска двух потоков для разных папок в разных браузерах:

`test:parallel-folder`   (см. в файле package.json)

[Логи Jenkins успешной сборки разных папок в двух потоках в разных браузерах](https://drive.google.com/file/d/1Iyys6O4evlMUAKH-sr3hk00wBSWttza_/view?usp=share_link)

* Что не получилось: Отобразить файл отчета от плагина HTML Publisher plugin, плагин подключил, но отображается не корректно. Отчет находится в папке:
  cypress\report\htmlpublisher-wrapper.html 

**Буду очень признателе за обратную связь по  HTML Publisher plugin и в целом по тестовому заданию!**  

[![My_Project](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/vik539&style=plastic&logo=cypress)](https://cloud.cypress.io/projects/vik539/runs)