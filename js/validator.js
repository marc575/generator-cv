function deleteData() {
    localStorage.removeItem('cvData');
    window.location.reload();
}

// jsPDF pour générer un PDF à partir du contenu de la prévisualisation du CV
function previewPDF() {
    const $element = $('#cv-preview');
    const options = {
        margin: 5,
        filename: 'mon-cv.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 4, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from($element[0]).outputPdf('bloburl').then((pdfUrl) => {
        window.open(pdfUrl, '_blank');
    });
}

// Sauvegardez les données du formulaire dans le localStorage
function saveData() {
    const cvData = {
        // completer les autres champs ici
        full_name: $('.full-name').val(),
        jobTitle: $('.job-title').val(),
        email: $('.email').val(),
        phone: $('.phone').val(),
        age: $('.age').val(),
        gender: $('.gender').val(),
        current_situation: $('.current-situation').val(),
        address: $('.address').val(),
        summary: $('.summary').val(),

        company_name: $('#company-name').val(),
        job_position: $('#job-position').val(),
        date_job_begin: $('#date-job-begin').val(),
        date_job_end: $('#date-job-end').val(),
        job_mission: $('#job-mission').val(),

        degree: $('#degree').val(),
        institution: $('#institution').val(),
        year: $('#year').val(),

        skill_name: $('#skill-name').val(),
        skill_level: $('#skill-level').val(),

        interest: $('#interest').val(),

        reference_name: $('#reference-name').val(),
        reference_position: $('#reference-position').val(),
        reference_email: $('#reference-email').val(),
        reference_phone: $('#reference-phone').val(),

        language_name: $('#language-name').val(),
        language_level: $('#language-level').val(),

    };
    localStorage.setItem('cvData', JSON.stringify(cvData))
}

function validateForm() {
    let isValid = true;

    // Tableau des champs à valider avec leurs messages d'erreur
    const fields = [
        { id: '.full-name', message: 'Le nom est requis.' },
        { id: '.job-title', message: 'Le titre du poste est requis.' },
        { id: '.email', message: 'Le mail est requis.' },
        { id: '.phone', message: 'Le numéro de téléphone est requis.' },
        { id: '.address', message: 'La domiciliation est requise.' },
        { id: '.summary', message: 'Le résumé est requis.' },
    ];

    // Réinitialiser les styles d'erreur
    $('.error-message').remove();
    $('input, textarea').removeClass('is-invalid');

    // Parcourir et valider chaque champ
    $.each(fields, function (index, field) {
        const value = $.trim($(field.id).val());
        if (value === "") {
            $(field.id)
                .addClass('is-invalid')
                .after(`<span class="error-message" style="color:red; font-size:12px;">${field.message}</span>`);
            isValid = false;
        }
    });

    if ($.trim($('input[name="company-name"]').val())) {
        const value = $.trim($('input[name="job-position"]').val());
        if (value === "") {
            $($('input[name="job-position"]'))
                .addClass('is-invalid')
                .after(`<span class="error-message" style="color:red; font-size:12px;">Si vous précisez une entreprise alors vous devez donnez le poste occupé !</span>`);
            isValid = false;
        }
    }

    if ($.trim($('input[name="degree"]').val())) {
        const value = $.trim($('input[name="institution"]').val());
        if (value === "") {
            $($('input[name="institution"]'))
                .addClass('is-invalid')
                .after(`<span class="error-message" style="color:red; font-size:12px;">Si vous précisez un diplome alors vous devez donnez l'établissement où vous l'avez obtenu !</span>`);
            isValid = false;
        }
    }

    if ($.trim($('input[name="reference-name"]').val())) {
        const email = $.trim($('input[name="reference-email"]').val());
        const phone = $.trim($('input[name="reference-phone"]').val());
        if (email === "" && phone === "") {
            $($('input[name="reference-email"]'))
                .addClass('is-invalid')
                .after(`<span class="error-message" style="color:red; font-size:12px;">Si vous précisez une référence alors vous devez donnez au moins l'email ou le téléphone !</span>`);
            
            $($('input[name="reference-phone"]'))
                .addClass('is-invalid')
                .after(`<span class="error-message" style="color:red; font-size:12px;">Si vous précisez une référence alors vous devez donnez au moins le téléphone ou l'email !</span>`);
            isValid = false;
        }
    }

    return isValid;
}

// Rendre le formulaire dynamique et capturer les données saisies.
$('#cv-form').on('submit', function (e) {
    e.preventDefault();
    if (validateForm()) {
        saveData();
        previewPDF();
    }
});
