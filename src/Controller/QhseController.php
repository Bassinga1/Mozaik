<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class QhseController extends AbstractController
{
    #[Route('/qhse', name: 'app_qhse')]
    public function index(): Response
    {
        return $this->render('qhse/index.html.twig', [
            'controller_name' => 'QhseController',
        ]);
    }
}
