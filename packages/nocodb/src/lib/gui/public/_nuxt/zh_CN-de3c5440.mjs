const general = {
  home: "\u9996\u9875",
  load: "\u52A0\u8F7D",
  open: "\u6253\u5F00",
  close: "\u5173\u95ED",
  yes: "\u662F\u7684",
  no: "\u5426",
  ok: "\u884C",
  and: "\u548C",
  or: "\u6216\u8005",
  add: "\u6DFB\u52A0",
  edit: "\u7F16\u8F91",
  remove: "\u6D88\u9664",
  save: "\u4FDD\u5B58",
  cancel: "\u53D6\u6D88",
  submit: "\u63D0\u4EA4",
  create: "\u65B0\u5EFA",
  insert: "\u63D2\u5165",
  "delete": "\u5220\u9664",
  update: "\u66F4\u65B0",
  rename: "\u6539\u540D",
  reload: "\u91CD\u65B0\u52A0\u8F7D",
  reset: "\u91CD\u7F6E",
  install: "\u5B89\u88C5",
  show: "\u5C55\u793A",
  hide: "\u9690\u85CF",
  showAll: "\u663E\u793A\u6240\u6709",
  hideAll: "\u9690\u85CF\u5168\u90E8",
  showMore: "\u663E\u793A\u66F4\u591A",
  showOptions: "\u663E\u793A\u9009\u9879",
  hideOptions: "\u9690\u85CF\u9009\u9879",
  showMenu: "\u663E\u793A\u83DC\u5355",
  hideMenu: "\u9690\u85CF\u83DC\u5355",
  addAll: "\u5168\u90E8\u6DFB\u52A0",
  removeAll: "\u79FB\u9664\u6240\u6709",
  signUp: "\u6CE8\u518C",
  signIn: "\u767B\u5F55",
  signOut: "\u767B\u51FA",
  required: "\u5FC5\u586B\u9879",
  preferred: "\u9996\u9009",
  mandatory: "\u5F3A\u5236\u7684",
  loading: "\u52A0\u8F7D\u4E2D...",
  title: "\u6807\u9898",
  upload: "\u4E0A\u4F20",
  download: "\u4E0B\u8F7D",
  "default": "\u9ED8\u8BA4",
  more: "\u66F4\u591A\u7684",
  less: "\u8F83\u5C11\u7684",
  event: "\u4E8B\u4EF6",
  condition: "\u6761\u4EF6",
  after: "\u540E",
  before: "\u524D",
  search: "\u641C\u7D22",
  notification: "\u901A\u77E5",
  reference: "\u53C2\u8003",
  "function": "\u529F\u80FD"
};
const objects = {
  project: "\u9879\u76EE",
  projects: "\u9879\u76EE",
  table: "\u7F51\u683C",
  tables: "\u8868\u683C",
  field: "\u5B57\u6BB5",
  fields: "\u5B57\u6BB5",
  column: "\u5217",
  columns: "\u5217",
  page: "\u9875",
  pages: "\u9875\u9762",
  record: "\u8BB0\u5F55",
  records: "\u8BB0\u5F55",
  webhook: "Webhook.",
  webhooks: "Webhooks.",
  view: "\u89C6\u56FE",
  views: "\u89C6\u56FE",
  viewType: {
    grid: "\u8868\u683C",
    gallery: "\u753B\u5ECA",
    form: "\u8868\u5355",
    kanban: "\u770B\u677F",
    calendar: "\u65E5\u5386"
  },
  user: "\u7528\u6237",
  users: "\u7528\u6237",
  role: "\u89D2\u8272",
  roles: "\u89D2\u8272",
  roleType: {
    owner: "\u6240\u6709\u8005",
    creator: "\u521B\u9020\u8005",
    editor: "\u7F16\u8F91",
    commenter: "\u8BC4\u8BBA\u8005",
    viewer: "\u89C2\u4F17"
  }
};
const datatype = {
  ID: "ID",
  ForeignKey: "\u5916\u952E",
  SingleLineText: "\u5355\u884C\u6587\u672C",
  LongText: "\u957F\u6587\u672C",
  Attachment: "\u9644\u4EF6",
  Checkbox: "\u590D\u9009\u6846",
  MultiSelect: "\u591A\u9009",
  SingleSelect: "\u5355\u4E2A\u9009\u62E9",
  Collaborator: "\u5408\u4F5C\u8005",
  "Date": "\u65E5\u671F",
  Year: "\u5E74",
  Time: "\u65F6\u95F4",
  PhoneNumber: "\u7535\u8BDD\u53F7\u7801",
  Email: "\u7535\u5B50\u90AE\u4EF6",
  URL: "URL.",
  "Number": "\u6570\u5B57",
  Decimal: "\u5341\u8FDB\u5236",
  Currency: "\u8D27\u5E01",
  Percent: "\u767E\u5206",
  Duration: "\u671F\u95F4",
  Rating: "\u8BC4\u5206",
  Formula: "\u516C\u5F0F",
  Rollup: "\u5377\u8D77",
  Count: "\u8BA1\u6570",
  Lookup: "\u67E5\u627E",
  DateTime: "\u65E5\u671F\u65F6\u95F4",
  CreateTime: "\u521B\u5EFA\u65F6\u95F4",
  LastModifiedTime: "\u6700\u540E\u4FEE\u6539\u65F6\u95F4",
  AutoNumber: "\u81EA\u52A8\u7F16\u53F7",
  Barcode: "\u6761\u7801",
  Button: "\u6309\u94AE",
  Password: "\u5BC6\u7801",
  relationProperties: {
    noAction: "\u6CA1\u6709\u4EFB\u4F55\u884C\u52A8",
    cascade: "\u7EA7\u8054",
    restrict: "\u4E25\u683C",
    setNull: "\u8BBE\u7F6Enull.",
    setDefault: "\u9ED8\u8BA4\u8BBE\u7F6E"
  }
};
const filterOperation = {
  isEqual: "\u5B8C\u5168\u4E00\u81F4",
  isNotEqual: "\u5B8C\u5168\u4E0D\u4E00\u81F4",
  isLike: "\u90E8\u5206\u4E00\u81F4",
  "isNot like": "\u90E8\u5206\u4E0D\u4E00\u81F4",
  isEmpty: "\u662F\u7A7A\u7684",
  isNotEmpty: "\u4E0D\u662F\u7A7A\u7684",
  isNull: "\u4E00\u7247\u7A7A\u767D",
  isNotNull: "\u4E0D\u662F\u7A7A\u865A"
};
const title = {
  newProj: "\u521B\u5EFA\u65B0\u9879\u76EE",
  myProject: "\u6211\u7684\u9879\u76EE",
  formTitle: "\u8868\u683C\u6807\u9898",
  collabView: "\u5408\u4F5C\u89C6\u56FE",
  lockedView: "\u9501\u5B9A\u89C6\u56FE",
  personalView: "\u4E2A\u4EBA\u89C2",
  appStore: "\u8F6F\u4EF6\u5546\u5E97",
  teamAndAuth: "\u56E2\u961F\u548C\u8BA4\u8BC1",
  rolesUserMgmt: "\u89D2\u8272\u548C\u7528\u6237\u7BA1\u7406",
  userMgmt: "\u7528\u6237\u8D26\u53F7\u7BA1\u7406",
  apiTokenMgmt: "API Tokens \u7BA1\u7406",
  rolesMgmt: "\u89D2\u8272\u7BA1\u7406",
  projMeta: "\u9879\u76EE\u57FA\u7840\u4FE1\u606F",
  metaMgmt: "\u9879\u76EE\u57FA\u7840\u4FE1\u606F\u7BA1\u7406",
  metadata: "\u5143\u6570\u636E",
  exportImportMeta: "\u5BFC\u51FA/\u5BFC\u5165\u5143\u6570\u636E",
  uiACL: "UI\u8BBF\u95EE\u63A7\u5236",
  metaOperations: "\u5143\u6570\u636E\u64CD\u4F5C",
  audit: "\u5BA1\u8BA1",
  auditLogs: "\u5BA1\u8BA1\u65E5\u5FD7",
  sqlMigrations: "SQL\u8FC1\u79FB",
  dbCredentials: "\u6570\u636E\u5E93\u94FE\u63A5\u51ED\u8BC1",
  advancedParameters: "SSL \u548C\u9AD8\u7EA7\u53C2\u6570",
  headCreateProject: "\u65B0\u5EFA\u9879\u76EE | NocoDB",
  headLogin: "\u767B\u5F55 | NocoDB",
  resetPassword: "\u91CD\u7F6E\u5BC6\u7801",
  teamAndSettings: "\u56E2\u961F\u548C\u8BBE\u7F6E",
  apiDocs: "API \u6587\u6863",
  importFromAirtable: "Import From Airtable"
};
const labels = {
  notifyVia: "\u901A\u77E5\u901A\u8FC7",
  projName: "\u9879\u76EE\u540D",
  tableName: "\u8868\u540D\u79F0",
  viewName: "\u67E5\u770B\u540D\u79F0",
  viewLink: "\u67E5\u770B\u94FE\u63A5",
  columnName: "\u5217\u540D\u79F0",
  columnType: "\u5217\u7C7B\u578B",
  roleName: "\u89D2\u8272\u540D\u79F0",
  roleDescription: "\u89D2\u8272\u63CF\u8FF0",
  databaseType: "\u952E\u5165\u6570\u636E\u5E93",
  lengthValue: "\u957F\u5EA6/\u503C",
  dbType: "\u6570\u636E\u5E93\u7C7B\u578B",
  sqliteFile: "SQLite \u6587\u4EF6",
  hostAddress: "\u670D\u52A1\u5668\u5730\u5740",
  port: "\u7AEF\u53E3\u53F7",
  username: "\u7528\u6237\u540D",
  password: "\u5BC6\u7801",
  schemaName: "\u67B6\u6784\u540D\u79F0",
  action: "\u884C\u52A8",
  actions: "\u884C\u52A8",
  operation: "\u64CD\u4F5C",
  operationType: "\u64CD\u4F5C\u7C7B\u578B",
  operationSubType: "\u64CD\u4F5C\u5B50\u7C7B\u578B",
  description: "\u63CF\u8FF0",
  authentication: "\u9A8C\u8BC1",
  token: "\u4EE4\u724C",
  where: "\u5728\u54EA\u91CC",
  cache: "\u7F13\u5B58",
  chat: "\u804A\u5929",
  email: "\u7535\u5B50\u90AE\u4EF6",
  storage: "\u8D2E\u5B58",
  uiAcl: "UI-ACL",
  models: "\u6A21\u578B",
  syncState: "\u540C\u6B65\u72B6\u6001",
  created: "\u521B\u9020\u4E86",
  sqlOutput: "SQL\u8F93\u51FA",
  addOption: "\u6DFB\u52A0\u9009\u9879",
  aggregateFunction: "\u6C47\u603B\u529F\u80FD",
  dbCreateIfNotExists: "\u6570\u636E\u5E93 : \u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA",
  clientKey: "\u5BA2\u6237\u7AEF Key",
  clientCert: "\u5BA2\u6237\u7AEF Cert",
  serverCA: "\u670D\u52A1\u5668 CA",
  requriedCa: "\u5FC5\u586B\u9879-CA",
  requriedIdentity: "\u5FC5\u586B\u9879-IDENTITY",
  inflection: {
    tableName: "\u4FEE\u6539 - \u8868\u540D",
    columnName: "\u4FEE\u6539 - \u5217\u540D"
  },
  community: {
    starUs1: "\u70B9\u8D5E",
    starUs2: "\u6211\u4EEC\u7684 Github",
    bookDemo: "\u67E5\u770B\u514D\u8D39\u6F14\u793A",
    getAnswered: "\u901A\u8FC7\u8FD9\u91CC\u8BA9\u4F60\u7684\u95EE\u9898\u5F97\u5230\u89E3\u7B54",
    joinDiscord: "\u52A0\u5165 Discord",
    joinCommunity: "\u52A0\u5165 NocoDB \u793E\u533A",
    joinReddit: "\u52A0\u5165 /r/NocoDB",
    followNocodb: "\u5173\u6CE8 NocoDB"
  },
  docReference: "\u53C2\u8003\u6587\u6863",
  selectUserRole: "\u9009\u62E9\u7528\u6237\u89D2\u8272",
  childTable: "\u5B50\u8868",
  childColumn: "\u5B50\u5217",
  onUpdate: "\u66F4\u65B0",
  onDelete: "\u5220\u9664"
};
const activity = {
  createProject: "\u521B\u5EFA\u9879\u76EE",
  importProject: "\u5BFC\u5165\u9879\u76EE",
  searchProject: "\u641C\u7D22\u9879\u76EE",
  editProject: "\u7F16\u8F91\u9879\u76EE",
  stopProject: "\u505C\u6B62\u9879\u76EE",
  startProject: "\u5F00\u542F\u9879\u76EE",
  restartProject: "\u91CD\u542F\u9879\u76EE",
  deleteProject: "\u5220\u9664\u9879\u76EE",
  refreshProject: "\u5237\u65B0\u9879\u76EE",
  saveProject: "\u4FDD\u5B58\u9879\u76EE",
  createProjectExtended: {
    extDB: "\u901A\u8FC7\u8FDE\u63A5\u65B0\u5EFA <br>\u8FDE\u63A5\u5230\u5916\u90E8\u6570\u636E\u5E93",
    excel: "\u4ECEExcel\u521B\u5EFA\u9879\u76EE",
    template: "\u4ECE\u6A21\u677F\u521B\u5EFA\u9879\u76EE"
  },
  OkSaveProject: "\u786E\u8BA4\u5E76\u4FDD\u5B58\u9879\u76EE",
  upgrade: {
    available: "\u5347\u7EA7\u53EF\u7528",
    releaseNote: "\u53D1\u884C\u8BF4\u660E",
    howTo: "\u5982\u4F55\u5347\u7EA7\uFF1F"
  },
  translate: "\u5E2E\u52A9\u7FFB\u8BD1",
  account: {
    authToken: "\u590D\u5236auth\u4EE4\u724C",
    swagger: "Swagger Apis \u6587\u6863",
    projInfo: "\u590D\u5236\u9879\u76EE\u4FE1\u606F",
    themes: "\u4E3B\u9898"
  },
  sort: "\u6392\u5E8F",
  addSort: "\u6DFB\u52A0\u6392\u5E8F\u9009\u9879",
  filter: "\u7B5B\u9009",
  addFilter: "\u6DFB\u52A0\u8FC7\u6EE4\u5668",
  share: "\u5206\u4EAB",
  shareBase: {
    disable: "\u7981\u7528\u5171\u4EAB\u57FA\u7840",
    enable: "\u4EFB\u4F55\u6709\u94FE\u63A5\u7684\u4EBA",
    link: "\u5171\u4EAB\u57FA\u672C\u94FE\u63A5"
  },
  invite: "\u9080\u8BF7",
  inviteMore: "\u9080\u8BF7\u66F4\u591A",
  inviteTeam: "\u9080\u8BF7\u56E2\u961F",
  inviteToken: "\u9080\u8BF7\u4EE4\u724C",
  newUser: "\u65B0\u7528\u6237",
  editUser: "\u7F16\u8F91\u7528\u6237",
  deleteUser: "\u4ECE\u9879\u76EE\u4E2D\u5220\u9664\u7528\u6237",
  resendInvite: "\u91CD\u65B0\u53D1\u9001\u9080\u8BF7\u7535\u5B50\u90AE\u4EF6",
  copyInviteURL: "\u590D\u5236\u9080\u8BF7\u94FE\u63A5",
  newRole: "\u65B0\u89D2\u8272",
  reloadRoles: "\u91CD\u65B0\u52A0\u8F7D\u89D2\u8272",
  nextPage: "\u4E0B\u4E00\u9875",
  prevPage: "\u4E0A\u4E00\u9875",
  nextRecord: "\u4E0B\u4E00\u6B65\u8BB0\u5F55",
  previousRecord: "\u4E4B\u524D\u7684\u7EAA\u5F55",
  copyApiURL: "\u590D\u5236 API \u94FE\u63A5",
  createTable: "\u8868\u521B\u9020",
  refreshTable: "\u8868\u5237\u65B0",
  renameTable: "\u8868\u91CD\u547D\u540D",
  deleteTable: "\u8868\u5220\u9664",
  addField: "\u5C06\u65B0\u5B57\u6BB5\u6DFB\u52A0\u5230\u6B64\u8868",
  setPrimary: "\u8BBE\u7F6E\u4E3A\u4E3B\u8981\u503C",
  addRow: "\u6DFB\u52A0\u65B0\u884C",
  saveRow: "\u4FDD\u5B58\u884C",
  insertRow: "\u63D2\u5165\u65B0\u884C",
  deleteRow: "\u5220\u9664\u884C",
  deleteSelectedRow: "\u5220\u9664\u6240\u9009\u884C",
  importExcel: "\u5BFC\u5165Excel",
  importCSV: "Import CSV",
  downloadCSV: "\u4E0B\u8F7D\u4E3ACSV",
  downloadExcel: "\u4E0B\u8F7D\u4E3AXLSX",
  uploadCSV: "\u4E0A\u4F20CSV",
  "import": "\u5BFC\u5165",
  importMetadata: "\u5BFC\u5165\u5143\u6570\u636E",
  exportMetadata: "\u5BFC\u51FA\u5143\u6570\u636E",
  clearMetadata: "\u6E05\u9664\u5143\u6570\u636E",
  exportToFile: "\u5BFC\u51FA\u5230\u6587\u4EF6",
  changePwd: "\u66F4\u6539\u5BC6\u7801",
  createView: "\u521B\u5EFA\u89C6\u56FE",
  shareView: "\u5206\u4EAB\u89C6\u56FE",
  listSharedView: "\u5171\u4EAB\u89C6\u56FE\u5217\u8868",
  ListView: "\u89C6\u56FE\u5217\u8868",
  copyView: "\u590D\u5236\u89C6\u56FE",
  renameView: "\u91CD\u547D\u540D\u89C6\u56FE",
  deleteView: "\u5220\u9664\u89C6\u56FE",
  createGrid: "\u521B\u5EFA\u7F51\u683C\u89C6\u56FE",
  createGallery: "\u521B\u5EFA\u753B\u5ECA\u89C6\u56FE",
  createCalendar: "\u521B\u5EFA\u65E5\u5386\u89C6\u56FE",
  createKanban: "\u521B\u5EFA\u770B\u677F\u89C6\u56FE",
  createForm: "\u521B\u5EFA\u8868\u5355\u89C6\u56FE",
  showSystemFields: "\u663E\u793A\u7CFB\u7EDF\u5B57\u6BB5",
  copyUrl: "\u590D\u5236\u94FE\u63A5",
  openTab: "\u6253\u5F00\u65B0\u6807\u7B7E",
  iFrame: "\u590D\u5236\u5D4C\u5165HTML\u4EE3\u7801",
  addWebhook: "\u6DFB\u52A0\u65B0\u7684webhook.",
  newToken: "\u6DFB\u52A0\u65B0 Token",
  exportZip: "\u5BFC\u51FA\u4E3Azip\u683C\u5F0F",
  importZip: "\u5BFC\u5165zip\u683C\u5F0F",
  metaSync: "\u7ACB\u5373\u540C\u6B65",
  settings: "\u8BBE\u7F6E",
  previewAs: "\u9884\u89C8",
  resetReview: "\u91CD\u7F6E\u9884\u89C8",
  testDbConn: "\u6D4B\u8BD5\u6570\u636E\u5E93\u94FE\u63A5",
  removeDbFromEnv: "\u4ECE\u73AF\u5883\u4E2D\u5220\u9664\u6570\u636E\u5E93",
  editConnJson: "\u7F16\u8F91\u94FE\u63A5JSON",
  sponsorUs: "\u8D5E\u52A9\u6211\u4EEC",
  sendEmail: "\u53D1\u9001\u90AE\u4EF6"
};
const tooltip = {
  saveChanges: "\u4FDD\u5B58\u66F4\u6539",
  xcDB: "\u65B0\u5EFA\u9879\u76EE",
  extDB: "\u652F\u6301 MySQL\u3001PostgreSQL\u3001SQL Server \u548C SQLite",
  apiRest: "\u901A\u8FC7 REST APIs \u8BBF\u95EE",
  apiGQL: "\u901A\u8FC7 GraphQL APIs \u8BBF\u95EE",
  theme: {
    dark: "\u5B83\u786E\u5B9E\u6709\u9ED1\u8272\uFF08^\u21E7b\uFF09",
    light: "\u5B83\u662F\u9ED1\u8272\u5417\uFF1F \uFF08^\u21E7b\uFF09"
  },
  addTable: "\u6DFB\u52A0\u65B0\u8868",
  inviteMore: "\u9080\u8BF7\u66F4\u591A\u7528\u6237",
  toggleNavDraw: "\u5207\u6362\u5BFC\u822A\u62BD\u5C49",
  reloadApiToken: "\u91CD\u65B0\u52A0\u8F7DAPI\u4EE4\u724C",
  generateNewApiToken: "\u751F\u6210\u65B0\u7684API\u4EE4\u724C",
  addRole: "\u6DFB\u52A0\u65B0\u89D2\u8272",
  reloadList: "\u91CD\u65B0\u52A0\u8F7D\u5217\u8868",
  metaSync: "\u540C\u6B65\u5143\u6570\u636E",
  sqlMigration: "\u91CD\u65B0\u52A0\u8F7D\u8FC1\u79FB",
  updateRestart: "\u66F4\u65B0\u5E76\u91CD\u542F",
  cancelReturn: "\u53D6\u6D88\u5E76\u8FD4\u56DE",
  exportMetadata: "\u4ECE\u5143\u6570\u636E\u8868\u683C\u5BFC\u51FA\u6240\u6709\u5143\u6570\u636E\u5230\u5143\u6570\u636E\u76EE\u5F55",
  importMetadata: "\u4ECE\u5143\u6570\u636E\u76EE\u5F55\u5BFC\u5165\u6240\u6709\u7684\u5143\u6570\u636E\u5230\u5143\u6570\u636E\u8868\u683C",
  clearMetadata: "\u5728\u5143\u6570\u636E\u8868\u683C\u4E2D\u6E05\u695A\u6240\u6709\u5143\u6570\u636E",
  clientKey: "\u9009\u62E9 .key \u6587\u4EF6",
  clientCert: "\u9009\u62E9 .cert \u6587\u4EF6",
  clientCA: "\u9009\u62E9 CA \u6587\u4EF6"
};
const placeholder = {
  projName: "\u8F93\u5165\u9879\u76EE\u540D\u79F0",
  password: {
    enter: "\u8F93\u5165\u5BC6\u7801",
    current: "\u5F53\u524D\u5BC6\u7801",
    "new": "\u65B0\u5BC6\u7801",
    save: "\u4FDD\u5B58\u5BC6\u7801",
    confirm: "\u786E\u8BA4\u65B0\u5BC6\u7801"
  },
  searchProjectTree: "\u641C\u7D22\u8868",
  searchFields: "\u641C\u7D22\u5B57\u6BB5",
  searchColumn: "\u641C\u7D22{search}\u5217",
  searchApps: "\u641C\u7D22\u5E94\u7528\u7A0B\u5E8F",
  searchModels: "\u641C\u7D22\u6A21\u578B",
  noItemsFound: "\u672A\u627E\u5230\u4EFB\u4F55\u9879\u76EE",
  defaultValue: "\u9ED8\u8BA4\u503C",
  filterByEmail: "\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u8FC7\u6EE4"
};
const msg = {
  info: {
    footerInfo: "\u6BCF\u9875\u884C\u9A76",
    upload: "\u9009\u62E9\u6587\u4EF6\u4EE5\u4E0A\u4F20",
    upload_sub: "\u6216\u62D6\u653E\u6587\u4EF6",
    excelSupport: "\u652F\u6301\uFF1A.xls\uFF0C.xlsx\uFF0C.xlsm\uFF0C.ods\uFF0C.ots",
    excelURL: "\u8F93\u5165Excel\u6587\u4EF6URL",
    csvURL: "Enter CSV file URL",
    footMsg: "\u8981\u89E3\u6790\u4E3A\u63A8\u65AD\u6570\u636E\u7C7B\u578B\u7684\u884C\u6570",
    excelImport: "\u53EF\u7528\u4E8E\u5BFC\u5165\u7684\u8868\u683C",
    exportMetadata: "\u60A8\u60F3\u4ECE\u5143\u8868\u5BFC\u51FA\u5143\u6570\u636E\u5417\uFF1F",
    importMetadata: "\u60A8\u60F3\u4ECE\u5143\u8868\u5BFC\u5165\u5143\u6570\u636E\u5417\uFF1F",
    clearMetadata: "\u4F60\u60F3\u6E05\u9664\u5143\u8868\u4E2D\u7684\u5143\u6570\u636E\u5417\uFF1F",
    projectEmptyMessage: "\u521B\u5EFA\u65B0\u9879\u76EE\u5F00\u59CB\u4F7F\u7528",
    stopProject: "\u4F60\u60F3\u505C\u6B62\u8FD9\u4E2A\u9879\u76EE\u5417\uFF1F",
    startProject: "\u4F60\u60F3\u542F\u52A8\u8FD9\u4E2A\u9879\u76EE\u5417\uFF1F",
    restartProject: "\u4F60\u60F3\u91CD\u65B0\u542F\u52A8\u9879\u76EE\u5417\uFF1F",
    deleteProject: "\u4F60\u60F3\u5220\u9664\u8FD9\u4E2A\u9879\u76EE\u5417\uFF1F",
    shareBasePrivate: "\u4EA7\u751F\u516C\u5F00\u5171\u4EAB\u7684\u53EA\u8BFB\u57FA\u7840",
    shareBasePublic: "\u4E92\u8054\u7F51\u4E0A\u7684\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u67E5\u770B",
    userInviteNoSMTP: "\u770B\u8D77\u6765\u4F60\u8FD8\u6CA1\u6709\u914D\u7F6E\u90AE\u4EF6\uFF01\u8BF7\u590D\u5236\u4E0A\u9762\u7684\u9080\u8BF7\u94FE\u63A5\u5E76\u5C06\u5176\u53D1\u9001\u7ED9",
    dragDropHide: "\u5728\u6B64\u5904\u62D6\u653E\u5B57\u6BB5\u4EE5\u9690\u85CF",
    formInput: "\u8F93\u5165\u8868\u5355\u8F93\u5165\u6807\u7B7E",
    formHelpText: "\u6DFB\u52A0\u4E00\u4E9B\u5E2E\u52A9\u6587\u672C",
    onlyCreator: "\u4EC5\u521B\u5EFA\u4EBA\u53EF\u89C1",
    formDesc: "\u6DFB\u52A0\u8868\u5355\u63CF\u8FF0",
    beforeEnablePwd: "\u4F7F\u7528\u5BC6\u7801\u9650\u5236\u8BBF\u95EE",
    afterEnablePwd: "\u8BBF\u95EE\u53D7\u5BC6\u7801\u9650\u5236",
    privateLink: "\u6B64\u89C6\u56FE\u662F\u901A\u8FC7\u79C1\u4EBA\u94FE\u63A5\u5171\u4EAB\u7684",
    privateLinkAdditionalInfo: "\u62E5\u6709\u79C1\u4EBA\u94FE\u63A5\u7684\u4EBA\u53EA\u80FD\u770B\u5230\u6B64\u89C6\u56FE\u4E2D\u53EF\u89C1\u7684\u5355\u5143\u683C",
    afterFormSubmitted: "\u8868\u683C\u63D0\u4EA4\u540E",
    apiOptions: "\u8BBF\u95EE\u9879\u76EE\u901A\u8FC7",
    submitAnotherForm: "\u663E\u793A\u201C\u63D0\u4EA4\u53E6\u4E00\u4E2A\u8868\u5355\u201D\u6309\u94AE",
    showBlankForm: "5\u79D2\u540E\u663E\u793A\u7A7A\u767D\u8868\u683C",
    emailForm: "\u53D1\u7535\u5B50\u90AE\u4EF6\u7ED9\u6211",
    showSysFields: "\u663E\u793A\u7CFB\u7EDF\u5B57\u6BB5",
    filterAutoApply: "\u81EA\u52A8\u5E94\u7528",
    showMessage: "\u663E\u793A\u6B64\u6D88\u606F",
    viewNotShared: "\u5F53\u524D\u89C6\u56FE\u4E0D\u5171\u4EAB\uFF01",
    showAllViews: "\u663E\u793A\u6B64\u8868\u7684\u6240\u6709\u5171\u4EAB\u89C6\u56FE",
    collabView: "\u5177\u6709\u7F16\u8F91\u6743\u9650\u6216\u66F4\u9AD8\u7684\u5408\u4F5C\u8005\u53EF\u4EE5\u66F4\u6539\u89C6\u56FE\u914D\u7F6E\u3002",
    lockedView: "\u6CA1\u6709\u4EBA\u53EF\u4EE5\u7F16\u8F91\u89C6\u56FE\u914D\u7F6E\uFF0C\u76F4\u5230\u5B83\u88AB\u89E3\u9501\u3002",
    personalView: "\u53EA\u6709\u60A8\u53EF\u4EE5\u7F16\u8F91\u89C6\u56FE\u914D\u7F6E\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5176\u4ED6\u5408\u4F5C\u8005\u7684\u4E2A\u4EBA\u89C6\u56FE\u9690\u85CF\u3002",
    ownerDesc: "\u53EF\u4EE5\u6DFB\u52A0/\u5220\u9664\u521B\u5EFA\u8005\u3002\u548C\u5B8C\u6574\u7F16\u8F91\u6570\u636E\u5E93\u7ED3\u6784\u548C\u5B57\u6BB5\u3002",
    creatorDesc: "\u53EF\u4EE5\u5B8C\u5168\u7F16\u8F91\u6570\u636E\u5E93\u7ED3\u6784\u548C\u503C\u3002",
    editorDesc: "\u53EF\u4EE5\u7F16\u8F91\u8BB0\u5F55\u4F46\u65E0\u6CD5\u66F4\u6539\u6570\u636E\u5E93/\u5B57\u6BB5\u7684\u7ED3\u6784\u3002",
    commenterDesc: "\u53EF\u4EE5\u67E5\u770B\u548C\u8BC4\u8BBA\u8BB0\u5F55\uFF0C\u4F46\u65E0\u6CD5\u7F16\u8F91\u4EFB\u4F55\u5185\u5BB9",
    viewerDesc: "\u53EF\u4EE5\u67E5\u770B\u8BB0\u5F55\u4F46\u65E0\u6CD5\u7F16\u8F91\u4EFB\u4F55\u5185\u5BB9",
    addUser: "\u6DFB\u52A0\u65B0\u7528\u6237",
    staticRoleInfo: "\u65E0\u6CD5\u7F16\u8F91\u7CFB\u7EDF\u5B9A\u4E49\u7684\u89D2\u8272",
    exportZip: "\u5BFC\u51FA\u9879\u76EE\u6570\u636E\u4E3A zip \u683C\u5F0F\u5E76\u4E0B\u8F7D\u3002",
    importZip: "\u5BFC\u5165\u9879\u76EE zip \u683C\u5F0F\u7684\u5143\u6570\u636E\u5E76\u91CD\u65B0\u542F\u52A8\u3002",
    importText: "\u901A\u8FC7\u4E0A\u4F20\u5143\u6570\u636E zip \u6587\u4EF6\u5BFC\u5165 NocoDB \u9879\u76EE",
    metaNoChange: "\u6CA1\u6709\u786E\u5B9A\u66F4\u6539",
    sqlMigration: "\u5C06\u81EA\u52A8\u521B\u5EFA\u67B6\u6784\u8FC1\u79FB\u3002\u521B\u5EFA\u4E00\u4E2A\u8868\u5E76\u5237\u65B0\u6B64\u9875\u9762\u3002",
    dbConnectionStatus: "\u73AF\u5883\u9A8C\u8BC1",
    dbConnected: "\u8FDE\u63A5\u6210\u529F",
    notifications: {
      no_new: "\u6CA1\u6709\u65B0\u901A\u77E5",
      clear: "\u6E05\u7A7A"
    },
    sponsor: {
      header: "\u4F60\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\uFF01",
      message: "\u6211\u4EEC\u662F\u4E00\u652F\u5C0F\u578B\u56E2\u961F\uFF0C\u5168\u804C\u5DE5\u4F5C\uFF0C\u4F7FNocodb\u5F00\u653E\u6765\u6E90\u3002\u6211\u4EEC\u76F8\u4FE1\u4E00\u4E2A\u50CFNocodb\u8FD9\u6837\u7684\u5DE5\u5177\u5E94\u8BE5\u5728\u4E92\u8054\u7F51\u4E0A\u7684\u6BCF\u4E2A\u95EE\u9898\u6C42\u89E3\u5668\u4E0A\u81EA\u7531\u63D0\u4F9B\u3002"
    },
    loginMsg: "\u767B\u5F55\u5230 NocoDB",
    passwordRecovery: {
      message_1: "\u8BF7\u63D0\u4F9B\u4F60\u6CE8\u518C\u65F6\u4F7F\u7528\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u3002",
      message_2: "\u6211\u4EEC\u5C06\u5411\u4F60\u53D1\u9001\u4E00\u5C01\u7535\u5B50\u90AE\u4EF6\uFF0C\u90AE\u4EF6\u4E2D\u5305\u542B\u91CD\u7F6E\u5BC6\u7801\u7684\u94FE\u63A5\u3002",
      success: "\u8BF7\u68C0\u67E5\u4F60\u7684\u90AE\u7BB1\u4EE5\u91CD\u7F6E\u5BC6\u7801"
    },
    signUp: {
      superAdmin: "\u4F60\u5C06\u6210\u4E3A '\u8D85\u7EA7\u7BA1\u7406\u5458'",
      alreadyHaveAccount: "\u5DF2\u6709\u8D26\u53F7\uFF1F",
      workEmail: "\u8BF7\u8F93\u5165\u60A8\u7684\u5DE5\u4F5C\u90AE\u7BB1",
      enterPassword: "\u8BF7\u8F93\u5165\u4F60\u7684\u5BC6\u7801",
      forgotPassword: "\u5FD8\u8BB0\u5BC6\u7801\uFF1F",
      dontHaveAccount: "\u8FD8\u6CA1\u6709\u6CE8\u518C\u8D26\u53F7\uFF1F"
    },
    addView: {
      grid: "\u6DFB\u52A0\u8868\u683C\u89C6\u56FE",
      gallery: "\u6DFB\u52A0\u753B\u5ECA\u89C6\u56FE",
      form: "\u6DFB\u52A0\u8868\u5355\u89C6\u56FE",
      kanban: "\u6DFB\u52A0\u770B\u677F\u89C6\u56FE",
      calendar: "\u6DFB\u52A0\u65E5\u5386\u89C6\u56FE"
    },
    tablesMetadataInSync: "\u8868\u5143\u6570\u636E\u540C\u6B65",
    addMultipleUsers: "\u60A8\u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A\u9017\u53F7\uFF08\uFF0C\uFF09\u5206\u9694\u7684\u7535\u5B50\u90AE\u4EF6",
    enterTableName: "\u8F93\u5165\u8868\u540D",
    addDefaultColumns: "\u6DFB\u52A0\u9ED8\u8BA4\u5217",
    tableNameInDb: "\u6570\u636E\u5E93\u4E2D\u4FDD\u5B58\u7684\u8868\u540D"
  },
  error: {
    searchProject: "\u641C\u7D22\uFF1A {search} \u6CA1\u6709\u53D1\u73B0\u5339\u914D\u7684\u7ED3\u679C",
    invalidChar: "\u6587\u4EF6\u5939\u8DEF\u5F84\u4E2D\u7684\u5B57\u7B26\u65E0\u6548\u3002",
    invalidDbCredentials: "\u65E0\u6548\u7684\u6570\u636E\u5E93\u51ED\u636E\u3002",
    unableToConnectToDb: "\u65E0\u6CD5\u8FDE\u63A5\u5230\u6570\u636E\u5E93\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u6570\u636E\u5E93\u662F\u5426\u5DF2\u542F\u52A8\u3002",
    userDoesntHaveSufficientPermission: "\u7528\u6237\u4E0D\u5B58\u5728\u6216\u5177\u6709\u521B\u5EFA\u67B6\u6784\u7684\u8DB3\u591F\u6743\u9650\u3002",
    dbConnectionStatus: "\u6570\u636E\u5E93\u53C2\u6570\u65E0\u6548",
    dbConnectionFailed: "\u8FDE\u63A5\u5931\u8D25:",
    signUpRules: {
      emailReqd: "\u90AE\u7BB1\u5FC5\u586B",
      emailInvalid: "\u90AE\u7BB1\u683C\u5F0F\u65E0\u6548",
      passwdRequired: "\u5BC6\u7801\u5FC5\u586B",
      passwdLength: "\u60A8\u7684\u5BC6\u7801\u5FC5\u987B\u81F3\u5C11\u4E3A8\u4E2A\u5B57\u7B26"
    }
  },
  toast: {
    exportMetadata: "\u9879\u76EE\u5143\u6570\u636E\u6210\u529F\u5BFC\u51FA",
    importMetadata: "\u9879\u76EE\u5143\u6570\u636E\u6210\u529F\u5BFC\u5165",
    clearMetadata: "\u9879\u76EE\u5143\u6570\u636E\u5DF2\u6210\u529F\u6E05\u9664",
    stopProject: "\u9879\u76EE\u6210\u529F\u505C\u6B62",
    startProject: "\u9879\u76EE\u6210\u529F\u5F00\u59CB",
    restartProject: "\u9879\u76EE\u6210\u529F\u91CD\u65B0\u542F\u52A8",
    deleteProject: "\u9879\u76EE\u5DF2\u6210\u529F\u5220\u9664",
    authToken: "\u9A8C\u8BC1\u4EE4\u724C\u590D\u5236\u5230\u526A\u8D34\u677F",
    projInfo: "\u5C06\u9879\u76EE\u4FE1\u606F\u590D\u5236\u5230\u526A\u8D34\u677F",
    inviteUrlCopy: "\u590D\u5236\u9080\u8BF7\u94FE\u63A5\u5230\u526A\u8D34\u677F",
    createView: "\u89C6\u56FE\u521B\u5EFA\u6210\u529F",
    formEmailSMTP: "\u8BF7\u6FC0\u6D3BApp Store\u4E2D\u7684SMTP\u63D2\u4EF6\u4EE5\u542F\u7528\u7535\u5B50\u90AE\u4EF6\u901A\u77E5",
    collabView: "\u6210\u529F\u8F6C\u6362\u4E3A\u534F\u4F5C\u89C6\u56FE",
    lockedView: "\u6210\u529F\u8F6C\u6362\u4E3A\u9501\u5B9A\u89C6\u56FE",
    futureRelease: "\u5373\u5C06\u63A8\u51FA\uFF01"
  }
};
var zh_CN = {
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
export { activity, datatype, zh_CN as default, filterOperation, general, labels, msg, objects, placeholder, title, tooltip };
