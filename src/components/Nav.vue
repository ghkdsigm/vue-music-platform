<template>
    <header>
        <h1 class="logo">
            <a href="/" class="link_logo router-link-active">
                <Logo/>
            </a>
        </h1>
        <div class="my_menu">            
            <div id="menu_area">
                <div class="profile_area">
                    <!-- <a href="/KakaoLogin" class="link_login"><span class="text">로그인</span></a> -->
                    <router-link to="/KakaoLogin" class="link_login"><span class="text">로그인</span></router-link>
                </div>
                <div class="search_area">
                    <Search />
                </div>                
                <div class="ly_menu">
                    <ul class="nav menu_list">
                        <li v-for="nav in navigations" :key="nav.name" class="menu_item">
                            <span class="link_menu link_today">
                                <span class="text">
                                    
                                    <RouterLink class="blind" :to="nav.href" active-class="active">
                                        {{ nav.name }}
                                    </RouterLink>
                                    
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>                
            </div>
        </div>
    </header>
</template>

<script>
import Logo from './Logo.vue'
import Search from './Search.vue'
export default {  
    data() {
     return{
         navigations:[
             {
                 name: 'Home',
                 href: '/'
             },
             {
                 name: 'TOP 아티스트',
                 href: '/Recent'
             },
             {
                 name: '장르별 뮤직',
                 href: '/Famous'
             }            
         ]
     }
    },
    components:{
        Logo,
        Search
    },    
}
</script>

<style lang="scss" scoped>
.profile_area {
    width: 197px;
    border: 1px solid hsla(0,0%,100%,.1);
    border-width: 1px 0;
    margin-top:15px;
    .link_login {
        display: block;
        font-size: 15px;
        padding: 11px 0;
        line-height: 19px;
        color: #999;
        &::before {
            background-position: -594px -168px;
            width: 30px;
            height: 30px;
            margin: 0 10px 0 6px;
            border-radius: 50%;
            content: "";
        }
        .text {
            display: inline-block;
            vertical-align: middle;
        }
    }
}
.logo {
    font-family: "Oswald", sans-serif;
    font-size:25px;
    color:#fff;
    text-decoration: none;    
    text-align: center;    
    .link_logo {
        display: inline-block;
        vertical-align: top;
        padding: 30px 0 0 0;
        .blind {
            overflow: hidden;
            position: absolute;
            clip: rect(0 0 0 0);
            width: 1px;
            height: 1px;
            margin: -1px;
            &::after {
                width: 114px;
                height: 20px;
                display: block;
                margin: 27px 10px 26px 24px;
                content: "";
                background-image: url(https://blog.kakaocdn.net/dn/cOPkIY/btqTtq7mRuA/goqG0DY8OtBcLL8vYheUu1/img.jpg);
            
            }
        }
    }  
}


.my_menu {
    position: absolute;
    top: 73px;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 16px 0 24px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    .search_area {
        position: relative;
        width: 197px;
        margin-top: 20px;
        border-radius: 4px;        
    }
    .ly_menu {
        width: 197px;
        .menu_list {
            margin: 24px 0;
            .link_menu {
                display: block;
                height: 24px;
                padding: 10px 0;
                &::before {
                    display: inline-block;
                    margin-right: 9px;
                    opacity: 0.8;
                    vertical-align: top;
                    content: "";
                }
                .text {
                    display: inline-block;
                    margin-top: 1px;
                    vertical-align: top;                    
                    .blind{
                        font-size:18px;    
                        font-weight: 300;
                        opacity: 0.8;
                        &:hover {
                            opacity: 1;
                        }
                    }
                    .active {
                       color:#ff00b0;
                       opacity: 1;
                       font-weight:500;
                    }
                }
            }
        }
    }
}
</style>