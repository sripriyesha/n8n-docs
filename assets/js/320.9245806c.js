(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{1085:function(a,s,t){"use strict";t.r(s);var e=t(26),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[a._v("#")]),a._v(" Database")]),a._v(" "),t("p",[a._v("By default, n8n uses SQLite to save credentials, past executions, and workflows. However,\nn8n also supports MongoDB and PostgresDB.")]),a._v(" "),t("h2",{attrs:{id:"shared-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shared-settings"}},[a._v("#")]),a._v(" Shared Settings")]),a._v(" "),t("p",[a._v("The following environment variables get used by all databases:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("DB_TABLE_PREFIX")]),a._v(" (default: '') - Prefix for table names")])]),a._v(" "),t("h2",{attrs:{id:"mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[a._v("#")]),a._v(" MongoDB")]),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("Use PostgresDB, if possible! MongoDB has problems saving large\namounts of data in a document, among other issues. So, support\nwill be dropped in the future.")])]),a._v(" "),t("p",[a._v("To use MongoDB as the database, you can provide the following environment variables like\nin the example below:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("DB_TYPE=mongodb")])]),a._v(" "),t("li",[t("code",[a._v("DB_MONGODB_CONNECTION_URL=<CONNECTION_URL>")])])]),a._v(" "),t("p",[a._v("Replace the following placeholders with the actual data:")]),a._v(" "),t("ul",[t("li",[a._v("MONGO_DATABASE")]),a._v(" "),t("li",[a._v("MONGO_HOST")]),a._v(" "),t("li",[a._v("MONGO_PORT")]),a._v(" "),t("li",[a._v("MONGO_USER")]),a._v(" "),t("li",[a._v("MONGO_PASSWORD")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mongodb\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MONGODB_CONNECTION_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mongodb://MONGO_USER:MONGO_PASSWORD@MONGO_HOST:MONGO_PORT/MONGO_DATABASE\nn8n start\n")])])]),t("h2",{attrs:{id:"postgresdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgresdb"}},[a._v("#")]),a._v(" PostgresDB")]),a._v(" "),t("p",[a._v("To use PostgresDB as the database, you can provide the following environment variables")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("DB_TYPE=postgresdb")])]),a._v(" "),t("li",[t("code",[a._v("DB_POSTGRESDB_DATABASE")]),a._v(" (default: 'n8n')")]),a._v(" "),t("li",[t("code",[a._v("DB_POSTGRESDB_HOST")]),a._v(" (default: 'localhost')")]),a._v(" "),t("li",[t("code",[a._v("DB_POSTGRESDB_PORT")]),a._v(" (default: 5432)")]),a._v(" "),t("li",[t("code",[a._v("DB_POSTGRESDB_USER")]),a._v(" (default: 'root')")]),a._v(" "),t("li",[t("code",[a._v("DB_POSTGRESDB_PASSWORD")]),a._v(" (default: empty)")]),a._v(" "),t("li",[t("code",[a._v("DB_POSTGRESDB_SCHEMA")]),a._v(" (default: 'public')")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("postgresdb\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_DATABASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("postgresdb\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5432")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_SCHEMA")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n\nn8n start\n")])])]),t("h2",{attrs:{id:"mysql-mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-mariadb"}},[a._v("#")]),a._v(" MySQL / MariaDB")]),a._v(" "),t("p",[a._v("The compatibility with MySQL/MariaDB has been tested. Even then, it is advisable to observe the operation of the application with this database as this option has been recently added. If you spot any problems, feel free to submit a burg report or a pull request.")]),a._v(" "),t("p",[a._v("To use MySQL as database you can provide the following environment variables:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("DB_TYPE=mysqldb")]),a._v(" or "),t("code",[a._v("DB_TYPE=mariadb")])]),a._v(" "),t("li",[t("code",[a._v("DB_MYSQLDB_DATABASE")]),a._v(" (default: 'n8n')")]),a._v(" "),t("li",[t("code",[a._v("DB_MYSQLDB_HOST")]),a._v(" (default: 'localhost')")]),a._v(" "),t("li",[t("code",[a._v("DB_MYSQLDB_PORT")]),a._v(" (default: 3306)")]),a._v(" "),t("li",[t("code",[a._v("DB_MYSQLDB_USER")]),a._v(" (default: 'root')")]),a._v(" "),t("li",[t("code",[a._v("DB_MYSQLDB_PASSWORD")]),a._v(" (default: empty)")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mysqldb\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MYSQLDB_DATABASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MYSQLDB_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mysqldb\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MYSQLDB_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MYSQLDB_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MYSQLDB_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n\nn8n start\n")])])]),t("h2",{attrs:{id:"sqlite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqlite"}},[a._v("#")]),a._v(" SQLite")]),a._v(" "),t("p",[a._v("This is the default database that gets used if nothing is defined.")]),a._v(" "),t("p",[a._v("The database file is located at:\n"),t("code",[a._v("~/.n8n/database.sqlite")])]),a._v(" "),t("h2",{attrs:{id:"other-databases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-databases"}},[a._v("#")]),a._v(" Other Databases")]),a._v(" "),t("p",[a._v("Currently, only the databases mentioned above are supported. n8n internally uses\n"),t("a",{attrs:{href:"https://typeorm.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("TypeORM"),t("OutboundLink")],1),a._v(", so adding support for the following databases\nshould not be too much work:")]),a._v(" "),t("ul",[t("li",[a._v("CockroachDB")]),a._v(" "),t("li",[a._v("Microsoft SQL")]),a._v(" "),t("li",[a._v("Oracle")])]),a._v(" "),t("p",[a._v("If you cannot use any of the currently supported databases for some reason and\nyou can code, we'd appreciate your support in the form of a pull request. If not, you can request\nfor support here:")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://community.n8n.io/c/feature-requests/cli",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://community.n8n.io/c/feature-requests/cli"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);