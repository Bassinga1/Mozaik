<?php

namespace App\DataFixtures;

use App\Entity\Service;
use App\Entity\Categorie;
use App\DataFixtures\CategorieFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ServiceFixtures extends Fixture
{
    // ====================================================== //
    // ===================== PROPRIETES ===================== //
    // ====================================================== //
    public const TRAVAUX_DE_PEINTURES = "travaux-de-peintures";
    public const TRAVAUX_DE_NETTOYAGE = "travaux-de-nettoyagge";
    public const TRAVAUX_DE_ISOLATION = "travaux-de-idolation";
    public const REVETEMENT_DE_SOL = "revetement-de-sol";
   // ====================================================== //
    // ====================== METHODES ====================== //
    // ====================================================== //
    public function load(ObjectManager $manager): void
    {
        $service = new Service();
        $service->setTitre('Travaux de Peintures');
        $service->setSlug('travaux-de-peintures');
        $service->setDescription('Mozaik-Peinture developpe tous sortes de travaux en peintures des plus petites structures aux plus grandes - bureaux, maisons, immeubles et espaces industriels.');
        $service->setPrix(100.50);
        $service->setActive(true);
        $service->setCategorie($this->getReference(CategorieFixtures::PEINTURE, Categorie::class));
        $manager->persist($service);
        // On crée une référence pour la catégorie "PEINTURE" que l'on pourra utiliser dans d'autres fixtures et la catégorie est associée à la constante PEINTURE
        $this->addReference(self::TRAVAUX_DE_PEINTURES, $service);

        $service = new Service();
        $service->setTitre('Travaux de Nettoyage');
        $service->setSlug('travaux-de-nettoyage');
        $service->setDescription('Pour tous travaux de peintures, Mozaik-Peinture assure le nettoyage non seulement des espaces des chantiers, mais aussi des espaces industriels, habitationnels, bureaux et autres.');
        $service->setPrix(100.50);
        $service->setActive(true);
        $service->setCategorie($this->getReference(CategorieFixtures::NETTOYAGE, Categorie::class));
        $manager->persist($service);
        // On crée une référence pour la catégorie "PEINTURE" que l'on pourra utiliser dans d'autres fixtures et la catégorie est associée à la constante PEINTURE
        $this->addReference(self::TRAVAUX_DE_NETTOYAGE, $service);

        $service = new Service();
        $service->setTitre("Travaux d'Isolation");
        $service->setSlug('travaux-de-isolation');
        $service->setDescription("L'isolation des mûrs et des structures est aussi l'un des travaux de specialité du portefeuille de Mozaik-Peinture, travaux d'isolation thermique des édiffices.");
        $service->setPrix(100.50);
        $service->setActive(true);
        $service->setCategorie($this->getReference(CategorieFixtures::ISOLATION, Categorie::class));
        $manager->persist($service);
        // On crée une référence pour la catégorie "PEINTURE" que l'on pourra utiliser dans d'autres fixtures et la catégorie est associée à la constante PEINTURE
        $this->addReference(self::TRAVAUX_DE_ISOLATION, $service);

        $service = new Service();
        $service->setTitre('Revêtement des Sols');
        $service->setSlug('revetement-des-sols');
        $service->setDescription('Autre branche du portefeuille des services ou travaux de Mozaik-Peinture pour la stabilité des sols des maisons, des espaces industriels, workshops, bureaux, ...');
        $service->setPrix(100.50);
        $service->setActive(true);
        $service->setCategorie($this->getReference(CategorieFixtures::SOL, Categorie::class));
        $manager->persist($service);
        // On crée une référence pour la catégorie "PEINTURE" que l'on pourra utiliser dans d'autres fixtures et la catégorie est associée à la constante PEINTURE
        $this->addReference(self::REVETEMENT_DE_SOL, $service);

        $manager->flush();
    }
}
