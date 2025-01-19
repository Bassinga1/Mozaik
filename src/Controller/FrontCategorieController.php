<?php

namespace App\Controller;

use App\Repository\CategorieRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FrontCategorieController extends AbstractController
{
    /**
     * Fonction qui est appelé par un render constroller dans la base et qui permet de générer un menu déroulant avec les catégories
     */
    public function renderCategorieDropDown(CategorieRepository $categorieRepository): Response
    {
        $categories = $categorieRepository->findBy(["isActive"=>true], ["nom"=>"ASC"]);

        return $this->render('front_categorie/_categorie_dropdown.html.twig', [
            'categories' => $categories,
        ]);
    }
    #[Route('/categorie', name: 'app_front_categorie')]
    public function index(): Response
    {
        return $this->render('front_categorie/index.html.twig', [
            'controller_name' => 'FrontCategorieController',
        ]);
    }
}
