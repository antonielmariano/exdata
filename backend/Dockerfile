FROM python:3.10

# setando variáveis de ambiente
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


# executando a instalação dos pacotes

# definindo o diretório de trabalho no contêiner
WORKDIR /code

# copiando todos os arquivos para o diretório de trabalho
COPY . /code/

# atualizando o pip e instalando requerimentos
RUN pip install -U pip
RUN pip install -r requirements.txt