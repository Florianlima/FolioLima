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
                    Bonjour, je m'appelle Florian Lima ! Je suis développeur WordPress et fan de Pokémon. 
                    <div class="arrow-dial"></div>
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
            <?php get_template_part('templates_parts/presentation'); ?>

            
        </div>
        <!-- Section des Pokéballs -->
        <section class="pokeball-projects">
                <?php
                $args = array(
                    'post_type' => 'card',
                    'posts_per_page' => -1,
                );
                $query = new WP_Query($args);

                if ($query->have_posts()) :
                    while ($query->have_posts()) : $query->the_post();
                ?>
                        <div class="pokeball-container">
                            <div class="pokeball"></div>
                            <div class="project-card hidden">
                                <h3><?= get_the_title(); ?></h3>
                                <?php if (has_post_thumbnail()) : ?>
                        <div class="project-thumbnail">
                            <?php the_post_thumbnail('small');  ?>
                        </div>
                    <?php endif; ?>
                                <p><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                                <a href="<?php the_permalink(); ?>" class="view-project">Voir le projet</a>
                            </div>
                        </div>
                <?php
                    endwhile;
                endif;
                wp_reset_postdata();
                ?>
            </section>
    </main>

    <?php get_footer(); ?>
</body>
