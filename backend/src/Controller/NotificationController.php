<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Repository\NotificationRepository;
use App\Repository\NotificationUserRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

use Doctrine\ORM\EntityManagerInterface;


class NotificationController extends AbstractController
{
    private UserRepository $userRepository;
    private NotificationUserRepository $notifUserRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(UserRepository $userRepository, NotificationUserRepository $notifUserRepository, EntityManagerInterface $entityManager)
    {
        $this->userRepository = $userRepository;
        $this->notifUserRepository = $notifUserRepository;
        $this->entityManager = $entityManager;
    }


    #[Route('/api/user/{id}/notifications', name: 'user_notifications')]
    public function getUserNotifications(int $id): JsonResponse
    {
        $user = $this->userRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('User not found');
        }

        $notificationUsers = $this->notifUserRepository->findNotReadNotificationsByUserId($id);

        $notificationData = [];
        foreach ($notificationUsers as $notificationUser) {
            $notification = $notificationUser->getNotification();
            $notificationData[] = [
                'id' => $notification->getId(),
                'type' => $notification->getType(),
                'linkContent' => $notification->getLinkContent(),
                'view' => $notificationUser->getView(),
                'basket' => $notificationUser->getBasket(),
            ];
        }

        return new JsonResponse($notificationData, Response::HTTP_OK);
    }


    #[Route('/api/user/{id}/notifications/read', name: 'user_read_notifications')]
    public function getUserReadNotifications(int $id): JsonResponse
    {
        $user = $this->userRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('User not found');
        }

        $notificationUsers = $this->notifUserRepository->findReadNotificationsByUserId($id);

        $notificationData = [];
        foreach ($notificationUsers as $notificationUser) {
            $notification = $notificationUser->getNotification();
            $notificationData[] = [
                'id' => $notification->getId(),
                'type' => $notification->getType(),
                'linkContent' => $notification->getLinkContent(),
                'view' => $notificationUser->getView(),
                'basket' => $notificationUser->getBasket(),
            ];
        }

        return new JsonResponse($notificationData, Response::HTTP_OK);
    }



    #[Route('/api/user/{id}/notifications/basket', name: 'user_basket_notifications')]
    public function getUserBasketNotifications(int $id): JsonResponse
    {
        $user = $this->userRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('User not found');
        }

        $notificationUsers = $this->notifUserRepository->findBasketNotificationsByUserId($id);

        $notificationData = [];
        foreach ($notificationUsers as $notificationUser) {
            $notification = $notificationUser->getNotification();
            $notificationData[] = [
                'id' => $notification->getId(),
                'type' => $notification->getType(),
                'linkContent' => $notification->getLinkContent(),
                'view' => $notificationUser->getView(),
                'basket' => $notificationUser->getBasket(),
            ];
        }

        return new JsonResponse($notificationData, Response::HTTP_OK);
    }

    
    #[Route('/api/user/{id}/notifications/basket/delete', name: 'user_basket_notifications_delete')]
    public function getUserBasketNotificationsDelete(int $id): JsonResponse
    {
        $this->notifUserRepository->removeBasketNotificationsByUserId($id);

        return new JsonResponse("Notifications de la corbeille supprimées", Response::HTTP_OK);
    }

    #[Route('/api/user/{id}/notification/{notif}/basket/delete', name: 'user_basket_notification_delete')]
    public function getUserBasketNotificationDelete(int $id, int $notif): JsonResponse
    {
        $this->notifUserRepository->removeBasketNotificationByUserId($id, $notif);

        return new JsonResponse("Notification de la corbeille supprimée", Response::HTTP_OK);
    }


    /* #[Route('/api/user/{id}/notification/{notif}/add', name: 'user_add_notification')]
    public function addNotificationUser(int $id, int $notif): JsonResponse
    {
        $user = $this->userRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('User not found');
        }

        $this->notifUserRepository->removeBasketNotificationsByUserId($id);

        return new JsonResponse('Notifications de la corbeille supprimées', Response::HTTP_OK);
    } */


    #[Route('/api/user/{id}/notification/{notif}/read', name: 'user_view_notification_mark')]
    public function setUserViewNotificationMarked(int $id, int $notif): JsonResponse
    {
        $this->notifUserRepository->markNotificationAsViewed($id, $notif);

        return new JsonResponse("Notification marquée comme lue", Response::HTTP_OK);
    }


    #[Route('/api/user/{id}/notification/{notif}/basket', name: 'user_basket_notification_mark')]
    public function setUserBasketNotificationMarked(int $id, int $notif): JsonResponse
    {
        $this->notifUserRepository->markNotificationAsBasket($id, $notif);

        return new JsonResponse("Notification ajoutée à la corbeille", Response::HTTP_OK);
    }

    #[Route('/api/user/{id}/notifications/basket/read', name: 'user_view_notifications_mark')]
    public function setUserViewNotificationsMarked(int $id): JsonResponse
    {
        $this->notifUserRepository->markAllNotificationsAsViewed($id);

        return new JsonResponse("Toute les Notifications marquées comme lus", Response::HTTP_OK);
    }
}
