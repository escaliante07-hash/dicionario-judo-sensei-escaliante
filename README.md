# Dicionário do Judô — Sensei Rodrigo Escaliante

Aplicativo PWA instalável para consultar as 100 técnicas Kodokan, termos, Kihon, números e pronúncias.

## Abrir e instalar

O repositório publica o aplicativo pelo GitHub Pages. A cada atualização na branch `main`, a ação **Publish PWA to GitHub Pages** publica o app automaticamente. O resultado da publicação aparece na aba **Actions**. O endereço ficará disponível em:

https://escaliante07-hash.github.io/dicionario-judo-sensei-escaliante/

Abra o endereço no navegador do celular e use **Instalar aplicativo** (Android) ou **Adicionar à Tela de Início** (iPhone).

## Arquivos principais

- `dist/index.html`: interface e lógica do aplicativo
- `dist/data.json`: conteúdo e camada de leitura vocal
- `dist/manifest.webmanifest`: configuração do PWA
- `dist/sw.js`: service worker e cache offline
- `dist/icons/`: ícones e identidade visual

O app também mantém a versão hospedada anteriormente no Sites; o repositório GitHub é a publicação pública destinada ao acesso dos alunos.
