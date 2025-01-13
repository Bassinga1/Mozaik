<?php

namespace App\DataFixtures;

use App\Entity\Image;
use DateTimeImmutable;
use App\Entity\Service;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ImageFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $image = new Image();
        $image->setImageName('s-peinture.png');
        $image->setService($this->getReference(ServiceFixtures::TRAVAUX_DE_PEINTURES, Service::class));
        $image->setRankNumber(1);
        $image->setUpdatedAt(new DateTimeImmutable());
        $manager->persist($image);

        $image = new Image();
        $image->setImageName('s-nettoyage.png');
        $image->setService($this->getReference(ServiceFixtures::TRAVAUX_DE_NETTOYAGE, Service::class));
        $image->setRankNumber(2);
        $image->setUpdatedAt(new DateTimeImmutable());
        $manager->persist($image);

        $image = new Image();
        $image->setImageName('s-isolation.png');
        $image->setService($this->getReference(ServiceFixtures::TRAVAUX_DE_ISOLATION, Service::class));
        $image->setRankNumber(3);
        $image->setUpdatedAt(new DateTimeImmutable());
        $manager->persist($image);

        $image = new Image();
        $image->setImageName('s-sol.png');
        $image->setService($this->getReference(ServiceFixtures::REVETEMENT_DE_SOL, Service::class));
        $image->setRankNumber(4);
        $image->setUpdatedAt(new DateTimeImmutable());
        $manager->persist($image);

        $manager->flush();
    }
    public function getDependencies():array{
        return[
            ServiceFixtures::class
        ];
    }
}
