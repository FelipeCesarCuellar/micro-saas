# Projeto Micro SaaS

Esse projeto foi desenvolvido durante o Desafio Micro SaaS da #Rocketseat em Abril de 2025, ensinando os conceitos e técnicas aplicados para desenvolver um MVP SaaS de forma rápida, e eficiente.

## Executando o projeto

Primeiro, instale as dependências:

```bash
npm install
# ou
yarn
```

Depois, insira as variáveis de ambiente no arquivo .env.local:
- AUTH_SECRET
- AUTH_GOOGLE_ID
- AUTH_GOOGLE_SECRET
- FIREBASE_PROJECT_ID
- FIREBASE_CLIENT_EMAIL
- FIREBASE_PRIVATE_KEY_B64

Finalmente, execute o projeto em ambiente de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

Abra a URL [http://localhost:3000](http://localhost:3000) no seu navegador para acessar o App.

## Documentação das principais ferramentas

Next.js:
- [Documentatação do Next.js](https://nextjs.org/docs)
- [Tutorial do Next.js](https://nextjs.org/learn)

Auth.js (ou Nextauth.js):
- [Referências da biblioteca](https://authjs.dev/reference/overview)

Tailwind CSS:
- [Documentação do Tailwind](https://tailwindcss.com/docs)

Esse projeto utiliza:
- [Autenticação via Google](https://developers.google.com/identity/protocols/oauth2?hl=pt-br)
- [Integrações com o Firebase(https://firebase.google.com/?hl=pt-br)
- [Deploy na Vercel](https://vercel.com/)
