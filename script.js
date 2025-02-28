// Ajouter une expérience
function addExperience() {
    const experiences = document.getElementById('experiences');
    const newExperience = `
        <div class="experience mb-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Nom de l'Entreprise</label>
                    <input type="text" name="company-name" class="company-name mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Poste Occupé</label>
                    <input type="text" name="job-position" class="job-position mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Début</label>
                    <input type="date" name="date-job-begin" placeholder="Durée..." class="date-job-begin mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Fin</label>
                    <input type="date" name="date-job-end" placeholder="Durée..." class="date-job-end mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
            </div>
            <div class="my-5">
                <label class="block text-sm font-medium text-gray-700">Description des Missions</label>
                <textarea rows="5" name="job-mission" class="mt-1 block w-full p-2 border border-gray-300 rounded-xl"></textarea>
            </div>
            <button type="button" class="mt-2 text-red-500 hover:text-red-700" onclick="removeExperience(this)">Supprimer</button>
        </div>
    `;
    experiences.insertAdjacentHTML('beforeend', newExperience);
    updatePreviewExperiences();
}

function removeExperience(button) {
    button.closest('.experience').remove();
    updatePreviewExperiences();
}

function updatePreviewExperiences() {
    const experiences = [];
    $('#experiences .experience').each(function() {
        const companyName = $(this).find('input[name="company-name"]').val();
        const jobPosition = $(this).find('input[name="job-position"]').val();
        const jobMission = $(this).find('textarea[name="job-mission"]').val();

        let dateJobBegin = $(this).find('input[name="date-job-begin"]').val();
        if (dateJobBegin) {
            dateJobBegin = new Date(dateJobBegin);
            dateJobBegin = `${dateJobBegin.getMonth() + 1} / ${dateJobBegin.getFullYear()}`;
        }

        let dateJobEnd = $(this).find('input[name="date-job-end"]').val();
        if (dateJobEnd) {
            dateJobEnd = new Date(dateJobEnd);
            dateJobEnd = `${(dateJobEnd.getMonth()) + 1} / ${dateJobEnd.getFullYear()}`;
        }
        
        companyName ? experiences.push(`
            <li class="space-y-1">
                <p class="flex justify-between gap-2 text-xs">
                    <span class="font-medium">${companyName}</span> <span class="text-gray-400">${dateJobBegin} - ${dateJobEnd}</span>
                </p>
                <h3 class="text-md font-medium">${jobPosition}</h3>
                <p class="text-xs">${jobMission}</p>
            </li>
        `) : null;
    });

    const previewList = $('.preview-experiences ul');
    previewList.empty();
    experiences.forEach(experience => {
        previewList.append(`${experience}`);
    });
}

// Ajouter une formation
function addEducation() {
    const educations = document.getElementById('educations');
    const newEducation = `
        <div class="education mb-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Diplôme Obtenu</label>
                    <input type="text" name="degree" placeholder="Diplome..." class="degree mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Établissement</label>
                    <input type="text" name="institution" placeholder="Etablissement..." class="institution mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Année d'Obtention</label>
                    <input type="date" name="year" placeholder="Année d'obtention..." class="year mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
            </div>
            <button type="button" class="mt-2 text-red-500 hover:text-red-700" onclick="removeEducation(this)">Supprimer</button>
        </div>
    `;
    educations.insertAdjacentHTML('beforeend', newEducation);
    updatePreviewEducations();
}

// Supprimer une formation
function removeEducation(button) {
    button.closest('.education').remove();
    updatePreviewEducations();
}

function updatePreviewEducations() {
    const educations = [];
    $('#educations .education').each(function() {
        const degree = $(this).find('input[name="degree"]').val();
        const institution = $(this).find('input[name="institution"]').val();
        let year = $(this).find('input[name="year"]').val();
        if (year) {
            year = new Date(year);
            year = `${year.getMonth() + 1} / ${year.getFullYear()}`;
        }
        
        degree ? educations.push(`
            <li class="space-y-1">
                <h3 class="flex justify-between gap-2">
                    <span class="font-medium text-md">${degree}</span> <span class="text-gray-400 text-xs">${year}</span>
                </h3>
                <p class="text-xs font-medium">${institution}</p>
            </li>
        `) : null;
    });

    const previewList = $('.preview-educations ul');
    previewList.empty();
    educations.forEach(education => {
        previewList.append(`${education}`);
    });
}

