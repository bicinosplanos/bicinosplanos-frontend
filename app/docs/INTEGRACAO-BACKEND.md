# 🔌 Documentação de Integração com Backend - Bici nos Planos

## Base URL

```
Desenvolvimento: http://localhost:3000/api/v1
Produção: https://bicinosplanos-backend.onrender.com/api/v1
```

---

## 📄 Endpoints - Pages

### GET /api/v1/pages/:slug

**Descrição:** Busca uma página institucional por slug

**Resposta Esperada:**
```json
{
  "id": "quem-somos",
  "title": "Quem Somos",
  "slug": "quem-somos",
  "content": "<p>Conteúdo HTML da página...</p>",
  "status": "published",
  "createdAt": "2024-01-10T10:00:00Z",
  "updatedAt": "2024-01-15T14:30:00Z"
}
```

**Erros:**
- 404: Página não encontrada
- 500: Erro interno

---

## 📅 Endpoints - Timeline

### GET /api/v1/timeline

**Descrição:** Lista todos os eventos da linha do tempo (apenas published)

**Resposta Esperada:**
```json
[
  {
    "id": "2021-1",
    "year": 2021,
    "month": 3,
    "title": "Fundação do Coletivo",
    "description": "Descrição do evento...",
    "imageUrl": "https://...",
    "order": 1,
    "status": "published",
    "createdAt": "2024-01-10T10:00:00Z"
  }
]
```

**Ordenação:** Por year DESC, order ASC

---

## 🎉 Endpoints - Events

### GET /api/v1/events

**Descrição:** Lista eventos

**Query Params:**
- `future=true` - Apenas eventos futuros
- `limit=10` - Limite de resultados
- `status=published` - Filtro por status

**Resposta Esperada:**
```json
[
  {
    "id": "evt-001",
    "title": "Pedalada Urbana",
    "slug": "pedalada-urbana-2024",
    "description": "Descrição do evento...",
    "date": "2024-02-10T09:00:00Z",
    "location": "Campo Grande, MS",
    "imageUrl": "https://...",
    "status": "published",
    "createdAt": "2024-01-10T10:00:00Z"
  }
]
```

---

## 📝 Endpoints - Posts (Blog)

### GET /api/v1/posts

**Descrição:** Lista posts do blog

**Query Params:**
- `limit=10` - Limite de resultados
- `category=mobilidade` - Filtro por categoria
- `status=published` - Filtro por status

**Resposta Esperada:**
```json
[
  {
    "id": "post-001",
    "title": "Título do Post",
    "slug": "titulo-do-post",
    "excerpt": "Resumo do post...",
    "content": "<p>Conteúdo completo...</p>",
    "category": "mobilidade",
    "tags": ["bicicleta", "cidade"],
    "imageUrl": "https://...",
    "author": "Coletivo",
    "status": "published",
    "publishedAt": "2024-01-10T10:00:00Z",
    "createdAt": "2024-01-10T10:00:00Z"
  }
]
```

### GET /api/v1/posts/:slug

**Descrição:** Busca um post específico

**Resposta:** Mesmo formato acima (objeto único)

---

## 🔐 Endpoints Admin (Autenticados)

### Headers Obrigatórios
```
Authorization: Bearer <token>
Content-Type: application/json
```

### POST /api/v1/pages

**Body:**
```json
{
  "title": "Nova Página",
  "slug": "nova-pagina",
  "content": "<p>Conteúdo...</p>",
  "status": "draft"
}
```

**Resposta:** 201 Created + objeto criado

### PUT /api/v1/pages/:id

**Body:** Mesmos campos do POST

**Resposta:** 200 OK + objeto atualizado

### DELETE /api/v1/pages/:id

**Resposta:** 204 No Content

---

## 📧 Endpoints - Contato

### POST /api/v1/contact

**Body:**
```json
{
  "name": "Nome",
  "email": "email@example.com",
  "subject": "Assunto",
  "message": "Mensagem..."
}
```

**Resposta:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso"
}
```

---

## 🖼️ Endpoints - Upload

### POST /api/v1/upload

**Headers:** `Content-Type: multipart/form-data`

**Body:** FormData com campo `file`

**Resposta:**
```json
{
  "url": "https://storage.../image.jpg",
  "filename": "image.jpg",
  "size": 102400
}
```

---

## ⚠️ Tratamento de Erros

### Formato Padrão de Erro
```json
{
  "error": true,
  "message": "Mensagem de erro",
  "code": "ERROR_CODE",
  "details": {}
}
```

### Códigos HTTP
- 200: Sucesso
- 201: Criado
- 204: Sem conteúdo (delete)
- 400: Requisição inválida
- 401: Não autenticado
- 403: Sem permissão
- 404: Não encontrado
- 500: Erro interno

---

## 🔄 Status de Conteúdo

Todos os conteúdos possuem campo `status`:
- `draft` - Rascunho (não aparece no frontend público)
- `published` - Publicado (visível no frontend)

**Frontend público:** Apenas consome `status: "published"`

---

## 🚀 Implementação no Frontend

### Service Layer (exemplo)

```typescript
// app/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

export async function getPage(slug: string) {
  const response = await fetch(`${API_BASE_URL}/pages/${slug}`);
  if (!response.ok) throw new Error('Página não encontrada');
  return response.json();
}

export async function getTimeline() {
  const response = await fetch(`${API_BASE_URL}/timeline`);
  if (!response.ok) throw new Error('Erro ao carregar timeline');
  return response.json();
}

export async function getEvents(future = false) {
  const url = `${API_BASE_URL}/events${future ? '?future=true' : ''}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Erro ao carregar eventos');
  return response.json();
}

export async function getPosts(limit = 10) {
  const response = await fetch(`${API_BASE_URL}/posts?limit=${limit}`);
  if (!response.ok) throw new Error('Erro ao carregar posts');
  return response.json();
}
```

---

## 📦 Types TypeScript

```typescript
// app/types/api.ts

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  month?: number;
  title: string;
  description: string;
  imageUrl?: string;
  order: number;
  status: 'draft' | 'published';
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  location: string;
  imageUrl?: string;
  status: 'draft' | 'published';
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  author: string;
  status: 'draft' | 'published';
  publishedAt: string;
  createdAt: string;
}

export interface ApiError {
  error: true;
  message: string;
  code: string;
  details?: any;
}
```

---

## 🧪 Mock Data (Desenvolvimento sem Backend)

```typescript
// app/services/mock.ts

export const mockPage = {
  id: "quem-somos",
  title: "Quem Somos",
  slug: "quem-somos",
  content: "<p>Somos um coletivo...</p>",
  status: "published",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export const mockTimeline = [
  {
    id: "1",
    year: 2021,
    month: 3,
    title: "Fundação",
    description: "Início do coletivo",
    order: 1,
    status: "published",
    createdAt: new Date().toISOString()
  }
];

// Use durante desenvolvimento:
// const USE_MOCK = !import.meta.env.VITE_API_URL;
```
