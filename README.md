# Brewly Store

Фундамент storefront-проєкту на Nuxt 4 із шаровою архітектурою.
Проєкт орієнтований на масштабовану e-commerce розробку з чистою доменною структурою, сучасним tooling і передбачуваним workflow для команди.

---

# Технологічний стек

* **Nuxt 4**
* **Vue 3 Composition API**
* **Pinia**
* **TailwindCSS + SCSS**
* **Nuxt Modules**

  * i18n
  * sitemap
  * icon
  * fonts

---

# Встановлення

Встановлення залежностей:

```bash
pnpm install
```

---

# Доступні команди

| Команда              | Аліас     | Опис                                                |
| -------------------- | --------- | --------------------------------------------------- |
| `pnpm install`       | —         | Встановити залежності проєкту                       |
| `pnpm dev`           | `pnpm d`  | Запустити dev-сервер                                |
| `pnpm build`         | `pnpm b`  | Зібрати проєкт для production                       |
| `pnpm preview`       | `pnpm p`  | Локально переглянути production build               |
| `pnpm generate`      | `pnpm g`  | Згенерувати статичну версію                         |
| `pnpm format`        | `pnpm f`  | Відформатувати код через Prettier                   |
| `pnpm format:check`  | —         | Перевірити форматування без змін                    |
| `pnpm typecheck`     | `pnpm tc` | Запустити Nuxt typecheck                            |
| `pnpm test`          | —         | Запустити тести                                     |
| `pnpm test:watch`    | —         | Запустити тести у watch-режимі                      |
| `pnpm test:coverage` | —         | Згенерувати звіт покриття тестами                   |
| `pnpm sync:dev`      | —         | Синхронізувати `feature/BRS_dev` з `main`           |
| `pnpm sync:mykola`   | —         | Перебазувати `feature/BRS_mykola` на `BRS_dev`      |
| `pnpm push:dev`      | —         | Запушити `feature/BRS_dev` у remote                 |
| `pnpm commit`        | —         | Запустити Commitizen wizard для створення коміту    |
| `pnpm release`       | —         | Згенерувати changelog і підняти версію              |
| `pnpm release:minor` | —         | Зробити minor release                               |
| `pnpm release:major` | —         | Зробити major release                               |

---

# Workflow комітів

Коміти створюються через **Commitizen + Commitlint + Husky**.

Запуск wizard:

```bash
pnpm commit
```

Приклад коміту:

```text
feat(cart): implement cart drawer
fix(product): correct variant pricing
```

Типи комітів:

* `feat` — нова функціональність
* `fix` — виправлення багів
* `refactor` — рефакторинг
* `perf` — оптимізація продуктивності
* `style` — стилі або форматування
* `docs` — документація
* `test` — тести
* `chore` — tooling або конфігурація
* `build` — зміни збірки
* `ci` — CI/CD

---

# Release

Згенерувати нову версію і changelog:

```bash
pnpm release
```

Minor release:

```bash
pnpm release:minor
```

Major release:

```bash
pnpm release:major
```

Це автоматично:

* підніме версію проєкту
* згенерує **CHANGELOG.md**
* створить **git tag**

---

# Структура проєкту

```text
app
 ├ pages
 │   └ <route>/index.vue
 │
 ├ components
 │   ├ ui
 │   └ <domain>
 │
 ├ composables
 ├ stores
 ├ services
 ├ utils
 │
 └ assets
     └ styles
         └ <layer>/<feature>/index.scss

i18n
 └ locales
```

---

# Стратегія Git-гілок

Ролі гілок:

* `main` — стабільна production-гілка
* `feature/BRS_dev` — спільна інтеграційна гілка
* `feature/BRS_<name>` — персональна гілка розробника, створена від `feature/BRS_dev`

Порядок роботи:

1. Створити або оновити персональну гілку від `feature/BRS_dev`
2. Пушити зміни у `feature/BRS_<name>`
3. Створити PR з персональної гілки у `feature/BRS_dev`
4. Після інтеграційної перевірки злити `feature/BRS_dev` у `main`

Цикл синхронізації гілок:

Виконувати після завершеного merge flow `feature/BRS_<name>` -> `feature/BRS_dev` -> `main`.

1. Оновити інтеграційну гілку з `main`:
   `git checkout feature/BRS_dev`
   `git pull origin feature/BRS_dev`
   `git merge origin/main`
   `git push origin feature/BRS_dev`
2. Оновити персональну гілку з `feature/BRS_dev`:
   `git checkout feature/BRS_<name>`
   `git pull origin feature/BRS_<name>`
   `git rebase feature/BRS_dev`
   `git push --force-with-lease`

---

# Інструменти розробки

У проєкті використовується сучасний набір tooling для стабільної командної роботи:

* **Prettier**
* **prettier-plugin-tailwindcss**
* **Husky**
* **lint-staged**
* **Commitlint**
* **Commitizen**
* **standard-version**
* **Vitest**

---

# Jira / Confluence

* Для нових задач готуються готові драфти для ручного внесення в Jira.
* Важливі архітектурні рішення, зміни workflow, налаштування інтеграцій і релізні нотатки потрібно періодично вручну вносити в Confluence.

---
