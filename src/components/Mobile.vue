<template lang="">
  <div class="flex">
    <div>
      <div class="text-xs">YOUR YEARLY PROPERTY TAXES</div>
      <div class="text-lg">{{ dollar_formatter(total_taxes) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { tax_millages } from '../helpers/tax_millages_2022';

export default defineComponent({
  name: 'Mobile App',
  setup() {
    const total_taxes = ref(0);

    console.log('tax_millages', tax_millages);

    console.log('tax_millages', tax_millages.Municipality[0].Municipality);

    function dollar_formatter(value: number): string {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      return formatter.format(value);
    }

    return {
      total_taxes,
      dollar_formatter,
    };
  },
});
</script>
<style lang=""></style>
