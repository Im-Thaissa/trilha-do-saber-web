// Conteúdo do site separado dos componentes.
// Assim, para mudar um texto, basta editar este arquivo.

export const projeto = {
  nome: 'Trilha do Saber',
  slogan: 'Sua trilha de estudos para o ENADE, guiada pelo seu desempenho.',
  resumo:
    'Plataforma de estudos adaptativa que organiza questões de provas anteriores do ENADE, aplica simulados e acompanha o desempenho do aluno, direcionando os estudos para os temas que mais precisam de reforço.',
  curso: 'Sistemas de Informação — 8ª B Noturno',
  instituicao: 'UMC — Universidade de Mogi das Cruzes',
  orientador: 'Prof. Leonardo Cavalcante Alvino',
  repositorio: 'https://github.com/DeregL2/Trilha-do-Saber',
}

export const numeros = [
  { valor: '4', legenda: 'perfis de acesso' },
  { valor: 'PDF → banco', legenda: 'importação automática de provas' },
  { valor: '100+', legenda: 'testes automatizados' },
  { valor: '2FA', legenda: 'verificação em duas etapas' },
]

export const problemaSolucao = {
  problema: [
    'Provas anteriores do ENADE só existem em PDFs soltos.',
    'Não há um banco de questões organizado por curso e ano.',
    'O aluno estuda sem saber quais temas são seus pontos fracos.',
    'Professores e coordenadores não têm visão do preparo da turma.',
  ],
  solucao: [
    'Importação automática da prova e do gabarito direto do PDF oficial.',
    'Questões organizadas por curso, ano e tema.',
    'Simulados com correção automática e trilha personalizada.',
    'Dashboards por aluno, turma e curso para quem acompanha.',
  ],
}

export const funcionalidades = [
  {
    icone: '📄',
    titulo: 'Importação de provas',
    texto:
      'Lê o PDF oficial do ENADE (em duas colunas), extrai enunciados, alternativas e imagens, corrige ligaduras e remove cabeçalhos repetidos.',
  },
  {
    icone: '✅',
    titulo: 'Gabarito automático',
    texto:
      'Importa o gabarito oficial em PDF com várias estratégias de leitura para formatos diferentes.',
  },
  {
    icone: '📝',
    titulo: 'Simulados',
    texto:
      'O aluno resolve simulados e provas aplicadas pela turma, com correção automática e encerramento por tempo.',
  },
  {
    icone: '📊',
    titulo: 'Dashboards',
    texto:
      'Gráficos de desempenho por aluno, turma e curso, além de ranking da turma.',
  },
  {
    icone: '🏫',
    titulo: 'Gestão acadêmica',
    texto:
      'Coordenadores gerenciam turmas, disciplinas, professores e importam alunos em massa por planilha.',
  },
  {
    icone: '🔒',
    titulo: 'Segurança',
    texto:
      'Senhas com BCrypt, verificação em duas etapas por e-mail, redefinição de senha com token único e log de auditoria.',
  },
]

export const perfis = [
  {
    nome: 'Aluno',
    cor: 'roxo',
    itens: [
      'Cadastro com aceite de termos e LGPD',
      'Resolve simulados e provas da turma',
      'Acompanha seu desempenho e ranking',
    ],
  },
  {
    nome: 'Professor',
    cor: 'verde',
    itens: [
      'Visualiza as turmas alocadas',
      'Acompanha o desempenho dos alunos',
      'Dashboard por turma',
    ],
  },
  {
    nome: 'Coordenador',
    cor: 'laranja',
    itens: [
      'Gerencia o banco de questões',
      'Aplica provas para turmas inteiras',
      'Dashboards central, por curso e por turma',
    ],
  },
  {
    nome: 'Administrador',
    cor: 'vermelho',
    itens: [
      'Gerencia todos os tipos de conta',
      'Consulta o log de auditoria',
      'Expurgo automático de registros antigos',
    ],
  },
]

export const passos = [
  { titulo: 'Importar', texto: 'O coordenador envia o PDF da prova e o gabarito oficial.' },
  { titulo: 'Organizar', texto: 'O sistema extrai e salva as questões no banco, por curso e ano.' },
  { titulo: 'Praticar', texto: 'O aluno resolve simulados e provas aplicadas pela turma.' },
  { titulo: 'Acompanhar', texto: 'Dashboards mostram onde reforçar os estudos.' },
]

export const tecnologias = [
  {
    grupo: 'Back-end',
    itens: [
      { nome: 'Java 21', desc: 'Linguagem principal do sistema' },
      { nome: 'Spring Boot', desc: 'Framework web, segurança e injeção de dependências' },
      { nome: 'Spring Data JPA', desc: 'Acesso ao banco com Hibernate' },
      { nome: 'Apache PDFBox', desc: 'Leitura e extração de texto e imagens dos PDFs' },
    ],
  },
  {
    grupo: 'Front-end',
    itens: [
      { nome: 'Thymeleaf', desc: 'Páginas renderizadas no servidor' },
      { nome: 'Chart.js', desc: 'Gráficos dos dashboards' },
      { nome: 'Anime.js', desc: 'Animações da interface' },
      { nome: 'React', desc: 'Este site de apresentação' },
    ],
  },
  {
    grupo: 'Dados e infraestrutura',
    itens: [
      { nome: 'PostgreSQL', desc: 'Banco de dados relacional' },
      { nome: 'Resend', desc: 'Envio de e-mails transacionais' },
      { nome: 'Render', desc: 'Hospedagem da aplicação' },
      { nome: 'Vercel', desc: 'Hospedagem deste site' },
    ],
  },
  {
    grupo: 'Testes e qualidade',
    itens: [
      { nome: 'JUnit 5', desc: 'Testes unitários e de integração' },
      { nome: 'Mockito', desc: 'Simulação de dependências nos testes' },
      { nome: 'JaCoCo', desc: 'Medição de cobertura de testes' },
    ],
  },
]

export const equipe = [
  { nome: 'Derick Alves Maschio', papel: 'Integrante' },
  { nome: 'Isabella Nicoliche Silva', papel: 'Integrante' },
  { nome: 'Thaíssa Victoria Bianchini de Oliveira', papel: 'Integrante' },
]