// Ajouter une référence
function addReference() {
    const references = document.getElementById('references');
    const newReference = `
        <div class="reference mb-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Nom</label>
                    <input type="text" name="reference-name" placeholder="Nom..." class="reference-name mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Poste</label>
                    <input type="text" name="reference-position" placeholder="Poste..." class="reference-position mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="reference-email" placeholder="Email..." class="reference-email mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Téléphone</label>
                    <input type="tel" name="reference-phone" placeholder="Téléphone..." class="reference-phone mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
            </div>
            <button type="button" class="mt-2 text-red-500 hover:text-red-700" onclick="removeReference(this)">Supprimer</button>
        </div>
    `;
    references.insertAdjacentHTML('beforeend', newReference);
    updatePreviewReferences();
}

// Supprimer une référence
function removeReference(button) {
    button.closest('.reference').remove();
    updatePreviewReferences();
}

function updatePreviewReferences() {
    const references = [];
    $('#references .reference').each(function() {
        const referenceName = $(this).find('input[name="reference-name"]').val();
        const referencePosition = $(this).find('input[name="reference-position"]').val();
        const referenceEmail = $(this).find('input[name="reference-email"]').val();
        const referencePhone = $(this).find('input[name="reference-phone"]').val();
        referenceName ? references.push(`
            <li class="space-y-2">
                <h3 class="text-md font-medium">${referenceName}</h3>
                <p class="text-xs">${referencePosition}</p>
                <p class="text-xs flex items-center gap-2"><img src="./assets/envelope.svg" style="margin-right:5px; width:12px;" /> ${referenceEmail}</p>
                <p class="text-xs flex items-center gap-2"><img src="./assets/tel.svg" style="margin-right:5px; width:12px;" /> ${referencePhone}</p>
            </li>
        `): null;
    });

    const previewList = $('.preview-references ul');
    previewList.empty();
    references.forEach(reference => {
        previewList.append(`${reference}`);
    });
}

// Ajouter une compétence
function addSkill() {
    const skills = document.getElementById('skills');
    const newSkill = `
        <div class="skill mb-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Compétence</label>
                    <input type="text" name="skill-name" class="skill-name mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Niveau de Maîtrise</label>
                    <select value="" name="skill-level" class="skill-level mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                        <option value=""></option>
                        <option value="Débutant">Débutant</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Avancé">Avancé</option>
                    </select>
                </div>
            </div>
            <button type="button" class="mt-2 text-red-500 hover:text-red-700" onclick="removeSkill(this)">Supprimer</button>
        </div>
    `;
    skills.insertAdjacentHTML('beforeend', newSkill);
    updatePreviewSkills();
}

// Supprimer une compétence
function removeSkill(button) {
    button.closest('.skill').remove();
    updatePreviewSkills();
}

function updatePreviewSkills() {
    const skills = [];
    $('#skills .skill').each(function() {
        const skillName = $(this).find('input[name="skill-name"]').val();
        const skillLevel = $(this).find('select[name="skill-level"]').val();
        switch (skillLevel) {
            case "Débutant":
                skills.push(`<li class="flex justify-between items-center"><span class="text-md font-medium">${skillName}</span> <progress class="progress text-yellow-400 w-32 bg-white" value="40" max="100"></progress></li>`);
                break;
            case "Intermédiaire":
                skills.push(`<li class="flex justify-between items-center"><span class="text-md font-medium">${skillName}</span> <progress class="progress text-yellow-400 w-32 bg-white" value="70" max="100"></progress></li>`);
                break;
            case "Avancé":
                skills.push(`<li class="flex justify-between items-center"><span class="text-md font-medium">${skillName}</span> <progress class="progress text-yellow-400 w-32 bg-white" value="100" max="100"></progress></li>`);
                break;
        
            default:
                break;
        }
    });

    const previewList = $('.preview-skills ul');
    previewList.empty();
    skills.forEach(skill => {
        previewList.append(`${skill}`);
    });
}

