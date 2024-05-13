<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthController extends AbstractController
{
    public function AuthentificationUser($request, UserRepository $userRepository, UserPasswordEncoderInterface $passwordEncoder)
    {
        // Récupérer les données de la requête POST
        $data = json_decode($request->getContent(), true);

        // Valider les données
        $email = $data['email'];
        $password = $data['password'];

        // Rechercher l'utilisateur dans la base de données par email
        $user = $userRepository->findOneByEmail($email);

        // Si aucun utilisateur trouvé avec cet email, échec de l'authentification
        if (!$user) {
            throw new AuthenticationException('Utilisateur non trouvé');
        }

        // Vérifier si le mot de passe correspond
        if (!$passwordEncoder->isPasswordValid($user, $password)) {
            throw new AuthenticationException('Mot de passe incorrect');
        }

        // Si l'authentification réussit, vous pouvez créer une session ou un token JWT pour garder l'utilisateur authentifié
        // Répondre avec succès
        return new JsonResponse(['success' => true]);
    }
}