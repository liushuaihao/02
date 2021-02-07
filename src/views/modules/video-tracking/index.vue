<template>
  <el-card shadow="never" class="aui-card--fill body-lsh">
    <el-container>
      <el-aside width="300px" v-if="false">
        <!-- <el-container>
          <el-main style="padding:0"> -->
        <el-scrollbar class="el-menuscrollbar">
          <el-card style="margin-bottom:20px">
            <div slot="header">
              <span class="title-item">赛事查询 </span>
            </div>
            <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmitHandle()" label-width="80px">
              <el-form-item prop="projects" label="比赛类型">
                <el-select v-model="dataForm.projects" placeholder="请选择项目" style="width:100%">
                  <el-option v-for="project in projectList" :key="project.id" :label="project.projectName" :value="project.id"> </el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="playerIdList" label="运动员">
                <el-select v-model="dataForm.playerIdList" multiple placeholder="请选择运动员" style="width:100%">
                  <el-option v-for="player in PlayerList" :key="player.id" :label="player.realName" :value="player.id"> </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开始时间">
                <el-date-picker v-model="dataForm.startDate" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width:100%"> </el-date-picker
              ></el-form-item>
              <el-form-item label="结束时间">
                <el-date-picker v-model="dataForm.endDate" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width:100%"> </el-date-picker
              ></el-form-item>

              <el-form-item>
                <div style="text-align:right">
                  <el-button type="primary" @click="getMatchList">查询</el-button>
                </div>
              </el-form-item>
            </el-form>
          </el-card>
          <el-card style="margin-bottom:20px" v-loading="loading">
            <div slot="header">
              <span class="title-item">比赛列表 </span>
            </div>
            <div v-if="matchList.length > 0">
              <div v-for="(item, index) in matchList" class="list-item" :class="matchId == item.id ? 'active' : ''" @click="getVideoByMatc(item.id)" :key="index">
                <el-avatar shape="square" :size="50" fit="fill" :src="item.matchPicUrl"></el-avatar>
                <div class="r">
                  <div style=" height: 24px; color: rgba(34, 34, 34, 100); font-size: 17px;">
                    {{ item.matchTime }}
                  </div>
                  <div style=" color: rgba(153, 153, 153, 100); font-size: 13px;">
                    {{ item.matchName }}
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="text">
              暂无数据
            </div>
          </el-card>
        </el-scrollbar>
        <!-- </el-main>
        </el-container> -->
      </el-aside>
      <el-scrollbar class="el-menuscrollbar" v-loading="matchLoading" v-if="origUrl">
        <el-main heigth="100%">
          <el-row :gutter="10">
            <el-col :span="18">
              <el-card style="margin-bottom:20px">
                <videoPlayer @currentTime="currentTime" v-if="origUrl" :origUrl="origUrl" :procUrl="procUrl" :trackUrl="trackUrl" />
              </el-card>

              <el-card style="margin-bottom:20px">
                <el-form>
                  <el-form-item prop="value" label="运动员">
                    <el-select v-model="player2" placeholder="请选择运动员">
                      <el-option v-for="item in playerAll" :key="item" :label="item" :value="item"> </el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <el-card v-for="(o, index) in trjinfo" v-show="player2 == '全部' ? true : player2 == o.player" :key="index" class="status-item">
                  <span>{{ o.player }}</span>
                  <span>当前速度：{{ o.result | speed(currentTimeVal) }}m/s</span>
                  <span>累计滑行距离：{{ o.result | distance(currentTimeVal) }}m</span>
                </el-card>
              </el-card>
              <div style="width:1000px"></div>
            </el-col>

            <el-col :span="6">
              <el-card style="margin-bottom:20px;min-height:322px">
                <div>
                  <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmitHandle()">
                    <el-form-item prop="value" label="运动员">
                      <el-select v-model="player" placeholder="请选择运动员">
                        <el-option v-for="(item, index) in trjimg" :key="item.player" :label="item.player" :value="index"> </el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item class="title-label" label="每圈耗时图" v-if="trjimg.length > 0 && (playerIndex === 0 || playerIndex)">
                      <el-image :src="trjimg[playerIndex].stageUrl" :preview-src-list="srcList"> </el-image>
                    </el-form-item>

                    <el-form-item class="title-label" label="速度曲线图" v-if="trjimg.length > 0 && (playerIndex === 0 || playerIndex)">
                      <el-image :src="trjimg[playerIndex].speedUrl" :preview-src-list="srcList"> </el-image>
                    </el-form-item>
                    <!-- 滑行轨迹比例：640*480 赛段滑行耗时分析图比例：700*400 速度曲线图比例：700*400 -->
                    <el-form-item class="title-label" label="滑行轨迹" v-if="trjimg.length > 0 && (playerIndex === 0 || playerIndex)">
                      <el-image :src="trjimg[playerIndex].pathUrl" :preview-src-list="srcList"> </el-image>
                    </el-form-item>
                  </el-form>
                  <div style="width:1000px"></div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-scrollbar>

      <el-main v-else class="el-main-item">
        暂无数据
      </el-main>
    </el-container>
  </el-card>
</template>

