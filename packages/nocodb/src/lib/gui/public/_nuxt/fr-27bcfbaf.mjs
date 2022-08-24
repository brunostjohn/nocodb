const general = {
  home: "Accueil",
  load: "Charger",
  open: "Ouvert",
  close: "Fermer",
  yes: "Oui",
  no: "Non",
  ok: "D'accord",
  and: "Et",
  or: "Ou",
  add: "Ajouter",
  edit: "\xC9diter",
  remove: "Supprimer",
  save: "Sauvegarder",
  cancel: "Annuler",
  submit: "Soumettre",
  create: "Cr\xE9er",
  insert: "Ins\xE9rer",
  "delete": "Supprimer",
  update: "Mettre \xE0 jour",
  rename: "Renommer",
  reload: "Recharger",
  reset: "R\xE9initialiser",
  install: "Installer",
  show: "Montrer",
  hide: "Cacher",
  showAll: "Afficher tout",
  hideAll: "Cacher tout",
  showMore: "Montrer plus",
  showOptions: "Afficher les options",
  hideOptions: "Masquer les options",
  showMenu: "Afficher le menu",
  hideMenu: "Masquer le menu",
  addAll: "Tout ajouter",
  removeAll: "Tout retirer",
  signUp: "Inscription",
  signIn: "Connexion",
  signOut: "Se d\xE9connecter",
  required: "Requise",
  preferred: "Pr\xE9f\xE9r\xE9e",
  mandatory: "Obligatoire",
  loading: "Chargement ...",
  title: "Titre",
  upload: "T\xE9l\xE9verser",
  download: "T\xE9l\xE9charger",
  "default": "D\xE9faut",
  more: "Plus",
  less: "Moins",
  event: "\xC9v\xE9nement",
  condition: "Condition",
  after: "Apr\xE8s",
  before: "Avant",
  search: "Rechercher",
  notification: "Notification",
  reference: "R\xE9f\xE9rence",
  "function": "Fonction"
};
const objects = {
  project: "Projet",
  projects: "Projets",
  table: "Tableau",
  tables: "Tableaux",
  field: "Champ",
  fields: "Champs",
  column: "Colonne",
  columns: "Colonnes",
  page: "Page",
  pages: "Pages",
  record: "Ligne",
  records: "Lignes",
  webhook: "Webhook",
  webhooks: "Webhooks",
  view: "Vue",
  views: "Vues",
  viewType: {
    grid: "Grille",
    gallery: "Galerie",
    form: "Formulaire",
    kanban: "Kanban",
    calendar: "Calendrier"
  },
  user: "Utilisateur",
  users: "Utilisateurs",
  role: "R\xF4le",
  roles: "R\xF4les",
  roleType: {
    owner: "Propri\xE9taire",
    creator: "Cr\xE9ateur",
    editor: "\xC9diteur",
    commenter: "Commentateur",
    viewer: "Lecture seule"
  }
};
const datatype = {
  ID: "Identifiant",
  ForeignKey: "Cl\xE9 \xE9trang\xE8re",
  SingleLineText: "Texte court (une ligne)",
  LongText: "Texte long",
  Attachment: "Pi\xE8ce jointe",
  Checkbox: "Case \xE0 cocher",
  MultiSelect: "S\xE9lection multiple",
  SingleSelect: "Menu d\xE9roulant",
  Collaborator: "Collaborateur",
  "Date": "Date",
  Year: "Ann\xE9e",
  Time: "Heure",
  PhoneNumber: "Num\xE9ro de t\xE9l\xE9phone",
  Email: "Courriel",
  URL: "URL",
  "Number": "Nombre",
  Decimal: "D\xE9cimal",
  Currency: "Devise",
  Percent: "Pourcentage",
  Duration: "Dur\xE9e",
  Rating: "\xC9valuation",
  Formula: "Formule",
  Rollup: "Synth\xE8se",
  Count: "Compteur",
  Lookup: "Lookup",
  DateTime: "Date et heure",
  CreateTime: "Date de cr\xE9ation",
  LastModifiedTime: "Derni\xE8re modification",
  AutoNumber: "Num\xE9rotation automatique",
  Barcode: "Code-barres",
  Button: "Bouton",
  Password: "Mot de passe",
  relationProperties: {
    noAction: "Pas d'action",
    cascade: "Cascade",
    restrict: "Limiter",
    setNull: "Laisser vide",
    setDefault: "D\xE9finir comme d\xE9faut"
  }
};
const filterOperation = {
  isEqual: "est \xE9gale",
  isNotEqual: "n'est pas \xE9gale",
  isLike: "contient",
  "isNot like": "ne contient pas",
  isEmpty: "est vide",
  isNotEmpty: "n'est pas vide",
  isNull: "est null",
  isNotNull: "est non null"
};
const title = {
  newProj: "Nouveau projet",
  myProject: "Mes projets",
  formTitle: "Intitul\xE9 du formulaire",
  collabView: "Vue collaborative",
  lockedView: "Vue verrouill\xE9e",
  personalView: "Vue personnelle",
  appStore: "Magasin d'applications",
  teamAndAuth: "\xC9quipe & Authentification",
  rolesUserMgmt: "Gestion des utilisateurs & r\xF4les",
  userMgmt: "Gestion des utilisateurs",
  apiTokenMgmt: "Gestion des jetons API",
  rolesMgmt: "Gestion des r\xF4les",
  projMeta: "M\xE9tadonn\xE9es du projet",
  metaMgmt: "Gestion des m\xE9tadonn\xE9es",
  metadata: "M\xE9tadonn\xE9es",
  exportImportMeta: "Exporter / importer les m\xE9tadonn\xE9es",
  uiACL: "Contr\xF4le d'acc\xE8s \xE0 l'interface utilisateur",
  metaOperations: "Op\xE9rations de m\xE9tadonn\xE9es",
  audit: "Audit",
  auditLogs: "Journal d'audit",
  sqlMigrations: "Migrations SQL",
  dbCredentials: "Identifiants de la base de donn\xE9es",
  advancedParameters: "SSL et param\xE8tres avanc\xE9s",
  headCreateProject: "Cr\xE9er un projet | Nocodb",
  headLogin: "Connexion | Nocodb",
  resetPassword: "R\xE9initialiser le mot de passe",
  teamAndSettings: "\xC9quipe & param\xE8tres",
  apiDocs: "API Docs",
  importFromAirtable: "Importer depuis Airtable"
};
const labels = {
  notifyVia: "Notifier via",
  projName: "Nom du projet",
  tableName: "Nom de la table",
  viewName: "Vue",
  viewLink: "Lien de vue",
  columnName: "Nom de la colonne",
  columnType: "Type de colonne",
  roleName: "Nom de r\xF4le",
  roleDescription: "Description du r\xF4le",
  databaseType: "\xC9crire dans la base de donn\xE9es",
  lengthValue: "Longueur / valeur",
  dbType: "Type de base de donn\xE9es",
  sqliteFile: "Fichier SQLite",
  hostAddress: "Adresse de l'h\xF4te",
  port: "Num\xE9ro de port",
  username: "Utilisateur",
  password: "Mot de passe",
  schemaName: "Nom du sch\xE9ma",
  action: "Action",
  actions: "Actions",
  operation: "Op\xE9ration",
  operationType: "Type d'op\xE9ration",
  operationSubType: "Sous-type d'op\xE9ration",
  description: "Description",
  authentication: "Authentification",
  token: "Jeton",
  where: "O\xF9",
  cache: "Cache",
  chat: "Discussion",
  email: "Courriel",
  storage: "Stockage",
  uiAcl: "UI-ACL",
  models: "Mod\xE8les",
  syncState: "\xC9tat de synchronisation",
  created: "Cr\xE9\xE9",
  sqlOutput: "Sortie SQL",
  addOption: "Ajouter une option",
  aggregateFunction: "Fonction agr\xE9g\xE9e",
  dbCreateIfNotExists: "Base de donn\xE9es : la cr\xE9er si elle n'existe pas",
  clientKey: "Cl\xE9 client",
  clientCert: "Certificat client",
  serverCA: "Serveur d'authentification",
  requriedCa: "Authentification requise",
  requriedIdentity: "Identit\xE9 requise",
  inflection: {
    tableName: "Inflexion - Nom de la table",
    columnName: "Inflexion - Nom de la colonne"
  },
  community: {
    starUs1: "\xC9toile",
    starUs2: "sur Github",
    bookDemo: "Planifier une d\xE9monstration gratuite",
    getAnswered: "Obtenir des r\xE9ponses \xE0 vos questions",
    joinDiscord: "Rejoindre le serveur Discord",
    joinCommunity: "Rejoindre la communaut\xE9 NocoDB",
    joinReddit: "Rejoindre /r/NocoDB",
    followNocodb: "Suivre NocoDB"
  },
  docReference: "R\xE9f\xE9rence de document",
  selectUserRole: "S\xE9lectionner le r\xF4le d'utilisateur",
  childTable: "Table enfant",
  childColumn: "Colonne enfant",
  onUpdate: "Mise \xE0 jour en cours",
  onDelete: "Suppression en cours"
};
const activity = {
  createProject: "Cr\xE9er un projet",
  importProject: "Importer un projet",
  searchProject: "Rechercher un projet",
  editProject: "\xC9diter le projet",
  stopProject: "Arr\xEAter le projet",
  startProject: "D\xE9marrer le projet",
  restartProject: "Red\xE9marrer le projet",
  deleteProject: "Supprimer le projet",
  refreshProject: "Actualiser les projets",
  saveProject: "Enregistrer le projet",
  createProjectExtended: {
    extDB: "Cr\xE9er en se connectant<br>\xE0 une base de donn\xE9es externe",
    excel: "Cr\xE9er un projet depuis Excel",
    template: "Cr\xE9er un projet \xE0 partir d'un mod\xE8le"
  },
  OkSaveProject: "Valider et enregistrer le projet",
  upgrade: {
    available: "Mise \xE0 jour disponible",
    releaseNote: "Notes de version",
    howTo: "Comment mettre \xE0 jour ?"
  },
  translate: "Aider \xE0 la traduction",
  account: {
    authToken: "Copier le jeton d'authentification",
    swagger: "Doc Swagger de l'API",
    projInfo: "Copier les informations du projet",
    themes: "Th\xE8mes"
  },
  sort: "Trier",
  addSort: "Ajouter une option de tri",
  filter: "Filtre",
  addFilter: "Ajouter un filtre",
  share: "Partager",
  shareBase: {
    disable: "D\xE9sactiver la base partag\xE9e",
    enable: "N'importe qui avec le lien",
    link: "Partager le lien de la base"
  },
  invite: "Inviter",
  inviteMore: "Inviter plus",
  inviteTeam: "Inviter une \xE9quipe",
  inviteToken: "Inviter via un jeton",
  newUser: "Nouvel utilisateur",
  editUser: "Modifier l'utilisateur",
  deleteUser: "Supprimer l'utilisateur du projet",
  resendInvite: "Renvoyer une invitation par courriel",
  copyInviteURL: "Copier l'URL d'invitation",
  newRole: "Nouveau r\xF4le",
  reloadRoles: "Actualiser les r\xF4les",
  nextPage: "Page suivante",
  prevPage: "Page pr\xE9c\xE9dente",
  nextRecord: "Ligne suivante",
  previousRecord: "Ligne pr\xE9c\xE9dente",
  copyApiURL: "Copier l'URL de l'API",
  createTable: "Cr\xE9er un tableau",
  refreshTable: "Actualiser le tableau",
  renameTable: "Renommer le tableau",
  deleteTable: "Supprimer le tableau",
  addField: "Ajouter un nouveau champ \xE0 cette table",
  setPrimary: "D\xE9finir comme valeur primaire",
  addRow: "Ajouter une nouvelle ligne",
  saveRow: "Enregistrer la ligne",
  insertRow: "Ins\xE9rer une nouvelle ligne",
  deleteRow: "Supprimer la ligne",
  deleteSelectedRow: "Supprimer les lignes s\xE9lectionn\xE9es",
  importExcel: "Importer depuis Excel",
  importCSV: "Import CSV",
  downloadCSV: "T\xE9l\xE9charger comme CSV",
  downloadExcel: "T\xE9l\xE9charger comme XLSX",
  uploadCSV: "T\xE9l\xE9verser un CSV",
  "import": "Importer",
  importMetadata: "Importer les m\xE9tadonn\xE9es",
  exportMetadata: "Exporter les m\xE9tadonn\xE9es",
  clearMetadata: "Effacer les m\xE9tadonn\xE9es",
  exportToFile: "Exporter vers le fichier",
  changePwd: "Changer le mot de passe",
  createView: "Cr\xE9er une vue",
  shareView: "Partager la vue",
  listSharedView: "Liste de vues partag\xE9es",
  ListView: "Liste des vues",
  copyView: "Copier la vue",
  renameView: "Renommer la vue",
  deleteView: "Supprimer la vue",
  createGrid: "Cr\xE9er une vue grille",
  createGallery: "Cr\xE9er une vue galerie",
  createCalendar: "Cr\xE9er une vue calendrier",
  createKanban: "Cr\xE9er une vue kanban",
  createForm: "Cr\xE9er une vue formulaire",
  showSystemFields: "Afficher les champs syst\xE8me",
  copyUrl: "Copier le lien",
  openTab: "Ouvrir nouvel onglet",
  iFrame: "Copier le code HTML int\xE9gr\xE9",
  addWebhook: "Ajout un webhook",
  newToken: "Ajout un nouveau jeton",
  exportZip: "Exporter un zip",
  importZip: "Importer un zip",
  metaSync: "Synchroniser maintenant",
  settings: "Param\xE8tres",
  previewAs: "Aper\xE7u",
  resetReview: "R\xE9initialiser l'aper\xE7u",
  testDbConn: "Tester la connexion \xE0 la base de donn\xE9es",
  removeDbFromEnv: "Supprimer la base de donn\xE9es de l'environnement",
  editConnJson: "\xC9diter le JSON de connexion",
  sponsorUs: "Nous Parrainer",
  sendEmail: "ENVOYER UN EMAIL"
};
const tooltip = {
  saveChanges: "Sauvegarder les modifications",
  xcDB: "Cr\xE9er un nouveau projet",
  extDB: "Base de donn\xE9es support\xE9es MySQL, PostgreSQL, SQL Server & SQLite",
  apiRest: "Accessible via l'API REST",
  apiGQL: "Accessible via l'API GraphQL",
  theme: {
    dark: "Nuit (^\u21E7B)",
    light: "Jour (^\u21E7B)"
  },
  addTable: "Ajouter une nouvelle table",
  inviteMore: "Inviter plus d'utilisateurs",
  toggleNavDraw: "Basculer le tiroir de navigation",
  reloadApiToken: "Recharger les jetons API",
  generateNewApiToken: "G\xE9n\xE9rer de nouveaux jetons d'API",
  addRole: "Ajouter un nouveau r\xF4le",
  reloadList: "Actualiser la liste",
  metaSync: "Synchroniser des m\xE9tadonn\xE9es",
  sqlMigration: "Recharger des migrations",
  updateRestart: "Mettre \xE0 jour et red\xE9marrer",
  cancelReturn: "Annuler et revenir en arri\xE8re",
  exportMetadata: "Exporter toutes les m\xE9tadonn\xE9es des m\xE9ta-tables vers le r\xE9pertoire Meta.",
  importMetadata: "Importer toutes les m\xE9tadonn\xE9es du r\xE9pertoire Meta en m\xE9ta-tables.",
  clearMetadata: "Effacer toutes les m\xE9tadonn\xE9es des m\xE9ta-tables.",
  clientKey: "Selectionner un fichier .key",
  clientCert: "Selectionner un fichier .cert",
  clientCA: "Selectionner un fichier d'authentification"
};
const placeholder = {
  projName: "Saisir le nom du projet",
  password: {
    enter: "Saisir le mot de passe",
    current: "Mot de passe actuel",
    "new": "Nouveau mot de passe",
    save: "Enregistrer le mot de passe",
    confirm: "Confirmer le nouveau mot de passe"
  },
  searchProjectTree: "Chercher un tableau",
  searchFields: "Champ de recherche",
  searchColumn: "Recherche {recherche} colonne",
  searchApps: "Chercher une application",
  searchModels: "Chercher un mod\xE8le",
  noItemsFound: "Aucun \xE9l\xE9ment trouv\xE9",
  defaultValue: "Valeur par d\xE9faut",
  filterByEmail: "Filtrer par courriel"
};
const msg = {
  info: {
    footerInfo: "Lignes par page",
    upload: "S\xE9lectionner un fichier \xE0 t\xE9l\xE9verser",
    upload_sub: "ou glisser-d\xE9poser un fichier",
    excelSupport: "Pris en charge: .xls, .xlsx, .xlsm, .ods, .ots",
    excelURL: "D\xE9finir l'URL du fichier Excel",
    csvURL: "D\xE9finir l'URL du CSV",
    footMsg: "Nombre de lignes \xE0 analyser pour d\xE9duire le type de donn\xE9es",
    excelImport: "Les tableaux sont disponibles pour l'import",
    exportMetadata: "Voulez-vous exporter des m\xE9tadonn\xE9es des m\xE9ta-tables?",
    importMetadata: "Voulez-vous importer des m\xE9tadonn\xE9es des m\xE9ta-tables?",
    clearMetadata: "Voulez-vous effacer les m\xE9tadonn\xE9es des m\xE9ta-tables?",
    projectEmptyMessage: "Commencer par cr\xE9er un nouveau projet",
    stopProject: "Voulez-vous arr\xEAter le projet ?",
    startProject: "Voulez-vous d\xE9marrer le projet ?",
    restartProject: "Voulez-vous red\xE9marrer le projet ?",
    deleteProject: "Voulez-vous supprimer le projet ?",
    shareBasePrivate: "G\xE9n\xE9rer une base partag\xE9e en lecture seule",
    shareBasePublic: "Toute personne avec ce lien peut consulter",
    userInviteNoSMTP: "On dirait que vous n'avez pas encore configur\xE9 Mailer! \\ n Merci de copier-coller le lien d'invitation ci-dessous et l'envoyer \xE0",
    dragDropHide: "Glisser et d\xE9poser des champs ici pour les masquer",
    formInput: "Entrer le libell\xE9 du formulaire",
    formHelpText: "Ajouter un texte d'aide",
    onlyCreator: "Visible uniquement pour les cr\xE9ateurs",
    formDesc: "Ajouter une description du formulaire",
    beforeEnablePwd: "Restreindre l\u2019acc\xE8s \xE0 l\u2019aide d\u2019un mot de passe",
    afterEnablePwd: "L\u2019acc\xE8s est restreint par un mot de passe",
    privateLink: "Cette vue est partag\xE9e avec un lien priv\xE9",
    privateLinkAdditionalInfo: "Les personnes ayant le lien priv\xE9 peuvent voir uniquement les cellules visibles de cette vue",
    afterFormSubmitted: "Apr\xE8s que le formulaire est soumis",
    apiOptions: "Acc\xE9der au projet via",
    submitAnotherForm: 'Afficher le bouton "Soumettre un autre formulaire"',
    showBlankForm: "Montrer un formulaire vierge apr\xE8s 5 secondes",
    emailForm: "\xC9crivez-moi \xE0",
    showSysFields: "Afficher les champs syst\xE8me",
    filterAutoApply: "Appliquer automatiquement",
    showMessage: "Montrer ce message",
    viewNotShared: "La vue actuelle n'est pas partag\xE9e!",
    showAllViews: "Montrer toutes les vues partag\xE9es sur cette table",
    collabView: "Les collaborateurs avec des autorisations d'\xE9dition ou plus peuvent modifier la configuration de la vue.",
    lockedView: "Personne ne peut \xE9diter la configuration de la vue jusqu'\xE0 ce qu'elle soit d\xE9verrouill\xE9e.",
    personalView: "Seulement vous pouvez modifier la configuration de la vue. Les autres vues personnelles des collaborateurs sont cach\xE9es par d\xE9faut.",
    ownerDesc: "Peut ajouter / supprimer des cr\xE9ateurs. Et \xE9diter des structures de base de donn\xE9es compl\xE8tes et des champs.",
    creatorDesc: "Peut \xE9diter compl\xE8tement la structure de la base de donn\xE9es et les valeurs.",
    editorDesc: "Peut \xE9diter des lignes mais ne peut pas modifier la structure de la base de donn\xE9es / des champs.",
    commenterDesc: "Peut voir et commenter les archives mais ne peut rien \xE9diter",
    viewerDesc: "Peut voir les donn\xE9es mais ne peut rien \xE9diter",
    addUser: "Ajouter un nouvel utilisateur",
    staticRoleInfo: "Les r\xF4les d\xE9finis sur le syst\xE8me ne peuvent pas \xEAtre modifi\xE9s",
    exportZip: "Exporter le meta projet dans un fichier Zip et le t\xE9l\xE9charger.",
    importZip: "Importer le fichier ZIP du meta projet et red\xE9marrer.",
    importText: "Importer un projet NocoDB \xE0 partir d'un fichier ZIP de m\xE9tadonn\xE9es",
    metaNoChange: "Aucun changement identifi\xE9",
    sqlMigration: "Les migrations de sch\xE9ma seront cr\xE9\xE9es automatiquement. Cr\xE9ez une table et rafra\xEEchissez cette page.",
    dbConnectionStatus: "Environnement valid\xE9",
    dbConnected: "Connexion r\xE9ussie",
    notifications: {
      no_new: "Pas de nouvelle notification",
      clear: "Effacer"
    },
    sponsor: {
      header: "Vous pouvez nous aider !",
      message: "Nous sommes une petite \xE9quipe travaillant \xE0 plein temps pour rendre Nocodb Open-Source. Nous croyons qu'un outil comme Nocodb devrait \xEAtre disponible librement \xE0 chaque solveur de probl\xE8mes sur Internet."
    },
    loginMsg: "Se connecter \xE0 NocoDB",
    passwordRecovery: {
      message_1: "Veuillez fournir l'adresse mail que vous avez utilis\xE9e lorsque vous vous \xEAtes inscrit.",
      message_2: "Nous vous enverrons un courriel avec un lien pour r\xE9initialiser votre mot de passe.",
      success: "Veuillez v\xE9rifier votre email pour r\xE9initialiser le mot de passe"
    },
    signUp: {
      superAdmin: "Vous serez le 'super admin'",
      alreadyHaveAccount: "Avez-vous d\xE9j\xE0 un compte ?",
      workEmail: "Saisir votre adresse mail professionnelle",
      enterPassword: "Saisir votre mot de passe",
      forgotPassword: "Mot de passe oubli\xE9 ?",
      dontHaveAccount: "Vous n'avez pas de compte ?"
    },
    addView: {
      grid: "Ajouter une vue grille",
      gallery: "Ajouter une vue Galerie",
      form: "Ajouter une vue Formulaire",
      kanban: "Ajouter une vue Kanban",
      calendar: "Ajouter une vue Calendrier"
    },
    tablesMetadataInSync: "Les m\xE9tadonn\xE9es de tables sont en synchronisation",
    addMultipleUsers: "Vous pouvez ajouter plusieurs courriels s\xE9par\xE9s par des virgules (,)",
    enterTableName: "Entrer le nom de la table",
    addDefaultColumns: "Ajouter des colonnes par d\xE9faut",
    tableNameInDb: "Nom de la table tel qu'enregistr\xE9 dans la base de donn\xE9es"
  },
  error: {
    searchProject: "Votre recherche pour {search} n'a renvoy\xE9 aucun r\xE9sultat",
    invalidChar: "Caract\xE8re invalide dans le chemin du dossier.",
    invalidDbCredentials: "Identifiants de base de donn\xE9es invalides.",
    unableToConnectToDb: "Connexion impossible \xE0 la base de donn\xE9es, merci de v\xE9rifier que la base de donn\xE9es est d\xE9marr\xE9e et accessible.",
    userDoesntHaveSufficientPermission: "L\u2019utilisateur n\u2019existe pas ou n\u2019a pas les permissions suffisantes pour cr\xE9er le sch\xE9ma.",
    dbConnectionStatus: "Param\xE8tres de base de donn\xE9es non valides",
    dbConnectionFailed: "Echec de connexion :",
    signUpRules: {
      emailReqd: "Adresse mail requise",
      emailInvalid: "L'adresse mail doit \xEAtre valide",
      passwdRequired: "Mot de passe requis",
      passwdLength: "Votre mot de passe doit contenir au moins 8 caract\xE8res"
    }
  },
  toast: {
    exportMetadata: "Les m\xE9tadonn\xE9es de projet sont export\xE9es avec succ\xE8s",
    importMetadata: "Les m\xE9tadonn\xE9es du projet sont import\xE9es avec succ\xE8s",
    clearMetadata: "Les m\xE9tadonn\xE9es du projet sont effac\xE9es avec succ\xE8s",
    stopProject: "Projet arr\xEAt\xE9 avec succ\xE8s",
    startProject: "Projet d\xE9marr\xE9 avec succ\xE8s",
    restartProject: "Projet red\xE9marr\xE9 avec succ\xE8s",
    deleteProject: "Projet supprim\xE9 avec succ\xE8s",
    authToken: "Auth Token copi\xE9 dans le presse-papier",
    projInfo: "Informations de projet copi\xE9es dans le presse-papier",
    inviteUrlCopy: "URL d'invitation copi\xE9e dans le presse-papier",
    createView: "Vue cr\xE9\xE9e avec succ\xE8s",
    formEmailSMTP: "Veuillez activer le plugin SMTP dans l'App Store pour permettre la notification par courrier \xE9lectronique",
    collabView: "Vous \xEAtes bien dans la vue collaborative",
    lockedView: "Vous \xEAtes bien dans la vue v\xE9rouill\xE9e",
    futureRelease: "Bient\xF4t disponible !"
  }
};
var fr = {
  general,
  objects,
  datatype,
  filterOperation,
  title,
  labels,
  activity,
  tooltip,
  placeholder,
  msg
};
export { activity, datatype, fr as default, filterOperation, general, labels, msg, objects, placeholder, title, tooltip };
