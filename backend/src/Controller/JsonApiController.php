<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Movie;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\MovieRepository;
use App\Repository\CategoryRepository;
use App\Repository\UserRepository;

class JsonApiController extends AbstractController
{    
    #[Route('/', name: 'app_accueil')]
    public function indexRedirect(): Response
    {
        $url = 'http://localhost:8090/';
        $response = new RedirectResponse($url);

        // Retournez la réponse de redirection
        return $response;
    }

    #[Route('/json/api', name: 'app_json_api')]
    public function index(): Response
    {
        return $this->render('json_api/index.html.twig', [
            'controller_name' => 'JsonApiController',
        ]);
    }
    
    #[Route('/api/user', name: 'app_api_user')]
    public function getUserInfo(SerializerInterface $serializer): JsonResponse
    {
        $user = $this->getUser();
        
        if ($user) {
                $data = $serializer->normalize($user, null, ['groups' => 'user_info']);
                return new JsonResponse($data);
        }

        return new JsonResponse("Not Logged");
    }
}
