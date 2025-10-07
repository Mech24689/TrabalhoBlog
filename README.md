# Atividade – HTML e CSS

Este projeto tem como objetivo reproduzir fielmente as telas apresentadas nas páginas 8 a 20 do documento base, aplicando princípios de **HTML semântico**, **CSS moderno (Grid e Flexbox)**, **responsividade mobile-first** e **boas práticas de acessibilidade**.

---

## Estrutura do Projeto

```
/TrabalhoBlog/
│
├── 08.Index.html
├── 09.Categoria.html
├── 10.Destaques.html
├── 11.Assinatura.html
├── 12.Admin-Gerenciamento-Categorias.html
├── 13.Admin-Criar-Post.html
├── 14.Admin-Escolhas-Editor.html
├── 15.Admin-Gerenciamento-Usuarios.html
├── 16.Admin-Fila-Revisao.html
├── 17.Admin-Fila-Comentarios.html
├── 18.Pagina-Resultados-Busca.html
├── 19.1.Login.html
├── 19.2.Criar-Conta.html
├── 20.Perfil-Usuario.html
│
├── /css/
│   └── styles.css
│
├── /pdf/
│   └── exercicio_20250922193447.pdf
│
└── README.md
```

---

## Telas Implementadas

As seguintes telas foram desenvolvidas com base no PDF (páginas 8 a 20):

1. **08.Index.html** – Página inicial com navegação por tópicos e seções de destaques e escolhas do editor.  
2. **09.Categoria.html** – Exibição de posts filtrados por categoria em grid responsivo.  
3. **10.Destaques.html** – Lista de posts em destaque com cards uniformes.  
4. **11.Assinatura.html** – Tela de planos e opções de assinatura.  
5. **12.Admin-Gerenciamento-Categorias.html** – Página de administração para editar e excluir categorias.  
6. **13.Admin-Criar-Post.html** – Formulário para criação e publicação de novos posts.  
7. **14.Admin-Escolhas-Editor.html** – Gerenciamento das postagens destacadas como “Escolhas do Editor”.  
8. **15.Admin-Gerenciamento-Usuarios.html** – Painel de controle para listar, bloquear e desbloquear usuários.  
9. **16.Admin-Fila-Revisao.html** – Lista de posts pendentes de revisão, com ações de aprovação e reprovação.  
10. **17.Admin-Fila-Comentarios.html** – Moderação de comentários pendentes.  
11. **18.Pagina-Resultados-Busca.html** – Exibição de resultados de busca com layout em lista.  
12. **19.1.Login.html** – Tela de login de usuários.  
13. **19.2.Criar-Conta.html** – Tela de registro de novos usuários.  
14. **20.Perfil-Usuario.html** – Página de perfil com informações e opções de edição.

---

## Decisões de Layout

- O projeto segue o conceito **mobile-first**, com o CSS base para telas pequenas.  
- As páginas usam **CSS Grid** para a estrutura principal (header, aside, main e footer).  
- **Flexbox** é aplicado em menus, listas e seções de cartões.  
- Tipografia e espaçamentos utilizam **unidades relativas (`rem`)**.  
- Cores e espaçamentos foram padronizados em **variáveis CSS** no `:root`.  
- Todas as páginas compartilham o mesmo **layout de cabeçalho e rodapé**, garantindo consistência visual.

## Breakpoints Utilizados

O layout é totalmente responsivo, com ajustes progressivos em diferentes larguras de tela:

| Dispositivo | Breakpoint | Descrição |
|--------------|-------------|------------|
| Celulares pequenos | min-width: 320px | Layout base mobile-first |
| Celulares médios | min-width: 480px | Ajuste de tipografia e espaçamento |
| Tablets | min-width: 768px | Ajuste de colunas e organização de conteúdo |
| Notebooks/Desktops | min-width: 1024px | Layout com múltiplas colunas |
| Monitores grandes | min-width: 1440px | Expansão máxima e alinhamento centralizado |


## Acessibilidade 

- Utilização correta de **tags semânticas** (`header`, `nav`, `main`, `section`, `article`, `footer`).  
- Todas as **imagens possuem atributo `alt`** descritivo.  
- **Labels** associadas aos inputs via `for` e `id`.  
- **Foco visível** em todos os elementos interativos com `:focus`.  
- **Contraste de cores** validado com WebAIM Contrast Checker (mínimo 4.5:1).  
- **Navegação por teclado funcional** em toda a aplicação.


## Fidelidade ao Design

Todas as páginas foram desenvolvidas com base nas proporções, cores, espaçamentos e hierarquias visuais apresentadas no PDF.  


## Decisões Técnicas Adicionais

- O projeto **não utiliza frameworks** como Bootstrap ou Tailwind.  
- O código é **modular, comentado e com nomes de classes claros**.  
- Escala tipográfica e de espaçamento consistente em todo o CSS.  


## Repositório

Repositório público disponível em:  
https://github.com/Mech24689/TrabalhoBlog

## Créditos

Projeto desenvolvido para a disciplina de **Usabilidade, desenvolvimento web, mobile e jogos.**

**Grupo**

Gabriel Dias Cristino Sierra - 822144973
Leonardo Freitas Moraes - 822135116
Marcio Balieiro de Faria - 824219962 
Gabriel dos Santos Castro - 822157975
Lucas Quireza - 822229907
Caio Bonato - 822165248
Juan Silva Souza - 822138724
Patrick Hernani Souza da Silva - 82313437