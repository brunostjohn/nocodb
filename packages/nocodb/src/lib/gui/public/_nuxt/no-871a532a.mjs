const general = {
  home: "Hjem",
  load: "Laste",
  open: "\xC5pen",
  close: "Lukk",
  yes: "Ja",
  no: "Nei",
  ok: "OK",
  and: "Og",
  or: "Eller",
  add: "Legg til",
  edit: "Redigere",
  remove: "Fjerne",
  save: "Lagre",
  cancel: "Avbryt",
  submit: "Sende inn",
  create: "Opprett",
  insert: "Sett inn",
  "delete": "Slett",
  update: "Oppdater",
  rename: "Gi nytt navn til",
  reload: "Last p\xE5 nytt",
  reset: "Nullstill",
  install: "Installere",
  show: "Forestilling",
  hide: "Gjemme seg",
  showAll: "Vis alt",
  hideAll: "Gjem alle",
  showMore: "Vis mer",
  showOptions: "Vis alternativer",
  hideOptions: "Skjul alternativer",
  showMenu: "Vis meny",
  hideMenu: "Skjul menyen",
  addAll: "Legg til alle",
  removeAll: "Fjern alle",
  signUp: "Registrer deg",
  signIn: "LOGG INN",
  signOut: "Logg ut",
  required: "Kreves",
  preferred: "Foretrukket",
  mandatory: "P\xE5budt, bindende",
  loading: "Laster ...",
  title: "Tittel",
  upload: "Laste opp",
  download: "nedlasting",
  "default": "Misligholde",
  more: "Mer",
  less: "Mindre",
  event: "Begivenhet",
  condition: "Betingelse",
  after: "Etter",
  before: "F\xF8r",
  search: "S\xF8k",
  notification: "Melding",
  reference: "Referanse",
  "function": "Funksjon"
};
const objects = {
  project: "Prosjekt",
  projects: "Prosjekter",
  table: "Bord",
  tables: "Bordene",
  field: "Felt",
  fields: "Enger",
  column: "Kolonne",
  columns: "Kolonner",
  page: "Side",
  pages: "Sider",
  record: "Ta opp",
  records: "Poster",
  webhook: "Webhook.",
  webhooks: "Webhooks.",
  view: "Utsikt",
  views: "Visninger",
  viewType: {
    grid: "Rutenett",
    gallery: "Galleri",
    form: "Skjema",
    kanban: "Kanban",
    calendar: "Kalender"
  },
  user: "Bruker",
  users: "Brukere",
  role: "Rolle",
  roles: "Roller",
  roleType: {
    owner: "Eieren",
    creator: "Skaperen.",
    editor: "Redakt\xF8r",
    commenter: "Kommenterer",
    viewer: "Seer."
  }
};
const datatype = {
  ID: "Id.",
  ForeignKey: "Utenlandsk n\xF8kkel",
  SingleLineText: "Enkel linje tekst",
  LongText: "Lang tekst",
  Attachment: "Vedlegg",
  Checkbox: "Avkrysningsboks.",
  MultiSelect: "Flervalg",
  SingleSelect: "Enkelt Velg",
  Collaborator: "Samarbeidspartner",
  "Date": "Dato",
  Year: "\xC5r",
  Time: "Tid",
  PhoneNumber: "Telefonnummer",
  Email: "E-post",
  URL: "URL.",
  "Number": "Nummer",
  Decimal: "Desimal",
  Currency: "Valuta",
  Percent: "Prosent",
  Duration: "Varighet",
  Rating: "Vurdering",
  Formula: "Formel",
  Rollup: "Rull opp",
  Count: "Telle",
  Lookup: "Se opp",
  DateTime: "Dato tid",
  CreateTime: "Skape tid",
  LastModifiedTime: "Sist endret tid",
  AutoNumber: "Auto nummer",
  Barcode: "Strekkode",
  Button: "Knapp",
  Password: "Passord",
  relationProperties: {
    noAction: "Ingen handling",
    cascade: "Cascade.",
    restrict: "Begrense",
    setNull: "Sett null",
    setDefault: "Sett standard"
  }
};
const filterOperation = {
  isEqual: "er lik",
  isNotEqual: "er ikke likeverdig",
  isLike: "er som",
  "isNot like": "er ikke som",
  isEmpty: "er tom",
  isNotEmpty: "er ikke tomt",
  isNull: "er null",
  isNotNull: "er ikke null"
};
const title = {
  newProj: "Nytt prosjekt",
  myProject: "Mine prosjekter",
  formTitle: "Skjema tittel",
  collabView: "Samarbeidende syn",
  lockedView: "L\xE5st visning",
  personalView: "Personlig utsikt",
  appStore: "App Store",
  teamAndAuth: "Team og Auth.",
  rolesUserMgmt: "Roller og brukeradministrasjon",
  userMgmt: "Brukeradministrasjon",
  apiTokenMgmt: "Administrering av API-n\xF8kler",
  rolesMgmt: "Rolleadministrering",
  projMeta: "Prosjektmetadata",
  metaMgmt: "Organiser prosjektmetadata",
  metadata: "Metadata.",
  exportImportMeta: "Eksporter / Import Metadata",
  uiACL: "UI Access Control.",
  metaOperations: "Metadataoperasjoner",
  audit: "Revidere",
  auditLogs: "Revisjonslogg",
  sqlMigrations: "SQL-overf\xF8ringer",
  dbCredentials: "Database-autentisering",
  advancedParameters: "SSL og avanserte parametere",
  headCreateProject: "Opprett prosjektet | NocoDB",
  headLogin: "Logg inn | NocoDB.",
  resetPassword: "Tilbakestill passordet ditt",
  teamAndSettings: "Team & Settings",
  apiDocs: "API Docs",
  importFromAirtable: "Import From Airtable"
};
const labels = {
  notifyVia: "Varsle Via.",
  projName: "Prosjektnavn",
  tableName: "Tabellnavn",
  viewName: "Se navn",
  viewLink: "Vis lenke",
  columnName: "Kolonne navn",
  columnType: "Kolonne TYPE",
  roleName: "Rollenavn",
  roleDescription: "Rollbeskrivelse",
  databaseType: "Skriv inn database",
  lengthValue: "Lengde / verdi",
  dbType: "Databasetype",
  sqliteFile: "SQLite-fil",
  hostAddress: "Vertsadresse",
  port: "Portnummer",
  username: "Brukernavn",
  password: "Passord",
  schemaName: "Schema name",
  action: "Handling",
  actions: "Handlinger",
  operation: "Operasjon",
  operationType: "Operasjonstype",
  operationSubType: "OPERATION SUB-TYPE",
  description: "Beskrivelse",
  authentication: "Godkjenning",
  token: "Token.",
  where: "Hvor",
  cache: "Cache.",
  chat: "Chat",
  email: "E-post",
  storage: "Oppbevaring",
  uiAcl: "UI-ACL",
  models: "Modeller",
  syncState: "Synkroniser staten",
  created: "Opprettet",
  sqlOutput: "SQL-utgang",
  addOption: "Legg til alternativ",
  aggregateFunction: "Samlet funksjon",
  dbCreateIfNotExists: "Database: Opprett hvis ikke eksisterer",
  clientKey: "Klientn\xF8kkel",
  clientCert: "Klientsertifikat",
  serverCA: "Server CA",
  requriedCa: "P\xE5krevd-CA",
  requriedIdentity: "N\xF8dvendig identitet",
  inflection: {
    tableName: "B\xF8yning - tabellnavn",
    columnName: "B\xF8yning - kolonnenavnn"
  },
  community: {
    starUs1: "Stjerne",
    starUs2: "oss p\xE5 GitHub.",
    bookDemo: "Bestill en gratis demo",
    getAnswered: "F\xE5 dine sp\xF8rsm\xE5l besvart",
    joinDiscord: "Bli med p\xE5 Discord",
    joinCommunity: "Join NocoDB Community",
    joinReddit: "Bli med /r/NocoDB",
    followNocodb: "F\xF8lg NocoDB"
  },
  docReference: "Dokumentreferanse",
  selectUserRole: "Velg Brukerrolle",
  childTable: "Barnbord",
  childColumn: "Barn kolonne",
  onUpdate: "P\xE5 oppdatering",
  onDelete: "P\xE5 slette"
};
const activity = {
  createProject: "Opprett prosjekt",
  importProject: "Importprosjekt",
  searchProject: "S\xF8k etter prosjekt",
  editProject: "Rediger prosjekt",
  stopProject: "Stopp prosjekt",
  startProject: "Start prosjekt",
  restartProject: "Start prosjekt p\xE5 nytt",
  deleteProject: "Slett prosjekt",
  refreshProject: "Oppdater prosjekter",
  saveProject: "Lagre prosjekt",
  createProjectExtended: {
    extDB: "Opprett ved \xE5 koble til <br> til en ekstern database",
    excel: "Opprett prosjekt fra Excel",
    template: "Opprett prosjektet fra mal"
  },
  OkSaveProject: "OK og lagre prosjektet",
  upgrade: {
    available: "Oppgradering tilgjengelig",
    releaseNote: "Frigj\xF8re notater",
    howTo: "Hvordan oppgradere?"
  },
  translate: "Hjelp oversette",
  account: {
    authToken: "Kopier Auth Token",
    swagger: "Swagger Apis Doc.",
    projInfo: "Kopier prosjektinfo",
    themes: "Temaer"
  },
  sort: "Sortere",
  addSort: "Legg til sorteringsalternativ",
  filter: "Filter",
  addFilter: "Legg til filter",
  share: "Dele",
  shareBase: {
    disable: "Deaktiver delt base",
    enable: "Alle med linken",
    link: "Delt grunnlinje"
  },
  invite: "Invitere",
  inviteMore: "Inviter mer",
  inviteTeam: "Invitere team",
  inviteToken: "Inviter TOKEN.",
  newUser: "Ny bruker",
  editUser: "Rediger bruker",
  deleteUser: "Fjern brukeren fra prosjektet",
  resendInvite: "Resend invitere e-post",
  copyInviteURL: "Kopier Inviter URL.",
  newRole: "Ny rolle",
  reloadRoles: "Oppdater roller",
  nextPage: "Neste side",
  prevPage: "Forrige side",
  nextRecord: "Neste rekord",
  previousRecord: "Tidligere post",
  copyApiURL: "Kopier API URL",
  createTable: "Tabellen CREATE.",
  refreshTable: "Tabeller oppdatering",
  renameTable: "Tabell omd\xF8pe",
  deleteTable: "Bordet slett",
  addField: "Legg til nytt felt i denne tabellen",
  setPrimary: "Sett som prim\xE6rverdi",
  addRow: "Legg til ny rad",
  saveRow: "Lagre rad",
  insertRow: "Sett inn ny rad",
  deleteRow: "Slett rad",
  deleteSelectedRow: "Slett utvalgte rader",
  importExcel: "Importer Excel.",
  importCSV: "Import CSV",
  downloadCSV: "Last ned som CSV.",
  downloadExcel: "Last ned som XLSX.",
  uploadCSV: "Last opp CSV.",
  "import": "Importer",
  importMetadata: "Importer metadata",
  exportMetadata: "Eksporter metadata",
  clearMetadata: "T\xF8m metadata",
  exportToFile: "Eksporter til fil",
  changePwd: "Bytt passord",
  createView: "Opprett en visning",
  shareView: "Del visning",
  listSharedView: "Felles visningsliste",
  ListView: "Visningsliste",
  copyView: "Kopier visning",
  renameView: "Gi nytt navn til visning",
  deleteView: "Slett visning",
  createGrid: "Opprett rutenettvisning",
  createGallery: "Lag Gallery View.",
  createCalendar: "Opprett kalenderutsikt",
  createKanban: "Lag Kanban View.",
  createForm: "Opprett skjemavisning",
  showSystemFields: "Vis systemfelt",
  copyUrl: "Kopier URL.",
  openTab: "\xC5pne ny fanering",
  iFrame: "Kopier EmbedDable HTML-kode",
  addWebhook: "Legg til ny webhook.",
  newToken: "Legg til nytt Token.",
  exportZip: "Eksporter zip",
  importZip: "Importer zip",
  metaSync: "Synkroniser n\xE5",
  settings: "Innstillinger",
  previewAs: "Forh\xE5ndsvisning som",
  resetReview: "Tilbakestill forh\xE5ndsvisning",
  testDbConn: "Test databaseforbindelse",
  removeDbFromEnv: "Fjern databasen fra milj\xF8et",
  editConnJson: "Rediger tilkoblings-JSON",
  sponsorUs: "Sponsor oss",
  sendEmail: "SEND E-POST"
};
const tooltip = {
  saveChanges: "Lagre endringer",
  xcDB: "Opprett et nytt prosjekt",
  extDB: "St\xF8tter MySQL, PostgreSQL, SQL Server & Sqlite",
  apiRest: "Tilgjengelig via REST-API-er",
  apiGQL: "Tilgjengelig via GraphQL-API-er",
  theme: {
    dark: "Det kommer i svart (^ \u21E7b)",
    light: "Kommer det i svart? (^ \u21E7b)"
  },
  addTable: "Legg til nytt bord",
  inviteMore: "Inviter flere brukere",
  toggleNavDraw: "Toggle Navigation Skuff",
  reloadApiToken: "Reload Api Tokens",
  generateNewApiToken: "Generere nye API-token",
  addRole: "Legg til ny rolle",
  reloadList: "Last inn listen",
  metaSync: "Synkroniser metadata.",
  sqlMigration: "Oppdater migreringer",
  updateRestart: "Oppdatering og omstart",
  cancelReturn: "Avbryt og retur",
  exportMetadata: "Eksporter alle metadata fra metatabellene til meta-katalogen.",
  importMetadata: "Importer alle metadata fra meta-katalogen til metatabellene.",
  clearMetadata: "Fjern alle metadata fra metatabeller.",
  clientKey: "Velg .KEY-fil",
  clientCert: "Velg .CERT-fil",
  clientCA: "Velg CA-fil"
};
const placeholder = {
  projName: "Skriv inn prosjektnavn",
  password: {
    enter: "Skriv inn passordet",
    current: "N\xE5v\xE6rende passord",
    "new": "Nytt passord",
    save: "Lagre passord",
    confirm: "Bekrefte nytt passord"
  },
  searchProjectTree: "S\xF8ketabeller",
  searchFields: "S\xF8k markeringer",
  searchColumn: "S\xF8k {S\xF8k} Kolonne",
  searchApps: "S\xF8k apps.",
  searchModels: "S\xF8k modeller",
  noItemsFound: "ingen objekter funnet",
  defaultValue: "Standardverdi",
  filterByEmail: "Filtrer via e-post"
};
const msg = {
  info: {
    footerInfo: "Rader per side.",
    upload: "Velg Fil for \xE5 laste opp",
    upload_sub: "eller dra og slipp filen",
    excelSupport: "St\xF8ttet: .xls, .xlsx, .xlsm ,.ods ,.ots",
    excelURL: "Skriv inn Excel File URL",
    csvURL: "Enter CSV file URL",
    footMsg: "# av rader for \xE5 analysere \xE5 utlede datatype",
    excelImport: "Ark (er) er tilgjengelige for import",
    exportMetadata: "\xD8nsker du \xE5 eksportere metadata fra Meta-bord?",
    importMetadata: "\xD8nsker du \xE5 importere metadata fra Meta-bord?",
    clearMetadata: "\xD8nsker du \xE5 fjerne metadata fra Meta-bord?",
    projectEmptyMessage: "Kom i gang med \xE5 opprette et nytt prosjekt",
    stopProject: "\xD8nsker du \xE5 stoppe prosjektet?",
    startProject: "\xD8nsker du \xE5 starte prosjektet?",
    restartProject: "Vil du starte prosjektet p\xE5 nytt?",
    deleteProject: "\xD8nsker du \xE5 slette prosjektet?",
    shareBasePrivate: "Generer offentlig delbar readonly base",
    shareBasePublic: "Alle p\xE5 Internett med denne lenken kan se",
    userInviteNoSMTP: "Ser ut som om du ikke har konfigurert mailer enn\xE5!\nVennligst kopier over Inviter Link og send den til",
    dragDropHide: "Dra og slipp felt her for \xE5 skjule",
    formInput: "Skriv inn skjema inngangsetikett",
    formHelpText: "Legg til litt hjelpetekst",
    onlyCreator: "Bare synlig for skaperen",
    formDesc: "Legg til form Beskrivelse",
    beforeEnablePwd: "Begrens tilgang med et passord",
    afterEnablePwd: "Tilgang er passordbegrenset",
    privateLink: "Denne visningen deles via en privat lenke",
    privateLinkAdditionalInfo: "Personer med privat kobling kan bare se celler synlige i denne visningen",
    afterFormSubmitted: "Etter skjema er sendt inn",
    apiOptions: "Tilgang til prosjekt via",
    submitAnotherForm: "Vis 'Send inn en annen form' -knapp",
    showBlankForm: "Vis et tomt skjema etter 5 sekunder",
    emailForm: "E-post meg p\xE5",
    showSysFields: "Vis systemfelt",
    filterAutoApply: "Auto gjelder",
    showMessage: "Vis denne meldingen",
    viewNotShared: "N\xE5v\xE6rende visning er ikke delt!",
    showAllViews: "Vis alle felles syn p\xE5 dette bordet",
    collabView: "Samarbeidspartnere med redigeringsrettigheter eller h\xF8yere kan endre visningskonfigurasjonen.",
    lockedView: "Ingen kan redigere visningskonfigurasjonen til den er ul\xE5st.",
    personalView: "Bare du kan redigere visningskonfigurasjonen. Andre samarbeidspartnere personlige synspunkter er skjult som standard.",
    ownerDesc: "Kan legge til / fjerne skapere. Og Full Rediger databasestrukturer og felt.",
    creatorDesc: "Kan fullt ut redigere databasestruktur og verdier.",
    editorDesc: "Kan redigere poster, men kan ikke endre strukturen i databasen / feltene.",
    commenterDesc: "Kan vise og kommentere postene, men kan ikke redigere noe",
    viewerDesc: "Kan se postene, men kan ikke redigere noe",
    addUser: "Legg til ny bruker",
    staticRoleInfo: "Systemdefinerte roller kan ikke redigeres",
    exportZip: "Eksporter prosjektets metadata til Zip-fil og last ned.",
    importZip: "Importer metadata om prosjekt fra Zip-fil og start p\xE5 nytt.",
    importText: "Importer NocoDB-prosjekt ved \xE5 laste opp metadata Zip-fil",
    metaNoChange: "Ingen endring identifisert",
    sqlMigration: "Schema migreringer vil bli opprettet automatisk. Lag et bord og oppdatere denne siden.",
    dbConnectionStatus: "Milj\xF8et validert",
    dbConnected: "Tilkoblingen var vellykket",
    notifications: {
      no_new: "Ingen nye varsler",
      clear: "T\xF8m"
    },
    sponsor: {
      header: "Du kan hjelpe oss!",
      message: "Vi er et lite lag som jobber heltid for \xE5 gj\xF8re Nocodb \xE5pen kildekode. Vi tror et verkt\xF8y som Nocodb b\xF8r v\xE6re tilgjengelig fritt til alle probleml\xF8ser p\xE5 internett."
    },
    loginMsg: "Logg inn i NocoDB",
    passwordRecovery: {
      message_1: "Vennligst oppgi e-postadressen du brukte n\xE5r du registrerte deg.",
      message_2: "Vi sender deg en e-post med en lenke for \xE5 tilbakestille passordet ditt.",
      success: "Vennligst sjekk e-posten din for \xE5 tilbakestille passordet"
    },
    signUp: {
      superAdmin: "Du vil v\xE6re 'super admin'",
      alreadyHaveAccount: "Har du allerede en konto?",
      workEmail: "Skriv inn jobb-e-post",
      enterPassword: "Skriv inn passordet ditt",
      forgotPassword: "Glemt passordet?",
      dontHaveAccount: "Har du ikke en konto?"
    },
    addView: {
      grid: "Legg til rutenett",
      gallery: "Legg til galleriutsikt",
      form: "Legg til skjemavisning",
      kanban: "Legg til Kanban View",
      calendar: "Legg til kalendervisning"
    },
    tablesMetadataInSync: "Tabeller Metadata er synkronisert",
    addMultipleUsers: "Du kan legge til flere komma (,) separerte e-poster",
    enterTableName: "Skriv inn tabellnavn",
    addDefaultColumns: "Legg til standard kolonner",
    tableNameInDb: "Tabellnavn som lagret i databasen"
  },
  error: {
    searchProject: "S\xF8ket ditt etter {s\xF8k} fant ingen resultater",
    invalidChar: "Ugyldig karakter i mappebanen.",
    invalidDbCredentials: "Ugyldig databaseautentisering.",
    unableToConnectToDb: "Kan ikke koble til database, vennligst sjekk om databasen din er oppe.",
    userDoesntHaveSufficientPermission: "Brukeren eksisterer ikke eller har ikke tilstrekkelig tillatelse til \xE5 opprette skjema.",
    dbConnectionStatus: "Ugyldige databaseparametere",
    dbConnectionFailed: "Tilkoblingsfeil:",
    signUpRules: {
      emailReqd: "E-post er n\xF8dvendig",
      emailInvalid: "E-post m\xE5 v\xE6re gyldig",
      passwdRequired: "Passord er p\xE5krevd",
      passwdLength: "Ditt passord m\xE5 v\xE6re minst 8 tegn"
    }
  },
  toast: {
    exportMetadata: "Prosjektmetadata eksporteres vellykket",
    importMetadata: "Prosjektmetadata importert vellykket",
    clearMetadata: "Prosjektmetadata ryddet vellykket",
    stopProject: "Prosjektet sluttet vellykket",
    startProject: "Prosjektet startet vellykket",
    restartProject: "Prosjektet startet p\xE5 nytt",
    deleteProject: "Prosjektet slettet vellykket",
    authToken: "Auth Token kopiert til utklippstavlen",
    projInfo: "Kopiert prosjektinfo til utklippstavlen",
    inviteUrlCopy: "Kopiert invitasjonsadresse til utklippstavle",
    createView: "Se opprettet vellykket",
    formEmailSMTP: "Vennligst aktiver SMTP-plugin i App Store for \xE5 aktivere e-postvarsling",
    collabView: "Vellykket byttet til samarbeidsvisning",
    lockedView: "Vellykket byttet til l\xE5st visning",
    futureRelease: "Kommer snart!"
  }
};
var no = {
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
export { activity, datatype, no as default, filterOperation, general, labels, msg, objects, placeholder, title, tooltip };
