-- create table employee 
create table employee(
empid INT,
empname VARCHAR(50), jobtitle VARCHAR(50), empstatus VARCHAR(40), subdiv VARCHAR(30),
supervisor VARCHAR(50)
);

--insert data into employee table
--option 1

INSERT INTO
employee (empid,empname,jobtitle,empstatus,subdiv,supervisor) 
 values('101','naveen','softwaretester','active','testing','testlead'); 

 --option 2
 INSERT into employee values('103','suresh','lead','active','testing','manager');
 
 -- Alter table employee
ALTER table employee add salary INT

--update employee table
update employee SET empstatus = 'inactive' WHERE empid=103

--delete data from employee table
delete from employee where empid=102

 --select data from employee table
select empid, empname from employee;

select * from employee;

--where clause
--select * from employee where salary=1000;

--like clause
select * from employee where empname like 'nav%';

--in clause
select * from employee where empid in (101,102);

--between clause
--select * from employee where salary between 1000 and 3000;
 
 --order by clause
select * from employee order by empid desc;
select * from employee order by empid asc;

--distinct clause
--select distinct salary from employee;

--group by clause
select empstatus, count(empid) from employee group by empstatus;

--having clause
select empstatus, count(empid) from employee group by empstatus having count(empid)>1;

