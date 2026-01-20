# ⚠️ REGRA OBRIGATÓRIA: Desenvolvimento Responsivo

## Mobile-First Obrigatório

**SEMPRE desenvolver pensando em:**
1. Mobile (< 640px)
2. Tablet (640px - 1024px)
3. Desktop (> 1024px)

## Checklist para TODA modificação:

- [ ] Testado em mobile
- [ ] Testado em tablet
- [ ] Testado em desktop
- [ ] Breakpoints Tailwind aplicados (sm:, md:, lg:)
- [ ] Navegação adaptada para mobile
- [ ] Textos legíveis em todas as telas
- [ ] Botões e links com área de toque adequada (min 44px)
- [ ] Imagens responsivas

## Nunca:

- ❌ Desenvolver apenas para desktop
- ❌ Esquecer de testar em mobile
- ❌ Usar tamanhos fixos sem responsividade
- ❌ Ignorar breakpoints do Tailwind

---

# ⚠️ REGRA OBRIGATÓRIA: Ícones

## SEMPRE usar Lucide React

**Para qualquer ícone no projeto:**

```tsx
import { Menu, Calendar, MapPin } from "lucide-react";
<Menu className="w-6 h-6" />
```

## Nunca:

- ❌ Usar emojis em componentes
- ❌ Usar SVGs customizados
- ❌ Usar outras bibliotecas de ícones


---

# ⚠️ REGRA OBRIGATÓRIA: Documentação de Progresso

## SEMPRE atualizar PROGRESSO-DESENVOLVIMENTO.md

**Ao modificar, criar ou concluir qualquer funcionalidade:**

1. Abrir `/app/docs/PROGRESSO-DESENVOLVIMENTO.md`
2. Marcar como concluído `[x]` a tarefa correspondente
3. Atualizar percentual de progresso da Sprint
4. Atualizar progresso geral

## Exemplos de atualizações:

```markdown
- [x] Componente de Header/Navegação ✅
- [x] Home (página inicial) ✅
- [x] Página Quem Somos ✅
```

## Nunca:

- ❌ Criar/modificar código sem atualizar o progresso
- ❌ Esquecer de marcar tarefas concluídas
- ❌ Deixar documentação desatualizada
- ❌ Remover código sem desmarcar a tarefa correspondente no progresso


---

# ⚠️ REGRA OBRIGATÓRIA: Consultar Documentação

## SEMPRE consultar documentação em caso de dúvidas

**Antes de implementar ou modificar algo:**

1. Verificar `/app/docs/PROGRESSO-DESENVOLVIMENTO.md` - Status do projeto
2. Verificar `/app/docs/DOCUMENTACAO-GERAL.md` - Visão geral do projeto
3. Verificar `/app/docs/PALETA-CORES.md` - Cores e identidade visual
4. Verificar `/app/docs/INTEGRACAO-BACKEND.md` - APIs e integração
5. Verificar `/app/docs/DEPENDENCIAS.md` - Bibliotecas e ferramentas

## Quando consultar:

- ✅ Antes de escolher cores
- ✅ Antes de adicionar dependências
- ✅ Antes de criar novas funcionalidades
- ✅ Quando não souber o status de uma tarefa
- ✅ Quando precisar entender a arquitetura

## Nunca:

- ❌ Implementar sem verificar a documentação
- ❌ Usar cores fora da paleta definida
- ❌ Adicionar bibliotecas sem consultar DEPENDENCIAS.md
- ❌ Duplicar funcionalidades já existentes


---

# ⚠️ REGRA OBRIGATÓRIA: Identidade Visual

## SEMPRE seguir a identidade visual do projeto

**Ao desenvolver qualquer componente ou página:**

1. Usar apenas as cores da paleta definida em `/app/docs/PALETA-CORES.md`
2. Usar apenas as fontes configuradas:
   - `font-heading` (Anton) - Para títulos em UPPERCASE
   - `font-body` (Raleway) - Para textos corridos
