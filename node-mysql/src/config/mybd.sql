create database crud_node;

use crud_node;

create table personas (
id INT NOT NULL auto_increment,
nombre varchar(50) NOT NULL,
direccion varchar(150),
telefono varchar (10),
primary key(id)
)

select * from personas;

insert into personas(nombre,direccion,telefono) values ('jose','rancho contento', '6673342961');