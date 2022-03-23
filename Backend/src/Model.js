const config = {
    host: "localhost",
    user: "root",
    password: "VAMshi@2k2"
}
const mysql = require('mysql2')
const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password
});
db.query("Create database if not exists PapelCart;");
db.query("use PapelCart;", (err, results) => {
    console.log(err);
    console.log(results);
});
var create_table = "CREATE TABLE if not exists Login(" +
"  Email_Id varchar(255)," +
"  Password varchar(255)," +
"  constraint pk_login primary key (Email_Id)" +
");";

db.query(create_table);

create_table = "CREATE TABLE if not exists Manager(" +
"  Manager_Id integer  NOT NULL," +
"  Manager_Name varchar(255) ," +
"  Email_Id varchar(255)," +
"  constraint pk_manager primary key (Manager_Id)," +
"  constraint fk_manager_login foreign key (Email_Id) references Login (Email_Id)" +
");";
db.query(create_table);

create_table = "CREATE TABLE if not exists Deliverer(" +
"  Deliverer_Id integer NOT NULL," +
"  Manager_Id integer," +
"  Name varchar(255)," +
"  Email_Id varchar(255)," +
"  constraint pk_deliverer primary key (Deliverer_Id)," +
"  constraint fk_deliverer_manager foreign key (Manager_Id) references Manager (Manager_Id)," +
"  constraint fk_deliverer_login foreign key (Email_Id) references Login (Email_Id)" +
");";
db.query(create_table);

create_table = "CREATE TABLE if not exists User(" +
"  Id integer NOT NULL," +
"  User_Name varchar(255)," +
"  Email_Id varchar(255)," +
"  Phone_Number varchar(255)," +
"  constraint pk_user primary key (Id)," +
"  constraint fk_user_login foreign key (Email_Id) references Login (Email_Id)" +
");";
db.query(create_table);

create_table = "CREATE TABLE if not exists PublicationCompany(" +
"  Company_Id integer NOT NULL," +
"  Company_Name varchar(255)," +
"  Location varchar(512)," +
"  constraint pk_company primary key (Company_Id)" +
");";
db.query(create_table);

create_table = "CREATE TABLE if not exists Publication(" +
"  Publication_Id integer NOT NULL," +
"  Publication_Name varchar(255)," +
"  Company_Id integer," +
"  Type varchar(255)," +
"  Language varchar(255)," +
"  Pages varchar(255)," +
"  constraint pk_publication primary key (Publication_Id)," +
"  constraint fk_publication_company foreign key (Company_Id) references PublicationCompany (Company_Id)" +
");";
db.query(create_table);

create_table = "CREATE TABLE if not exists Subscription(" +
"  Subscription_Id integer NOT NULL," +
"  Address varchar(512)," +
"  Start_Date date," +
"  Duration datetime," +
"  User_Id integer," +
"  Deliverer_Id integer," +
"  Publication_Id integer," +
"  constraint pk_subscription primary key (Subscription_Id)," +
"  constraint fk_subscription_deliverer foreign key (Deliverer_Id) references Deliverer (Deliverer_Id)," +
"  constraint fk_subscription_user foreign key (User_Id) references User (Id)," +
"  constraint fk_subscription_publication foreign key (Publication_Id) references Publication (Publication_Id)" +
");";
db.query(create_table);

create_table = "CREATE TABLE if not exists StockInformation(" +
"  Stock_Id integer NOT NULL," +
"  Cost_Price decimal(15, 2)," +
"  Selling_Price decimal(15, 2)," +
"  Sold int," +
"  Quantity int," +
"  Publication_Id integer," +
"  constraint pk_stock primary key (Stock_Id)," +
"  constraint fk_stock_publication foreign key (Publication_Id) references Publication (Publication_Id)" +
");";
db.query(create_table);
module.exports = db;