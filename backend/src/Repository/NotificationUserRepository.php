<?php

namespace App\Repository;

use App\Entity\NotificationUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<NotificationUser>
 */
class NotificationUserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NotificationUser::class);
    }

    /**
     * @return NotificationUser[]
     */
    public function findReadNotificationsByUserId(int $userId): array
    {
        return $this->createQueryBuilder('nu')
            ->andWhere('nu.user = :userId')
            ->andWhere('nu.view = true')
            ->andWhere('nu.basket = false')
            ->setParameter('userId', $userId)
            ->getQuery()
            ->getResult();
    }

    public function findNotReadNotificationsByUserId(int $userId): array
    {
        return $this->createQueryBuilder('nu')
            ->andWhere('nu.user = :userId')
            ->andWhere('nu.view = false')
            ->andWhere('nu.basket = false')
            ->setParameter('userId', $userId)
            ->getQuery()
            ->getResult();
    }

    public function findBasketNotificationsByUserId(int $userId): array
    {
        return $this->createQueryBuilder('nu')
            ->andWhere('nu.user = :userId')
            ->andWhere('nu.basket = true')
            ->setParameter('userId', $userId)
            ->getQuery()
            ->getResult();
    }

    public function removeBasketNotificationsByUserId(int $userId): void
    {
        $queryBuilder = $this->createQueryBuilder('nu')
            ->delete()
            ->where('nu.user = :userId')
            ->andWhere('nu.basket = true')
            ->setParameter('userId', $userId);

        $queryBuilder->getQuery()->execute();
    }

    public function removeBasketNotificationByUserId(int $userId, int $notificationId): void
    {
        $queryBuilder = $this->createQueryBuilder('nu')
            ->delete()
            ->where('nu.user = :userId')
            ->andWhere('nu.notification = :notificationId')
            ->setParameter('userId', $userId)
            ->setParameter('notificationId', $notificationId);

        $queryBuilder->getQuery()->execute();
    }

    public function addNotificationToUser(int $userId, int $notificationId): void
    {
        $entityManager = $this->getEntityManager();

        $notificationUser = new NotificationUser();
        $notificationUser->setUser($userId);
        $notificationUser->setNotification($notificationId);

        $entityManager->persist($notificationUser);
        $entityManager->flush();
    }

    public function markNotificationAsViewed(int $userId, int $notificationId): void
    {
        $queryBuilder = $this->createQueryBuilder('nu')
            ->update()
            ->set('nu.view', ':true')
            ->where('nu.user = :userId')
            ->andWhere('nu.notification = :notificationId')
            ->setParameter('true', true)
            ->setParameter('userId', $userId)
            ->setParameter('notificationId', $notificationId);

        $queryBuilder->getQuery()->execute();
    }

    public function markNotificationAsBasket(int $userId, int $notificationId): void
    {
        $queryBuilder = $this->createQueryBuilder('nu')
            ->update()
            ->set('nu.basket', ':true')
            ->where('nu.user = :userId')
            ->andWhere('nu.notification = :notificationId')
            ->setParameter('true', true)
            ->setParameter('userId', $userId)
            ->setParameter('notificationId', $notificationId);

        $queryBuilder->getQuery()->execute();
    }

    public function markAllNotificationsAsViewed(int $userId): void
    {
        $queryBuilder = $this->createQueryBuilder('nu')
            ->update()
            ->set('nu.view', ':true')
            ->where('nu.user = :userId')
            ->setParameter('true', true)
            ->setParameter('userId', $userId);

        $queryBuilder->getQuery()->execute();
    }
}
