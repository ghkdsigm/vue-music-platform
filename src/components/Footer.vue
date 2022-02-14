<template>
    <div class="footer">
        <div class="footer_wrap" style="opacity: 1;">
        
            This page is optimized for Google Chrome &amp; Microsoft Edge web browser.
            <span class="copy">Copyright(C) 2022. All Rights Reserved.</span>
            <p>
                본 사이트는 상업적 목적이 아닌 개인 이용 용도로 제작되었습니다.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    position: absolute;
    width: 1675px;
    right: 0;
    left: 245px;
    bottom: 0;
    margin: 0 auto;
    background-color: #111;
    .footer_wrap {
        width: 100%;
        margin: 0 auto;
        height: auto;
        box-sizing: border-box;
        text-align: left;
        padding: 25px 75px;
        color: #fff;    
        font-size: 15px;
        .copy {
            display: block;
            font-weight: 400;
            padding: 5px 0 15px;
            color: #fff;    
            border-bottom: 1px dotted #2c2c2c;    
            font-weight: 300;
        }
        p {
            font-size: 12px;
            font-weight: 300;
            color: #898989;
            padding-top:15px;    
            font-weight: 300;
        }
    }
    
}
</style>