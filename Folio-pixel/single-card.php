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

            <div class="post-techno">
            <?php
                   
                   $techno = get_field('techno');
                    if ($techno){
                        echo 'Technologie : ' . $techno ;
                    }
            ?>
        </div>

        <div class="post-galerie">
            <?php
                   
                   $galerie = get_field('galerie');
                   foreach($galerie as $photo )
                   { 
                    ?><img src="<?= $photo ['url'];?>"><?php 
                   }
                
            ?>
        </div>

        <?php if (has_post_thumbnail()) : ?>
            <div class="post-thumbnail">
                <?php the_post_thumbnail(); ?>
            </div>
        <?php endif; ?>
    </div>

    <div class="post-text">
        <?php the_content(); ?>
    </div>

</div>

<?php endwhile; endif; ?>

</div>
<?php get_footer(); ?>
