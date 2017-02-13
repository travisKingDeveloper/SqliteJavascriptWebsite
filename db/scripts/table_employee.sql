DROP TABLE
   IF EXISTS Employee;

CREATE TABLE Employee(
   EmployeeID     CHAR(36) NOT NULL PRIMARY KEY,
   Name           TEXT     NOT NULL,
   BirthDate      DATE     NOT NULL,
   Address        TEXT,
   Salary         REAL,
   IsActive
);