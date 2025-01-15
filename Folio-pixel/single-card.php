<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header(); ?>
<div class="single-post-container">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            <div class="post-content">

                <div class="first-section">

                    <div class="title_ref">

                        <div class="title">
                            <h1 class="post-title line-break-title"><?php the_title(); ?></h1>
                        </div>
                  </div>
                        <div class="post-techno">
                            <?php

                            $techno = get_field('techno');
                            if ($techno) {
                                echo 'Technologie : ' . $techno;
                            }
                            ?>
                        </div>

                        <div class="swiper">
                            <div class="swiper-wrapper">
                                <?php

                                $galerie = get_field('galerie');
                                foreach ($galerie as $photo) {
                                ?>
                                    <div class="swiper-slide">
                                        <img src="<?= $photo['url']; ?>">
                                    </div>
                                <?php
                                }

                                ?>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>

                   

                    <div class="card-navigation">
                        <?php
                        $prev_post = get_previous_post();
                        $next_post = get_next_post();
                        ?>

                        <?php if (!empty($prev_post)) : ?>
                            <a href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>" class="custom-prev-link">
                                <span class="arrow prev"></span>
                                
                            </a>
                        <?php endif; ?>

                        <?php if (!empty($next_post)) : ?>
                            <a href="<?php echo esc_url(get_permalink($next_post->ID)); ?>" class="custom-next-link">
                                <span class="arrow next"></span>
                               
                            </a>
                        <?php endif; ?>
                    </div>


                    <div class="post-text">
                        <?php the_content(); ?>
                    </div>

                </div>

        <?php endwhile;
    endif; ?>

            </div>
            <?php get_footer(); ?>