# Exemple 1 : Manipulation du DOM

<!-- 
    <div id="content">
        <p>Bonjour, monde !</p>
    </div>

    <script>
        $(document).ready(function() {
            // Changer le texte du paragraphe
            $("#content p").text("jQuery fonctionne !");
        });
    </script>   
-->

# Exemple 2 : Gestion des événements

<!-- 
    button id="myButton">Cliquez-moi</button>
    <p id="message"></p>

    <script>
        $(document).ready(function() {
            $("#myButton").click(function() {
                $("#message").text("Vous avez cliqué sur le bouton !");
            });
        });
    </script>
 -->

 # Exemple 3 : Requête AJAX

 <!-- 
    <div id="data"></div>

    <script>
        $(document).ready(function() {
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/posts/1",
                method: "GET",
                success: function(response) {
                    $("#data").text(response.title);
                },
                error: function(error) {
                    console.log("Erreur lors de la requête AJAX : ", error);
                }
            });
        });
    </script>
-->