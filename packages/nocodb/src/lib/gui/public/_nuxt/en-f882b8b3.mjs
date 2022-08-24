const general = {
  home: "Home",
  load: "Load",
  open: "Open",
  close: "Close",
  yes: "Yes",
  no: "No",
  ok: "OK",
  and: "And",
  or: "Or",
  add: "Add",
  edit: "Edit",
  remove: "Remove",
  save: "Save",
  confirm: "Confirm",
  cancel: "Cancel",
  submit: "Submit",
  create: "Create",
  insert: "Insert",
  "delete": "Delete",
  update: "Update",
  rename: "Rename",
  reload: "Reload",
  reset: "Reset",
  install: "Install",
  show: "Show",
  hide: "Hide",
  showAll: "Show all",
  hideAll: "Hide all",
  showMore: "Show more",
  showOptions: "Show options",
  hideOptions: "Hide options",
  showMenu: "Show menu",
  hideMenu: "Hide menu",
  addAll: "Add all",
  removeAll: "Remove all",
  signUp: "SIGN UP",
  signIn: "SIGN IN",
  signOut: "Sign Out",
  required: "Required",
  preferred: "Preferred",
  mandatory: "Mandatory",
  loading: "Loading ...",
  title: "Title",
  upload: "Upload",
  download: "Download",
  "default": "Default",
  more: "More",
  less: "Less",
  event: "Event",
  condition: "Condition",
  after: "After",
  before: "Before",
  search: "Search",
  notification: "Notification",
  reference: "Reference",
  "function": "Function"
};
const objects = {
  project: "Project",
  projects: "Projects",
  table: "Table",
  tables: "Tables",
  field: "Field",
  fields: "Fields",
  column: "Column",
  columns: "Columns",
  page: "Page",
  pages: "Pages",
  record: "Record",
  records: "Records",
  webhook: "Webhook",
  webhooks: "Webhooks",
  view: "View",
  views: "Views",
  viewType: {
    grid: "Grid",
    gallery: "Gallery",
    form: "Form",
    kanban: "Kanban",
    calendar: "Calendar"
  },
  user: "User",
  users: "Users",
  role: "Role",
  roles: "Roles",
  roleType: {
    owner: "Owner",
    creator: "Creator",
    editor: "Editor",
    commenter: "Commenter",
    viewer: "Viewer"
  }
};
const datatype = {
  ID: "ID",
  ForeignKey: "Foreign Key",
  SingleLineText: "Single Line Text",
  LongText: "Long Text",
  Attachment: "Attachment",
  Checkbox: "Checkbox",
  MultiSelect: "Multi Select",
  SingleSelect: "Single Select",
  Collaborator: "Collaborator",
  "Date": "Date",
  Year: "Year",
  Time: "Time",
  PhoneNumber: "Phone Number",
  Email: "Email",
  URL: "URL",
  "Number": "Number",
  Decimal: "Decimal",
  Currency: "Currency",
  Percent: "Percent",
  Duration: "Duration",
  Rating: "Rating",
  Formula: "Formula",
  Rollup: "Rollup",
  Count: "Count",
  Lookup: "Lookup",
  DateTime: "Date Time",
  CreateTime: "Create Time",
  LastModifiedTime: "Last Modified Time",
  AutoNumber: "Auto Number",
  Barcode: "Barcode",
  Button: "Button",
  Password: "Password",
  relationProperties: {
    noAction: "No Action",
    cascade: "Cascade",
    restrict: "Restrict",
    setNull: "Set NULL",
    setDefault: "Set Default"
  }
};
const filterOperation = {
  isEqual: "is equal",
  isNotEqual: "is not equal",
  isLike: "is like",
  "isNot like": "is not like",
  isEmpty: "is empty",
  isNotEmpty: "is not empty",
  isNull: "is null",
  isNotNull: "is not null"
};
const title = {
  newProj: "New Project",
  myProject: "My Projects",
  formTitle: "Form Title",
  collabView: "Collaborative View",
  lockedView: "Locked View",
  personalView: "Personal View",
  appStore: "App Store",
  teamAndAuth: "Team & Auth",
  rolesUserMgmt: "Roles & Users Management",
  userMgmt: "Users management",
  apiTokenMgmt: "API Tokens Management",
  rolesMgmt: "Roles Management",
  projMeta: "Project Metadata",
  metaMgmt: "Meta Management",
  metadata: "Metadata",
  exportImportMeta: "Export / Import Metadata",
  uiACL: "UI Access Control",
  metaOperations: "Metadata Operations",
  audit: "Audit",
  auditLogs: "Audit Log",
  sqlMigrations: "SQL Migrations",
  dbCredentials: "Database Credentials",
  advancedParameters: "SSL & Advanced parameters",
  headCreateProject: "Create Project | NocoDB",
  headLogin: "Log In | NocoDB",
  resetPassword: "Reset your password",
  teamAndSettings: "Team & Settings",
  apiDocs: "API Docs",
  importFromAirtable: "Import From Airtable"
};
const labels = {
  notifyVia: "Notify Via",
  projName: "Project name",
  tableName: "Table name",
  viewName: "View name",
  viewLink: "View Link",
  columnName: "Column Name",
  columnType: "Column Type",
  roleName: "Role Name",
  roleDescription: "Role Description",
  databaseType: "Type in Database",
  lengthValue: "Length/ value",
  dbType: "Database Type",
  sqliteFile: "SQLite File",
  hostAddress: "Host Address",
  port: "Port Number",
  username: "Username",
  password: "Password",
  schemaName: "Schema name",
  database: "Database",
  action: "Action",
  actions: "Actions",
  operation: "Operation",
  operationType: "Operation type",
  operationSubType: "Operation sub-type",
  description: "Description",
  authentication: "Authentication",
  token: "Token",
  where: "Where",
  cache: "Cache",
  chat: "Chat",
  email: "E-mail",
  storage: "Storage",
  uiAcl: "UI-ACL",
  models: "Models",
  syncState: "Sync state",
  created: "Created",
  sqlOutput: "SQL Output",
  addOption: "Add option",
  aggregateFunction: "Aggregate function",
  dbCreateIfNotExists: "Database : create if not exists",
  clientKey: "Client Key",
  clientCert: "Client Cert",
  serverCA: "Server CA",
  requriedCa: "Required-CA",
  requriedIdentity: "Required-IDENTITY",
  inflection: {
    tableName: "Inflection - Table name",
    columnName: "Inflection - Column name"
  },
  community: {
    starUs1: "Star",
    starUs2: "us on Github",
    bookDemo: "Book a Free DEMO",
    getAnswered: "Get your questions answered",
    joinDiscord: "Join Discord",
    joinCommunity: "Join NocoDB Community",
    joinReddit: "Join /r/NocoDB",
    followNocodb: "Follow NocoDB"
  },
  docReference: "Document Reference",
  selectUserRole: "Select User Role",
  childTable: "Child table",
  childColumn: "Child column",
  onUpdate: "On Update",
  onDelete: "On Delete"
};
const activity = {
  createProject: "Create Project",
  importProject: "Import Project",
  searchProject: "Search Project",
  editProject: "Edit Project",
  stopProject: "Stop Project",
  startProject: "Start Project",
  restartProject: "Restart Project",
  deleteProject: "Delete Project",
  refreshProject: "Refresh projects",
  saveProject: "Save Project",
  createProjectExtended: {
    extDB: "Create By Connecting <br>To An External Database",
    excel: "Create Project from excel",
    template: "Create Project from template"
  },
  OkSaveProject: "Ok & Save Project",
  upgrade: {
    available: "Upgrade available",
    releaseNote: "Release notes",
    howTo: "How to upgrade ?"
  },
  translate: "Help translate",
  account: {
    authToken: "Copy Auth Token",
    swagger: "Swagger APIs Doc",
    projInfo: "Copy Project Info",
    themes: "Themes"
  },
  sort: "Sort",
  addSort: "Add Sort Option",
  filter: "Filter",
  addFilter: "Add Filter",
  share: "Share",
  shareBase: {
    disable: "Disable shared base",
    enable: "Anyone with the link",
    link: "Shared base link"
  },
  invite: "Invite",
  inviteMore: "Invite more",
  inviteTeam: "Invite Team",
  inviteToken: "Invite Token",
  newUser: "New User",
  editUser: "Edit user",
  deleteUser: "Remove user from project",
  resendInvite: "Resend invite E-mail",
  copyInviteURL: "Copy invite URL",
  newRole: "New role",
  reloadRoles: "Reload roles",
  nextPage: "Next page",
  prevPage: "Previous page",
  nextRecord: "Next record",
  previousRecord: "Previous record",
  copyApiURL: "Copy API URL",
  createTable: "Table Create",
  refreshTable: "Tables Refresh",
  renameTable: "Table Rename",
  deleteTable: "Table Delete",
  addField: "Add new field to this table",
  setPrimary: "Set as Primary value",
  addRow: "Add new row",
  saveRow: "Save row",
  insertRow: "Insert New Row",
  deleteRow: "Delete Row",
  deleteSelectedRow: "Delete Selected Rows",
  importExcel: "Import Excel",
  importCSV: "Import CSV",
  downloadCSV: "Download as CSV",
  downloadExcel: "Download as XLSX",
  uploadCSV: "Upload CSV",
  "import": "Import",
  importMetadata: "Import Metadata",
  exportMetadata: "Export Metadata",
  clearMetadata: "Clear Metadata",
  exportToFile: "Export to file",
  changePwd: "Change Password",
  createView: "Create a View",
  shareView: "Share View",
  listSharedView: "Shared View List",
  ListView: "Views List",
  copyView: "Copy view",
  renameView: "Rename view",
  deleteView: "Delete view",
  createGrid: "Create Grid View",
  createGallery: "Create Gallery View",
  createCalendar: "Create Calendar View",
  createKanban: "Create Kanban View",
  createForm: "Create Form View",
  showSystemFields: "Show system fields",
  copyUrl: "Copy URL",
  openTab: "Open new tab",
  iFrame: "Copy embeddable HTML code",
  addWebhook: "Add New Webhook",
  newToken: "Add New Token",
  exportZip: "Export zip",
  importZip: "Import zip",
  metaSync: "Sync Now",
  settings: "Settings",
  previewAs: "Preview as",
  resetReview: "Reset Preview",
  testDbConn: "Test Database Connection",
  removeDbFromEnv: "Remove Database from environment",
  editConnJson: "Edit connection JSON",
  sponsorUs: "Sponsor Us",
  sendEmail: "SEND EMAIL"
};
const tooltip = {
  saveChanges: "Save changes",
  xcDB: "Create a new project",
  extDB: "Supports MySQL, PostgreSQL, SQL Server & SQLite",
  apiRest: "Accessible via REST APIs",
  apiGQL: "Accessible via GraphQL APIs",
  theme: {
    dark: "It does come in Black (^\u21E7B)",
    light: "Does it come in Black ? (^\u21E7B)"
  },
  addTable: "Add new table",
  inviteMore: "Invite more users",
  toggleNavDraw: "Toggle navigation drawer",
  reloadApiToken: "Reload API tokens",
  generateNewApiToken: "Generate new API token",
  addRole: "Add new role",
  reloadList: "Reload list",
  metaSync: "Sync metadata",
  sqlMigration: "Reload migrations",
  updateRestart: "Update & Restart",
  cancelReturn: "Cancel and Return",
  exportMetadata: "Export all metadata from the meta tables to meta directory.",
  importMetadata: "Import all metadata from the meta directory to meta tables.",
  clearMetadata: "Clear all metadata from meta tables.",
  clientKey: "Select .key file",
  clientCert: "Select .cert file",
  clientCA: "Select CA file"
};
const placeholder = {
  projName: "Enter Project Name",
  password: {
    enter: "Enter the password",
    current: "Current password",
    "new": "New password",
    save: "Save password",
    confirm: "Confirm new password"
  },
  searchProjectTree: "Search tables",
  searchFields: "Search fields",
  searchColumn: "Search {search} column",
  searchApps: "Search apps",
  searchModels: "Search models",
  noItemsFound: "No items found",
  defaultValue: "Default value",
  filterByEmail: "Filter by E-mail"
};
const msg = {
  info: {
    footerInfo: "Rows per page",
    upload: "Select file to Upload",
    upload_sub: "or drag and drop file",
    excelSupport: "Supported: .xls, .xlsx, .xlsm, .ods, .ots",
    excelURL: "Enter excel file URL",
    csvURL: "Enter CSV file URL",
    footMsg: "# of rows to parse to infer datatype",
    excelImport: "sheet(s) are available for import",
    exportMetadata: "Do you want to export metadata from meta tables?",
    importMetadata: "Do you want to import metadata from meta tables?",
    clearMetadata: "Do you want to clear metadata from meta tables?",
    projectEmptyMessage: "Get started by creating a new project",
    stopProject: "Do you want to stop the project?",
    startProject: "Do you want to start the project?",
    restartProject: "Do you want to restart the project?",
    deleteProject: "Do you want to delete the project?",
    shareBasePrivate: "Generate publicly shareable readonly base",
    shareBasePublic: "Anyone on the internet with this link can view",
    userInviteNoSMTP: "Looks like you have not configured mailer yet!\nPlease copy above invite link and send it to",
    dragDropHide: "Drag and drop fields here to hide",
    formInput: "Enter form input label",
    formHelpText: "Add some help text",
    onlyCreator: "Only visible to Creator",
    formDesc: "Add form description",
    beforeEnablePwd: "Restrict access with a password",
    afterEnablePwd: "Access is password restricted",
    privateLink: "This view is shared via a private link",
    privateLinkAdditionalInfo: "People with private link can only see cells visible in this view",
    afterFormSubmitted: "After form is submitted",
    apiOptions: "Access Project via",
    submitAnotherForm: "Show 'Submit Another Form' button",
    showBlankForm: "Show a blank form after 5 seconds",
    emailForm: "E-mail me at",
    showSysFields: "Show system fields",
    filterAutoApply: "Auto apply",
    showMessage: "Show this message",
    viewNotShared: "Current view is not shared!",
    showAllViews: "Show all shared views of this table",
    collabView: "Collaborators with edit permissions or higher can change the view configuration.",
    lockedView: "No one can edit the view configuration until it is unlocked.",
    personalView: "Only you can edit the view configuration. Other collaborators\u2019 personal views are hidden by default.",
    ownerDesc: "Can add/remove creators. And full edit database structures & fields.",
    creatorDesc: "Can fully edit database structure & values.",
    editorDesc: "Can edit records but cannot change structure of database/fields.",
    commenterDesc: "Can view and comment the records but cannot edit anything",
    viewerDesc: "Can view the records but cannot edit anything",
    addUser: "Add new user",
    staticRoleInfo: "System defined roles can't be edited",
    exportZip: "Export project meta to zip file and download.",
    importZip: "Import project meta zip file and restart.",
    importText: "Import NocoDB Project by uploading metadata zip file",
    metaNoChange: "No change identified",
    sqlMigration: "Schema migrations will be created automatically. Create a table and refresh this page.",
    dbConnectionStatus: "Environment validated",
    dbConnected: "Connection was successful",
    notifications: {
      no_new: "No new notifications",
      clear: "Clear"
    },
    sponsor: {
      header: "You can help us!",
      message: "We are a tiny team working full time to make NocoDB Open-source. We believe a tool like NocoDB should be available freely to every problem solver on Internet."
    },
    loginMsg: "Log In To NocoDB",
    passwordRecovery: {
      message_1: "Please provide the email address you used when you signed up.",
      message_2: "We will send you an email with a link to reset your password.",
      success: "Please check your email to reset the password"
    },
    signUp: {
      superAdmin: "You will be the 'Super Admin'",
      alreadyHaveAccount: "Already have an account ?",
      workEmail: "Enter your work email",
      enterPassword: "Enter your password",
      forgotPassword: "Forgot your password ?",
      dontHaveAccount: "Don't have an account ?"
    },
    addView: {
      grid: "Add Grid View",
      gallery: "Add Gallery View",
      form: "Add Form View",
      kanban: "Add Kanban View",
      calendar: "Add Calendar View"
    },
    tablesMetadataInSync: "Tables metadata is in Sync",
    addMultipleUsers: "You can add multiple comma(,) separated emails",
    enterTableName: "Enter table name",
    addDefaultColumns: "Add default columns",
    tableNameInDb: "Table name as saved in database"
  },
  error: {
    searchProject: "Your search for {search} found no results",
    invalidChar: "Invalid character in folder path.",
    invalidDbCredentials: "Invalid database credentials.",
    unableToConnectToDb: "Unable to connect to database, please check your database is up.",
    userDoesntHaveSufficientPermission: "User does not exist or have sufficient permission to create schema.",
    dbConnectionStatus: "Invalid database parameters",
    dbConnectionFailed: "Connection Failure:",
    signUpRules: {
      emailReqd: "E-mail is required",
      emailInvalid: "E-mail must be valid",
      passwdRequired: "Password is required",
      passwdLength: "You password must be atleast 8 characters",
      passwdMismatch: "Passwords do not match"
    }
  },
  toast: {
    exportMetadata: "Project metadata exported successfully",
    importMetadata: "Project metadata imported successfully",
    clearMetadata: "Project metadata cleared successfully",
    stopProject: "Project stopped successfully",
    startProject: "Project started successfully",
    restartProject: "Project restarted successfully",
    deleteProject: "Project deleted successfully",
    authToken: "Auth token copied to clipboard",
    projInfo: "Copied project info to clipboard",
    inviteUrlCopy: "Copied invite URL to clipboard",
    createView: "View created successfully",
    formEmailSMTP: "Please activate SMTP plugin in App store for enabling email notification",
    collabView: "Successfully Switched to collaborative view",
    lockedView: "Successfully Switched to locked view",
    futureRelease: "Coming soon!"
  }
};
var en = {
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
export { activity, datatype, en as default, filterOperation, general, labels, msg, objects, placeholder, title, tooltip };
