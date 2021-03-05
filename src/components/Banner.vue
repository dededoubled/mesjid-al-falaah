<template>
    <div class="banner">
        <agile
            :fade="true"
            :speed="2500"
            :autoplay-speed="5000"
            :dots="true"
        >
            <div class="banner__slider">
                <div class="banner__slider-overlay banner__slider-overlay--green">
                </div>
                <div class="banner__card">
                    <div class="banner__card-header">
                        <div class="banner__card-title">
                            <p>masjid al falaah</p>
                            <p>kampung dadap - glugur darat medan timur</p>
                        </div>
                    </div>
                    <div class="banner__card-body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer..</p>
                    </div>
                    <div class="banner__card-footer">
                        <button class="banner__button">profile masjid</button>
                    </div>
                </div>
            </div>
            <div class="banner__slider">
                <div class="banner__slider-overlay banner__slider-overlay--blue">
                </div>
                <div class="banner__card">
                    <div class="banner__card-header">
                        <div class="banner__card-title">
                            <p>masjid al falaah</p>
                            <p>kampung dadap - glugur darat medan timur</p>
                        </div>
                    </div>
                    <div class="banner__card-body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer..</p>
                    </div>
                    <div class="banner__card-footer">
                        <button class="banner__button">profile masjid</button>
                    </div>
                </div>
            </div>

            <template v-slot:prevButton>
                <font-awesome-layers class="">
                    <font-awesome-icon :icon="faArrowLeft"/>
                </font-awesome-layers>
            </template>

            <template v-slot:nextButton>
                <font-awesome-layers class="">
                    <font-awesome-icon :icon="faArrowRight" />
                </font-awesome-layers>
            </template>
            
        </agile>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
import fontAwesome from '../mixins/fontAwesome.js'

export default {
    name: 'Banner',
    mixins: [fontAwesome],
    components: {
        agile: VueAgile
    }
}
</script>

<style lang="scss">
@import "../assets/style/components/font-face.scss";

@layer components {
    @mixin slider-overlay {
        z-index: 1;
        @apply w-full h-full;
    }

    .banner {
        @include raleway-text;
        @apply w-10/12 mx-auto;

        &__slider:nth-child(1) {
            width: 100%;
            height: 565px;
            background-image: url("../assets/img/Masjid-Al-Falaah-Malam-2.png");
            background-position: right;
            background-size: 100% 100%;
            // background-size: 100%;
            background-repeat: no-repeat;
            @apply flex items-center relative overflow-hidden;
            @apply rounded-3xl;
        }

        &__slider:nth-child(2) {
            width: 100%;
            height: 565px;
            background-image: url("../assets/img/Masjid-Al-Falaah-Malam-1.png");
            background-position: right;
            background-size: 100% 100%;
            // background-size: 100%;
            background-repeat: no-repeat;
            @apply flex items-center relative overflow-hidden;
            @apply rounded-3xl;
        }

        &__slider-overlay:nth-of-type(1) {
            @include slider-overlay;
        }

        &__slider-overlay--green {
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,4,70,1) 0%, rgba(6,5,81,1) 0%, rgba(28,92,28,1) 0%, rgba(28,92,28,1) 0%, rgba(28,92,28,1) 22%, rgba(0,0,0,0) 70%);
        }

        &__slider-overlay--blue {
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,4,70,1) 0%, rgba(6,5,81,1) 0%, rgba(28,92,28,1) 0%, rgba(56,193,200,1) 0%, rgba(56,193,200,1) 22%, rgba(0,0,0,0) 70%);
        }    
            
        &__card {
            left: 8%;
            z-index: 2;
            @apply absolute w-5/12;
        }

        &__card-title p:nth-child(1) {
            color: #fff50f;
            @apply font-extrabold text-6xl capitalize;
        }

        &__card-title p:nth-child(2) {
            color: #fff;
            @apply mt-3;
            @apply font-bold capitalize;
        }

        &__card-body {
            @apply mt-6;
            @apply font-normal text-white text-justify;

            p {
                @apply leading-8;
            }
        }

        &__card-footer {
            @apply mt-4;
        }
    }

    // ----------------------------------------

    .banner__button {
        @include roboto-text;
        @apply py-3 px-14;
        @apply bg-white font-bold rounded-3xl capitalize;
    }

    // ----------------------------------------

    .agile {
        &__actions {
            bottom: 8%;
            left: 3%;
            z-index: 3;
            @apply absolute;
        }

        &__nav-button {
            @apply px-16;
            @apply text-3xl text-white;
        }
    }
}
</style>