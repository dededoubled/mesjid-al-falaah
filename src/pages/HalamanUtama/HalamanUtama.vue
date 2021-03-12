<template>
    <div class="content">
        <banner></banner>
        <div class="opening-qoute">
            <h2>dari masjid kita bangkit</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan</p>
            <button class="quote__button">lihat selengkapnya</button>
        </div>
        <div class="mesjid-events">
            <h2>agenda</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div class="mesjid-events__wrapper">
                <ul class="mesjid-events__daily-list">
                    <li v-for="(item, index) in mesjidEvent.daily" :key="index+1" class="mesjid-events__daily-item">
                        <div class="event-daily__day">
                            <h4>{{ item.day }}</h4>
                        </div>
                        <div class="event-daily__title">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.place }}</p>
                        </div>
                    </li>
                </ul>
                <ul class="mesjid-events__special-list">
                    <li class="mesjid-events__special-item">acara spesial terdekat</li>
                    <li v-for="(item, index) in mesjidEvent.special" :key="index+1" class="mesjid-events__special-item">
                        <div class="event-special__day">
                            <h2>{{ item.time.date }}</h2>
                            <h4>{{ item.time.month}}</h4>
                        </div>
                        <div class="event-special__title">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.place }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="single-article">
            <h2>artikel</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div class="single-article__wrapper">
                <div class="single-article__img">
                    <img src="../../assets/img/conference.png" alt="conference">
                </div>
                <div class="single-article__item">
                    <h2>semangat gotong royong masyarakat masjid al falaah</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took.
                    </p>
                    <div class="single-article__item-footer">
                        <p>lihat artikel lainnya</p>
                        <p>
                            baca selengkapnya
                            <font-awesome-layers class="text-black">
                                <font-awesome-icon :icon="faArrowRight" />
                            </font-awesome-layers>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="program-mesjid">
            <p class="program-mesjid__title">program masjid al falaah</p>
            <p class="program-mesjid__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </div>
</template>

<script>
import Banner from '../../components/Banner.vue'
import fontAwesome from '../../mixins/fontAwesome.js'

export default {
    name: 'HalamanUtama',
    mixins: [fontAwesome],
    components: {
        Banner
    },
    data() {
        return {
            mesjidEvent: {
                daily: [
                    {
                        day: 'senin',
                        title: 'kajian tasawuf',
                        place: 'Ba’da Ashar, Masjid Al Falaah Medan Timur'
                    },
                    {
                        day: 'selasa',
                        title: 'kajian tasawuf',
                        place: 'Ba’da Ashar, Masjid Al Falaah Medan Timur'
                    },
                    {
                        day: 'rabu',
                        title: 'kajian tasawuf',
                        place: 'Ba’da Ashar, Masjid Al Falaah Medan Timur'
                    },
                    {
                        day: 'kamis',
                        title: 'kajian tasawuf',
                        place: 'Ba’da Ashar, Masjid Al Falaah Medan Timur'
                    },
                    {
                        day: 'jum\'at',
                        title: 'kajian tasawuf',
                        place: 'Ba’da Ashar, Masjid Al Falaah Medan Timur'
                    },
                    {
                        day: 'sabtu',
                        title: 'kajian tasawuf',
                        place: 'Ba’da Ashar, Masjid Al Falaah Medan Timur'
                    },
                    {
                        day: 'ahad',
                        title: 'kajian tasawuf',
                        place: 'Ba’da Ashar, Masjid Al Falaah Medan Timur'
                    }
                ],
                special: [
                    {
                        time: {
                            date: '02',
                            month: 'march'
                        },
                        title: 'ceramah spesial bersama ustadz yahya waloni',
                        place: 'ba\'da subuh'
                    },
                    {
                        time: {
                            date: '04',
                            month: 'march'
                        },
                        title: 'ceramah spesial bersama ustadz yahya waloni',
                        place: 'ba\'da subuh'
                    },
                    {
                        time: {
                            date: '07',
                            month: 'march'
                        },
                        title: 'ceramah spesial bersama ustadz yahya waloni',
                        place: 'ba\'da subuh'
                    },
                ]
            },
        }
    } 
}
</script>

