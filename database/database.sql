create database users;
use users;
create table users(idUsers int  primary key AUTO_INCREMENT, 
                    nom varchar(30) , 
                    prenom  varchar(34),
                    email varchar(35),
                    password varchar(35),
                    dateNaissance date , 
                    situationFamiliale varchar(40) , 
                    sex varchar(40) ) ;
                    

INSERT INTO `users` (`idUsers`, `nom`, `prenom`, `email`, `password`, `dateNaissance`, `situationFamiliale`, `sex`) VALUES
(148, 'ahmed', 'amal', 'ahmed@gmaail.com', 'ahmed1234@ ', '2004-07-14', 'celebataire', 'homme'),
(149, 'mohamed', 'yassine', 'admin', 'admind ', '2022-08-17', 'celebataire', 'homme'),
(150, 'aicha', 'samira', 'aicha@gmail.com', 'aicha123 ', '2022-08-05', 'celebatare', 'femme');