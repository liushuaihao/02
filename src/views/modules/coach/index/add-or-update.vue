<template>
  <el-dialog :visible.sync="visible" :title="!dataForm.id ? $t('add') : $t('update')" :close-on-click-modal="false" :close-on-press-escape="false">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmitHandle()" label-width="120px">
      <el-form-item prop="realName" label="姓名">
        <el-input v-model="dataForm.realName" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item prop="mobile" label="手机号">
        <el-input v-model="dataForm.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="jobName" label="职务">
        <el-input v-model="dataForm.jobName" placeholder="请输入职务"></el-input>
      </el-form-item>
      <el-form-item prop="age" label="年龄">
        <el-input v-model="dataForm.age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item prop="projects" label="项目">
        <el-select v-model="dataForm.projects" multiple collapse-tags placeholder="请选择项目">
          <el-option v-for="projects in projectList" :key="projects.id" :label="projects.projectName" :value="projects.id"> </el-option>
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
import { isMobile } from '@/utils/validate'
export default {
  data() {
    return {
      visible: false,
      deptList: [],
      deptListVisible: false,
      dataForm: {
        id: '',
        realName: '',
        sex: '',
        age: '',
        projects: [],
        jobName: '',
        mobile: ''
      },
      projectList: []
    }
  },

  computed: {
    dataRule() {
      var validateMobile = (rule, value, callback) => {
        if (value && !isMobile(value)) {
          return callback(new Error(this.$t('validate.format', { attr: this.$t('user.mobile') })))
        }
        callback()
      }
      return {
        realName: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        mobile: [{ validator: validateMobile, trigger: 'blur' }],
        jobName: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        age: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        projects: [{ required: true, message: this.$t('validate.required'), trigger: 'change' }]
      }
    }
  },
  methods: {
    init() {
      this.visible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].resetFields()
        Promise.all([this.getProjectList()]).then(() => {
          if (this.dataForm.id) {
            this.getInfo()
          }
        })
      })
    },
    // 获取项目列表
    getProjectList() {
      let params = { page: 1, limit: 100 }
      this.$http.get('/project/page', params).then(({ data: res }) => {
        if (res.code !== 0) {
          return this.$message.error(res.msg)
        }
        console.log(res)
        this.projectList = res.data.list
      })
    },
    // 获取信息
    getInfo() {
      this.$http
        .get(`/user/getCoachById?coachId=${this.dataForm.id}`)
        .then(({ data: res }) => {
          if (res.code !== 0) {
            return this.$message.error(res.msg)
          }
          this.dataForm = {
            ...this.dataForm,
            ...res.data
          }
        })
        .catch(() => {})
    },
    // 表单提交
    dataFormSubmitHandle: debounce(
      function() {
        this.$refs['dataForm'].validate(valid => {
          if (!valid) {
            return false
          }
          this.$http
            .post(this.dataForm.id ? '/user/updateCoach' : '/user/addCoach', this.dataForm)
            .then(({ data: res }) => {
              if (res.code !== 0) {
                return this.$message.error(res.msg)
              }
              this.$message({
                message: this.$t('prompt.success'),
                type: 'success',
                duration: 500,
                onClose: () => {
                  this.visible = false
                  this.$emit('refreshDataList')
                }
              })
            })
            .catch(() => {})
        })
      },
      1000,
      { leading: true, trailing: false }
    )
  }
}
</script>

<style lang="scss"></style>
