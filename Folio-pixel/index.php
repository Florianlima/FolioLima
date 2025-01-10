<?php get_header(); ?>

<body>
    <main class="container">
        <div class="gameboy-screen">
            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/background.webp" alt="">
            <div class="start" id="start">START</div>
            <div class="welcome" id="welcome">Bienvenue !</div>
            <div class="character" id="character">
                <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/character.png" alt="Character">
                <div class="dialog-box" id="dialog">
                    Bonjour, je m'appelle Florian Lima ! Je suis développeur WordPress et fan de Pokémon. <div class="arrow-dial"></div>
                </div>
            </div>
            <nav class="menu-pokemon" id="menu">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'pokemon-menu',
                ));
                ?>
            </nav>
        </div>
    </main>

    <?php get_footer(); ?>
</body>