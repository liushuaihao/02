<template>
  <el-dialog :visible.sync="visible" :title="!dataForm.id ? $t('add') : $t('update') + '体成分信息'" :close-on-click-modal="false" :close-on-press-escape="false">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmitHandle()" label-width="120px">
      <el-form-item prop="name" label="姓名">
        <el-input v-model="dataForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item prop="height" label="身高">
        <el-input v-model="dataForm.height" placeholder="请输入身高"></el-input>
      </el-form-item>
      <el-form-item prop="weight" label="体重">
        <el-input v-model="dataForm.weight" placeholder="请输入体重"></el-input>
      </el-form-item>
      <el-form-item prop="heartRate" label="心率">
        <el-input v-model="dataForm.heartRate" placeholder="请输入心率"></el-input>
      </el-form-item>
      <el-form-item prop="blood" label="血压">
        <el-input v-model="dataForm.blood" placeholder="请输入血压"></el-input>
      </el-form-item>
      <el-form-item prop="breath" label="呼吸">
        <el-input v-model="dataForm.breath" placeholder="请输入呼吸"></el-input>
      </el-form-item>
      <el-form-item prop="bloodOxygen" label="血氧">
        <el-input v-model="dataForm.bloodOxygen" placeholder="请输入血氧"></el-input>
      </el-form-item>
      <el-form-item prop="temperature" label="体温">
        <el-input v-model="dataForm.temperature" placeholder="请输入体温"></el-input>
      </el-form-item>
      <el-form-item prop="bodyFat" label="体脂">
        <el-input v-model="dataForm.bodyFat" placeholder="请输入体脂"></el-input>
      </el-form-item>
      <el-form-item prop="muscleContent" label="肌肉">
        <el-input v-model="dataForm.muscleContent" placeholder="请输入肌肉"></el-input>
      </el-form-item>
      <el-form-item prop="LowOxygenTest" label="低氧测试">
        <el-input v-model="dataForm.LowOxygenTest" placeholder="请输入低氧测试"></el-input>
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
        height: '',
        weight: '',
        heartRate: '',
        blood: '',
        breath: '',
        bloodOxygen: '',
        temperature: '',
        muscleContent: '',
        bodyFat: '',
        LowOxygenTest: '',
        targetNum: '',
        time: ''
      }
    }
  },
  computed: {
    dataRule() {
      return {
        name: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        height: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        weight: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        heartRate: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        blood: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        breath: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        bloodOxygen: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        temperature: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        muscleContent: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        bodyFat: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        LowOxygenTest: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
        targetNum: [{ required: true, message: this.$t('validate.required'), trigger: 'blur' }],
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
          } else if (this.$store.state.user.superAdmin === 1) {
            
          }
        // })
      })
    },
    // 获取部门列表
    getDeptList() {
      // return this.$http
      //   .get('/sys/dept/list')
      //   .then(({ data: res }) => {
      //     if (res.code !== 0) {
      //       return this.$message.error(res.msg)
      //     }
      //     this.deptList = res.data
      //   })
      //   .catch(() => {})
    },
    // 获取信息
    getInfo() {
      this.dataForm = {
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
      }
      // this.$http
      //   .get(`/sys/dept/${this.dataForm.id}`)
      //   .then(({ data: res }) => {
      //     if (res.code !== 0) {
      //       return this.$message.error(res.msg)
      //     }
      //     this.dataForm = {
      //       ...this.dataForm,
      //       ...res.data
      //     }
      //     if (this.dataForm.pid === '0') {
      //       return this.deptListTreeSetDefaultHandle()
      //     }
      //     this.$refs.deptListTree.setCurrentKey(this.dataForm.pid)
      //   })
      //   .catch(() => {})
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
