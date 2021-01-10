<template>
  <el-dialog :visible.sync="visible" :title="!dataForm.id ? $t('add') : $t('update')" :close-on-click-modal="false" :close-on-press-escape="false">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmitHandle()" label-width="120px">
      <el-form-item prop="name" label="姓名">
        <el-input v-model="dataForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item prop="sex" label="性别">
        <el-radio v-model="dataForm.sex" :label="1">男</el-radio>
        <el-radio v-model="dataForm.sex" :label="2">女</el-radio>
      </el-form-item>
      <el-form-item prop="age" label="年龄">
        <el-input v-model="dataForm.age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item prop="phone" label="手机号">
        <el-input v-model="dataForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="height" label="身高">
        <el-input v-model="dataForm.height" placeholder="请输入身高"></el-input>
      </el-form-item>
      <el-form-item prop="weight" label="体重">
        <el-input v-model="dataForm.weight" placeholder="请输入体重"></el-input>
      </el-form-item>
      <el-form-item prop="project" label="项目">
        <el-select v-model="dataForm.project" placeholder="请选择项目" style="width: 100%">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="nativePlace" label="籍贯">
        <el-input v-model="dataForm.nativePlace" placeholder="请输入籍贯"></el-input>
      </el-form-item>
      <el-form-item prop="wound" label="是否有伤病">
        <el-radio v-model="dataForm.wound" :label="1">是</el-radio>
        <el-radio v-model="dataForm.wound" :label="2">否</el-radio>
      </el-form-item>
      <el-form-item prop="other" label="其他">
        <el-input type="textarea" v-model="dataForm.other"></el-input>
      </el-form-item>
    </el-form>
    <template slot="footer">
      <el-button @click="visible = false">{{ $t('cancel') }}</el-button>
      <el-button type="primary" @click="dataFormSubmitHandle()">{{ $t('confirm') }}</el-button>
    </template>
  </el-dialog>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  data() {
    return {
      visible: false,
      deptList: [],
      deptListVisible: false,
      dataForm: {
        id: 12,
        name: '张三',
        sex: 1,
        age: 18,
        project: '1',
        height: 180,
        weight: 80,
        nativePlace: '哈尔滨',
        phone: '13888888888',
        equipmentId: '224-2424-2345',
        wound: 1,
        other: ''
      },
      options: [
        { value: '1', label: '速滑400米' },
        { value: '2', label: '速滑800米' },
        { value: '3', label: '速滑1000米' }
      ]
    }
  },
  computed: {},
  methods: {
    init() {
      this.visible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].resetFields()
        this.getDeptList().then(() => {
          if (this.dataForm.id) {
            this.getInfo()
          } else if (this.$store.state.user.superAdmin === 1) {
            this.deptListTreeSetDefaultHandle()
          }
        })
      })
    },
    // 获取部门列表
    getDeptList() {
      return this.$http
        .get('/sys/dept/list')
        .then(({ data: res }) => {
          if (res.code !== 0) {
            return this.$message.error(res.msg)
          }
          this.deptList = res.data
        })
        .catch(() => {})
    },
    // 获取信息
    getInfo() {
      this.$http
        .get(`/sys/dept/${this.dataForm.id}`)
        .then(({ data: res }) => {
          if (res.code !== 0) {
            return this.$message.error(res.msg)
          }
          this.dataForm = {
            ...this.dataForm,
            ...res.data
          }
          if (this.dataForm.pid === '0') {
            return this.deptListTreeSetDefaultHandle()
          }
          this.$refs.deptListTree.setCurrentKey(this.dataForm.pid)
        })
        .catch(() => {})
    },
    // 上级部门树, 设置默认值
    deptListTreeSetDefaultHandle() {
      this.dataForm.pid = '0'
      this.dataForm.parentName = this.$t('dept.parentNameDefault')
    },
    // 上级部门树, 选中
    deptListTreeCurrentChangeHandle(data) {
      this.dataForm.pid = data.id
      this.dataForm.parentName = data.name
      this.deptListVisible = false
    },
    // 表单提交
    dataFormSubmitHandle: debounce(
      function() {
        this.$refs['dataForm'].validate(valid => {
          if (!valid) {
            return false
          }

          this.visible = false
        })
      },
      1000,
      { leading: true, trailing: false }
    )
  }
}
</script>

<style lang="scss"></style>
