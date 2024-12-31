<?php

namespace App\DataFixtures;

use App\Entity\Home;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class HomeFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $home = new Home();
        $home->setTitre('Mozaik - Peinture, Votre Partenaire sür!');
        $home->setTexte('Mozaik - Peinture, Votre Partenaire assurant les couleures de votre environnement quotidien, votre WorkPlace. Aussi la fourniture et le montage des mosaics');
        $home->setActive(true);
        $manager->persist($home);

        $home = new Home();
        $home->setTitre('Mozaik - Peinture, Votre Partenaire sür!');
        $home->setTexte('Mozaik - Peinture, Votre Prestqtqire vous offrant les services et produits de qualités');
        $home->setActive(false);
        $manager->persist($home);

        $manager->flush();
    }
}
