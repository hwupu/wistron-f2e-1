# wistron-f2e-1
實作題目： [網址](https://www.notion.so/F2E-518e57fb202d46588cb39b2d56d624ba)

進入畫面時，從 API 取得取得訂單的資訊後，因應畫面的設計， Render UI
```
{
    orders: [
        {
            name: 'Livi優活 抽取式衛生紙(100抽x10包x10串/箱)',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 3,
              type: '已取消'
            },
            date: '107/6/12'
        },
        {
            name: 'BALMUDA The Toaster 百慕達烤麵包機-黑色',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 2,
              type: '已成立'
            },
            date: '108/7/21'
        },
        {
            name: '贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 1,
              type: '處理中'
            },
            date: '108/6/2'
         },
         {
            name: 'Apple AirPds 2',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 4,
              type: '已送達'
            },
            date: '108/3/02'
        }
    ]
}
```

----

###API Response Data

![Mock Image](https://github.com/hwupu/wistron-f2e-1/blob/89920f4e5fea2fad142d2a07fed356a92905f281/public/mock-image.png?raw=true)

### 功能

- 因應畫面，依據`status`分類為`進行中` 與`已完成`
    - 進行中：status.code = 1 || 2
    - 已完成 : status.code = 3 || 4
- 分類排序： Sort Date By DESC

### Stack

依據經驗搭配下面的技術(擇一)實作功能，盡可能展現程式開發能力跟程式品質，完成後提供 github repositories， 並可在本機進行測試。

- Vue & Vuex Data Flow

- React & Redux or 任何 React 的 Data Flow library

- Please provide public git repository

  

---

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
