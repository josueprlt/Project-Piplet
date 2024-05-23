<?php

namespace App\Entity;

use App\Repository\NotificationUserRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: NotificationUserRepository::class)]
class NotificationUser
{
    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: "App\Entity\User", inversedBy: "notificationUsers")]
    #[ORM\JoinColumn(nullable: false)]
    private $user;

    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: "App\Entity\Notification", inversedBy: "notificationUsers")]
    #[ORM\JoinColumn(nullable: false)]
    private $notification;

    #[ORM\Column(type: "boolean")]
    private $view = false;
    
    #[ORM\Column(type: "boolean")]
    private $basket = false;

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;
        return $this;
    }

    public function getNotification(): ?Notification
    {
        return $this->notification;
    }

    public function setNotification(?Notification $notification): self
    {
        $this->notification = $notification;
        return $this;
    }

    public function getView(): bool
    {
        return $this->view;
    }

    public function setView(bool $view): self
    {
        $this->view = $view;
        return $this;
    }

    public function getBasket(): bool
    {
        return $this->basket;
    }

    public function setBasket($basket): self
    {
        $this->basket = $basket;

        return $this;
    }
}
