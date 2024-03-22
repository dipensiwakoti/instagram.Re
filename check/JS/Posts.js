var allPost = [
    {profile: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Rashmika_Mandanna_spotted_during_Goodbye_promotions_at_JW_Marriott.jpg",
    name: "rashmika_mandanna",
    post :"https://scontent.fbwa8-1.fna.fbcdn.net/v/t39.30808-6/316242082_706075964222860_3456900550002665072_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=21V_Hb1ryzIAX_f4cVF&_nc_ht=scontent.fbwa8-1.fna&oh=00_AfB0V8ro_BoKJ7qoiH8ZkIa4xqhrbynMKvyqtL-DGoxlWg&oe=65EAA72E",
    follower:"42M",
    title: "You guys know how much I LOVEEEEE wearing sarees 🤍 Get these amazing designs at @janasyaclothing ! ✨ ",
    day: "6d"
    },
    {profile: "https://scontent.fbwa8-1.fna.fbcdn.net/v/t39.30808-6/409291707_666938498978218_862097728384049653_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AKHYux0z9LUAX_Lml2V&_nc_ht=scontent.fbwa8-1.fna&oh=00_AfDUUAAfoQ96F-LNx7J3RDbJhdVfSgvvYHc4goValOQ0sg&oe=65EA64DC",
    name: "ujwal_panduu",
    post :"https://scontent.fbwa8-1.fna.fbcdn.net/v/t39.30808-6/401847559_653673850304683_2809362063114732077_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=0kCaLQNzm80AX_pFROL&_nc_ht=scontent.fbwa8-1.fna&oh=00_AfAYJMCgZPTxUmdZHAPZdA-IYOH71XNSlUaqQsgA7Dfqlw&oe=65EB5A52",
    follower:"32k",
    title: "The only true richness is the richness of the soul.",
    day: "33w"
    },

    {profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Shah_Rukh_Khan_2001.jpg/278px-Shah_Rukh_Khan_2001.jpg",
    name: "iamsrk",
    post: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",

    follower:"46.3M",
    title: "Ok thank u everyone. Some said my face not visible in #Jawan poster….so putting my face here….don’t tell the director & producer. Love u all & hope to meet u in theatres on #7thSeptember2023 love u and bye",
    day: "22 Sept"
    },

    {profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
    name: "cristiano",
    post: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Cristiano_Ajax.jpg/255px-Cristiano_Ajax.jpg",
    follower:"622M",
    title: "What a night! We’re through to the next stage, thank you all for the support! 👊",
    day: "13 Feb"

    },

    {profile: "https://i.pinimg.com/736x/0a/87/0f/0a870f03b0b411a2f10fe6cf87a1f40f.jpg",
    name: "leomessi",
    post: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    follower:"500M",
    title: "Unite a nosotros para salvar el planeta! Join us to save the planet!",
    day: "13s"

    },

    {profile: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
    name: "virat.kohli",
    post: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Virat_Kohli_26_Feb_2012.jpg/243px-Virat_Kohli_26_Feb_2012.jpg",
    follower:"266M",
    title: "मोटा हो गया हूँ ना? आच्छा ठीक है, मानता है  में भी! लेकिन ठीक है, अनुष्का मिल गई ना सब कुछ ठीक है अब।  -Forever grateful 🙏",
    day: "12m"

    },

    {profile: "https://static.tnn.in/photo/99909658/99909658.jpg",
    name: "shubmangill",
    post: "https://scontent.fbwa8-1.fna.fbcdn.net/v/t39.30808-6/352326819_814005903414307_8517238577941958410_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=wYb6nw-uL3MAX_1wrGw&_nc_ht=scontent.fbwa8-1.fna&oh=00_AfDsg-1Iq2-QU5y-ahDD6UmHZPFmb7lsSxxRbZigC15wzQ&oe=65EA88BD",
    follower:"12.6M",
    title: "“If not you, then who?  If not now, then when?”  🇮🇳- Rahul Dravid.",
    day: "3h"

    },

    {profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/220px-Sachin-Tendulkar_%28cropped%29.jpg",
    name: "sachintendulkar",
    post: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/374300/374335.jpg",
    follower:"47.5M",
    title: "Dreams don’t discriminate, why should we! 👏",
    day: "19 Nov"

    },
  ]

