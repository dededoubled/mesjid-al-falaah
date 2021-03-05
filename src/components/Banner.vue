<template>
    <div class="banner">
        <agile
            :fade="true"
            :speed="2500"
            :autoplay-speed="5000"
            :dots="false"
        >
            <template v-slot:default>
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
            </template>

            <template v-slot:prevButton>
                <font-awesome-layers class="agile__nav-button">
                    <font-awesome-icon :icon="faArrowLeft"/>
                </font-awesome-layers>
            </template>

            <template v-slot:nextButton>
                <font-awesome-layers class="agile__nav-button">
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