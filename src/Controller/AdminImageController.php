<?php

namespace App\Controller;

use App\Entity\Image;
use App\Form\ImageType;
use App\Repository\ImageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/image')]
final class AdminImageController extends AbstractController
{
    #[Route(name: 'app_admin_image_index', methods: ['GET'])]
    public function index(ImageRepository $imageRepository): Response
    {
        return $this->render('admin_image/index.html.twig', [
            'images' => $imageRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_image_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $image = new Image();
        $form = $this->createForm(ImageType::class, $image);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($image);
            $entityManager->flush();
            // Flash méssage
            $this->addFlash('success', 'image has been created!');

            return $this->redirectToRoute('app_admin_image_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin_image/new.html.twig', [
            'image' => $image,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_image_show', methods: ['GET'])]
    public function show(Image $image): Response
    {
        return $this->render('admin_image/show.html.twig', [
            'image' => $image,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_image_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Image $image, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ImageType::class, $image);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            // Flash méssage
            $this->addFlash('success', 'image has been modified!');

            return $this->redirectToRoute('app_admin_image_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin_image/edit.html.twig', [
            'image' => $image,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_image_delete', methods: ['POST'])]
    public function delete(Request $request, Image $image, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$image->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($image);
            $entityManager->flush();
            // Flash méssage
            $this->addFlash('success', 'service has been deleted!');
        }

        return $this->redirectToRoute('app_admin_image_index', [], Response::HTTP_SEE_OTHER);
    }
}
