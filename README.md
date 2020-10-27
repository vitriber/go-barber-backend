# Recuperação de senha

**RF (Requisitos Funcionais)**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- o usuário deve poder resetar sua senha;

**RNF (Requisitos Não Funcionais)**

- Utilizar Mailtrap para testar envios de desenvolvimento
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN (Regras de Negócio)**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar;

# Atualização do perfil

**RF (Requisitos Funcionais)**

- O usuário deve poder atualizar seu nome, email e senha;

**RN (Regras de Negócio)**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- para atualizar sua senha, o usuário deve informar a nova senha;
- Para atualizar sua senha o usuario precisa confirmar a nova senha

# Painel do prestador

**RF (Requisitos Funcionais)**

- O usuário deve poder listar seus agendamentos de um dia especifico
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF (Requisitos Não Funcionais)**

- os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazendas no MongoDb;

**RN (Regras de Negócio)**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar

# Agendamento de serviços

**RF (Requisitos Funcionais)**
- o usuário deve poder listar todos os prestadores de serviço cadastrados;
- o usuário deve poder listar os dias de um mes com pelo menos um horário disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador
- o usuario deve poder realizar um novo agendamento com um prestador;

**RNF (Requisitos Não Funcionais)**

- A listagem de prestadores deve ser armazenada em cache;

**RN (Regras de Negócio)**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18h (primeiro as 7h, último as 17h)
- O usuario não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo.


