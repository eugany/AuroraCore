---
day: 24
title: Иерархия диагностики
date: 2026-02-21
tags:
  - diagnostics
  - orchestration
  - ollama
lang: ru
---

Дневники вайбкодинга: дружба роботов.

1. Process Supervisor — источник сигналов (status, last_line).
2. Ollama (oss20b) — первый уровень: классифицирует инцидент и решает, звать ли Codex.
3. Codex — эскалация: запускается в нужной сессии с уже структурированным контекстом.
