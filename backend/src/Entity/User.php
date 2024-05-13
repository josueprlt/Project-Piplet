<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
    class User implements UserInterface, PasswordAuthenticatedUserInterface
    {
        #[ORM\Id]
        #[ORM\GeneratedValue]
        #[ORM\Column]
        private ?int $id = null;

        #[ORM\Column(length: 100)]
        private ?string $domaine = null;
        #[ORM\Column(length: 180)]
        private ?string $email = null;
        #[ORM\Column(length: 50)]
        private ?string $name = null;
        #[ORM\Column(length: 50)]
        private ?string $pseudo = null;
        #[ORM\Column(length: 50)]
        private ?string $gender = null;
        #[ORM\Column]
        private ?string $date = null;
        #[ORM\Column]
        private ?string $langage = null;
        #[ORM\Column]
        private ?array $interests = null;
        #[ORM\Column]
        private ?array $visibilityPersonnel = null;
        #[ORM\Column(length: 50)]
        private ?string $visibilityContent = null;
        #[ORM\Column(length: 50)]
        private ?string $visibilityProfil = null;

        /**
         * @ORM\Column(type="boolean", nullable=true)
         */
        private ?bool $politique = null;

        /**
         * @ORM\Column(type="boolean", nullable=true)
         */
        private ?bool $newsletter = null;

        /**
         * @var list<string> The user roles
         */
        #[ORM\Column]
        private array $roles = [];

        /**
         * @var string The hashed password
         */
        #[ORM\Column]
        private ?string $password = null;

        public function getId(): ?int
        {
            return $this->id;
        }


        public function getDomaine(): ?string
        {
            return $this->email;
        }

        public function setDomaine(string $domaine): static
        {
            $this->domaine = $domaine;

            return $this;
        }


        public function getEmail(): ?string
        {
            return $this->email;
        }

        public function setEmail(string $email): static
        {
            $this->email = $email;

            return $this;
        }
        
        
        public function getName(): ?string
        {
            return $this->name;
        }

        public function setName(string $name): static
        {
            $this->name = $name;

            return $this;
        }


        public function getPseudo(): ?string
        {
            return $this->pseudo;
        }

        public function setPseudo(string $pseudo): static
        {
            $this->pseudo = $pseudo;

            return $this;
        }


        public function getGender(): ?string
        {
            return $this->gender;
        }

        public function setGender(string $gender): static
        {
            $this->gender = $gender;

            return $this;
        }


        public function getDate(): ?string
        {
            return $this->date;
        }

        public function setDate(string $date): static
        {
            $this->date = $date;

            return $this;
        }


        public function getLangage(): ?float
        {
            return $this->langage;
        }

        public function setLangage(float $langage): static
        {
            $this->langage = $langage;

            return $this;
        }


        public function getInterests(): ?array
        {
            return $this->interests;
        }

        public function setInterests(?array $interests): static
        {
            $this->interests = $interests;
            return $this;
        }

        /**
         * A visual identifier that represents this user.
         *
         * @see UserInterface
         */
        public function getUserIdentifier(): string
        {
            return (string) $this->email;
        }

        /**
         * @see UserInterface
         *
         * @return list<string>
         */
        public function getRoles(): array
        {
            $roles = $this->roles;
            // guarantee every user at least has ROLE_USER
            $roles[] = 'ROLE_USER';

            return array_unique($roles);
        }

        /**
         * @param list<string> $roles
         */
        public function setRoles(array $roles): static
        {
            $this->roles = $roles;

            return $this;
        }

        /**
         * @see PasswordAuthenticatedUserInterface
         */
        public function getPassword(): string
        {
            return $this->password;
        }

        public function setPassword(string $password): static
        {
            $this->password = $password;

            return $this;
        }

        /**
         * @see UserInterface
         */
        public function eraseCredentials(): void
        {
            // If you store any temporary, sensitive data on the user, clear it here
            // $this->plainPassword = null;
        }

        /**
         * Get the value of visibilityPersonnel
         */ 
        public function getVisibilityPersonnel(): ?array
        {
                return $this->visibilityPersonnel;
        }

        /**
         * Set the value of visibilityPersonnel
         *
         * @return  self
         */ 
        public function setVisibilityPersonnel(?array $visibilityPersonnel): static
        {
                $this->visibilityPersonnel = $visibilityPersonnel;

                return $this;
        }

        /**
         * Get the value of visibilityContent
         */ 
        public function getVisibilityContent(): ?string
        {
                return $this->visibilityContent;
        }

        /**
         * Set the value of visibilityContent
         *
         * @return  self
         */ 
        public function setVisibilityContent(?string $visibilityContent): static
        {
                $this->visibilityContent = $visibilityContent;

                return $this;
        }

        /**
         * Get the value of visibilityProfil
         */ 
        public function getVisibilityProfil(): ?string
        {
                return $this->visibilityProfil;
        }

        /**
         * Set the value of visibilityProfil
         *
         * @return  self
         */ 
        public function setVisibilityProfil(?string $visibilityProfil): static
        {
                $this->visibilityProfil = $visibilityProfil;

                return $this;
        }

        /**
         * Get the value of politique
         */ 
        public function getPolitique()
        {
                return $this->politique;
        }

        /**
         * Set the value of politique
         *
         * @return  self
         */ 
        public function setPolitique($politique)
        {
                $this->politique = $politique;

                return $this;
        }

        /**
         * Get the value of newsletter
         */ 
        public function getNewsletter()
        {
                return $this->newsletter;
        }

        /**
         * Set the value of newsletter
         *
         * @return  self
         */ 
        public function setNewsletter($newsletter)
        {
                $this->newsletter = $newsletter;

                return $this;
        }
    }
