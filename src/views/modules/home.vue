<template>
  <el-card shadow="never" class="aui-card--fill">
    <div class="pageList">
      <div @click="goPage1">
        <el-card>
          数据查询与可视化
        </el-card>
      </div>
      <div @click="goPage2">
        <el-card>
          运动员表现分析
        </el-card>
      </div>
      <div @click="goPage3">
        <el-card>
          成绩分析
        </el-card>
      </div>
      <div @click="goPage5">
        <el-card>
          竞技状态分析 1
        </el-card>
      </div>
      <div @click="goPage4">
        <el-card @click="goPage4">
          竞技状态分析 2
        </el-card>
      </div>
    </div>
    <div class="mod-home" v-if="false">
      <el-row :gutter="20">
        <el-col :span="12" :xs="24">
          <table>
            <tr>
              <th>{{ $t('home.sysInfo.name') }}</th>
              <td>{{ $t('home.sysInfo.nameVal') }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.version') }}</th>
              <td>{{ $t('home.sysInfo.versionVal') }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.osName') }}</th>
              <td>{{ sysInfo.osName }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.osVersion') }}</th>
              <td>{{ sysInfo.osVersion }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.osArch') }}</th>
              <td>{{ sysInfo.osArch }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.processors') }}</th>
              <td>{{ sysInfo.processors }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.totalPhysical') }}</th>
              <td>{{ sysInfo.totalPhysical }}MB</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.freePhysical') }}</th>
              <td>{{ sysInfo.freePhysical }}MB</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.memoryRate') }}</th>
              <td>{{ sysInfo.memoryRate }}%</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.userLanguage') }}</th>
              <td>{{ sysInfo.userLanguage }}</td>
            </tr>
          </table>
        </el-col>
        <el-col :span="12" :xs="24">
          <table>
            <tr>
              <th>{{ $t('home.sysInfo.jvmName') }}</th>
              <td>{{ sysInfo.jvmName }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.javaVersion') }}</th>
              <td>{{ sysInfo.javaVersion }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.javaHome') }}</th>
              <td>{{ sysInfo.javaHome }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.userDir') }}</th>
              <td>{{ sysInfo.userDir }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.javaTotalMemory') }}</th>
              <td>{{ sysInfo.javaTotalMemory }}MB</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.javaFreeMemory') }}</th>
              <td>{{ sysInfo.javaFreeMemory }}MB</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.javaMaxMemory') }}</th>
              <td>{{ sysInfo.javaMaxMemory }}MB</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.userName') }}</th>
              <td>{{ sysInfo.userName }}</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.systemCpuLoad') }}</th>
              <td>{{ sysInfo.systemCpuLoad }}%</td>
            </tr>
            <tr>
              <th>{{ $t('home.sysInfo.userTimezone') }}</th>
              <td>{{ sysInfo.userTimezone }}</td>
            </tr>
          </table>
        </el-col>
      </el-row>
    </div>
  </el-card>
  <!-- <div v-else class="home-bg"></div> -->
</template>

<script>
import { addDynamicRoute } from '@/router'
export default {
  data() {
    return {
      sysInfo: {
        osName: '',
        osVersion: '',
        osArch: '',
        processors: 0,
        totalPhysical: 0,
        freePhysical: 0,
        memoryRate: 0,
        userLanguage: '',
        jvmName: '',
        javaVersion: '',
        javaHome: '',
        userDir: '',
        javaTotalMemory: 0,
        javaFreeMemory: 0,
        javaMaxMemory: 0,
        userName: '',
        systemCpuLoad: 0,
        userTimezone: ''
      }
    }
  },
  created() {
    // this.getSysInfo()
  },
  methods: {
    getSysInfo() {
      this.$http
        .get('/sys/info')
        .then(({ data: res }) => {
          if (res.code !== 0) {
            return this.$message.error(res.msg)
          }
          this.sysInfo = res.data
        })
        .catch(() => {})
    },
    goPage1() {
      const routeParams = {
        routeName: `${this.$route.name}__page1`,
        title: '数据分析1',
        path: 'sys/personalData'
      }
      // 动态路由
      addDynamicRoute(routeParams, this.$router)
    },
    goPage2() {
      const routeParams = {
        routeName: `${this.$route.name}__page2`,
        title: '数据分析2',
        path: 'sys/appletconfig'
      }
      // 动态路由
      addDynamicRoute(routeParams, this.$router)
    },
    goPage3() {
      const routeParams = {
        routeName: `${this.$route.name}__page3`,
        title: '数据分析3',
        path: 'album/albumManage'
      }
      // 动态路由
      addDynamicRoute(routeParams, this.$router)
    },
    goPage4() {
      const routeParams = {
        routeName: `${this.$route.name}__page4`,
        title: '数据分析4',
        path: 'sys/securityCenter'
      }
      // 动态路由
      addDynamicRoute(routeParams, this.$router)
    },
    goPage5() {
      const routeParams = {
        routeName: `${this.$route.name}__page5`,
        title: '数据分析5',
        path: 'sys/carouselMap'
      }
      // 动态路由
      addDynamicRoute(routeParams, this.$router)
    }
  }
}
</script>
<style lang="scss">
.pageList {
  display: flex;
  justify-content: space-between;
  padding: 50px;
}
</style>
