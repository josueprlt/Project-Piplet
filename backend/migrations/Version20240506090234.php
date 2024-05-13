<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240506090234 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, domaine VARCHAR(100) NULL, email VARCHAR(180) NOT NULL, name VARCHAR(50) NULL, pseudo VARCHAR(50) NULL, gender VARCHAR(50) NULL, date VARCHAR(255) NULL, langage VARCHAR(255) NULL, interests JSON NULL, visibility_personnel JSON NULL, visibility_content VARCHAR(50) NULL, visibility_profil VARCHAR(50) NULL, roles JSON NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user');
    }
}
