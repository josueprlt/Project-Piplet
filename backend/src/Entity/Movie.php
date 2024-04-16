<?php

namespace App\Entity;

use App\Repository\MovieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MovieRepository::class)]
#[Groups(['json_movie'])]
class Movie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['json_category'])]
    private int $id;
    
    #[ORM\Column(length: 255)]
    #[Groups(['json_category'])]
    private ?string $name = null;
    
    #[Groups(['json_category'])]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[Groups(['json_category'])]
    #[ORM\Column(length: 255)]
    private ?string $img = null;
    
    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'movies')]
    private Collection $category;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $dateDeb = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $dateFin = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $linkYt = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $realisateur = null;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $time = null;

    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'movies')]
    private Collection $users;

    public function __construct()
    {
        $this->category = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return Collection<int, Category>
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->category->contains($category)) {
            $this->category->add($category);
        }

        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->category->removeElement($category);

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(string $img): static
    {
        $this->img = $img;

        return $this;
    }

    public function getDateDeb(): ?string
    {
        return $this->dateDeb;
    }

    public function setDateDeb(?string $dateDeb): static
    {
        $this->dateDeb = $dateDeb;

        return $this;
    }

    public function getDateFin(): ?string
    {
        return $this->dateFin;
    }

    public function setDateFin(?string $dateFin): static
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getLinkYt(): ?string
    {
        return $this->linkYt;
    }

    public function setLinkYt(?string $linkYt): static
    {
        $this->linkYt = $linkYt;

        return $this;
    }

    public function getRealisateur(): ?string
    {
        return $this->realisateur;
    }

    public function setRealisateur(?string $realisateur): static
    {
        $this->realisateur = $realisateur;

        return $this;
    }

    public function getTime(): ?string
    {
        return $this->time;
    }

    public function setTime(?string $time): static
    {
        $this->time = $time;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->addMovie($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->users->removeElement($user)) {
            $user->removeMovie($this);
        }

        return $this;
    }
}
