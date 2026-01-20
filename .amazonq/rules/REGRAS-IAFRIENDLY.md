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
- ✅ **Raleway** (font-body) - Textos, botões, conteúdo geral

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
