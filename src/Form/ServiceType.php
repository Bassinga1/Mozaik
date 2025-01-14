<?php

namespace App\Form;

use App\Entity\Categorie;
use App\Entity\Service;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ServiceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('isActive', CheckboxType::class, ['required'=>false, 'label'=>'Active', 'attr'=>["class"=>"form-check-input"], 'row_attr'=>["class"=>"form-switch mb-2"]])
            ->add('titre', TextType::class, ['required'=>true])
            ->add('description', CKEditorType::class, ['required'=>true])
            ->add('prix', MoneyType::class, ['required'=>true])
            ->remove('slug')
            ->add('categorie', EntityType::class, [
                'class' => Categorie::class,
                'choice_label' => 'nom',
                'required' => true
            ])
            // aide for embed form: https://symfony.com/doc/current/form/form_collections.html
            ->add('images', CollectionType::class, [
                'entry_type'=>ImageType::class, 
                "allow_add"=>true, 
                "by_reference"=>false, 
                'allow_delete'=>true, 
                'label'=>false, 
                'entry_options'=>['fromBook'=>true]])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Service::class,
        ]);
    }
}
