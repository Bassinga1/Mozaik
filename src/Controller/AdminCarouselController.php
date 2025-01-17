<?php

namespace App\Controller;

use App\Entity\Carousel;
use App\Form\CarouselType;
use App\Repository\CarouselRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/carousel')]
final class AdminCarouselController extends AbstractController
{
    #[Route(name: 'app_admin_carousel_index', methods: ['GET'])]
    public function index(CarouselRepository $carouselRepository): Response
    {
        return $this->render('admin_carousel/index.html.twig', [
            'carousels' => $carouselRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_carousel_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        // On instancie un nouvel objet Carousel
        $carousel = new Carousel();
        // On crée un formulaire de carousel en utilisant la classe CarouselType
        $form = $this->createForm(CarouselType::class, $carousel);
        // On traite le formulaire (l'hydratation)
        $form->handleRequest($request); // l'hydratation de l'objet $carousel avec les données se trouvant dans $request

        // Si le formulaire est soumis et est valide
        if ($form->isSubmitted() && $form->isValid()) {
            // On mémorise l'instance de Carousel ($carousel)
            $entityManager->persist($carousel);
            // On enregistre dans la BDD
            $entityManager->flush();
            // Flash méssage
            $this->addFlash('success', 'carousel has been created!');

            // On rédirrige vers la listes des carousels
            return $this->redirectToRoute('app_admin_carousel_index', [], Response::HTTP_SEE_OTHER);
        }

        // Si le formulaire n'est pas soumis ou n'est pas valide, on affiche le formulaire
        return $this->render('admin_carousel/new.html.twig', [
            'carousel' => $carousel,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_carousel_show', methods: ['GET'])]
    public function show(Carousel $carousel): Response
    {
        return $this->render('admin_carousel/show.html.twig', [
            'carousel' => $carousel,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_carousel_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Carousel $carousel, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CarouselType::class, $carousel);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            // Flash méssage
            $this->addFlash('success', 'carousel has been modified!');

            return $this->redirectToRoute('app_admin_carousel_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin_carousel/edit.html.twig', [
            'carousel' => $carousel,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_carousel_delete', methods: ['POST'])]
    public function delete(Request $request, Carousel $carousel, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$carousel->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($carousel);
            $entityManager->flush();
            // Flash méssage
            $this->addFlash('success', 'carousel has been deleted!');
        }

        return $this->redirectToRoute('app_admin_carousel_index', [], Response::HTTP_SEE_OTHER);
    }
}
