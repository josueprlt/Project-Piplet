<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $domaine = null;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column(length: 50)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $imgProfile = null;

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

    #[ORM\Column(type: 'boolean', nullable: true)]
    private ?bool $politique = null;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private ?bool $newsletter = null;

    /**
     * @var list<string> The user roles
     */
    #[ORM\Column(type: 'json')]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column(type: 'string')]
    private ?string $password = null;

    #[ORM\OneToMany(targetEntity: "App\Entity\NotificationUser", mappedBy: "user")]
    private $notificationUsers;

    public function __construct()
    {
        $this->imgProfile = '/user/UserProfilDefault.jpg';
        $this->notificationUsers = new ArrayCollection();
    }

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
    
    /**
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

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
        // Si vous stockez des données temporaires sensibles sur l'utilisateur, effacez-les ici
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

    /**
     * Get the value of imgProfile
     */ 
    public function getImgProfile()
    {
            return $this->imgProfile;
    }

    /**
     * Set the value of imgProfile
     *
     * @return  self
     */ 
    public function setImgProfile($imgProfile)
    {
            $this->imgProfile = $imgProfile;

            return $this;
    }

    /* *
     * @return Collection<int, Notification>
     */
    public function getNotificationUsers(): Collection
    {
        return $this->notificationUsers;
    }

    public function addNotificationUser(NotificationUser $notificationUser): self
    {
        if (!$this->notificationUsers->contains($notificationUser)) {
            $this->notificationUsers[] = $notificationUser;
            $notificationUser->setUser($this);
        }

        return $this;
    }

    public function removeNotificationUser(NotificationUser $notificationUser): self
    {
        if ($this->notificationUsers->removeElement($notificationUser)) {
            // set the owning side to null (unless already changed)
            if ($notificationUser->getUser() === $this) {
                $notificationUser->setUser(null);
            }
        }

        return $this;
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of pseudo
     */ 
    public function getPseudo()
    {
        return $this->pseudo;
    }

    /**
     * Set the value of pseudo
     *
     * @return  self
     */ 
    public function setPseudo($pseudo)
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    /**
     * Get the value of gender
     */ 
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set the value of gender
     *
     * @return  self
     */ 
    public function setGender($gender)
    {
        $this->gender = $gender;

        return $this;
    }

    /**
     * Get the value of date
     */ 
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set the value of date
     *
     * @return  self
     */ 
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get the value of langage
     */ 
    public function getLangage()
    {
        return $this->langage;
    }

    /**
     * Set the value of langage
     *
     * @return  self
     */ 
    public function setLangage($langage)
    {
        $this->langage = $langage;

        return $this;
    }

    /**
     * Get the value of interests
     */ 
    public function getInterests()
    {
        return $this->interests;
    }

    /**
     * Set the value of interests
     *
     * @return  self
     */ 
    public function setInterests($interests)
    {
        $this->interests = $interests;

        return $this;
    }
}
