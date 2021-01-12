<template>
  <el-dialog :visible.sync="visible" :title="!dataForm.id ? $t('add') : $t('update')" :close-on-click-modal="false" :close-on-press-escape="false">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmitHandle()" label-width="120px">
      <el-form-item prop="name" label="姓名">
        <el-input v-model="dataForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item prop="phone" label="手机号">
        <el-input v-model="dataForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="duty" label="职务">
        <el-input v-model="dataForm.duty" placeholder="请输入职务"></el-input>
      </el-form-item>
      <el-form-item prop="age" label="年龄">
        <el-input v-model="dataForm.age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item prop="project" label="负责项目">
        <el-select v-model="value" multiple filterable allow-create default-first-option collapse-tags placeholder="请选择负责项目">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
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
        id: '',
        name: '',
        sex: '',
        age: '',
        project: '',
        duty: '',
        phone: ''
      },
      options: [
        { value: '1', label: '速滑400米' },
        { value: '2', label: '速滑800米' },
        { value: '3', label: '速滑1000米' }
      ]
    }
  },

  computed: {
    dataRule() {
      return {
        name: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        phone: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        duty: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        age: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        project: [{ required: true, message: this.$t('validate.required'), trigger: 'change' }]
      }
    }
  },
  methods: {
    init() {
      this.visible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].resetFields()
        // this.getDeptList().then(() => {
        if (this.dataForm.id) {
          this.getInfo()
          // } else if (this.$store.state.user.superAdmin === 1) {
          // this.deptListTreeSetDefaultHandle()
        }
      })
      // })
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
      this.dataForm = {
        id: 12,
        name: '张三',
        sex: 1,
        age: 45,
        project: '1',
        duty: '主教练',
        phone: '13888888888'
      }
      // this.$http
      //   .get(`/sys/dept/${this.dataForm.id}`)
      //   .then(({ data: res }) => {
      // if (res.code !== 0) {
      //   return this.$message.error(res.msg)
      // }
      // this.dataForm = {
      //   ...this.dataForm,
      //   ...res.data
      // }
      // if (this.dataForm.pid === '0') {
      //   return this.deptListTreeSetDefaultHandle()
      // }
      // this.$refs.deptListTree.setCurrentKey(this.dataForm.pid)
      // })
      // .catch(() => {})
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
