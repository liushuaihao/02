<!--
 * @Author: tb659
 * @Date: 2021-01-10 17:33:34
 * @LastEditors: tb659
 * @LastEditTime: 2021-01-10 18:07:45
 * @Description: 教练员列表
 * @FilePath: \02\src\views\modules\coach\index\index.vue
-->
<template>
  <el-card shadow="never" class="aui-card--fill">
    <div class="mod-sys__dept">
      <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
        <el-form-item>
          <el-input v-model="dataForm.name" placeholder="教练员姓名/教练员手机号" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="addOrUpdateHandle()">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table v-loading="dataListLoading" :data="dataList" row-key="id" border style="width: 100%;">
        <el-table-column prop="id" label="ID" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center"></el-table-column>
        <el-table-column prop="project" label="项目" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.project === '1'">速滑400米</span>
            <span v-if="scope.row.project === '2'">速滑800米</span>
            <span v-if="scope.row.project === '3'">速滑1000米</span>
          </template>
        </el-table-column>
        <el-table-column prop="duty" label="职务" align="center"></el-table-column>
        <el-table-column prop="phone" label="手机号" align="center" width="120"></el-table-column>
        <el-table-column label="操作" fixed="right" align="center" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.id)">修改</el-button>
            <el-button type="text" size="small" @click="deleteHandle(scope.row.id)">删除</el-button>
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
import AddOrUpdate from '@/views/modules/athlete/personnel/index-add-or-update'
export default {
  mixins: [mixinViewModule],
  data() {
    return {
      mixinViewModuleOptions: {
        // getDataListURL: '/sys/dept/list',
        // deleteURL: '/sys/dept'
      },
      dataList: [
        { id: 12, name: '张三', sex: 1, age: 45, project: '1', duty: '主教练', phone: '13888888888' },
        { id: 13, name: '李四', sex: 1, age: 45, project: '2', duty: '主教练', phone: '13888888888' }
      ]
    }
  },
  components: {
    AddOrUpdate
  }
}
</script>
