DROP TABLE
   IF EXISTS Employee;

CREATE TABLE Employee(
   EmployeeID     CHAR(36) NOT NULL PRIMARY KEY,
   Name           TEXT     NOT NULL,
   StartDate      DATE     NOT NULL,
   EndDate        DATE,
   Salary         REAL     NOT NULL,
   IsActive       BOOLEAN  NOT NULL
);