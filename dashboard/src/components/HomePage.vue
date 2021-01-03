<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul id="quotation-list" class="quotations">
      <li v-for="(quotation, index) in quotations" :key="index">
        <button id="show-quotation" @click="showQuotation=true">quotation {{ quotation.title }}</button>
      </li>
    </ul>
    <teleport to="body">
      <div v-if="showQuotation" class="modal">
        <div>
          朋友们好啊，
          我是混元形意太极门掌门人马宝国，
          刚才有个朋友问我马老师发生什么事了，
          我说怎么回事？
          给我发了一个张截图，我一看！
          噢，原来是昨天有两个年轻人，30多岁，
          一个体重90多公斤，一个体重80多公斤。
          塔们说，
          有一个说我在健身房练功，颈椎练坏了，
          马老师你能不能教教我混元功法？
          帮助治疗一下我的颈椎病。
          我说可以，
          我说你在健身房练死劲不好用，他不服气，
          我说小朋友你两个手来折我一个手指头，
          他折不动，
          他说你这也没用，
          我说我这个有用。
          这是化劲，传统功夫是讲化劲的，四两拨千斤，
          200多斤的英国大力士都握不过我的一个手指，
          他说要和我试试，
          我说可以。
          我一说，
          他啪就站起来了，很快啊。
          然后上来就是一个左正踩，
          一个右鞭腿，
          一个左刺拳！
          我全部防出去了，
          防出去以后自然是传统功夫宜点到为止，右拳放在了鼻子上，没打他。我笑一下，准备收拳。
          因为这时间按传统功夫的点到为止他已经输了，如果这一拳发力，一拳就把他鼻子打骨折了，放在鼻子上没有打他。
          他也承认我先打到他面部，他不知道拳放在了鼻子上。他承认我先打到他面部。我收拳的时间不打了，他突然袭击左刺拳来打我脸，
          我大意了啊，没有闪。
          他的左拳给我右眼蹭了一下，但没关系啊。
          他也说啊，他截图也说了，
          两分多钟以后，当时流眼泪了，捂着眼我就停停。
          然后两分多钟以后就好了。
          我说小伙子你不讲武德你不懂，
          他忙说对不对不起，我不懂规矩啊，他说他是乱打的。
          他可不是乱打的啊，铮铮鞭腿左刺拳训练有素，后来他说他练过三四年泰拳，看来是有备而来。
          这两个年轻人，
          不讲武德，
          来，骗！
          来，偷袭！
          我69岁的老同志。
          这好吗？这不好。
          我劝这位年轻人，
          耗子尾汁。
          好好反思。
          以后不要再犯这样的小聪明。
          武林要以和为贵，要讲武德，
          不要搞窝里斗。
          谢谢朋友们！
          <button class="close-button" @click="showQuotation = false">
            Close
          </button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import axios from 'axios'
import { get, map } from 'lodash'

const hostname = 'http://localhost:8081'
const allQuotationsURL = '/quotations'

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      showQuotation: false,
      quotations: []
    }
  },
  mounted () {
    axios.get(`${hostname}${allQuotationsURL}`)
      .then((res) => {
        this.quotations = map(res.data, (n) => {
          return { title: get(n, 'id', 'unknown')}
        })
      })
      .catch((err) => {
        console.err(`failed to fetch all the quotations: ${err}`)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
 list-style-type: none;
}

li {
  margin: 15px 0;
}

.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 500px;
  height: 500px;
  padding: 5px;
  overflow-y: auto;
}

.close-button {
  display: block;
  margin: 10px
}
</style>
