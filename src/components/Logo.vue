<template>
    <RouterLink to="/" class="logo">
        <span>MUSIC</span>.ALBUMS
    </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
    &:hover {
        color:#d6d6d6;
    }
    span {
        font-size: 23px;
        color: #f953c6;  /* fallback for old browsers */
        color: -webkit-linear-gradient(to right, #f953c6, #b91d73); /* Chrome 10-25, Safari 5.1-6 */
        color: linear-gradient(to right, #f953c6, #b91d73); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
}
</style>