// on copie/colle le script de l'aide : https://symfony.com/doc/current/form/form_collections.html#allowing-tags-to-be-removed

const addImageFormDeleteLink = (item) => {
    const removeFormButton = document.createElement('button');
    removeFormButton.innerText = 'Delete this image';

    item.append(removeFormButton);

    removeFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        // remove the li for the tag form
        item.remove();
    });
}


// On récupère l'ul qui contient la collection de formulaires dynamiques
const addFormToCollection = (e) => {
    const collectionHolder = document.querySelector('.' + e.currentTarget.dataset.collectionHolderClass);
    // On crée un li, qui contiendra le prototype du formulaire
    const item = document.createElement('li');
    // On ajouter dans l'html de la li l'html du prototype de formulaire des images contenu dans l'attribut data-prototype
    // de l'ul.
    // On remplace les __name__ par le numéro de l'index de la collection (l'attribut data-index de l'ul)
    item.innerHTML = collectionHolder
        .dataset
        .prototype
        .replace(
        /__name__/g,
        collectionHolder.dataset.index
        );
    // On ajoute un bouton de suppression
    addImageFormDeleteLink(item);
    // On ajoute la li au ul
    collectionHolder.appendChild(item);
    // On incrémente l'index de la collection (attribut data-index de l'ul)
    collectionHolder.dataset.index++;
};
// Prise en charge du clic sur le button d'ajout d'une image
document
    .querySelectorAll('.add_item_link')
    .forEach(btn => {
        btn.addEventListener("click", addFormToCollection)
});
// Mise en plqce des boutons supressions
document
    .querySelectorAll('ul.images li')
    .forEach((item) => {
        addImageFormDeleteLink(item);
    });