3. Seguir os padrões de componentes definidos
4. Manter consistência visual em todo o site

## Fontes permitidas:

- ✅ **Anton** (font-heading) - Títulos, destaques, sempre UPPERCASE
- ✅ **Raleway** (font-body) - Textos, botões, conteúdo geral, breadcrumbs, navegação

## Cores permitidas:

- ✅ Primary (Verde) - `primary-50` até `primary-900`
- ✅ Secondary (Amarelo) - `secondary-50` até `secondary-900`
- ✅ Neutral (Azul escuro) - `neutral-50` até `neutral-900`
- ✅ Accent (Verde claro) - `accent-50` até `accent-900`

## Nunca:

- ❌ Usar fontes fora da identidade (Anton e Raleway são as únicas permitidas)
- ❌ Usar cores fora da paleta definida
- ❌ Criar estilos que fujam da identidade visual
- ❌ Ignorar os padrões de componentes estabelecidos


# ⚠️ REGRA OBRIGATÓRIA: SEO e Compartilhamento

## SEMPRE adicionar meta tags em TODAS as páginas

**Ao criar qualquer página:**

1. Adicionar meta tags básicas (title, description)
2. Adicionar Open Graph tags para compartilhamento em redes sociais
3. Adicionar Twitter Card tags
4. Incluir logo do projeto nas meta tags de imagem

## Meta tags obrigatórias:

```tsx
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Título da Página - Bici nos Planos MS" },
    { name: "description", content: "Descrição clara e objetiva da página" },
    
    // Open Graph
    { property: "og:title", content: "Título da Página - Bici nos Planos MS" },
    { property: "og:description", content: "Descrição clara e objetiva da página" },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Título da Página - Bici nos Planos MS" },
    { name: "twitter:description", content: "Descrição clara e objetiva da página" },
    { name: "twitter:image", content: "/logo.png" },
  ];
};
```

## Nunca:

- ❌ Criar página sem meta tags
- ❌ Esquecer Open Graph tags
- ❌ Usar descrições genéricas
- ❌ Omitir a imagem (logo) nas meta tags


---

# ⚠️ REGRA OBRIGATÓRIA: Componentização

## SEMPRE componentizar quando fizer sentido

**Ao criar páginas:**

1. Identificar seções reutilizáveis
2. Criar componentes para elementos repetidos
3. Documentar componentes criados em DOCUMENTACAO-GERAL.md
4. Marcar componentes no PROGRESSO-DESENVOLVIMENTO.md

## Quando componentizar:

- ✅ Seções que aparecem em múltiplas páginas
- ✅ Elementos com lógica complexa
- ✅ Padrões visuais repetidos
- ✅ Cards, banners, formulários, listas

## Estrutura de componente:

```tsx
// app/components/NomeComponente.tsx
import { ReactNode } from "react";

interface NomeComponenteProps {
  // Props tipadas
}

export function NomeComponente({ ...props }: NomeComponenteProps) {
  return (
    // JSX do componente
  );
}
```

## Documentação obrigatória:

1. Adicionar em DOCUMENTACAO-GERAL.md:
   - Localização do arquivo
   - Props disponíveis
   - Exemplo de uso
   - Variantes (se houver)

2. Adicionar em PROGRESSO-DESENVOLVIMENTO.md:
   - Marcar como concluído na Sprint correspondente
   - Atualizar contadores de progresso

## Nunca:

- ❌ Criar componente sem documentar
- ❌ Duplicar código que poderia ser componentizado
- ❌ Esquecer de marcar no progresso
- ❌ Omitir tipagem TypeScript


---

# ⚠️ REGRA OBRIGATÓRIA: Ordem PageBanner e Breadcrumb

## SEMPRE usar a ordem correta

**Padrão obrigatório em páginas internas:**

```tsx
<>
  <PageBanner title="Título" subtitle="Subtítulo" />
  <Breadcrumb />
  
  <div className="container mx-auto px-4 py-12">
    {/* Conteúdo da página */}
  </div>
</>
```

## Ordem correta:

