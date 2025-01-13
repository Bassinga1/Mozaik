<?php

namespace App\DataFixtures;

use DateTimeImmutable;
use App\Entity\Categorie;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class CategorieFixtures extends Fixture
{
    // ====================================================== //
    // ===================== PROPRIETES ===================== //
    // ====================================================== //
    public const PEINTURE = "peinture";
    public const ISOLATION = "isolation";
    public const NETTOYAGE = "nettoyage";
    public const SOL = "sol";
        
    // ====================================================== //
    // ====================== METHODES ====================== //
    // ====================================================== //
    public function load(ObjectManager $manager): void
    {
        $categorie = new Categorie();
        $categorie->setNom("peinture");
        $categorie->setSlug("peinture");
        $categorie->setDescription("Mozaik-Peinture developpe tous sortes de travaux en peintures des plus petites structures aux plus grandes - bureaux, maisons, immeubles et espaces industriels.");
        $categorie->setImageName("peinture.png");
        $categorie->setUpdatedAt(new DateTimeImmutable());
        $categorie->setIsActive(true);
        $manager->persist($categorie);
        $manager->flush();
        // On crée une référence pour la catégorie "PEINTURE" que l'on pourra utiliser dans d'autres fixtures et la catégorie est associée à la constante PEINTURE
        $this->addReference(self::PEINTURE, $categorie);

        $categorie = new Categorie();
        $categorie->setNom("isolation");
        $categorie->setSlug("isolation");
        $categorie->setDescription("L'isolation des mûrs et des structures est aussi l'un des travaux de specialité du portefeuille de Mozaik-Peinture, travaux d'isolation thermique des édiffices.");
        $categorie->setImageName("isolation.png");
        $categorie->setUpdatedAt(new DateTimeImmutable());
        $categorie->setIsActive(true);
        $manager->persist($categorie);
        $manager->flush();
        // On crée une référence pour la catégorie "ISOLATION" que l'on pourra utiliser dans d'autres fixtures et la catégorie est associée à la constante ISOLATION
        $this->addReference(self::ISOLATION, $categorie);

        $categorie = new Categorie();
        $categorie->setNom("nettoyage");
        $categorie->setSlug("nettoyage");
        $categorie->setDescription("Pour tous travaux de peintures, Mozaik-Peinture assure le nettoyage non seulement des espaces des chantiers, mais aussi des espaces industriels, habitationnels, bureaux et autres.");
        $categorie->setImageName("nettoyage.png");
        $categorie->setUpdatedAt(new DateTimeImmutable());
        $categorie->setIsActive(true);
        $manager->persist($categorie);
        $manager->flush();
        // On crée une référence pour la catégorie "NETTOYAGE" que l'on pourra utiliser dans d'autres fixtures et la catégorie est associée à la constante NETTOYAGE
        $this->addReference(self::NETTOYAGE, $categorie);

        $categorie = new Categorie();
        $categorie->setNom("sol");
        $categorie->setSlug("sol");
        $categorie->setDescription("Pour tous travaux de peintures, Mozaik-Peinture assure le nettoyage non seulement des espaces des chantiers, mais aussi des espaces industriels, habitationnels, bureaux et autres.");
        $categorie->setImageName("sol.png");
        $categorie->setUpdatedAt(new DateTimeImmutable());
        $categorie->setIsActive(true);
        $manager->persist($categorie);
        $manager->flush();
        // On crée une référence pour la catégorie "SOL" que l'on pourra utiliser dans d'autres fixtures et la catégorie est associée à la constante SOL
        $this->addReference(self::SOL, $categorie);
    }
}
