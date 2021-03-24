<template>
  <div>
    <h1 class="title service-title">{{$t('service.searchTestResult')}}</h1>
    <div class="row m-0">
      <input  type="text" class=" service-input" id="inlineFormInputGroup" placeholder="Test ID"/>
      <base-button class="btn btn-primary service-button">{{$t('service.find')}}</base-button>
    </div>
    <div class="row m-0 mt-3">
      <table class="service-table ">
        <tbody>
          <tr>
            <td>{{$t('service.testId')}}</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t('service.date')}}</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t('service.ip')}}</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t('service.userAgent')}}</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t('service.downloadSpeed')}}</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t('service.uploadSpeed')}}</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t('service.jitter')}}</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t('service.log')}}</td>
            <td></td>
          </tr>
          <tr>
            <td>{{$t('service.extraInfo')}}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
name: "Service"
}
</script>

<style scoped>

</style>
