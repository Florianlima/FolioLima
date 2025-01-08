<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <body>
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
    <?php wp_footer(); ?>
    </body> 
    