var post = "";
var card = document.querySelector("#card2");

allPost.forEach(function(POST,Index){

  post+= `<div class="wholePost">
  <div class="upperLine">
     <div class="icon1"><img src="${POST.profile}" alt=""></div>  
     <h3 class="personname">${POST.name}</h3>
     <svg class="fa-badge-check" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M29.62,3l3.433,5.308l6.314,0.316l0.319,6.313l5.311,3.43l-2.881,5.628l2.884,5.625l-5.308,3.433l-0.316,6.314l-6.313,0.319l-3.43,5.311l-5.628,-2.881l-5.625,2.884l-3.433,-5.308l-6.314,-0.316l-0.319,-6.313l-5.311,-3.43l2.881,-5.628l-2.884,-5.625l5.308,-3.433l0.316,-6.314l6.313,-0.319l3.43,-5.311l5.628,2.881z" fill="#4539cf"></path><path d="M21.396,31.255l-6.497,-6.495l2.122,-2.121l4.407,4.407l9.568,-9.274l2.088,2.154z" fill="#ffffff"></path></g></g>
      </svg>

      
     <h4 class="timeago">•${POST.day}•</h4>
     <button class="followBtn">Follow</button>
  </div>
  <div class="PhotoPost"> <svg class="loveICON" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

  <defs>
  </defs>
  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
    <path d="M 7.486 13.502 c 9.982 -9.982 26.165 -9.982 36.147 0 L 45 14.869 l 0 0 c 6.895 22.882 6.259 47.092 0 72.294 L 26.927 69.089 c 0 0 0 0 0 0 l -19.44 -19.44 C -2.495 39.667 -2.495 23.484 7.486 13.502 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,73,62); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 82.514 13.502 c -9.982 -9.982 -26.165 -9.982 -36.147 0 L 45 14.869 l 0 0 v 72.294 l 18.073 -18.073 c 0 0 0 0 0 0 l 19.44 -19.44 C 92.495 39.667 92.495 23.484 82.514 13.502 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(215,90,74); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
  </g>
  </svg> <img src="${POST.post}" alt="Post Picture"> </div>
  <div class="lowerLine">  
    <div class="love"><svg class="iconLove" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

      <defs>
      </defs>
      <g  style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(85.36653696498055 85.36653696498053) scale(0.94 0.94)" >
        <path  d="M 45 84.334 L 6.802 46.136 C 2.416 41.75 0 35.918 0 29.716 c 0 -6.203 2.416 -12.034 6.802 -16.42 c 4.386 -4.386 10.217 -6.802 16.42 -6.802 c 6.203 0 12.034 2.416 16.42 6.802 L 45 18.654 l 5.358 -5.358 c 4.386 -4.386 10.218 -6.802 16.42 -6.802 c 6.203 0 12.034 2.416 16.42 6.802 l 0 0 l 0 0 C 87.585 17.682 90 23.513 90 29.716 c 0 6.203 -2.415 12.034 -6.802 16.42 L 45 84.334 z M 23.222 10.494 c -5.134 0 -9.961 2 -13.592 5.63 S 4 24.582 4 29.716 s 2 9.961 5.63 13.592 L 45 78.678 l 35.37 -35.37 C 84.001 39.677 86 34.85 86 29.716 s -1.999 -9.961 -5.63 -13.592 l 0 0 c -3.631 -3.63 -8.457 -5.63 -13.592 -5.63 c -5.134 0 -9.961 2 -13.592 5.63 L 45 24.311 l -8.187 -8.187 C 33.183 12.494 28.356 10.494 23.222 10.494 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      </g>
      </svg></div>
    <div class="comment"><svg class="iconComment" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

      <defs>
      </defs>
      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(48.510505836575874 48.510505836575845) scale(1.53 1.53)" >
        <path d="M 86.999 90 c -0.367 0 -0.737 -0.067 -1.092 -0.206 l -17.016 -6.655 C 61.734 87.633 53.509 90 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 c 0 8.509 -2.367 16.734 -6.861 23.892 l 6.655 17.016 c 0.434 1.11 0.17 2.371 -0.673 3.214 C 88.548 89.694 87.78 90 86.999 90 z M 45 6 C 23.495 6 6 23.495 6 45 s 17.495 39 39 39 c 7.839 0 15.398 -2.317 21.862 -6.7 c 0.818 -0.555 1.855 -0.671 2.776 -0.312 l 12.07 4.721 l -4.721 -12.07 c -0.36 -0.92 -0.243 -1.959 0.312 -2.776 C 81.683 60.398 84 52.839 84 45 C 84 23.495 66.505 6 45 6 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      </g>
      </svg></div>
    <div class="share"> <svg class="iconShare" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

      <defs>
      </defs>
      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(79.88793774319066 89.84902723735405) scale(0.84 0.84)" >
        <path d="M 31.121 43.543 c -0.852 0 -1.689 -0.362 -2.275 -1.042 L 0.727 9.836 C -0.051 8.934 -0.22 7.656 0.295 6.581 c 0.516 -1.074 1.607 -1.748 2.81 -1.7 l 84 2.952 c 1.356 0.047 2.513 1 2.817 2.324 c 0.306 1.323 -0.315 2.686 -1.515 3.323 l -55.88 29.712 C 32.083 43.429 31.6 43.543 31.121 43.543 z M 9.747 11.118 l 22.082 25.65 L 75.71 13.436 L 9.747 11.118 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
        <path d="M 42.475 85.121 c -0.145 0 -0.291 -0.011 -0.437 -0.032 c -1.179 -0.173 -2.144 -1.027 -2.458 -2.178 L 28.226 41.333 c -0.37 -1.353 0.248 -2.781 1.486 -3.439 l 55.88 -29.712 c 1.196 -0.637 2.676 -0.39 3.602 0.603 c 0.927 0.993 1.07 2.484 0.352 3.636 L 45.019 83.71 C 44.466 84.596 43.5 85.121 42.475 85.121 z M 34.646 42.066 l 8.917 32.651 l 34.965 -55.983 L 34.646 42.066 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      </g>
      </svg></div>
      <div class="save"><svg class="iconSave" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
        <g fill="#fbf8f8" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M16.5,5c-3.57194,0 -6.5,2.92806 -6.5,6.5v30c0.00017,0.56293 0.31547,1.07839 0.81656,1.33491c0.50109,0.25652 1.10362,0.21091 1.56039,-0.11811l11.62305,-8.36914l11.62305,8.36914c0.45677,0.32902 1.0593,0.37463 1.56039,0.11811c0.50109,-0.25652 0.8164,-0.77198 0.81656,-1.33491v-30c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM16.5,8h15c1.95006,0 3.5,1.54994 3.5,3.5v27.07227l-10.12305,-7.28906c-0.52374,-0.37736 -1.23016,-0.37736 -1.75391,0l-10.12305,7.28906v-27.07227c0,-1.95006 1.54994,-3.5 3.5,-3.5z"></path></g></g>
        </svg></div>
  </div>
  <div id="buttonLine" > <h3 class="personname">${POST.name} </h3> 
    <div class="verifyIcon">     <svg class="fa-badge-check1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M29.62,3l3.433,5.308l6.314,0.316l0.319,6.313l5.311,3.43l-2.881,5.628l2.884,5.625l-5.308,3.433l-0.316,6.314l-6.313,0.319l-3.43,5.311l-5.628,-2.881l-5.625,2.884l-3.433,-5.308l-6.314,-0.316l-0.319,-6.313l-5.311,-3.43l2.881,-5.628l-2.884,-5.625l5.308,-3.433l0.316,-6.314l6.313,-0.319l3.43,-5.311l5.628,2.881z" fill="#4539cf"></path><path d="M21.396,31.255l-6.497,-6.495l2.122,-2.121l4.407,4.407l9.568,-9.274l2.088,2.154z" fill="#ffffff"></path></g></g>
      </svg>
</div>
    <div class="title">  ${POST.title} </div>
   </div>

</div>`
card.innerHTML = post;


} ) 
  


  