🚀 Meu Portfólio

Este é o meu **portfólio pessoal**, desenvolvido com **Next.js e Tailwind CSS**, e hospedado no **GitHub Pages**.
O objetivo deste projeto é apresentar meus trabalhos, minhas habilidades e permitir que visitantes entrem em contato comigo.

🔗 **Acesse o portfólio:** https://renatoferreirafilho.github.io/

=================================================

🎯 FUNCIONALIDADES

✅ Interface Responsiva: Mobile First.
✅ Seção de Projetos: Exibição dos principais projetos com detalhes.
✅ Página de Contato: Formulário funcional integrado com API externa.
✅ Otimização de Imagens: Uso do next/image para melhor desempenho.

=================================================

🛠️ TECNOLOGIAS UTILIZADAS

-   Next.js - Framework React para aplicações modernas.
-   Tailwind CSS - Biblioteca CSS para estilização eficiente.
-   TypeScript - Superset do JavaScript para tipagem segura.
-   Nodemailer - Biblioteca para envio de emails (usada na API de contato).
-   Render - Hospedagem da API para envio de mensagens.
-   GitHub Pages - Hospedagem gratuita do portfólio estático.

=================================================

📂 ESTRUTURA DO PROJETO

portfolio/  
│── public/ # Arquivos estáticos (imagens, favicon)  
│── components/ # Componentes reutilizáveis (Header, Hero, Projects, Contact, etc.)  
│── pages/ # Páginas principais  
│── styles/ # Estilos globais  
│── .gitignore # Ignora arquivos desnecessários  
│── next.config.js # Configurações do Next.js  
│── tailwind.config.js # Configuração do Tailwind CSS  
│── package.json # Dependências do projeto  
│── README.md # Documentação do projeto

=================================================

🛠️ COMO RODAR O PROJETO LOCALMENTE

1️⃣ Clone o Repositório:
git clone https://github.com/RenatoFerreiraFilho/renatoferreirafilho.github.io.git
cd renatoferreirafilho.github.io

2️⃣ Instale as Dependências:
npm install

3️⃣ Rode o Servidor Local:
npm run dev

📌 O projeto estará disponível em http://localhost:3000.

=================================================

🌎 IMPLANTAÇÃO

O projeto está dividido em duas partes:

🔹 **Frontend:** Hospedado no **GitHub Pages**  
🔹 **Backend (API de Contato):** Hospedado no **Render**

Gerando o Build para Produção:
npm run build

Deploy no GitHub Pages:
cp -r dist/\* caminho/para/renatoferreirafilho.github.io
cd caminho/para/renatoferreirafilho.github.io
git add .
git commit -m "Deploy atualizado"
git push origin main

=================================================

✉️ COMO FUNCIONA O FORMULÁRIO DE CONTATO?

O formulário envia os dados para a **API hospedada no Render**, que processa e envia os emails usando **Nodemailer**.

🔗 **Endpoint da API:** https://portfolio-api.onrender.com/api/contact

O serviço de backend do Render fica indisponível após algum tempo de inatividade, por isso, o primeiro envio de formulário pode demorar cerca de 1 minuto.  
Após o primeiro envio, o serviço fica normal.

=================================================

📜 LICENÇA

Este projeto está sob a **Licença MIT**. Sinta-se à vontade para usar, modificar e compartilhar. 🚀

=================================================

💡 **Desenvolvido por Renato Ferreira** | 💻 Full Stack Developer
