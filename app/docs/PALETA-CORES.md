# 🎨 Paleta de Cores - Bici nos Planos

## Cores Principais

### 🟢 Verde (Primary)
Cor principal do coletivo - representa sustentabilidade e mobilidade ativa

- `primary-50`: #e6f5f4 - Fundos claros
- `primary-100`: #b3e0dd - Hover suave
- `primary-200`: #80cbc6
- `primary-300`: #4db6af
- `primary-400`: #339d96
- `primary-500`: #258480 - **COR BASE** ✨
- `primary-600`: #1f6d6a - Hover escuro
- `primary-700`: #195654 - Textos importantes
- `primary-800`: #133f3e
- `primary-900`: #0d2828 - Textos muito escuros

**Uso:**
- Botões principais
- Links
- Destaques
- Headers

---

### 🟡 Amarelo/Verde (Secondary)
Cor de apoio - energia e ativismo

- `secondary-50`: #fafce8 - Fundos claros
- `secondary-100`: #f2f7b8
- `secondary-200`: #eaf288
- `secondary-300`: #e2ed58
- `secondary-400`: #dde542
- `secondary-500`: #D9DD72 - **COR BASE** ✨
- `secondary-600`: #c4c85e - Hover
- `secondary-700`: #9a9d4a
- `secondary-800`: #707236
- `secondary-900`: #464722

**Uso:**
- Destaques secundários
- Badges
- Alertas informativos
- Elementos decorativos

---

### 🔵 Azul Escuro (Neutral)
Cor neutra - seriedade e profissionalismo

- `neutral-50`: #e3e5e7 - Fundos muito claros
- `neutral-100`: #b0b5ba - Bordas
- `neutral-200`: #7d858d - Textos desabilitados
- `neutral-300`: #4a5560 - Textos secundários
- `neutral-400`: #283a47
- `neutral-500`: #101F2E - **COR BASE** ✨
- `neutral-600`: #0d1a26
- `neutral-700`: #0a141e - Textos principais
- `neutral-800`: #070f16
- `neutral-900`: #04090e - Fundos escuros

**Uso:**
- Textos principais
- Fundos escuros
- Footers
- Navegação

---

## Cores Funcionais

### ✅ Sucesso
- `success`: #22c55e
- Mensagens de sucesso, confirmações

### ⚠️ Aviso
- `warning`: #f59e0b
- Alertas, avisos importantes

### ❌ Erro
- `error`: #ef4444
- Mensagens de erro, validações

### ℹ️ Informação
- `info`: #3b82f6
- Dicas, informações gerais

---

## Exemplos de Uso no Tailwind

```jsx
// Botão principal
<button className="bg-primary-500 hover:bg-primary-600 text-white">
  Participar
</button>

// Card com destaque
<div className="bg-primary-50 border-l-4 border-primary-500">
  Conteúdo
</div>

// Texto com cor secundária
<h2 className="text-secondary-600 font-heading">
  Título
</h2>

// Fundo escuro
<footer className="bg-neutral-900 text-neutral-100">
  Footer
</footer>
```

---

## Combinações Recomendadas

### Hero Section
- Fundo: `primary-600` ou `primary-700`
- Texto: `white`
- Botão: `secondary-500` com hover `secondary-600`

### Cards
- Fundo: `white` ou `primary-50`
- Borda: `primary-200`
- Título: `neutral-900`
- Texto: `neutral-700`

### Footer
- Fundo: `neutral-900`
- Texto: `neutral-100`
- Links: `primary-300` com hover `primary-200`
