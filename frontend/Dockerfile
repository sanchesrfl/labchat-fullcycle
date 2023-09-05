# Use uma imagem oficial do Node.js como imagem pai
FROM node:16

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale o Angular CLI globalmente (opcional)
RUN npm install -g @angular/cli

# Instale as dependências do aplicativo
RUN npm install

# Copie o restante do código do aplicativo para o contêiner
COPY . .

# Construa o aplicativo Angular para produção
RUN ng build --configuration=production

# Exponha a porta na qual seu aplicativo será executado
EXPOSE 4200

# Inicie o aplicativo Angular quando o contêiner for iniciado
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
