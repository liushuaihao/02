<template>
  <el-card shadow="never" class="aui-card--fill">
    <div class="mod-sys__dept">
      <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
        <el-form-item>
          <el-input v-model="dataForm.name" placeholder="运动员姓名/运动员手机号" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getDataList()">{{ $t('query') }}</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addOrUpdateHandle()">{{ $t('add') }}</el-button>
        </el-form-item>
      </el-form>
      <el-table v-loading="dataListLoading" :data="dataList" row-key="id" border style="width: 100%;">
        <el-table-column prop="id" label="ID" align="center" width="50"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center"></el-table-column>
        <el-table-column prop="height" label="身高" align="center" width="50"></el-table-column>
        <el-table-column prop="weight" label="体重" align="center" width="50"></el-table-column>
        <el-table-column prop="heartRate" label="心率" align="center" width="50"></el-table-column>
        <el-table-column prop="blood" label="血压" align="center" width="50"></el-table-column>
        <el-table-column prop="breath" label="呼吸" align="center" width="50"></el-table-column>
        <el-table-column prop="bloodOxygen" label="血氧" align="center" width="50"></el-table-column>
        <el-table-column prop="temperature" label="体温" align="center" width="50"></el-table-column>
        <el-table-column prop="bodyFat" label="体脂含量" align="center" width="70"></el-table-column>
        <el-table-column prop="muscleContent" label="肌肉含量" align="center" width="70"></el-table-column>
        <el-table-column prop="LowOxygenTest" label="低氧测试" align="center" width="70"></el-table-column>
        <el-table-column prop="targetNum" label="标签号" align="center" width="110"></el-table-column>
        <el-table-column prop="time" label="时间" align="center" width="160"></el-table-column>
        <el-table-column label="操作" fixed="right" align="center" width="80">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.id)">修改</el-button>
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
import AddOrUpdate from './body-add-or-update'
export default {
  mixins: [mixinViewModule],
  data() {
    return {
      mixinViewModuleOptions: {
        getDataListURL: '',
        deleteURL: ''
      },
      dataList: [
        {
          id: 12,
          name: '张三',
          height: 180,
          weight: 60,
          heartRate: '70',
          blood: '134',
          breath: '120',
          bloodOxygen: '99',
          temperature: '36.6',
          muscleContent: '60%',
          bodyFat: '30%',
          LowOxygenTest: '通过',
          targetNum: '123-124-5423',
          time: '2020.09.20 10:20:24'
        },
        {
          id: 13,
          name: '李四',
          height: 180,
          weight: 60,
          heartRate: '70',
          blood: '134',
          breath: '120',
          bloodOxygen: '99',
          temperature: '36.6',
          muscleContent: '60%',
          bodyFat: '30%',
          LowOxygenTest: '不通过',
          targetNum: '123-124-5423',
          time: '2020.09.20 10:20:24'
        }
      ]
    }
  },
  components: {
    AddOrUpdate
  }
}
</script>
