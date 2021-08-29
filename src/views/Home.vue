<template>
  <div>
    <!-- hero -->
    <div class="home text-xs-center" id="home">
      <v-container fluid class="ma-0 pa-0">
        <v-parallax height="700" src="./hero.jpg">
          <v-layout align-center column justify-center class="mt-5" dark>
            <p
              class="mt-2"
              :style="{
                fontSize: '50px',
                fontWeight: '100',
                opacity: opacity,
                transition: '0.3s'
              }"
            >
              I'm
            </p>
            <p
              class="mb-3"
              :style="{
                fontSize: '50px',
                opacity: opacity,
                transition: '0.3s'
              }"
            >
              Kaori Chin
            </p>
            <v-btn
              href="#portfolio"
              depressed
              medium
              color="white--text blue-grey"
              class="mb-0"
              fab
              :style="{
                opacity: opacity,
                marginTop: mt,
                transition: '0.4s'
              }"
            >
              <v-icon dark>arrow_downward</v-icon>
            </v-btn>
          </v-layout>
        </v-parallax>
      </v-container>
    </div>

    <div id="portfolio" class="mt-5">
      <!-- Side project -->
      <v-layout row wrap align-center justify-center class="mb-5">
        <v-flex xs12 sm12 lg12>
          <p class="font-weight-thin mt-2 ml-4 mt-5" style="font-size:35px;">
            Side Projects
          </p>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 ma-3 v-for="sp in spCards" :key="sp.name">
          <v-card
            class="pa-2 shadow"
            data-aos="fade-up"
            data-aos-once="true"
            height="400px"
          >
            <v-img v-bind:src="sp.img" height="200px"></v-img>
            <v-card-title>
              <div>
                <h3 class="mb-0">
                  {{ sp.heading }}
                </h3>
                <div>{{ sp.content }}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-layout align-center column justify-center>
                <v-btn
                  dark
                  v-bind:href="sp.link"
                  medium
                  color="blue-grey white--text"
                  >View</v-btn
                >
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- Technical writing -->
      <v-layout column class="mb-3">
        <v-flex xs12 sm12 lg12>
          <p class="font-weight-thin mt-2 ml-4" style="font-size:35px;">
            Technical Writing
          </p>
        </v-flex>
        <v-flex
          ma-3
          v-for="techWriting in techWritingCards"
          :key="techWriting.heading"
        >
          <v-card
            class="pa-2 shadow"
            data-aos="fade-up-left"
            data-aos-once="true"
          >
            <v-card-title>
              <div>
                <h3 class="mb-2">
                  {{ techWriting.heading }}
                </h3>
                <div>{{ techWriting.content }}</div>
              </div>
            </v-card-title>
            <div class="d-flex flex-row justify-content-between">
              <div class="mr-5">
                <v-chip
                  v-for="tag in techWriting.tags"
                  :key="tag"
                  class="ma-2"
                  >{{ tag }}</v-chip
                >
              </div>
              <v-card-actions>
                <v-layout row justify-end>
                  <v-btn
                    v-bind:href="techWriting.link"
                    medium
                    class="blue-grey white--text"
                    >Read More</v-btn
                  >
                </v-layout>
              </v-card-actions>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- Photography -->
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12 lg12>
          <p
            class="font-weight-thin mt-2 ml-4 mt-5 mb-5"
            style="font-size:35px;"
          >
            Photography Works
          </p>
        </v-flex>
        <v-flex xs8 sm4 md3 ma-2 v-for="ph in phCards" :key="ph.heading">
          <v-hover v-slot="{ hover }">
            <v-card class="pa-2" :elevation="hover ? 8 : 2">
              <a :href="ph.link">
                <v-img v-bind:src="ph.img" height="300px"></v-img>
              </a>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
      <!-- Social -->
      <v-layout row justify-center ma-5>
        <ul class="d-flex ma-5">
          <li v-for="(item, key) in socialIcons" :key="key">
            <a class="blue-grey--text" :href="item.href">
              <i :class="item.class"></i>
            </a>
          </li>
        </ul>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spCards: [
        {
          heading: "Hello Currency",
          img: "https://github.com/erxxx4321/HelloCurrency/raw/master/demo.png",
          content: "Currency exchange app built with VueJs, Vuex, Chart.js ...",
          link: "https://github.com/erxxx4321/HelloCurrency"
        },
        {
          heading: "Daily",
          img: "https://github.com/erxxx4321/Daily/raw/master/demo.png",
          content:
            "A news website which data is from New York Times API and built with ReactJS ...",
          link: "https://github.com/erxxx4321/Daily"
        },
        {
          heading: "TodayTask 今日任務",
          img: "https://github.com/erxxx4321/today-task/raw/master/demo.png",
          content: "A daily task list application built with VueJs, Vuex ...",
          link: "https://github.com/erxxx4321/today-task"
        },
        {
          heading: "Simple Tic Tac Toe",
          img:
            "https://github.com/erxxx4321/simple-TicTacToe/raw/master/demo.png",
          content:
            "Tic Tac Toe game used JS factory function as design pattern ...",
          link: "https://github.com/erxxx4321/simple-TicTacToe"
        },
        {
          heading: "FirstTrade!",
          img:
            "https://ghcdspantherpost.org/wp-content/uploads/2021/04/stock-market-graph-trading-chart-for-business-and-finance-free-vector.jpg",
          content:
            "Stock market simulation game with Taiwan's history stock market data used dotnet MVC as the program ...",
          link: "https://github.com/erxxx4321/FirstTrade"
        }
      ],
      techWritingCards: [
        {
          heading: "耦合性與內聚力",
          content:
            "Coupling & Cohesion 是程式設計重要的概念。在 1974 年，一篇被刊登在 IBM Systems Journal的共筆文章 “Structured Design” ...",
          link:
            "https://medium.com/@erxxx4321/%E8%80%A6%E5%90%88%E6%80%A7%E8%88%87%E5%85%A7%E8%81%9A%E5%8A%9B-c93b4cc93dc6",
          tags: ["程式設計", "軟體開發", "電腦科學"]
        },
        {
          heading: "作用域是什麼？ 為什麼我們需要作用域？",
          content:
            "要知道什麼是作用域之前，我們需要知道為什麼我們會需要作用域，讓我們回到作用域還沒出現的時候 ...",
          link:
            "https://medium.com/@erxxx4321/%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%82%BA%E4%BB%80%E9%BA%BC%E6%88%91%E5%80%91%E9%9C%80%E8%A6%81%E4%BD%9C%E7%94%A8%E5%9F%9F-2361d1bd2d3b",
          tags: ["區域作用域", "全域作用域", "Programming"]
        },
        {
          heading: "Same Origin Policy 同源策略",
          content:
            "同源策略是一個重要的網路安全機制，用來限制一個網頁能否被另一個網頁讀取或寫入資料，可以避免惡意網站的入侵 ...",
          link:
            "https://medium.com/@erxxx4321/same-origin-policy-%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5-619a8fc8ddc5",
          tags: ["同源策略", "網路安全", "惡意網站"]
        },
        {
          heading: "MVC 是什麼？",
          content:
            "MVC是一種軟體設計的模式，它將程式切分成三個相互關聯的元件，個別負責不同的工作 ...",
          link:
            "https://medium.com/@erxxx4321/mvc-%E6%98%AF%E4%BB%80%E9%BA%BC-e5fc06554907",
          tags: ["Mvc Frameworks", "軟體設計", "程式設計"]
        },
        {
          heading: "從卡夫卡變形記談多型",
          content:
            "多型是物件導向程式設計的四大基本概念之一，原文是Polymorphism，”Poly”在古希臘文的意思是 ...",
          link:
            "https://medium.com/@erxxx4321/%E5%BE%9E%E5%8D%A1%E5%A4%AB%E5%8D%A1%E8%AE%8A%E5%BD%A2%E8%A8%98%E8%AB%87%E5%A4%9A%E5%9E%8B-1f247853640",
          tags: ["物件導向", "多型", "程式設計", "Polymorphism"]
        }
      ],
      phCards: [
        {
          heading: "Tokyo tower",
          img:
            "https://images.unsplash.com/photo-1628925217211-91a5cbd0f7ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
          link: "https://unsplash.com/photos/AwYY_Xj9EEE"
        },
        {
          heading: "Naoshima dating",
          img:
            "https://images.unsplash.com/photo-1612343281188-d6954aa692fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
          link: "https://unsplash.com/photos/teYjKGvqkz8"
        },
        {
          heading: "Kobe port",
          img:
            "https://images.unsplash.com/photo-1628925217148-4680588ab501?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
          link: "https://unsplash.com/photos/lv2sH0rBwAQ"
        },
        {
          heading: "Osaka Umeda Sky building",
          img:
            "https://images.unsplash.com/photo-1628925217319-61e69f7a8361?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
          link: "https://unsplash.com/photos/zI_ooiqGjBc"
        },
        {
          heading: "Okayama",
          img:
            "https://images.unsplash.com/photo-1612343000933-28befb3f648c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
          link: "https://unsplash.com/photos/wOrYW3LchvI"
        },
        {
          heading: "Naoshima sea",
          img:
            "https://images.unsplash.com/photo-1612343888441-4528db67502b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
          link: "https://unsplash.com/photos/zhM_xvo0-kg"
        }
      ],
      socialIcons: [
        {
          class: "fab fa-facebook-f icon",
          href: "https://www.facebook.com/erxxx4321"
        },
        {
          class: "fab fa-github icon",
          href: "https://github.com/erxxx4321"
        },
        {
          class: "fab fa-medium-m icon",
          href: "https://medium.com/@erxxx4321"
        }
      ],
      opacity: 0,
      mt: "100px"
    };
  },
  methods: {
    loading() {
      this.opacity = 1;
      this.mt = "0px";
    }
  },
  mounted() {
    window.addEventListener("load", this.loading);
  }
};
</script>
<style>
.shadow:hover {
  box-shadow: 3px 3px 13px 0px rgba(0, 0, 0, 0.16);
  transform: translateY(-5px);
}
.social:hover {
  box-shadow: 5px 5px 4px 0px rgba(0, 0, 0, 0.16);
}
.mail {
  color: #455a64;
}
.mail:hover {
  color: #b0bec5;
}
ul li a {
  width: 80px;
  height: 80px;
  background-color: #fff;
  text-align: center;
  line-height: 80px;
  font-size: 35px;
  margin: 0 10px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
}
ul li {
  list-style: none;
}
ul li a .icon {
  position: relative;
  transition: 0.5s;
  z-index: 3;
}

ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #607d8b;
  transition: 0.5s;
  z-index: 2;
}

ul li a:hover:before {
  top: 0;
  background: #607d8b;
}
</style>
