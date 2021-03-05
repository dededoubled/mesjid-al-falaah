<template>
    <div class="header">
        <div class="header__logo-wrapper">
            <img src="../assets/img/logo.png" alt="logo-mesjid">
        </div>
        <ul class="header__list">
            <li class="header__item">
                <a class="header__link">home</a>
            </li>
            <li class="header__item">
                <a class="header__link">artikel</a>
            </li>
            <li class="header__item">
                <a class="header__link">galeri</a>
            </li>
            <li class="header__item">
                <a class="header__link">tentang</a>
            </li>
        </ul>
        <div class="header__search">
            <p>pencarian</p>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/style/components/font-face.scss";

@layer components {
    .header {
        @include raleway-text;
        @apply flex justify-between w-10/12 mx-auto py-9;
        @apply font-bold capitalize text-gray-500;

        &__list {
            @apply flex items-center;
        }

        &__item {
            @apply px-8;
        }

        &__link {
            @apply cursor-pointer;
        }

        &__link:hover {
            color: #1C5C1C;
            @apply font-extrabold;
        }

        &__search {
            @apply my-auto;
        }
    }
}
</style>