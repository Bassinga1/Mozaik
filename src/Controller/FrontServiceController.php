<?php

namespace App\Controller;

use App\Repository\ServiceRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FrontServiceController extends AbstractController
{
    
    #[Route('/service', name: 'app_front_service')]
    public function index(): Response
    {
        return $this->render('front_service/index.html.twig', [
            'controller_name' => 'FrontServiceController',
        ]);
    }
}
