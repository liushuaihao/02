<!--
 * @Author: tb659
 * @Date: 2021-01-10 16:08:22
 * @LastEditors: tb659
 * @LastEditTime: 2021-01-10 18:05:36
 * @Description: 运动员列表
 * @FilePath: \02\src\views\modules\athlete\personnel\index.vue
-->
<template>
  <el-card shadow="never" class="aui-card--fill">
    <div class="mod-sys__dept">
      <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
        <el-form-item>
          <el-input v-model="dataForm.name" placeholder="运动员姓名/运动员手机号" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="addOrUpdateHandle()">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table v-loading="dataListLoading" :data="dataList" row-key="id" border style="width: 100%;">
        <el-table-column prop="id" label="ID" align="center" width="80"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" align="center" width="80"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center" width="80"></el-table-column>
        <el-table-column prop="project" label="项目" align="center" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.project === '1'">速滑400米</span>
            <span v-if="scope.row.project === '2'">速滑800米</span>
            <span v-if="scope.row.project === '3'">速滑1000米</span>
          </template>
        </el-table-column>
        <el-table-column prop="height" label="身高" align="center" width="80"></el-table-column>
        <el-table-column prop="nativePlace" label="籍贯" align="center" width="80"></el-table-column>
        <el-table-column prop="phone" label="手机号" align="center" width="120"></el-table-column>
        <el-table-column prop="equipmentId" label="绑定设备号" align="center" width="140"></el-table-column>
        <el-table-column label="操作" fixed="right" align="center" width="290">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.id)">修改</el-button>
            <el-button type="text" size="small" @click="deleteHandle(scope.row.id)">删除</el-button>
            <el-button :style="{ color: scope.row.equipmentId ? '#ccc' : '' }" type="text" size="small">绑定</el-button>
            <el-button :style="{ color: scope.row.equipmentId ? '' : '#ccc' }" type="text" size="small">解绑</el-button>
            <el-button type="text" size="small">启动设备</el-button>
            <el-button type="text" size="small" @click="bodyComposition(scope.row.id)">体成分信息</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 弹窗, 新增 / 修改 -->
      <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
    </div>
  </el-card>
</template>

<script>
import mixinViewModule from '@/mixins/view-module'
import AddOrUpdate from './index-add-or-update'
export default {
  mixins: [mixinViewModule],
  data() {
    return {
      mixinViewModuleOptions: {
        // getDataListURL: '/sys/dept/list',
        // deleteURL: '/sys/dept'
      },
      dataList: [
        { id: 12, name: '张三', sex: 1, age: 18, project: '1', height: 180, nativePlace: '哈尔滨', phone: '13888888888', equipmentId: '224-2424-2345' },
        { id: 13, name: '李四', sex: 1, age: 18, project: '2', height: 165, nativePlace: '哈尔滨', phone: '13888888888', equipmentId: '224-2244-2362' }
      ]
    }
  },
  components: {
    AddOrUpdate
  },
  methods: {
    bodyComposition() {
      this.$router.push('/athlete-personnel-bodyComposition')
    }
  }
}
</script>
