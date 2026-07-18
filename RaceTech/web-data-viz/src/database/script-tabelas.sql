CREATE DATABASE IF NOT EXISTS racetech;
 
USE racetech;

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	senha VARCHAR(100) NOT NULL
);
 
CREATE TABLE quiz_resultado (
	id_resultado INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT,
	pontuacao INT NOT NULL,
	total_perguntas INT DEFAULT 10,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);
 
CREATE TABLE quiz_resposta (
	id_resposta INT PRIMARY KEY AUTO_INCREMENT,
	fk_quiz_resultado INT NOT NULL,
	numero_pergunta INT NOT NULL,
	acertou TINYINT NOT NULL,
	FOREIGN KEY (fk_quiz_resultado) REFERENCES quiz_resultado(id)
);

-- SELECTS --

SELECT ROUND(SUM(pontuacao) / SUM(total_perguntas) * 100) AS acerto_total FROM quiz_resultado;

SELECT COUNT(*) AS total_quizzes FROM quiz_resultado;

SELECT MAX(pontuacao) AS melhor_pontuacao FROM quiz_resultado;

SELECT numero_pergunta, ROUND(AVG(acertou) * 100) AS taxa_acerto
FROM quiz_resposta
GROUP BY numero_pergunta
ORDER BY numero_pergunta;

SELECT numero_pergunta, ROUND((1 - AVG(acertou)) * 100) AS taxa_erro
FROM quiz_resposta
GROUP BY numero_pergunta
ORDER BY taxa_erro DESC
LIMIT 3;