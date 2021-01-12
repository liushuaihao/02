<template>
  <el-dialog :visible.sync="visible" :title="!dataForm.id ? $t('add') : $t('update') + '运动员'" :close-on-click-modal="false" :close-on-press-escape="false">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmitHandle()" label-width="120px">
      <el-form-item prop="realName" label="姓名">
        <el-input v-model="dataForm.realName" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item prop="gender" label="性别">
        <el-radio v-model="dataForm.gender" :label="1">男</el-radio>
        <el-radio v-model="dataForm.gender" :label="0">女</el-radio>
      </el-form-item>
      <el-form-item prop="age" label="年龄">
        <el-input v-model="dataForm.age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item prop="mobile" label="手机号">
        <el-input v-model="dataForm.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="height" label="身高">
        <el-input v-model="dataForm.height" placeholder="请输入身高"></el-input>
      </el-form-item>
      <el-form-item prop="weight" label="体重">
        <el-input v-model="dataForm.weight" placeholder="请输入体重"></el-input>
      </el-form-item>
      <el-form-item prop="projects" label="项目">
        <el-select v-model="dataForm.projects" multiple collapse-tags placeholder="请选择项目">
          <el-option v-for="project in projectList" :key="project.id" :label="project.projectName" :value="project.id"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="cityName" label="籍贯">
        <el-input v-model="dataForm.cityName" placeholder="请输入籍贯"></el-input>
      </el-form-item>
      <el-form-item prop="injuries" label="是否有伤病">
        <el-radio v-model="dataForm.injuries" label="1">有</el-radio>
        <el-radio v-model="dataForm.injuries" label="0">无</el-radio>
      </el-form-item>
      <el-form-item prop="remark" label="其他">
        <el-input type="textarea" v-model="dataForm.remark"></el-input>
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
      dataForm: {
        id: '',
        realName: '',
        gender: '',
        age: '',
        projects: [],
        height: '',
        weight: '',
        cityName: '',
        mobile: '',
        equipmentId: '',
        injuries: '',
        remark: ''
      },
      projectList: []
    }
  },
  computed: {
    dataRule() {
      var validateMobile = (rule, value, callback) => {
        if (value && !isMobile(value)) {
          return callback(new Error(this.$t('validate.format', { 'attr': this.$t('user.mobile') })))
        }
        callback()
      }
      return {
        realName: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        gender: [{ required: true, message: this.$t('validate.required'), trigger: 'change' }],
        age: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        projects: [{ required: true, message: this.$t('validate.required'), trigger: 'change' }],
        height: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        weight: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        cityName: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        mobile: [{ validator: validateMobile, trigger: 'blur' }],
        equipmentId: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        injuries: [{ required: true, message: this.$t('validate.required'), trigger: 'change' }]
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
        .get(`/user/getPlayerById?playerId=${this.dataForm.id}`)
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
            .post(this.dataForm.id ? '/user/updatePlayer' : '/user/addPlayer', this.dataForm)
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
          this.visible = false
        })
      },
      1000,
      { leading: true, trailing: false }
    )
  }
}
</script>

<style lang="scss">
.el-select {
  width: 100%;
}
</style>
