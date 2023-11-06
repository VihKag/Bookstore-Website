CREATE DATABASE Bookstore;
GO;

USE Bookstore;

CREATE TABLE Author (
    AuthorID nvarchar(36) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Description TEXT,
    isDelete bit
);

CREATE TABLE Image (
	ID nvarchar(36) PRIMARY KEY,
	Name nvarchar(1000)
);

CREATE TABLE Book (
    ISBN nvarchar(36) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Description varchar(500),
	Price float,
    Quantity int,
    Deminsion varchar(100),
    Weigh varchar(100),
    Language varchar(100),
    ImageID nvarchar(36),
    State bit,
    isDelete bit,
    FOREIGN KEY (ImageID) REFERENCES Image(ID)
);

CREATE TABLE BookAuthor (
	ID nvarchar(36) PRIMARY KEY,
    AuthorID nvarchar(36),
    ISBN nvarchar(36),
    isDelete bit,
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN),
    FOREIGN KEY (AuthorID) REFERENCES Author(AuthorID)
);

CREATE TABLE Publisher (
    ID nvarchar(36) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Description TEXT,
    isDelete bit
);

CREATE TABLE BookPublisher (
    ID nvarchar(36) PRIMARY KEY,
    ISBN nvarchar(36),
    PubID nvarchar(36),
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN),
    FOREIGN KEY (PubID) REFERENCES Publisher(ID)
);

CREATE TABLE Category (
    ID nvarchar(36) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Parent nvarchar(36),
    Description TEXT,
    isDelete bit,
    FOREIGN KEY (Parent) REFERENCES Category(ID)
);

CREATE TABLE BookCategory (
    ID nvarchar(36) PRIMARY KEY,
    ISBN nvarchar(36),
    CateID nvarchar(36),
    isDelete bit,
    FOREIGN KEY (CateID) REFERENCES Category(ID),
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN)
);

CREATE TABLE Role (
    ID nvarchar(15) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL
);

CREATE TABLE [User] (
    ID nvarchar(36) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100),
    Phone NVARCHAR(11) NOT NULL,
    Gender bit,
    DateOfBirth datetime,
    Username nvarchar(100) NOT NULL,
    Password nvarchar(100) NOT NULL,
    Role nvarchar(15),
    isActive bit,
    FOREIGN KEY (Role) REFERENCES Role(ID)
);
CREATE TABLE RefreshToken (
    Token nvarchar(100) PRIMARY KEY,
    UserID nvarchar(36),
    ParentID nvarchar(100),
    CreateAt datetime,
    ExpireAt datetime,
    isUsed bit,
    isRevoked bit,
    FOREIGN KEY (UserID) REFERENCES [User](ID)
);

CREATE TABLE Evaluate (
    ID nvarchar(36) PRIMARY KEY,
    ISBN nvarchar(36),
    UserID nvarchar(36),
    Vote float,
    Comment TEXT,
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN),
    FOREIGN KEY (UserID) REFERENCES [User](ID)
);

CREATE TABLE Favorite (
    ID nvarchar(36) PRIMARY KEY,
    ISBN nvarchar(36),
    UserID nvarchar(36),
    FOREIGN KEY (UserID) REFERENCES [User](ID),
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN)
);

CREATE TABLE [Order] (
    ID nvarchar(36) PRIMARY KEY,
    UserID nvarchar(36),
    Total int,
    OrderDay datetime,
    Status bit,
    Address nvarchar(100) NOT NULL,
    isDelete bit,
    FOREIGN KEY (UserID) REFERENCES [User](ID)
);

CREATE TABLE OrderDetail (
    ID nvarchar(36) PRIMARY KEY,
    OderID nvarchar(36),
    ISBN nvarchar(36) NOT NULL,
    Quantity int,
    Amount int,
    isDelete bit,
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN),
    FOREIGN KEY (OderID) REFERENCES [Order](ID)
);
