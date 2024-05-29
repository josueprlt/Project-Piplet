<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Notification;
use App\Repository\UserRepository;
use App\Security\UsersAuthenticator;

use Doctrine\ORM\EntityManagerInterface;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Controller\AuthController;

use Firebase\JWT\JWT;

use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;


class UserController extends AbstractController
{

    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }


    #[Route('/api/firstregister', name: 'api_register_first_user')]
    public function CreateFirstUser(Request $request, EntityManagerInterface $entityManager)
    {
        if ($request->isMethod('POST')) {
            // Récupération des données du formulaire
            $data = json_decode($request->getContent(), true);

            // Création d'une nouvelle instance de l'entité User
            $user = new User();

            // Affectation des valeurs des champs
            $user->setEmail($data['userMail'])
                 ->setPassword($data['userPwd']);

            // Persistez l'utilisateur dans la base de données
            $entityManager->persist($user);
            $entityManager->flush();

            // Réponse de réussite
            return new Response('Utilisateur ajouté avec succès', Response::HTTP_OK, [
                'Access-Control-Allow-Origin' => '*',
                'Content-Type' => 'text/plain'
            ]);
        }

        // Si la requête n'est pas POST, renvoyer une réponse appropriée
        return new Response('Méthode non autorisée', Response::HTTP_METHOD_NOT_ALLOWED, [
            'Access-Control-Allow-Origin' => '*',
            'Content-Type' => 'text/plain'
        ]);
    }



    
    #[Route('/api/secondregister', name: 'api_register_second_user')]
    public function CreateSecondUser(Request $request, EntityManagerInterface $entityManager): Response
    {
        if ($request->isMethod('POST')) {
            
            $data = json_decode($request->getContent(), true);
            
            $userMail = $data['userMail'] ?? null;
            $existingUser = $entityManager->getRepository(User::class)->findOneBy(['email' => $userMail]);
            
            if ($existingUser) {
                $existingUser->setDomaine($data['userDomaine'])
                ->setName($data['userName'])
                ->setPseudo($data['userPseudonyme'])
                ->setGender($data['userGenre'])
                ->setDate($data['userDateOfBirth'])
                ->setLangage($data['userFrench'])
                ->setInterests($data['interests'])
                ->setPolitique($data['userReglement'])
                ->setNewsletter($data['userNewsletter'])
                ->setVisibilityContent($data['ContentVisible'])
                ->setVisibilityProfil($data['ProfilVisible'])
                ->setVisibilityPersonnel($data['PersoVisible']);
                
                $entityManager->flush();
                return new JsonResponse(['message' => 'Données de l\'utilisateur existant mises à jour avec succès'], Response::HTTP_OK);
            }
        }
        return new JsonResponse(['message' => 'Méthode non autorisée'], Response::HTTP_METHOD_NOT_ALLOWED);
    }


    /*#[Route('/api/logout', name: 'api_logout_user')]
    public function logout(): void
    {
        // this controller will not be executed,
        // as the route is handled by the Symfony Security system
    } */


    #[Route('/api/getuserlog', name: 'app_api_user')]
    public function getUserLogin(TokenStorageInterface $tokenStorage, EntityManagerInterface $entityManager): Response
    {
        $token = $tokenStorage->getToken();

        if ($token) {
            $tokenParts = explode('.', $token->getCredentials());
            $encodedPayload = $tokenParts[1];
            $decodedPayload = base64_decode($encodedPayload);
            $userData = json_decode($decodedPayload, true);
            $email = $userData['username'];
    
            $query = $entityManager->createQuery(
                'SELECT u FROM App\Entity\User u WHERE u.email = :email'
            )->setParameter('email', $email);
    
            $existingUser = $query->getOneOrNullResult();
    
            if ($existingUser) {
                $userDataArray = [
                    'id' => $existingUser->getId(),
                    'email' => $existingUser->getEmail(),
                    'username' => $existingUser->getName(),
                    'pseudo' => $existingUser->getPseudo(),
                    'imgProfil' => $existingUser->getImgProfile(),
                ];
    
                return new JsonResponse($userDataArray, Response::HTTP_OK);
            }
        }
    
        return new JsonResponse("User not found", Response::HTTP_NOT_FOUND);
    }
}