<template>
  <xgplayer :options="playerOptions" :id="'xgplayer_id' + uid" ref="xgplayer" @timeupdate="timeupdate"></xgplayer>
</template>

<script>
export default {
  props: {
    uid: {
      type: String,
      default: 'xgplayer_id'
    },
    origUrl: {
      type: String,
      default: ''
    },
    procUrl: {
      type: String,
      default: ''
    },
    trackUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      playerOptions: {
        loop: true,
        url: this.origUrl,
        autoplay: true,
        width: '100%',
        playsinline: true,
        whitelist: ['']
      }
    }
  },
  watch: {
    origUrl(val) {
      this.$set(this.playerOptions, 'url', val)
      this.info()
    }
  },
  methods: {
    timeupdate(e) {
      // console.log(e.currentTime)
      this.$emit('currentTime', e.currentTime)
    },
    info() {
      this.$nextTick(() => {
        this.$refs['xgplayer'].player.emit('resourceReady', [
          { name: '原始视频', url: this.origUrl },
          { name: '解析视频', url: this.procUrl },
          { name: '轨迹视频', url: this.trackUrl }
        ])
      })
    }
  },
  mounted() {
    this.$refs['xgplayer'].player.emit('resourceReady', [
      { name: '原始视频', url: this.origUrl },
      { name: '解析视频', url: this.procUrl },
      { name: '轨迹视频', url: this.trackUrl }
    ])

    console.log(this.$refs['xgplayer'].player)

    this.$refs['xgplayer'].player.on('timeupdate', this.timeupdate)
  }
}
</script>
<style scope>
.xgplayer-definition .name {
  left: 0;
}
</style>