<style lang="scss">
@import "../../assets/style/components/font-face.scss";

@layer components {
    .content {
        @apply w-10/12 mx-auto;
    }
    .opening-qoute {
        @apply mt-24;
        @apply capitalize text-center;

        h2 {
            @include greatevibes-text;
            color: #1C5C1C;
            @apply font-normal text-6xl;
        }

        p {
            @apply mt-12;
            @apply normal-case leading-8;
        }
    }

    .mesjid-events {
        @apply mt-28;
        @apply text-center;

        h2 {
            @include raleway-text;
            color: #1C5C1C;
            @apply font-extrabold text-3xl capitalize;
        }

        p {
            @include roboto-text;
            @apply mt-2
        }

        &__wrapper {
            @apply flex justify-around mt-16;

            .mesjid-events__daily-list {
                @apply w-5/12;

                .mesjid-events__daily-item {
                    @include roboto-text;
                    @apply flex  py-2 border-b-2;

                    .event-daily__day {
                        @apply w-3/12;
                        @apply font-bold text-xl capitalize text-left;
                    }

                    .event-daily__title{
                        @apply w-8/12;
                        @apply capitalize text-left;

                        h4 {
                            @apply font-bold text-xl capitalize;
                        }
                        
                        p {
                            @apply font-normal text-base capitalize whitespace-nowrap;
                        }
                    }
                }
            }

            .mesjid-events__special-list {
                @apply w-5/12;
                border-radius: 20px;
                background-color: #1C5C1C;

                .mesjid-events__special-item:first-of-type {
                    @include raleway-text;
                    color: #FFF50F;
                    @apply mt-12 ml-10 px-0 py-0;
                    @apply font-bold text-2xl capitalize border-none;
                }

                .mesjid-events__special-item {
                    @apply flex mt-6 mx-10 pb-6;
                    @apply border-b;
                    
                    .event-special__day {
                        @apply w-1/6;
                        @apply font-bold;

                        h2 {
                            @include roboto-text;
                            @apply text-white text-5xl;
                        }

                        h4 {
                            @include raleway-text;
                            @apply text-white text-base;
                        }
                    }

                    .event-special__title{
                        @apply w-3/4 pl-6;
                        h4 {
                            @include roboto-text;
                            @apply font-bold text-xl text-white capitalize text-left;
                        }

                        p {
                            @include roboto-text;
                            @apply font-normal text-base text-white capitalize text-left;
                        }
                    }
                }
            }
        }
    }

    .single-article {
        @apply mt-24;
        @apply text-center;

        h2 {
            @include raleway-text;
            color: #1C5C1C;
            @apply font-extrabold text-3xl capitalize;
        }

        p {
            @include roboto-text;
            color: #5C5C5C;
            @apply mt-2;
            @apply font-normal text-base;
        }

        .single-article__wrapper {
            @apply flex mt-20;

            .single-article__img {
                @apply w-1/2 px-14;

                img {
                    border-radius: 20px;
                }
            }

            .single-article__item {
                @apply w-1/2 pt-2;
                @apply text-left;

                h2 {
                    @include raleway-text;
                    color: #4B4B4B;
                    @apply font-extrabold text-3xl uppercase;
                }

                & p {
                    @include roboto-text;
                    color: #5C5C5C;
                    @apply mt-8;
                    @apply font-normal text-base leading-8;
                }
            }

            .single-article__item-footer {
                @apply flex mt-1;
                @apply capitalize;

                p:first-child {
                    @include roboto-text;
                    @apply pr-8 mt-4;
                    @apply font-bold text-base;
                }

                p:last-child {
                    @include roboto-text;
                    @apply pl-8 mt-4;
                    @apply border-l;
                    @apply font-bold text-base;
                }
            }
        }
    }

    .program-mesjid {
        @apply my-24;
        @apply text-center;

        &__title {
            @include raleway-text;
            color: #1C5C1C;
            @apply font-extrabold text-3xl capitalize;
        }
    }

    .quote__button{
        @include roboto-text;
        background-color: #1C5C1C;
        @apply mt-10 py-3 px-14;
        @apply font-bold rounded-3xl capitalize text-white;
    }
}

</style>