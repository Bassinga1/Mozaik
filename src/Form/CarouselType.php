<?php

namespace App\Form;

use App\Entity\Carousel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class CarouselType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->remove('imageName')
            ->remove('updatedAt', null, [
                'widget' => 'single_text',
            ])
            ->add('titre', TextType::class, ["required"=>false])
            ->add('texte', TextType::class, ["required"=>false])
            ->add('rankNumber', NumberType::class, ["required"=>true, "label"=>"Ordre"])
            ->add('tag', TextType::class, ["required"=>true])
            ->add('isActive', CheckboxType::class, ["required"=>false, "label"=>"Active", "attr"=>["class"=>"form-check-input"], "row_attr"=>["class"=>"form-switch"]])
            ->add('imageFile', VichImageType::class, ["required"=>true, "label"=>"Image"])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Carousel::class,
        ]);
    }
}
