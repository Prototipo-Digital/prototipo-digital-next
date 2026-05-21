export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-usar-prompts-ia',
    title: 'Como Usar Prompts com IA: Do Input ao Resultado Final',
    excerpt: 'Aprende a construir prompts eficazes para obter resultados profissionais com ferramentas de IA como ChatGPT, Claude e Gemini. Com exemplos reais e antes/depois.',
    category: 'Inteligência Artificial',
    readTime: '7 min',
    date: '20 Mai 2025',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    featured: true,
  },
  {
    slug: 'prompts-redes-sociais',
    title: 'Prompts para Redes Sociais: 10 Fórmulas que Funcionam',
    excerpt: 'Fórmulas de prompts testadas para criar posts de Instagram, LinkedIn e TikTok que geram engagement real — com exemplos prontos a usar.',
    category: 'Redes Sociais',
    readTime: '6 min',
    date: '21 Mai 2025',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
  },
  {
    slug: 'chatgpt-vs-claude-marketing',
    title: 'ChatGPT vs Claude: Qual Usar para Marketing Digital?',
    excerpt: 'Comparação direta entre os dois melhores modelos de IA para tarefas de marketing — copy, estratégia, análise e criação de conteúdo.',
    category: 'Ferramentas IA',
    readTime: '8 min',
    date: '21 Mai 2025',
    image: 'https://images.unsplash.com/photo-1676573040366-a80d97c82c16?w=800&q=80',
  },
  {
    slug: 'calendario-conteudo-ia',
    title: 'Como Criar um Calendário de Conteúdo com IA em 30 Minutos',
    excerpt: 'Guia passo a passo para usar IA e criar um mês inteiro de conteúdo estratégico para as tuas redes sociais — mais rápido do que imaginas.',
    category: 'Estratégia',
    readTime: '7 min',
    date: '22 Mai 2025',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
  },
  {
    slug: 'prompt-chaining',
    title: 'Prompt Chaining: A Técnica Avançada que Multiplica os Resultados',
    excerpt: 'Aprende a encadear prompts em sequência para obter outputs de qualidade profissional que um único prompt nunca conseguiria.',
    category: 'Técnicas Avançadas',
    readTime: '9 min',
    date: '22 Mai 2025',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
  },
  {
    slug: 'prompts-email-marketing',
    title: '10 Prompts Prontos para Email Marketing que Convertem',
    excerpt: 'De boas-vindas a reativação de clientes — prompts completos para cada tipo de email com estrutura, tom e call-to-action incluídos.',
    category: 'Email Marketing',
    readTime: '6 min',
    date: '23 Mai 2025',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633564a1?w=800&q=80',
  },
];
