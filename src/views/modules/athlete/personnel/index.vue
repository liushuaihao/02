<template>
  <el-card shadow="never" class="aui-card--fill">
    <div class="mod-sys__dept">
      <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
        <el-form-item>
          <el-input v-model="dataForm.realName" placeholder="运动员姓名" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="dataForm.mobile" placeholder="运动员手机号" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getDataList()">{{ $t('query') }}</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addOrUpdateHandle()">{{ $t('add') }}</el-button>
        </el-form-item>
        <el-form-item>
          <el-button v-if="$hasPermission('sys:user:delete')" type="danger" @click="deleteHandle()">{{ $t('deleteBatch') }}</el-button>
        </el-form-item>
      </el-form>
      <el-table v-loading="dataListLoading" :data="dataList" border @selection-change="dataListSelectionChangeHandle" @sort-change="dataListSortChangeHandle" style="width: 100%;">
        <el-table-column type="selection" header-align="center" align="center" width="50"></el-table-column>
        <el-table-column prop="realName" label="姓名" align="center" min-width="100"></el-table-column>
        <el-table-column prop="gender" label="性别" align="center" min-width="80">
          <template slot-scope="scope">
            {{ scope.row.gender === 1 ? '男' : '女' }}
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" align="center" min-width="80"></el-table-column>
        <el-table-column prop="projects" label="项目" align="center" min-width="140">
          <template slot-scope="scope">
            <el-tag style="margin: 2px" v-for="item in scope.row.projects" :key="item.id">{{ item.projectName }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="height" label="身高" align="center" min-width="80">
          <template slot-scope="scope"> {{ scope.row.height }}cm </template>
        </el-table-column>
        <el-table-column prop="cityName" label="籍贯" align="center" min-width="80"></el-table-column>
        <el-table-column prop="mobile" label="手机号" align="center" min-width="120"></el-table-column>
        <!-- <el-table-column prop="equipmentId" label="绑定设备号" align="center" min-width="140"></el-table-column> -->
        <el-table-column label="操作" fixed="right" align="center" min-width="140">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.id)">修改</el-button>
            <el-button type="text" size="small" @click="deleteHandle(scope.row.id)">删除</el-button>
            <!-- <el-button :style="{ color: scope.row.equipmentId ? '#ccc' : '' }" type="text" size="small">绑定</el-button>
            <el-button :style="{ color: scope.row.equipmentId ? '' : '#ccc' }" type="text" size="small">解绑</el-button>
            <el-button type="text" size="small">启动设备</el-button> -->
            <!-- <el-button type="text" size="small" @click="bodyComposition(scope.row.id)">体成分信息</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="limit"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="pageSizeChangeHandle"
        @current-change="pageCurrentChangeHandle"
      >
      </el-pagination>
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
        getDataListURL: '/user/playerList',
        getDataListIsPage: true,
        deleteURL: '/sys/user',
        deleteIsBatch: true
      }
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