1. ✅ **PageBanner** (banner com título e subtítulo)
2. ✅ **Breadcrumb** (navegação hierárquica)
3. ✅ **Conteúdo** (container com conteúdo da página)

## Nunca:

- ❌ Colocar Breadcrumb antes do PageBanner
- ❌ Omitir o Breadcrumb em páginas internas
- ❌ Omitir o PageBanner em páginas internas


---

# ⚠️ REGRA OBRIGATÓRIA: Criação de Novas Páginas

## SEMPRE seguir o fluxo completo

**Ao criar qualquer nova página:**

1. **Criar arquivo** em `app/routes/nomedapagina.tsx` (sem hífens, tudo junto)
2. **Registrar rota** em `app/routes.ts`
3. **Atualizar progresso** em PROGRESSO-DESENVOLVIMENTO.md

### Padrão de nomenclatura:

- ✅ **Arquivo**: `nomedapagina.tsx` (tudo junto, sem hífens)
- ✅ **Rota URL**: `nomedapagina` (tudo junto, sem hífens)
- ✅ **Exemplos**:
  - Arquivo: `quemsomos.tsx` → URL: `/quemsomos`
  - Arquivo: `contato.tsx` → URL: `/contato`
  - Arquivo: `galeria.tsx` → URL: `/galeria`

### Estrutura obrigatória:

```tsx
import type { MetaFunction } from "react-router";
import { PageBanner } from "~/components/PageBanner";
import { Breadcrumb } from "~/components/Breadcrumb";

export const meta: MetaFunction = () => {
  return [
    { title: "Título - Bici nos Planos MS" },
    { name: "description", content: "Descrição" },
    // Open Graph e Twitter Card completos
  ];
};

export default function NomeDaPagina() {
  return (
    <>
      <PageBanner title="Título" subtitle="Subtítulo" />
      <Breadcrumb />
      <div className="container mx-auto px-4 py-12">
        {/* Conteúdo */}
      </div>
    </>
  );
}
```

## Registro em routes.ts:

```tsx
export default [
  index("routes/_index.tsx"),
  layout("routes/_layout.tsx", [
    route("nomedapagina", "routes/nomedapagina.tsx"),
  ]),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
```

## Nunca:

- ❌ Criar página sem registrar em routes.ts
- ❌ Usar hífens no nome do arquivo (use tudo junto)
- ❌ Usar prefixo `_layout.` no nome do arquivo
- ❌ Omitir PageBanner e Breadcrumb
- ❌ Esquecer meta tags SEO
- ❌ Não atualizar o progresso


---

# Atalhos de Commit

## Atalhos disponíveis para Git

**Quando o usuário solicitar:**

- **cc** → Commit completo e detalhado
- **cs** → Commit simples
- **ccp** → Commit completo detalhado com push
- **csp** → Commit simples com push

## Comportamento:

### cc (Commit Completo)
```bash
git add .
git commit -m "feat: descrição detalhada da funcionalidade

- Detalhe 1
- Detalhe 2
- Detalhe 3"
```

### cs (Commit Simples)
```bash
git add .
git commit -m "feat: descrição breve"
```

### ccp (Commit Completo com Push)
```bash
git add .
git commit -m "feat: descrição detalhada da funcionalidade

- Detalhe 1
- Detalhe 2
- Detalhe 3"
git push
```

### csp (Commit Simples com Push)
```bash
git add .
git commit -m "feat: descrição breve"
git push
```

## Padrões de mensagem:

- ✅ **feat:** Nova funcionalidade
- ✅ **fix:** Correção de bug
- ✅ **docs:** Atualização de documentação
- ✅ **style:** Mudanças de estilo/formatação
- ✅ **refactor:** Refatoração de código
- ✅ **chore:** Tarefas gerais/manutenção

## Nunca:

- ❌ Fazer commit sem mensagem descritiva
- ❌ Usar mensagens genéricas como "update" ou "fix"
- ❌ Esquecer de adicionar os arquivos (git add)
