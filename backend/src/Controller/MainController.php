<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\MailerService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class MainController extends AbstractController
{
    #[Route('/', name: 'api_accueil')]
    public function home()
    {
        return new Response("Accueil");
    }
    
    #[Route('/api/confirmemail', name: 'api_confirm_email')]
    public function confirmEmail(Request $request, MailerService $mailerService, UserPasswordHasherInterface $passwordHasher)
    {
        $mailerService->sendConfirmationEmail($request, $passwordHasher);
        return new Response("Email de confirmation envoyé");
    }

    #[Route('/api/sameemail', name: 'api_same_email')]
    public function SameEmail(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $email = json_decode($request->getContent(), true);
    
        // Recherchez l'utilisateur dans la base de données en utilisant le Repository correspondant
        $userRepository = $entityManager->getRepository(User::class);
        $user = $userRepository->findOneBy(['email' => $email]);
    
        // Si un utilisateur avec cet e-mail existe déjà, renvoyez une réponse indiquant que l'e-mail est déjà utilisé
        if ($user !== null) {
            $response = new JsonResponse(['message' => 'Cet e-mail est déjà utilisé.'], JsonResponse::HTTP_CONFLICT);
        } else {
            // Si aucun utilisateur avec cet e-mail n'a été trouvé, renvoyez une réponse indiquant que l'e-mail est disponible
            $response = new JsonResponse(['message' => 'Cet e-mail est disponible.'], JsonResponse::HTTP_OK);
        }
    
        // Ajoutez les en-têtes CORS appropriés
        $response->headers->set('Access-Control-Allow-Origin', '*'); // Vous pouvez spécifier l'origine appropriée au lieu de *
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type');
    
        return $response;
    }
}