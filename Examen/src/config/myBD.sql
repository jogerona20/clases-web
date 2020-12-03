create database examen;
use examen;

create table TAREAS (
id INT NOT NULL auto_increment,
Nombre varchar(60) NOT NULL,
Descripcion varchar(150) NULL,
Encargado varchar(100) NULL,
primary key(id)
);

select * from TAREAS;

insert into TAREAS(Nombre,Descripcion,Encargado) values ('jose','alto','reprobar');
insert into TAREAS(Nombre,Descripcion,Encargado) values ('edu','poderoso','algo');
