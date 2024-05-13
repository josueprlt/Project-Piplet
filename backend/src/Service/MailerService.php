<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Bridge\Twig\Mime\NotificationEmail;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class MailerService {


    public function __construct(#[Autowire('%admin_email%')] private string $adminEmail, private readonly MailerInterface $mailer) {}


    public function sendConfirmationEmail(Request $request, UserPasswordHasherInterface $passwordHasher): void
    {
        $data = json_decode($request->getContent(), true);

        $user = new User();
        $hashedPassword = $passwordHasher->hashPassword($user, $data['password']);
        $hashedPassword = urlencode($hashedPassword);

        $email = (new NotificationEmail())
            ->subject('Confirmez votre adresse e-mail pour Piplet')
            ->from($this->adminEmail)
            ->to($data['mail'])
            ->htmlTemplate('emails/confirmation.html.twig')
            ->context([
                'usermail' => $data['mail'],
                'userpassword' => $hashedPassword,
                'reglement' => $data['reglement'],
                'newsletter' => $data['newsletter']
            ]);

        $this->mailer->send($email);
    }
}