// Ajouter un centre d'intérêt
function addInterest() {
    const interests = document.getElementById('interests');
    const newInterest = `
        <div class="interest-item mb-4">
            <input type="text" name="interest" class="interest mt-1 block w-full p-2 border border-gray-300 rounded-xl">
            <button type="button" class="mt-2 text-red-500 hover:text-red-700" onclick="removeInterest(this)">Supprimer</button>
        </div>
    `;
    interests.insertAdjacentHTML('beforeend', newInterest);
    updatePreviewInterests();
}

// Supprimer un centre d'intérêt
function removeInterest(button) {
    button.closest('.interest-item').remove();
    updatePreviewInterests();
}

function updatePreviewInterests() {
    const interests = [];
    $('#interests .interest-item').each(function() {
        const interest = $(this).find('input[name="interest"]').val();
        interests.push(`${interest}`);
    });

    const previewList = $('.preview-interests div');
    previewList.empty();
    previewList.append(`${interests.join(', ')}`);
}

// Ajouter une langue
function addLanguage() {
    const languages = document.getElementById('languages');
    const newLanguage = `
        <div class="language mb-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Langue</label>
                    <input type="text" name="language-name" class="language-name mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Niveau de Compétence</label>
                    <select value="" name="language-level" class="language-level mt-1 block w-full p-2 border border-gray-300 rounded-xl">
                        <option value=""></option>
                        <option value="Débutant">Débutant</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Avancé">Avancé</option>
                    </select>
                </div>
            </div>
            <button type="button" class="mt-2 text-red-500 hover:text-red-700" onclick="removeLanguage(this)">Supprimer</button>
        </div>
    `;
    languages.insertAdjacentHTML('beforeend', newLanguage);
    updatePreviewLanguages();
}

// Supprimer une langue
function removeLanguage(button) {
    button.closest('.language').remove();
    updatePreviewLanguages();
}

function updatePreviewLanguages() {
    const languages = [];
    $('#languages .language').each(function() {
        const languageName = $(this).find('input[name="language-name"]').val();
        const languageLevel = $(this).find('select[name="language-level"]').val();
        switch (languageLevel) {
            case "Débutant":
                languages.push(`<li class="flex justify-between items-center"><span class="text-md font-medium">${languageName}</span> <progress class="progress text-yellow-400 w-32 bg-white" value="40" max="100"></progress></li>`);
                break;
            case "Intermédiaire":
                languages.push(`<li class="flex justify-between items-center"><span class="text-md font-medium">${languageName}</span> <progress class="progress text-yellow-400 w-32 bg-white" value="70" max="100"></progress></li>`);
                break;
            case "Avancé":
                languages.push(`<li class="flex justify-between items-center"><span class="text-md font-medium">${languageName}</span> <progress class="progress text-yellow-400 w-32 bg-white" value="100" max="100"></progress></li>`);
                break;
        
            default:
                break;
        }
    });

    const previewList = $('.preview-languages ul');
    previewList.empty();
    languages.forEach(language => {
        previewList.append(`${language}`);
    });
}


