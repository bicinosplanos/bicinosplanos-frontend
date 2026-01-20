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