<script>
import mixinViewModule from '@/mixins/view-module'
import videoPlayer from '@/components/video-player/player'
export default {
  components: {
    videoPlayer
  },
  mixins: [mixinViewModule],
  data() {
    return {
      playerId: '',
      value1: '',
      value2: '',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      projectList: [],
      PlayerList: [],
      matchList: [],
      dataForm: {
        projects: '',
        playerIdList: [],
        endDate: '',
        startDate: ''
      },
      trjinfo: [],
      trjimg: [],
      player: '',
      player2: '全部',
      playerIndex: 0,
      matchId: '',
      loading: true,
      origUrl: '',
      procUrl: '',
      trackUrl: '',
      matchLoading: false,
      srcList: [],
      currentTimeVal: 0,

      playerAll: []
    }
  },
  filters: {
    speed: function(value, currentTimeVal) {
      if (!value.length) return `--`
      let val = ''
      for (var i = 0; i < value.length; i++) {
        var data = value[i]
        if (currentTimeVal < data.time) {
          val = value[i - 1]
          return `${val.speed.toFixed(2) ? val.speed.toFixed(2) : '--'}`
        }
      }
    },
    distance: function(value, currentTimeVal) {
      if (!value.length) return `--`

      let val = ''
      for (var i = 0; i < value.length; i++) {
        var data = value[i]
        if (currentTimeVal < data.time) {
          val = value[i - 1]
          return `${val.distance.toFixed(2) ? val.distance.toFixed(2) : '--'}`
        }
      }
    }
  },
  watch: {
    'dataForm.projects'(val) {
      this.dataForm.playerIdList = []
      this.getPlayerListByProject(val)
    },
    player(val) {
      this.srcList = [this.trjimg[val].pathUrl, this.trjimg[val].speedUrl, this.trjimg[val].stageUrl]
      this.playerIndex = val
    }
  },
  computed: {
    dataRule() {
      return {}
    }
  },
  created() {
    this.getProjectList()
    this.getVideoByMatc(40)
  },
  methods: {
    currentTime(e) {
      this.currentTimeVal = e
    },
    // 获取项目列表
    getProjectList() {
      this.loading = true
      this.$http.get('/project/getProjectList').then(({ data: res }) => {
        this.loading = false
        if (res.code !== 0) {
          return this.$message.error(res.msg)
        }
        this.projectList = res.data
      })
    },
    // 运动员
    getPlayerListByProject(projectId) {
      console.log(projectId)
      this.$http
        .get('/user/getPlayerListByProject', {
          params: {
            projectId
          }
        })
        .then(({ data: res }) => {
          if (res.code !== 0) {
            return this.$message.error(res.msg)
          }
          this.PlayerList = res.data
        })
    },
    // 场次列表
    getMatchList() {
      this.$http.post('/match/getMatchList', this.dataForm).then(({ data: res }) => {
        if (res.code !== 0) {
          return this.$message.error(res.msg)
        }
        this.matchList = res.data
      })
    },
    // 视频分析
    getVideoByMatc(matchId) {
      if (this.matchId != matchId) {
        this.matchLoading = true
        this.matchId = matchId
        this.origUrl = ''
        this.$http.get('/video/getVideoByMatch', { params: { matchId } }).then(({ data: res }) => {
          if (res.code !== 0) {
            this.matchLoading = false
            return this.$message.error(res.msg)
          }
          console.log(res)
          // 原视频
          this.origUrl = res.data.origUrl
          // 分析视频
          this.procUrl = res.data.procUrl
          this.trackUrl = res.data.trackUrl
          // 运动员 当前状态 trjinfo
          this.trjinfo = res.data.trjinfo
          this.trjimg = res.data.trjimg
          this.player = 0
          this.playerAll = res.data.trjinfo.map(item => item.player)
          this.playerAll.unshift('全部')
          this.matchLoading = false
        })
      }
    }
  }
}
</script>
<style lang="scss" scope>
.el-aside {
  .el-scrollbar {
    height: calc(calc(100vh - 50px - 38px - 80px));
  }
}
.text {
  color: #333;
  text-align: center;
  display: flex !important;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
}
.el-main-item {
  height: calc(calc(100vh - 50px - 38px - 80px));
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  display: flex !important;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
}

.el-main {
  .el-scrollbar {
    height: calc(calc(100vh - 50px - 38px - 80px));
  }
}
.el-menuscrollbar {
  height: calc(calc(100vh - 50px - 38px - 80px));
}
.el-menuscrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}
.el-scrollbar__thumb {
  background-color: #3e97f6;
}

body > .el-container {
  margin-bottom: 40px;
}

.bg-purple-light {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.title-item {
  color: rgba(16, 16, 16, 100);
  font-size: 18px;
  font-weight: bold;
}

.status-item {
  margin-bottom: 5px !important;
  margin-top: 0;
  .el-card__body {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.el-card__header {
  padding: 0 20px !important;
  height: 40px !important;
  text-align: center;
  div {
    display: flex;
    align-items: center;
    height: 40px !important;
    justify-content: center;
  }
}
.list-item {
  display: flex;
  margin-bottom: 20px;
  .r {
    margin-left: 10px;
  }
  &:hover {
    background: #eee;
  }
}
.active {
  background: #eee;
}
.title-label {
  font-weight: bold;
  .el-form-item__label {
    font-size: 18px !important;
    color: #000;
  }
}
</style>