$(document).ready(function () {
    // Utilisez JavaScript pour appliquer le thème sélectionné à la prévisualisation

    $('#theme-selector').on('change', function () {
        const modeleClassic = $('#modele-classic');
        modeleClassic.removeClass(); // Réinitialise les classes
        modeleClassic.addClass($(this).val()); // Applique le nouveau thème

        const modelePro = $('#modele-pro');
        modelePro.removeClass(); // Réinitialise les classes
        modelePro.addClass($(this).val()); // Applique le nouveau thème

        
        const modelePremium = $('#modele-premium');
        modelePremium.removeClass(); // Réinitialise les classes
        modelePremium.addClass($(this).val()); // Applique le nouveau thème
    });

    function previewData() {
        // Ajouter les champs de prévisualisations
        $('.full-name').val() ? $('.preview-name').text($('.full-name').val()) : null ;
        $('.job-title').val() ? $('.preview-job-title').text($('.job-title').val()) : null;
        
        if ($('.email').val()) {
            $('.preview-email').removeClass('hidden');
            $('.preview-email').html(`<img src="./assets/envelope.svg" style="color:#fff; margin-right:5px; width:12px;" /> ${$('.email').val()}`);
        } else {
            $('.preview-email').addClass('hidden');
        }
        
        if ($('.phone').val()) {
            $('.preview-phone').removeClass('hidden');
            $('.preview-phone').html(`<img src="./assets/tel.svg" style="color:#fff; margin-right:5px; width:12px;" /> ${$('.phone').val()}`)
        } else {
            $('.preview-phone').addClass('hidden');
        }
        
        if ($('.address').val()) {
            $('.preview-address').removeClass('hidden');
            $('.preview-address').html(`<img src="./assets/map.svg" style="color:#fff; margin-right:5px; width:12px;" /> ${$('.address').val()}`)
        } else {
            $('.preview-address').addClass('hidden');
        }
        
        $('.summary').val() ? $('.preview-summary').text($('.summary').val()) : null;

        // $('.gender').val() && $('#preview-gender').html(`Sexe : ${$('.gender').val()}`);
        // $('.age').val() && $('#preview-age').html(`âge : ${$('.age').val()} ans`);
        
        $('.current-situation').val() ? $('#preview-current-situation').html(`${$('.current-situation').val()}`) : null;

        updatePreviewExperiences();
        updatePreviewEducations();
        updatePreviewSkills();
        updatePreviewInterests();
        updatePreviewReferences();
        updatePreviewLanguages();
    }

    $('#cv-form').on('input', function () {
        previewData();
    });

    // Écouter l'événement de changement de fichier
    $('#profile-picture').on('change', function (event) {
        const file = event.target.files[0]; // Récupérer le fichier sélectionné

        if (file) {
            const reader = new FileReader(); // Créer un FileReader pour lire le fichier

            // Lorsque le fichier est lu avec succès
            reader.onload = function (e) {
                $('.preview-profil') // Sélectionner l'élément img
                    .attr('src', e.target.result) // Mettre à jour l'attribut src avec l'URL de l'image
                    .removeClass('hidden'); // Afficher l'élément img
            };

            reader.readAsDataURL(file); // Lire le fichier en tant qu'URL de données
        } else {
            $('.preview-profil').addClass('hidden'); // Masquer l'élément img si aucun fichier n'est sélectionné
        }
    });

    // Chargez les données au chargement de la page
    function loadData() {
        const cvData = JSON.parse(localStorage.getItem('cvData'));
        if (cvData) {
            // Mettez à jour la prévisualisation ici
            $('.full-name').val(cvData.full_name);
            $('.job-title').val(cvData.jobTitle);
            $('.email').val(cvData.email);
            $('.phone').val(cvData.phone);
            $('.age').val(cvData.age);
            $('.gender').val(cvData.gender);
            $('.current-situation').val(cvData.current_situation);
            $('.address').val(cvData.address);
            $('.summary').val(cvData.summary);

            $('.company-name').val(cvData.company_name);
            $('.job-position').val(cvData.job_position);
            $('.date-job-begin').val(cvData.date_job_begin);
            $('.date-job-end').val(cvData.date_job_end);
            $('.job-mission').val(cvData.job_mission);

            $('.degree').val(cvData.degree);
            $('.institution').val(cvData.institution);
            $('.year').val(cvData.year);

            $('.skill-name').val(cvData.skill_name);
            $('.skill-level').val(cvData.skill_level);

            $('.interest').val(cvData.interest);

            $('.reference-name').val(cvData.reference_name);
            $('.reference-position').val(cvData.reference_position);
            $('.reference-email').val(cvData.reference_email);
            $('.reference-phone').val(cvData.reference_phone);

            $('.language-name').val(cvData.language_name);
            $('.language-level').val(cvData.language_level);
        }
    }

    $(window).on('load', function () {
        loadData()
        previewData();
    });
});